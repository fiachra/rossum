import { prisma } from '@/prisma'
import { Bot } from '@prisma/client'

export interface CreateBotInput {
  name: string
  dataFolder: string
  teamId?: string
}

export interface UpdateBotInput {
  name?: string
  dataFolder?: string
  teamId?: string
}

export class BotService {
  async createBot(input: CreateBotInput, userId: string): Promise<Bot> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { teams: true }
    })

    if (!user) {
      throw new Error('User not found')
    }

    // If teamId is provided, verify user is member of the team
    if (input.teamId) {
      const isMember = user.teams.some(team => team.teamId === input.teamId)
      if (!isMember) {
        throw new Error('User is not a member of the specified team')
      }
    }

    return prisma.bot.create({
      data: {
        ...input,
        ownerId: userId,
      }
    })
  }

  async updateBot(
    botId: string, 
    input: UpdateBotInput, 
    userId: string
  ): Promise<Bot> {
    const bot = await prisma.bot.findUnique({
      where: { id: botId },
      include: { team: { include: { teamMembers: true } } }
    })

    if (!bot) {
      throw new Error('Bot not found')
    }

    if (bot.ownerId !== userId) {
      // Check if user is team admin if bot belongs to a team
      if (bot.teamId) {
        const isTeamAdmin = bot.team?.teamMembers.some(
          member => member.userId === userId && 
          (member.teamRole === 'ADMIN' || member.teamRole === 'OWNER')
        )
        if (!isTeamAdmin) {
          throw new Error('Unauthorized to update this bot')
        }
      } else {
        throw new Error('Unauthorized to update this bot')
      }
    }

    return prisma.bot.update({
      where: { id: botId },
      data: input
    })
  }

  async deleteBot(botId: string, userId: string): Promise<Bot> {
    const bot = await prisma.bot.findUnique({
      where: { id: botId },
      include: { team: { include: { teamMembers: true } } }
    })

    if (!bot) {
      throw new Error('Bot not found')
    }

    if (bot.ownerId !== userId) {
      // Check if user is team admin if bot belongs to a team
      if (bot.teamId) {
        const isTeamAdmin = bot.team?.teamMembers.some(
          member => member.userId === userId && 
          (member.teamRole === 'ADMIN' || member.teamRole === 'OWNER')
        )
        if (!isTeamAdmin) {
          throw new Error('Unauthorized to delete this bot')
        }
      } else {
        throw new Error('Unauthorized to delete this bot')
      }
    }

    return prisma.bot.delete({
      where: { id: botId }
    })
  }

  async getBotById(botId: string, userId: string): Promise<Bot | null> {
    const bot = await prisma.bot.findUnique({
      where: { id: botId },
      include: { team: { include: { teamMembers: true } } }
    })

    if (!bot) {
      return null
    }

    // Check if user has access to this bot
    if (bot.ownerId !== userId) {
      if (bot.teamId) {
        const isTeamMember = bot.team?.teamMembers.some(
          member => member.userId === userId
        )
        if (!isTeamMember) {
          throw new Error('Unauthorized to view this bot')
        }
      } else {
        throw new Error('Unauthorized to view this bot')
      }
    }

    return bot
  }

  async getUserBots(userId: string): Promise<Bot[]> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        teams: {
          include: {
            team: {
              include: {
                Bot: true
              }
            }
          }
        },
        Bot: true
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    // Combine personal bots and team bots
    const personalBots = user.Bot
    const teamBots = user.teams.flatMap(team => team.team.Bot)

    return [...personalBots, ...teamBots]
  }
} 

import { BotService, CreateBotInput, UpdateBotInput } from '@/services/bot.service'

export class BotController {
  private botService: BotService

  constructor() {
    this.botService = new BotService()
  }

  async createBot(input: CreateBotInput, userId: string) {
    try {
      const bot = await this.botService.createBot(input, userId)
      return { success: true, data: bot }
    } catch (error) {

      console.log(error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to create bot'
      }
    }
  }

  async updateBot(botId: string, input: UpdateBotInput, userId: string) {
    try {
      const bot = await this.botService.updateBot(botId, input, userId)
      return { success: true, data: bot }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to update bot'
      }
    }
  }

  async deleteBot(botId: string, userId: string) {
    try {
      const bot = await this.botService.deleteBot(botId, userId)
      return { success: true, data: bot }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to delete bot'
      }
    }
  }

  async getBotById(botId: string, userId: string) {
    try {
      const bot = await this.botService.getBotById(botId, userId)
      return { success: true, data: bot }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get bot'
      }
    }
  }

  async getUserBots(userId: string) {
    try {
      const bots = await this.botService.getUserBots(userId)
      return { success: true, data: bots }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to get user bots'
      }
    }
  }
} 

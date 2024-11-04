import { NextResponse } from 'next/server'
import { BotController } from '@/controllers/bot.controller'
import { auth } from '@/auth'

const botController = new BotController()

export const POST = auth(async (req) => {
  if (!req.auth || !req.auth.user?.id) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }

  const body = await req.json()
  const result = await botController.createBot(body, req.auth.user.id)

  if (!result.success) {
    return NextResponse.json(
      { error: result.error },
      { status: 400 }
    )
  }

  return NextResponse.json(result.data)
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any // TODO: Fix `auth()` return type


export const GET = auth(async (req) => {
  if (!req.auth || !req.auth.user?.id) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    )
  }

  const userId = req.auth.user.id
  const { data: bots, success } = await botController.getUserBots(userId)

  if (!success) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }

  return NextResponse.json({ message: 'Protected data', bots, auth: req.auth })
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any // TODO: Fix `auth()` return type

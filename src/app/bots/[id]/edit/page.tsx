'use client'
import { useEffect, useState } from 'react'
import BotForm from '../../BotForm'
import { Spinner } from '@/components/ui/spinner';
import { use } from 'react';

type Params = Promise<{ id: string  }>

async function getBot(id: string) {
  const res = await fetch(`/api/bots/${id}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch bot')
  return res.json()
}

export default function EditBotPage({ params }: { params: Params }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bot, setBot] = useState<any>(null)
  const parameters = use(params)

  useEffect(() => {
    getBot(parameters.id).then(setBot)
  }, [parameters.id])

  if (!bot) return <div className="flex h-screen items-center justify-center"><Spinner show /></div>

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Edit Bot: {bot.name}</h1>
      <BotForm bot={bot} />
    </div>
  )
}

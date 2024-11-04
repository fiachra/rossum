/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

async function createBot(formData: FormData) {
  const res = await fetch('/api/bots', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to create bot')
  }

}

export async function updateBot(formData: FormData) {
  const id = formData.get('id')
  const res = await fetch(`/api/bots/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to update bot')
  }

}

export async function deleteBot(formData: FormData) {
  const id = formData.get('id')
  const res = await fetch(`/api/bots/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to delete bot')
  }

}


export default function BotForm({ bot }: { bot?: any }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const action = bot ? updateBot : createBot

    try {
      await action(formData)
      router.push('/bots')
      router.refresh()
    } catch (error) {
      console.error('Failed to save bot:', error)
      // Handle error (e.g., show error message to user)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" defaultValue={bot?.name} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" defaultValue={bot?.description} />
      </div>
      {bot && <input type="hidden" name="id" value={bot.id} />}
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : bot ? 'Update Bot' : 'Create Bot'}
      </Button>
    </form>
  )
}

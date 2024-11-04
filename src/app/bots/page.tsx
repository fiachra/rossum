'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Edit, Trash } from "lucide-react"
import { deleteBot } from '@/app/bots/actions'
import { useEffect, useState } from 'react'
import { Spinner } from '@/components/ui/spinner';

export default function BotsPage() {
  const [bots, setBots] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBots() {
      try {
        setLoading(true)
        const res = await fetch('/api/bots', { cache: 'no-store' })
        if (!res.ok) throw new Error('Failed to fetch bots')
        const data = await res.json()
        setBots(data.bots)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchBots()
  }, [])

  if (error) return <div>Error loading bots: {error}</div>
  if (loading) return <div className="flex h-screen items-center justify-center"><Spinner show /></div>
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Your Bots</h1>
        <Link href="/bots/create">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Create Bot
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {bots.map((bot: any) => (
          <Card key={bot.id}>
            <CardHeader>
              <CardTitle>{bot.name}</CardTitle>
              <CardDescription>{bot.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add more bot details here if needed */}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href={`/bots/${bot.id}/edit`}>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
              </Link>
              <form action={deleteBot}>
                <input type="hidden" name="id" value={bot.id} />
                <Button variant="destructive" type="submit">
                  <Trash className="mr-2 h-4 w-4" /> Delete
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

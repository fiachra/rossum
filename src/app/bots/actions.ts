'use server'

import { revalidatePath } from 'next/cache'

export async function createBot(formData: FormData) {
  const res = await fetch('http://localhost:3000/api/bots', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to create bot')
  }

  revalidatePath('/bots')
}

export async function updateBot(formData: FormData) {
  const id = formData.get('id')
  const res = await fetch(`http://localhost:3000/api/bots/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error('Failed to update bot')
  }

  revalidatePath('/bots')
}

export async function deleteBot(formData: FormData) {
  const id = formData.get('id')
  const res = await fetch(`http://localhost:3000/api/bots/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    throw new Error('Failed to delete bot')
  }

  revalidatePath('/bots')
}

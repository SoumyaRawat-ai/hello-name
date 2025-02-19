"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { greet } from "./actions"

export function GreetingForm() {
  const [greeting, setGreeting] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await greet(formData)
    setGreeting(result)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Greeting Form</CardTitle>
        <CardDescription>Enter your name to receive a greeting</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="flex flex-col space-y-4">
          <Input type="text" name="name" placeholder="Enter your name" required />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
            Submit
          </Button>
        </form>
        {greeting && <p className="mt-4 text-lg font-semibold">{greeting}</p>}
      </CardContent>
    </Card>
  )
}


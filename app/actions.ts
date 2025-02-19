"use server"

import { revalidatePath } from "next/cache"

export async function greet(formData: FormData) {
  const name = formData.get("name") as string
  const greeting = `Hello, ${name}!`

  revalidatePath("/")
  return greeting
}


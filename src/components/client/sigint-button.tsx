"use client"
import { signIn } from "next-auth/react"
 
export function SignInClient() {
  return <button className="bg-blue-500 p-2 rounded text-white" onClick={() => signIn()}>Client Sign In</button>
}
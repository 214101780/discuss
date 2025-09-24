"use client"
import { signOut } from "next-auth/react"
 
export default function SignOutClient() {
  return <button className="bg-blue-500 p-2 rounded text-white" onClick={() => signOut()}>Client Sign Out</button>
}
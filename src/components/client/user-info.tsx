"use client"
import { useSession } from "next-auth/react"
 
export default function UserAvatarClient(props: {width: string, height: string}) {
  const { data: session } = useSession()
 
  if (!session?.user || !session.user.image) return null
 
  return (
    <div>
      <img src={session.user.image} width={props.width} height={props.height} alt="User Avatar" />
    </div>
  )
}
import { auth } from "../auth"
 
export default async function UserAvatar(props: {width: string, height: string}) {
  const session = await auth()
 
  if (!session?.user) return null
 
  return (
    <div>
      <img src={session.user.image || 'https://i.pravatar.cc/150?u=a042581f4e29026704d'} width={props.width} height={props.height} alt="User Avatar" />
    </div>
  )
}
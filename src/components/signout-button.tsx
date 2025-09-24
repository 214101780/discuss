import { signOut } from "@/auth"

 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="bg-blue-500 p-2 rounded text-white" type="submit">Sign Out</button>
    </form>
  )
}
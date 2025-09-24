
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className="bg-blue-500 p-2 rounded text-white" type="submit">Sigin with GitHub</button>
    </form>
  )
} 
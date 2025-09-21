
import { signIn } from "@/auth"
 
export default function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="bg-blue-500 p-2 rounded text-white" type="submit">Signin with Google</button>
    </form>
  )
} 
// app/page.tsx
import { auth } from '@/auth';
import SignIn from '@/components/sign-in';
import SignInGoogle from '@/components/sign-in-google';

export default async function Page() {
  const session = await auth()
  
  return (
    <div>
      <SignIn/>
      <SignInGoogle/>

      <h1>
        {JSON.stringify(session?.user)}
      </h1>
    </div>
  )
}
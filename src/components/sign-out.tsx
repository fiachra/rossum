import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LogOut } from 'lucide-react'

// export function SignOut() {
//   const router = useRouter()
//   const [isSigningOut, setIsSigningOut] = useState(false)

//   const handleSignOut = async () => {
//     setIsSigningOut(true)
//     try {
//       await signOut({ redirect: false })
//       router.push('/login') // Redirect to login page after sign out
//     } catch (error) {
//       console.error('Error signing out:', error)
//     } finally {
//       setIsSigningOut(false)
//     }
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Sign Out</CardTitle>
//           <CardDescription>Are you sure you want to sign out?</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <p className="text-sm text-muted-foreground">
//             You will be redirected to the login page after signing out.
//           </p>
//         </CardContent>
//         <CardFooter>
//         <form
//         action={async () => {
//           "use server"
//           await handleSignOut()
//         }}
//       >
//         <Button 
//             className="w-full" 
//             onClick={handleSignOut} 
//             disabled={isSigningOut}
//           >
//             {isSigningOut ? (
//               'Signing Out...'
//             ) : (
//               <>
//                 <LogOut className="mr-2 h-4 w-4" /> Sign Out
//               </>
//             )}
//           </Button>
//       </form>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }

import { redirect } from 'next/navigation'
import { signOut } from 'next-auth/react'

async function SignOut() {
  async function handleSignOut() {
    'use server'
    
    try {
      // Call the auth.js signOut function
      await signOut({ 
        redirect: false,
        callbackUrl: '/login' // or wherever you want to redirect to
      })
      
      // Additional server-side cleanup if needed
      // e.g., clear server-side session, cookies, etc.
      
      // Redirect after successful sign out
      redirect('/login')
      
    } catch (error) {
      console.error('Sign out error:', error)
      // Handle error appropriately
    }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign Out</CardTitle>
          <CardDescription>Are you sure you want to sign out?</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You will be redirected to the login page after signing out.
          </p>
        </CardContent>
        <CardFooter>
          <form action={handleSignOut}>
            <Button 
                className="w-full" 
                onClick={handleSignOut} 
              >
              <>
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}

export default SignOut

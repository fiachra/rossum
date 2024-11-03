import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail } from "lucide-react"
import { signIn } from "@/auth"


export function OauthLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
          <CardDescription className="text-center">
            Choose your preferred login method
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form
            action={async () => {
              "use server"
              await signIn("github", { redirectTo: "/profile" })
            }}
          >
            <Button variant="outline" className="w-full" type="submit">
              <Github className="mr-2 h-4 w-4" />
              Login with GitHub
            </Button>
          </form>
          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/profile" })
            }}
          >
            <Button variant="outline" className="w-full" type="submit">
            <Mail className="mr-2 h-4 w-4" />
            Login with Google
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
            By logging in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

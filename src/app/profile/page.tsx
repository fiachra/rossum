import { auth } from "../../auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import Image from "next/image"
export default async function ProfilePage() {
  const session = await auth()
  
  if (!session) {
    redirect("/login")
  }
  
  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {session.user?.image && (
            <div className="flex justify-center">
              <div className="relative h-24 w-24">
                <Image
                  src={session.user.image}
                  alt="Profile picture"
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          )}
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Name</Label>
              <p className="text-sm text-muted-foreground">
                {session.user?.name || "Not provided"}
              </p>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <p className="text-sm text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

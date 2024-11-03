'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Code, Globe, MessageSquare, Slack, Users } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageSquare className="h-6 w-6 mr-2" />
          <span className="font-bold">Rossum AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="login">
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rossum AI: Secure, Private AI Bots with Your Data
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Build, deploy, and integrate AI-powered bots tailored to your business needs. No coding required.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Direct Hosting
                  </CardTitle>
                </CardHeader>
                <CardContent>Deploy your AI bots directly on our secure and scalable platform.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Website Embedding
                  </CardTitle>
                </CardHeader>
                <CardContent>Seamlessly integrate your bots into your existing website with a simple embed code.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Slack className="w-5 h-5 mr-2" />
                    Slack & Teams Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>Add your custom bots to Slack and Microsoft Teams for enhanced team collaboration.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Input Your Data</h3>
                <p className="text-gray-500 dark:text-gray-400">Upload your documents, FAQs, or knowledge base to train your AI bot.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Customize Your Bot</h3>
                <p className="text-gray-500 dark:text-gray-400">Tailor your bots personality, responses, and capabilities to match your brand.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground p-3 mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Deploy and Integrate</h3>
                <p className="text-gray-500 dark:text-gray-400">Choose where to deploy your bot: direct hosting, website embed, or team platforms.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Simple Pricing</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$49/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      1 Custom Bot
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Direct Hosting
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Basic Analytics
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      3 Custom Bots
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Direct Hosting & Website Embed
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Advanced Analytics
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Unlimited Custom Bots
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      All Integration Options
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-500 w-5 h-5 mr-2" />
                      Dedicated Support
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Build Your AI Bot?</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get started today and revolutionize your customer interactions with custom AI-powered bots.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BotBuilder AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

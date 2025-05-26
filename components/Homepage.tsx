import Link from "next/link"
import { ArrowRight, Shield, Zap, BarChart3, CreditCard, RefreshCw, PieChart, LockKeyhole } from "lucide-react"
import { Button } from "@/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-1.5">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">Nexus</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-violet-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-violet-600 transition-colors">
              Support
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-violet-600 transition-colors hidden md:block">
              Sign In
            </Link>
            <Button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-violet-50 to-white py-20 md:py-32">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] dark:bg-grid-slate-700/25"></div>
          <div className="container relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Elevate Your Finances with{" "}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Nexus
                </span>
              </h1>
              <p className="mb-10 text-lg text-slate-600 md:text-xl">
                Experience intelligent money management, frictionless transactions, and personalized financial
                insights—all in one elegant platform designed for the modern world.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 w-full sm:w-auto"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-50">
                <div className="mb-4 rounded-full bg-violet-100 p-3 group-hover:bg-violet-200 transition-colors">
                  <CreditCard className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Transactions</h3>
                <p className="text-slate-600">
                  Transfer funds and make payments in seconds with our lightning-fast processing system.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-50">
                <div className="mb-4 rounded-full bg-violet-100 p-3 group-hover:bg-violet-200 transition-colors">
                  <RefreshCw className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Seamless Transfers</h3>
                <p className="text-slate-600">
                  Send money to friends or businesses with just a few taps, no complicated processes.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-50">
                <div className="mb-4 rounded-full bg-violet-100 p-3 group-hover:bg-violet-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Smart Insights</h3>
                <p className="text-slate-600">
                  Gain valuable financial intelligence with AI-powered spending analysis and recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-violet-50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Nexus Stands Apart</h2>
              <p className="text-lg text-slate-600">
                We've reimagined financial management for the digital age with powerful features and elegant design.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col">
                <div className="mb-6 rounded-full bg-violet-100 p-3 w-fit">
                  <Zap className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Effortless Speed</h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  Experience the fluidity of instant transfers and payments, making your financial interactions smoother
                  than ever before.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col">
                <div className="mb-6 rounded-full bg-violet-100 p-3 w-fit">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Uncompromising Security</h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  Rest assured knowing your assets are protected by quantum-resistant encryption and advanced biometric
                  authentication.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col">
                <div className="mb-6 rounded-full bg-violet-100 p-3 w-fit">
                  <PieChart className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Intelligence</h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  Unlock deeper understanding of your financial patterns with our adaptive analytics, helping you make
                  smarter decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Powerful Tools for Your Financial Journey
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to take control of your finances in one elegant platform.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <CreditCard className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Smart Deposits</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <RefreshCw className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Instant Transfers</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <BarChart3 className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Live Analytics</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <LockKeyhole className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Biometric Security</h3>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-violet-50 to-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">How Nexus Works</h2>
              <p className="text-lg text-slate-600">Getting started is simple and takes just minutes.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div className="pt-6 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
                  <p className="text-slate-600">
                    Set up your account in minutes with our streamlined onboarding process and advanced identity
                    verification.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div className="pt-6 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Connect Your Accounts</h3>
                  <p className="text-slate-600">
                    Securely link your existing financial accounts to your Nexus dashboard for a unified view of your
                    finances.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col items-center text-center p-6">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div className="pt-6 pb-4">
                  <h3 className="text-xl font-semibold mb-3">Experience Financial Freedom</h3>
                  <p className="text-slate-600">
                    Send money, track expenses, and receive personalized insights to optimize your financial well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to Transform Your Financial Experience?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Join thousands of users who are already experiencing the future of personal finance with Nexus. Start
                your journey today.
              </p>
              <Button
                className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700"
              >
                Create Your Nexus Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 p-1.5">
                <CreditCard className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold">Nexus</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8">
              <Link href="#" className="text-sm text-slate-600 hover:text-violet-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-violet-600 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-violet-600 transition-colors">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-violet-600 transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Nexus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

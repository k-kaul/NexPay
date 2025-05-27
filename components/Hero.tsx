'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CreditCard,
  PieChart,
  Shield,
  Zap,
  RefreshCw,
  BarChart3,
  LockKeyhole,
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};


export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden">    
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl ">
              Elevate Your Finances with{' '}<br></br>
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                NexPay
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Experience intelligent money management, frictionless transactions, and personalized financial insights—all in one elegant platform designed for the modern world.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Link href="/api/auth/signin">
              <button className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-2 font-medium text-white hover:from-violet-700 hover:to-indigo-700 transition-all duration-100 shadow-lg hover:shadow-xl">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </button>
               <button className="w-full sm:w-auto border border-slate-300 px-8 py-2 mx-3 rounded-lg hover:bg-slate-200 shadow-lg ">
                  Learn More
                </button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-100 shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-200 p-3 group-hover:bg-violet-200 transition-colors">
                  <CreditCard className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Instant Transactions</h3>
                <p className="text-slate-600">
                  Transfer funds and make payments in seconds with our lightning-fast processing system.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-100 shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-200 p-3 group-hover:bg-violet-200 transition-colors">
                  <RefreshCw className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Seamless Transfers</h3>
                <p className="text-slate-600">
                  Send money to friends or businesses with just a few taps, no complicated processes.
                </p>
              </div>
              <div className="group flex flex-col items-center text-center p-6 rounded-2xl transition-all hover:bg-violet-100 shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-200 p-3 group-hover:bg-violet-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Smart Insights</h3>
                <p className="text-slate-600">
                  Gain valuable financial intelligence with AI-powered spending analysis and recommendations.
                </p>
              </div>
          </motion.div>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-5">
            Why NexPay Stands Out
          </h2>
          <h2 className='text-md font-extralight text-center text-gray-900 mb-16'>
            We've reimagined financial management for the digital age with powerful features and elegant design.
          </h2> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col hover:bg-violet-50">
                <div className="mb-6 rounded-full bg-violet-100 p-3 w-fit">
                  <Zap className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Effortless Speed</h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  Experience the fluidity of instant transfers and payments, making your financial interactions smoother
                  than ever before.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col hover:bg-violet-50">
                <div className="mb-6 rounded-full bg-violet-100 p-3 w-fit">
                  <Shield className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Uncompromising Security</h3>
                <p className="text-slate-600 mb-4 flex-grow">
                  Rest assured knowing your assets are protected by quantum-resistant encryption and advanced biometric
                  authentication.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col hover:bg-violet-50">
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
        </motion.div>

        {/* New Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-32"
        >
          <section className="py-20 md:py-20">
          <div className="">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Powerful Tools for Your Financial Journey
              </h2>
              <p className="text-lg text-slate-600">
                Everything you need to take control of your finances in one elegant platform.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <CreditCard className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Smart Deposits</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <RefreshCw className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Instant Transfers</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <BarChart3 className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Live Analytics</h3>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-violet-50 transition-colors shadow hover:shadow-lg">
                <div className="mb-4 rounded-full bg-violet-100 p-3">
                  <LockKeyhole className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-base font-medium">Biometric Security</h3>
              </div>
            </div>
          </div>
        </section>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Transform Your Financial Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join thousands of users and experience the future of personal finance with NexPay. Start your journey today.
          </p>
          <Link href="/api/auth/signin">
            <button className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-lg font-medium text-white hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              Create Your NexPay Account
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

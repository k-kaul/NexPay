import React from "react";
import { getServerSession } from "next-auth";
import prisma from "../../../prisma/db";
import { authOptions } from "../../lib/auth";
import { OnRampTransaction } from "../../../components/OnRampTransaction";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | NexPay",
  description: "Dashboard for NexPay digital wallet",
};

import {
  Wallet,
  TrendingUp,
  AlertCircle,
  ArrowUpRight,
  ArrowDownLeft,
  Info,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user.id),
    },
    orderBy: {
      startTime: "desc",
    },
    take: 10,
  });
  return txns.map((txn: any) => ({
    time: txn.startTime,
    amount: txn.amount,
    status: txn.status,
    provider: txn.provider,
  }));
}

export default async function DashboardPage() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return (
    <div className="min-h-screen pt-10 grid grid-cols-1 gap-5">  
      <div>
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NexPay </span>Dashboard
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-slate-800">
            Manage your finances with ease
          </p>
        </div>
      </div>      
      <div className="flex flex-col gap-5 lg:ml-40 m-10">         
        <div className="flex gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-7xl flex flex-col items-center">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Wallet className="mr-2 h-6 w-6 text-indigo-600" />
              Account Balance
            </h2>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold text-violet-600">
                ₹{(balance.amount / 100).toFixed(2)}
              </span>
              <span className="ml-2 text-sm text-gray-500">Available</span>
            </div>
            {balance.locked > 0 && (
              <div className="mt-2 text-sm text-gray-500 flex items-center">
                <AlertCircle className="mr-1 h-4 w-4 text-yellow-500" />₹
                {(balance.locked / 100).toFixed(2)} Locked
              </div>
            )}
            </div>
            <div className="bg-violet-500 px-6 py-4 w-full"/>         
          </div>
        </div>         
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowUpRight className="mr-2 h-5 w-5 text-indigo-500" />
                Send Money
              </h3>
              <p className="text-gray-600 mb-4">
                Transfer money to your contacts instantly.
              </p>
              <button className="text-white px-3 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-violet-600 w-full cursor-pointer">
                <Link href="/p2p">Send Money</Link>
              </button>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <ArrowDownLeft className="mr-2 h-5 w-5 text-blue-500" />
                Add Funds
              </h3>
              <p className="text-gray-600 mb-4">
                Top up your NexPay wallet easily.
              </p>
              <button className="text-black border cursor-pointer hover:shadow border-slate-200 px-3 py-2 rounded-lg bg-white w-full">
                <Link
                  href="/transfer"
                >
                  Add Money
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden font-semibold mt-5 max-w-7xl">
              <OnRampTransaction transactions={transactions} />
        </div>
        <div className="flex flex-col gap-5 max-w-7xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <Info className="mr-2 h-5 w-5 text-purple-500" />
              All Transaction Insights
            </h3>
            <p className="text-gray-600 mb-4">
              Track your transactions and manage your budget with
              ease.
            </p>
            <a
              href="/transactions"
              className="text-violet-500 font-medium hover:text-violet-600 transition-colors"
            >
              View Detailed All Transaction Details →
            </a>
          </div>
          
        </div>
        <div className="bg-white shadow-xl rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <HelpCircle className="mr-2 h-5 w-5 text-violet-600" />
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            Our support team is always ready to assist you with your queries.
          </p>
          <a
            href="/contact"
            className="bg-violet-600 text-white px-4 py-3 rounded-lg mt-1 hover:bg-violet-700 transition-colors"
          >
            Contact Support
          </a>
          </div> 
        </div>         
  
      </div>
    </div>
  );
}

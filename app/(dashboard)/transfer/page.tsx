import prisma from "../../../prisma/db";
import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/AddMoneyCard";
import { authOptions } from "../../lib/auth";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
import { Metadata } from 'next'
import { Card } from "@/ui/card";
import { LockKeyhole } from "lucide-react";

export const metadata: Metadata = {
  title: 'Transfer | NexPay',
  description: 'Transfer funds seamlessly with NexPay digital wallet application',
}

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
  });
  return txns.map((txn: any) => ({
    time: txn.startTime,
    amount: txn.amount,
    status: txn.status,
    provider: txn.provider,
  }));
}

export default async function () {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();
  return (
    <div className="w-full mt-10">
      <div className="text-2xl md:text-4xl pt-8 mb-8 font-bold text-violet-600 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NexPay </span>Transfer
        </h1>
        <p className="mt-2 text-lg md:text-xl text-slate-800 font-normal">
          Transfer funds seamlessly
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4 md:px-28 mx-10">
        <div>
          <AddMoney />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
            <div className="col-span-2">
              <BalanceCard amount={balance.amount} locked={balance.locked} />
            </div>
          <div className="col-span-2">
            <OnRampTransaction transactions={transactions} />
          </div>
          <div className="col-span-2">
            <Card title="Secure Transactions">
              <div className="flex items-start gap-3 pt-2">
                      <div className="rounded-full bg-violet-100 p-2">
                        <LockKeyhole className="h-4 w-4 text-violet-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-indigo-900 mb-1">Secure Transactions</h3>
                        <p className="text-sm text-indigo-700 ">
                          All your transactions are protected with bank-grade encryption and multi-factor authentication.
                        </p>
                      </div>
                  </div>
            </Card>
        </div>
        </div>
        
      </div>
    </div>
  );
}

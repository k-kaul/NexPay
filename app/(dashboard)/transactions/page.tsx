import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "../../../prisma/db";
import { OnRampTransaction } from "../../../components/OnRampTransaction";
import { Metadata } from 'next'
import { CircleX, TicketX, Users, Wallet } from "lucide-react";

export const metadata: Metadata = {
  title: 'Transactions | NexPay',
  description: 'Track all your transactions effortlessly with NexPay digital wallet application',
}

async function getsentP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timestamp,
    amount: t.amount,
    status: "Success",
    provider: t.provider,
  }));
}

async function getreceivedP2PTranscations() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      toUserId: Number(session?.user.id),
    },
  });

  return txns.map((t: any) => ({
    time: t.timestamp,
    amount: t.amount,
    status: "Success",
    provider: t.provider,
  }));
}

async function getOnRampTransactions(status: any) {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
      status: status,
    },
  });
  return txns.map((t: any) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransactionsPage() {
  const [
    sentP2PTranscations,
    receivedP2PTranscations,
    onRampTransactions,
    onRampTransactionsPending,
    onRampTransactionsFailed,
  ] = await Promise.all([
    getsentP2PTranscations(),
    getreceivedP2PTranscations(),
    getOnRampTransactions("Success"),
    getOnRampTransactions("Processing"),
    getOnRampTransactions("Failed"),
  ]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center md:text-4xl mt-20 font-extrabold">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NexPay </span>Transactions
        </h1>
      </div>
      <div className="text-center mb-8 sm:mb-12">
        <p className="mt-2 text-lg sm:text-xl text-slate-800">
          Track your spending patterns and manage your budget more effectively.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 gap-3">
          <h1 className="text-2xl text-slate-800 pt-2 font-bold col-span-1 md:col-span-2">
            <div className="flex items-center gap-1">
            <Users className="h-5 w-5 text-violet-500" />
            <span className="text-blue-600">P2P </span>Transactions
            </div>
            <p className="text-sm font-light pt-1">Money sent to or received from other Nexus users</p>
          </h1>
          <div>
            
            <OnRampTransaction
              title={"Sent Transactions"}
              transactions={sentP2PTranscations}
            />
          </div>
          <div>
            <OnRampTransaction
              title={"Received Transactions"}
              transactions={receivedP2PTranscations}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 px-4 md:px-10 gap-3">
          <h1 className="text-2xl text-slate-800 pt-2 font-bold col-span-1 md:col-span-2">
            <div className="flex items-center gap-1">
              <Wallet className="h-5 w-5 text-violet-500" />
            <span className="text-blue-600">Wallet </span>Transactions
            </div>
          </h1>
          <div>
            <OnRampTransaction
              title={"Successful Transactions"}
              transactions={onRampTransactions}
            />
          </div>

          <div>
            <OnRampTransaction
              title={"Processing Transactions"}
              transactions={onRampTransactionsPending}
            />
          </div>
         
        </div>
      </div>
    </div>
  );
}

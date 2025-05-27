import { Card } from "@/ui/card";
import { SendCard } from "../../../components/SendCard";
import { Metadata } from 'next'
import { Shield, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: 'P2P Transfer | NexPay',
  description: 'Fast and safe P2P transfers with NexPay digital wallet application',
}

export default function () {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center text-4xl mt-20 font-extrabold">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NexPay </span>P2P Transfer
        </h1>
      </div>
      <div className="text-center mb-8 sm:mb-12">
        <p className="mt-2 text-lg sm:text-xl text-slate-800">
          Fast and safe P2P transfers
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="mt-10">
          <SendCard />
        </div>
         <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 mt-15 mx-10 lg:mx-auto">
          <div className="">
            <Card title="" className="bg-gradient-to-br from-violet-100 to-indigo-100 border-violet-100 shadow-md">              
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-violet-100 p-2">
                    <Zap className="h-4 w-4 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-violet-900 mb-1">Instant Transfers</h3>
                    <p className="text-sm text-violet-700">
                      {`Money is transferred instantly to the recipient's Nexus account.`}
                    </p>
                  </div>
                </div>
            </Card>
          </div>
            <div className="col-start-2">
              <Card title="" className="bg-gradient-to-br from-violet-100 to-indigo-100 border-violet-100 shadow-md">
                
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-violet-100 p-2">
                      <Shield className="h-4 w-4 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-violet-900 mb-1">Secure Transactions</h3>
                      <p className="text-sm text-violet-700">
                        All P2P transfers are protected with advanced encryption and verification.
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

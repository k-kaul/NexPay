'use client';

import { useState } from 'react';
import { Card } from '@/ui/card';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

export const OnRampTransaction = ({
  transactions,
  title = 'Recent Transactions',
}: {
  transactions: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
  title?: string;
}) => {
  const [showAll, setShowAll] = useState(false);
  const isSentTransactions = title === 'Sent Transactions';

  const displayedTransactions = showAll
    ? transactions.slice().reverse()
    : transactions.slice(-5).reverse();

  if (!transactions.length) {
    return (
      <Card title={title}>
        <div className="text-center pb-1 pt-8">No Recent transactions</div>
      </Card>
    );
  }

  return (
    <Card title={title}>
      <div className="pt-2 ">
        <div className="max-h-64 overflow-y-auto w-full ">
          {displayedTransactions.map((t, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-2 w-full "
            >
              <div>
                <div className={` ${showAll ? 'pr-1 text-sm' : 'text-sm'}`}>
                  <div className='flex items-center gap-2'>
                    {isSentTransactions ? (
                    <div className="rounded-full bg-orange-100 p-2">
                      <ArrowUpRight className="h-4 w-4 text-orange-600 " />
                    </div>
                  ): <div className="rounded-full bg-green-100 p-2">                      
                      <ArrowDownLeft className="h-4 w-4 text-green-600" />
                    </div> }
                    <div>
                      <div className='font-semibold '>
                        {isSentTransactions ? 'Sent INR' : 'Received INR'}
                      </div>
                      <div className="text-slate-600 text-xs ">
                        {t.time.toDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm w-full ">
                  {isSentTransactions
                    ? `- Rs ${t.amount / 100}`
                    : `+ Rs ${t.amount / 100}`}
                </div>
                <div className="text-sm pr-1">
                  {t.status === 'Success' ? (
                    <span className="text-green-500">Success</span>
                    
                  ) : t.status === 'Processing' ? (
                    <span className="text-yellow-500">Processing</span>
                  ) : t.status === 'Failed'}
                </div>
              </div>
            </div>
          ))}
        </div>
        {transactions.length > 5 && (
          <button
            className="mt-4 text-blue-500 font-semibold w-full p-2 text-center hover:bg-slate-50 hover:border border-slate-200 rounded-lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        )}
      </div>
    </Card>
  );
};

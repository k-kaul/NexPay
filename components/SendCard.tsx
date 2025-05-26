'use client';

import { useState, useRef } from 'react';
import { Card } from '@/ui/card';
import { Center } from '@/ui/Center';
import { Textinput } from '@/ui/Textinput';
import { p2pTransfer } from '../app/lib/actions/P2Ptransfer';
import { NumberList } from './NumberList';
import { Users } from 'lucide-react';

export function SendCard() {
  const [number, setNumber] = useState<string>('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null); // Use ref for the input

  const handleNumberSelect = (selectedNumber: string) => {
    setNumber(selectedNumber);
    setDropdownVisible(false);
    inputRef.current?.blur();
  };

  const handleBlur = () => {
    setTimeout(() => setDropdownVisible(false), 200);
  };

  const handleSendMoney = async () => {
    try {
      if (Number(amount) <= 0) {
        setMessage('Amount should be greater than 0');
        return;
      }
      await p2pTransfer(number, Number(amount) * 100);
      setMessage('Money sent successfully!');
    } catch (error) {
      setMessage('Failed to send money. Please try again.');
    }
  };

  return (
    <div className="">
      <Center>
        <Card title="" className='w-100 md:w-200 shadow-xl'>
          <div className='text-center'>
            <div className="mx-auto mb-2 rounded-full bg-violet-100 p-2 w-fit">
                <Users className="h-5 w-5 text-violet-600" />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='font-bold text-xl'>Send Money</span>
              <span className='font-light'>Transfer funds directly to another NexPay user</span>
            </div>
          </div>
          
          <div className="min-w-80 pt-2">
            <div className="pt-2">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Number
              </label>
              <input
                ref={inputRef} // Attach the input reference
                type="text"
                placeholder="Number"
                value={number ||""}
                onChange={(e) => {
                  setNumber(e.target.value);
                  setDropdownVisible(true);
                }}
                onBlur={handleBlur} // Hide dropdown when input loses focus
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              {dropdownVisible && (
                <NumberList number={number} onSelect={handleNumberSelect} />
              )}
            </div>
            <Textinput
              placeholder={'Amount'}
              label="Amount"
              onChange={(value) => setAmount(value)}
            />
            <div className="pt-4 flex justify-center">
              <button
                onClick={async () => {
                  setLoading(true);
                  await handleSendMoney();
                  setLoading(false);
                }}
                type="button"
                className="text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
            </div>

            {message && (
              <p
                className={`mt-4 text-center text-sm ${message === 'Money sent successfully!' ? 'text-green-600' : 'text-red-600'}`}
              >
                {message}
              </p>
            )}
          </div>
        </Card>
      </Center>
    </div>
  );
}

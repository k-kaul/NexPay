"use client";

import google from "../../assets/googleIcon.png"
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ArrowRight, Smartphone, Lock, Info } from "lucide-react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginSignup() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [providers,setProviders] = useState<any>(null)

  useEffect(()=>{
    getProviders().then((res)=>{
      setProviders(res)
    })
  },[])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous error
    const onlyNumber = phoneNumber.replace(/\D/g, "");
    const res = await signIn("credentials", {
      phone: onlyNumber,
      password: password,
      redirect: false,
    });
    setIsLoading(false);

    if (res?.status === 201) {
      toast.success(
        "Welcome to NexPay! Your account has been created successfully.",
      );
      router.push("/dashboard");
    } else if (res?.status === 200) {
      toast.success("You've successfully logged in to your NexPay account.");
      router.push("/dashboard");
    } else {
      setError("Invalid phone number or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">NexPay</span>
          </h1>
          <p className="text-gray-600 mt-2">Login/Create Your NexPay Account</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="text-gray-700">
              Phone Number
            </label>
            <div className="relative">
              <Smartphone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-violet-600" />
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Enter Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="pl-10 w-full h-10 rounded-md"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-gray-700">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-violet-600" />
              <input
                id="password"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full h-10 rounded-md"
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Info className="w-4 h-4 text-violet-600" />
            <p>Demo Credentials: Phone: 123456, Password: 123456</p>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-2 hover:from-violet-700 hover:to-indigo-700 text-white flex rounded-md h-10 items-center justify-center text-sm "
            disabled={isLoading}
          >
            {isLoading ? (
              "Processing..."
            ) : (
              <div className="flex items-center">
                Continue
                <ArrowRight className="ml-2 h-4 w-5" />
              </div>
            )}
          </button>
        </form>
        <div className="my-6 text-center text-gray-400">OR</div>
        {providers?.google && (
          <button
            onClick={() => signIn("google")}
            className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center hover:bg-gray-100"
          >
            <Image
              src={google}
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>
        )}
      </div>
    </div>
  );
}

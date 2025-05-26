import { HeroSection } from "../../components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | NexPay",
  description: "Welcome to the NexPay digital wallet application",
};

export default function Home() {

  return <HeroSection />;
}

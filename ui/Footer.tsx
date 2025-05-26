import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

interface FooterProps {
  year?: number;
  email?: string;
}

const Footer: React.FC<FooterProps> = ({
  year = new Date().getFullYear()
}) => {
  return (
    <footer className="bg-slate-100 text-gray-700 py-8 border-t border-slate-300">
      <div className="flex flex-col mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-center self-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">NexPay</h3>
            <p className="text-sm">
              Simplifying your finances with secure and seamless<br></br><span> digital
              payments.
              </span>
            </p>
            <p className="text-sm"></p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <div className="cursor-pointer"
                >Privacy Policy
                </div>
              </li>
              <li>
                <div className="cursor-pointer"
                >Terms of Service
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-md font-semibold mb-4">Connect With Us</h4>
            <div className="flex items-center space-x-4 mb-4">
              <a
                href=""
                className="text-gray-500 hover:text-gray-800"
              >
                <Github size={20} />
              </a>
              <a href="" className="footer-social-icon d-block Link--outlineOffset">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" fill="black" className="d-block" width="16" height="16"><path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"></path></svg>
              </a>            
              <a
                href=""
                className="text-gray-500 hover:text-blue-700"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300 text-center text-sm text-gray-500">
          <p>© {year} NexPay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "./button";
import { useRouter } from "next/navigation";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  const router = useRouter();
  function handleRedirect() {
    if (user) router.push("/dashboard");
    else router.push("/home");
    console.log("redirecting to home page");
  }

  return (
    <div className="px-10 flex justify-between border py-0.5 md:px-4 fixed top-0 left-0 right-0 z-50 md:max-w-full mx-auto rounded-lg backdrop-blur-md bg-opacity-5 border-gray-100 mb-6">
      <div className="text-[20px] flex flex-col justify-center">
        <div
          className="font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent cursor-pointer"
          onClick={handleRedirect}
        >
          NexPay
        </div>
      </div>
      <div className="flex flex-col justify-center pt-2">
        <Button onClick={user ? onSignout : onSignin}>
          {user ? "Logout" : "Login"}
        </Button>
      </div>
    </div>
  );
};

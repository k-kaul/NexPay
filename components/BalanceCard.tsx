import { Card } from "@/ui/card";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <Card title={"Balance"}>
      <div className="flex justify-between pb-2 py-1">
        <div>Unlocked balance</div>
        <div>₹{amount / 100}</div>
      </div>
      <div className="flex justify-between border-b border-slate-300 py-2">
        <div>Total Locked Balance</div>
        <div>₹{locked / 100}</div>
      </div>
      <div className="flex justify-between py-2">
        <div className="font-medium">Total Balance</div>
        <div className="font-bold text-lg text-violet-600">₹{(locked + amount) / 100}</div>
      </div>
    </Card>
  );
};

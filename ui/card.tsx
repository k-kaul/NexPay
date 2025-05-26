export function Card({
  title,
  children,
  className
}: {
  title: string;
  children?: React.ReactNode;
  className?:string | ""
}){
  return (
    <div className={`border border-slate-200 p-6 bg-white rounded-xl bg-[#ededed] ${className}`}>
      <h1 className="text-2xl font-bold pb-1">{title}</h1>
      <div className="text-sm font-light">{children}</div>
    </div>
  );
}

export function Center({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

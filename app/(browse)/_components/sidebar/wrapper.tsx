export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <aside className="fixed left-0 bg-slate-800 flex flex-col w-60 h-full border-r border-slate-900 z-50">
      {children}
    </aside>
  );
}

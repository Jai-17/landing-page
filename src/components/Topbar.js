export default function Topbar() {
  return (
    <header className="h-16 bg-white shadow px-6 flex justify-between items-center fixed left-64 right-0 top-0 z-10">
      <h2 className="text-xl font-semibold text-yellow-600">Impact We Made</h2>
      <div className="flex items-center gap-3 text-sm">
        <p>Welcome, Patron</p>
        <img src="https://i.pravatar.cc/40" className="h-8 w-8 rounded-full" />
      </div>
    </header>
  );
}

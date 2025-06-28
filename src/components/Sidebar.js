import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-white shadow-md p-6 fixed">
      <div className="mb-6">
        <Image
          src="/logo.png"
          alt="Today's Kalaam Foundation Logo"
          width={160}
          height={60}
          className="mx-auto"
        />
      </div>
      <nav className="space-y-4 text-sm">
        <p className="text-yellow-600 font-semibold">Impact Dashboard</p>
        <p>Student Dashboard</p>
        <p>Women Dashboard</p>
        <p>Reports</p>
        <p>Logout</p>
      </nav>
    </aside>
  );
}

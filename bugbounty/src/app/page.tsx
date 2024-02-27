import { redirect } from "next/navigation";

export default function Home() {
  redirect("/bug-bounty");
  return (
    <main className="min-h-screen p-64">
      <h1>Welcome! Redirecting to Bug Bounty Page</h1>
    </main>
  );
}

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/token-audit");
  return (
    <main className="min-h-screen p-64">
      <h1>Welcome! Redirecting to token-audit Page</h1>
    </main>
  );
}

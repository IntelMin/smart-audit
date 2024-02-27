import { redirect } from "next/navigation";

export default function Home() {
  redirect("/code-audit");
  return (
    <main className="min-h-screen p-64">
      <h1>Welcome! Redirecting to token-audit Page</h1>
    </main>
  );
}

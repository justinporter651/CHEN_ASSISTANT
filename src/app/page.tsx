import { redirect } from "next/navigation";

export default function Home() {
  // For now, redirect directly to chat
  // TODO: Add auth check — redirect to /login if not authenticated
  redirect("/chat");
}

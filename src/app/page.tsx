import { redirect } from "next/navigation";

export default function Home() {
  // Middleware handles auth — if we get here, user is authenticated
  redirect("/chat");
}

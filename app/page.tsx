// The homepage is served from public/home.html via a rewrite in next.config.mjs.
import { redirect } from "next/navigation"

export default function Home() {
  redirect("/home.html")
}

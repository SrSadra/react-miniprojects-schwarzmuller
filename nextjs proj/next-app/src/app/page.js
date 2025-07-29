import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header /> { /*header is custom component */}
      <p>🔥 Let&apos;s get started! 🔥</p>
      <div><Link href={"/about"}>About</Link></div> { /*using a tag instead of next link tag make the whole page be downloaded from backend */}
    </main>
  );
}

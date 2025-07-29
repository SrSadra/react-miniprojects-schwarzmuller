import Link from "next/link";

export default function blogPage() {
    return (
      <div>
        <h1>blog main page</h1>
        <Link href={"/blog/post-1"}>post 1</Link>
        <Link href={"/blog/post-2"}>post 2</Link>
      </div>
    );
}
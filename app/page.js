import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <main className='content-center h-full justify-center flex'>
      <Link href={"/"} className={buttonVariants({ variant: "outline" })}>Click here</Link>

    </main>
  );
}

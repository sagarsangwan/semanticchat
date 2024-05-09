import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className='h-screen grid grid-cols-3 gap-4 '>

      <div className="bg-sky-200 h-full">
        <div className="p-6">
          <Input placehol />
        </div>
      </div>
      <div className="col-span-2">02</div>

    </main>
  );
}

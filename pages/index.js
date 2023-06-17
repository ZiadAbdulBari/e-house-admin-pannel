
import MainLayout from "@/layout/MainLayout";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    router.push('/customer-add')
  },[]);
  return (
    <MainLayout>
        <main className={`${inter.className}`}>
          <p className="text-white">Test</p>
        </main>
    </MainLayout>
  );
}

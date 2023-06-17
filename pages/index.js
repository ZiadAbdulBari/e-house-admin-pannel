import Wrapper from "@/components/Wrapper/Wrapper";
import MainLayout from "@/layout/MainLayout";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <MainLayout>
      <Wrapper>
        <main className={`${inter.className}`}>
          <p className="text-white">Test</p>
        </main>
      </Wrapper>
    </MainLayout>
  );
}

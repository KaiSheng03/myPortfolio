import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Skillset from "@/components/Skillset";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Skillset />
    </div>
  );
}

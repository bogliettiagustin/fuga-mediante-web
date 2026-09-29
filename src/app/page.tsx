"use client";

import { useRouter } from "next/navigation";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const router = useRouter();

  return <CountdownTimer onDone={() => router.push("/video")} />;
}

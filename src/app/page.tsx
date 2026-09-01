"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import IntroLoader from "@/components/IntroLoader";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const router = useRouter();

  return (
    <>
      <AnimatePresence>
        {!introDone && <IntroLoader onDone={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <CountdownTimer onDone={() => router.push("/video")} />
        </motion.div>
      )}
    </>
  );
}

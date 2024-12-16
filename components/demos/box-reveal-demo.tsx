"use client";

import BoxReveal from "@/components/magicui/box-reveal";
import Link from "next/link";

const BoxRevealDemo = () => {
  return (
    <div className="h-full w-full items-center justify-center ml-10 overflow-hidden pt-8 space-y-2">
      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        
        <p className="text-3xl font-semibold">1. Innovate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Figure out innovate solutions for your manual tasks using
          <Link href={"/meeting"} className="text-purple-600">
            {" "}
            AI tools{" "}
          </Link>
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        <p className="text-3xl font-semibold">2. Automate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">
          Get rid of those manual tasks
        </h2>
      </BoxReveal>

      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        <p className="text-3xl font-semibold">3. Accelerate</p>
      </BoxReveal>

      <BoxReveal boxColor={"#7e22ce"} duration={0.5}>
        <h2 className="my-2 text-lg text-gray-500">Leave the rest to us</h2>
      </BoxReveal>
    </div>
  );
}

export default BoxRevealDemo;
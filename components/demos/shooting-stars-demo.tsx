import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Image from "next/image";


import Bolt from '@mui/icons-material/Bolt';
import Highlight from '@mui/icons-material/Highlight';
import Bookmark from '@mui/icons-material/Bookmark';
import Group from '@mui/icons-material/Group';
import VerifiedUser from '@mui/icons-material/VerifiedUser';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Tune from '@mui/icons-material/Tune';
import MarkEmailUnread from '@mui/icons-material/MarkEmailUnread';
import Paid from '@mui/icons-material/Paid';

const features = [
  {
    icon: <Bolt style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Best ROI",
    description:
      "We give you a spine chilling ROI.",
  },
  {
    icon: <Highlight style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Develop & Automate",
    description:
      "We serve you with systems that make your manual work seamless.",
  },
  {
    icon: <Bookmark style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Scalability + Maintenance ",
    description: "We offer maintenance and scalability for all your systems.",
  },
  {
    icon: <Group style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Team of Experts",
    description: "A team of experts ready to help you, at all times.",
  },
  {
    icon: <VerifiedUser style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Secure Building",
    description:
      "Safe and secure building practices. To ensure your data is safe.",
  },
  {
    icon: <TrendingUp style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Analytics Tracking",
    description: "Track your progress with our built in analytics",
  },
  {
    icon: <MarkEmailUnread style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "24/7 Support",
    description:
      "We offer 24/7 support for all our clients. Call us for more information.",
  },
  {
    icon: <Paid style={{ fontSize: 30, color: '#9333EA' }} />,
    title: "Affordable Pricing",
    description: "Affordable pricing for all our clients.",
  },
];

export function ShootingStarsAndStarsBackgroundDemo() {
  return (
    <div className="mt-20 py-10 md:py-20 rounded-[40px] bg-neutral-900 flex flex-col items-center justify-center relative w-full px-6 md:px-0">
      <h2 className="relative flex-col  z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white flex items-center gap-2 ">
        Our guarantees to you.
        <p className="md:text-center   mx-auto  text-xl md:text-2xl text-gray-200">
          We ensure the highest quality of work, with the fastest delivery
          times.
        </p>
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 z-40 xl:w-4/5 2xl:w-[68%] mx-auto ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col   p-10 bg-neutral-800 rounded-xl cursor-pointer"
          >
            <button
              className="
                     w-16 p-4 
                     animate-shine flex items-center justify-center rounded-md  bg-gradient-to-br  
                        from-neutral-700 to-neutral-800 
                    font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <>{feature.icon}</>
            </button>

            <h3 className="text-xl font-bold mt-4 text-white">
              {feature.title}
            </h3>
            <p className=" text-gray-200">{feature.description}</p>
          </div>
        ))}
      </div>

      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

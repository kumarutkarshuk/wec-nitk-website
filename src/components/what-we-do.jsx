'use client'
import * as React from "react"
import { SideScroll } from "@/components/ui/side-scroll";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion, useScroll, useInView } from "framer-motion"
import Section from "@/components/section-framer";


export function WhatWeDoSection() {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <Section>
        <div className="flex flex-col p-2 m-2 pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className={`md:text-lg text-center text-xs font-medium md:font-light text-secondary-800/50 p-9 mx-auto ${scrollYProgress}`}>OUR ALUMNI'S ARE CURRENTLY AT</motion.h1>

          <div className="h-fit flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ring-1 ring-secondary-400/50 rounded-full md:p-5 md:w-10/12 w-11/12 mx-auto">
            <SideScroll
              items={press}
              direction="left"
              speed="normal"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className=" text-secondary-800 font-semibold text-center text-2xl md:text-4xl p-9 mt-[90px] mb-10 mx-auto">
            Things we do in <span className="text-primary-400">WebClub🕸️</span>
          </motion.h1>
          <BentoGrids />
        </div>

      </Section>

    </motion.div>

  )
}


const press = [
  "TheNewYorkTimes",
  "TheWashingtonPost",
  "Forbes",
  "Bloomberg",
  "BusinessInsider",
  "TechCrunch",
  "TheGuardian",
  "Wired",
];

export function BentoGrids() {
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}


const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];



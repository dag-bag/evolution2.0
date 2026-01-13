"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  align?: "left" | "right" | "center";
}

export default function Section({ title, children, align = "left" }: SectionProps) {
  return (
    <section className={`h-screen w-full flex items-center p-10 ${
      align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center"
    }`}>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 items-center"
      >
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="text-lg text-gray-200 leading-relaxed space-y-4 font-light">
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

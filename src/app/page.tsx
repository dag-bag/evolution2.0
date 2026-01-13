"use client";

import { useEffect, useState } from "react";
import Experience from "@/components/canvas/Experience";
import Section from "@/components/sections/Section";
import { TIMELINE_DATA, TimelineNode } from "@/data/timeline";
import { fetchWikiData, WikiData } from "@/lib/wikipedia";
import { getHomoSapiensLineage, OTLInternalNode } from "@/lib/opentree";
import { motion } from "framer-motion";

interface EnrichedNode extends TimelineNode {
  wiki?: WikiData | null;
}

export default function Home() {
  const [data, setData] = useState<EnrichedNode[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    async function initData() {
      setStatus("Fetching Cosmic History...");
      
      // 1. Get Static Cosmic/Earth Data (First 2 nodes of our manual list)
      const cosmicNodes = TIMELINE_DATA.slice(0, 2); 
      
      setStatus("Fetching Biological Lineage from Open Tree of Life...");
      // 2. Get Dynamic Lineage from Open Tree of Life
      const otlLineage = await getHomoSapiensLineage();
      
      // Convert OTL nodes to our TimelineNode format
      const lineageNodes: TimelineNode[] = otlLineage.map((node) => ({
        id: `otl-${node.ott_id}`,
        query: node.name, // Use scientific name for Wikipedia search
        displayTitle: `${node.rank.toUpperCase()}: ${node.name}`,
        era: "Biological Era", // OTL doesn't give dates, generic placeholder
        description: `Rank: ${node.rank}`
      }));
      
      // 3. Get Future (Last node)
      const futureNode = TIMELINE_DATA[TIMELINE_DATA.length - 1];

      // Combine all
      const fullTimeline = [...cosmicNodes, ...lineageNodes, futureNode];
      
      setStatus("Enhancing with Wikipedia Images...");
      // 4. Enrich with Wikipedia
      const enriched = await Promise.all(
        fullTimeline.map(async (node) => {
          const wiki = await fetchWikiData(node.query);
          return { ...node, wiki }; // Append wiki data
        })
      );

      setData(enriched);
      setLoading(false);
    }
    initData();
  }, []);

  return (
    <main className="relative w-full min-h-screen">
      <Experience />
      
      {loading ? (
        <div className="h-screen w-full flex flex-col items-center justify-center z-50 text-white">
          <p className="text-4xl font-bold animate-pulse mb-4">LOADING EVOLUTION</p>
          <p className="text-cyan-400 font-mono">{status}</p>
        </div>
      ) : (
        <div className="relative z-10 w-full flex flex-col pb-40">
           {/* Landing Title */}
           <section className="h-screen flex items-center justify-center">
             <div className="text-center">
               <h1 className="text-7xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                 EVOLUTION
               </h1>
               <p className="text-xl text-cyan-400 mt-4 tracking-widest uppercase">The Full Journey (Open Tree of Life)</p>
             </div>
           </section>

          {data.map((node, index) => (
            <Section 
              key={node.id} 
              title={node.displayTitle || node.wiki?.title || node.query}
              align={index % 2 === 0 ? "left" : "right"}
            >
              <div className="space-y-4">
                <p className="text-sm font-mono text-cyan-300 uppercase tracking-widest border-b border-cyan-800/50 pb-2 inline-block">
                  {node.era}
                </p>
                
                <p>{node.description}</p>
                
                {node.wiki?.thumbnail && (
                   <motion.img 
                     initial={{ opacity: 0, scale: 0.8 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     className="rounded-lg shadow-2xl border border-white/20 my-4 w-full max-h-64 object-cover"
                     src={node.wiki.thumbnail.source} 
                     alt={node.wiki.title}
                   />
                )}
                
                {node.wiki?.extract && (
                  <p className="text-sm text-gray-400 italic border-l-2 border-white/20 pl-4">
                    "{node.wiki.extract}"
                  </p>
                )}
              </div>
            </Section>
          ))}

          <section className="h-[50vh] flex items-center justify-center">
            <p className="text-2xl text-white/50">To be continued...</p>
          </section>
        </div>
      )}
    </main>
  );
}

"use client";
import { WavyBackgroundDemo } from "@/data/data";
import Link from "next/link";
import { ArrowUpRight, Sparkles, MousePointer } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { MacbookScrollDemo } from "@/data/data";

export default function Hero() {
  // State to control the beatdrop animation
  const [beatdropTriggered, setBeatdropTriggered] = useState(false);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);
  
  // Trigger the beatdrop animation after 6 seconds
  useEffect(() => {
    // Set initial load first
    const initialTimer = setTimeout(() => {
      setInitialLoadComplete(true);
    }, 500);
    
    // Then trigger beatdrop at 6 seconds
    const beatdropTimer = setTimeout(() => {
      setBeatdropTriggered(true);
    },7000);

    return () => {
      clearTimeout(beatdropTimer);
      clearTimeout(initialTimer);
    };
  }, []);

  // Animation variants for staggered text reveal
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i:any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section
      className="w-full bg-white h-screen relative overflow-hidden"
      data-scroll
      data-scroll-speed="-.3"
    >
      {/* Top section with improved layout */}
      <div className="w-full flex  flex-col h-auto border-t border-[#21212155] py-[20px] sm:mb-[60px] xm:mb-[60px] gap-[30px]">
        <div className="flex justify-between items-center padding-x gap-[20px] sm:flex-col sm:items-start xm:flex-col xm:items-start">
          
        </div>
        
        {/* Animated scrolling text - enhanced */}
        <div className="w-full flex items-center overflow-hidden justify-center xm:hidden sm:hidden">
          <motion.p
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "100%", opacity: 0.5 }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: [0.3, 0.86, 0.36, 0.95],
            }}
            className="paragraph opacity-50 font-NeueMontreal text-secondry"
          >
            Explore Nuke Marketing.
          </motion.p>
        </div>
      </div>

      {/* Creative agency main content with beatdrop animation */}
      <div className="w-full flex flex-col items-center justify-center min-h-[50vh] padding-x z-10 relative">
        {/* BEATDROP EFFECT - Flash overlay */}
        <AnimatePresence>
          {beatdropTriggered && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-white z-50 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Creative headline with dynamic word reveal effect */}
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: 100, scale: initialLoadComplete ? 1 : 0.8 }}
            animate={{ 
              y: 0, 
              scale: beatdropTriggered ? [1, 1.1, 1] : 1,
              x: beatdropTriggered ? [0, -10, 10, -5, 5, 0] : 0
            }}
            transition={{ 
              duration: beatdropTriggered ? 0.5 : 1,
              scale: { duration: 0.3 },
              x: { duration: 0.5 },
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry mb-1"
          >
            Create.
          </motion.div>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.div
            initial={{ y: 100 }}
            animate={{ 
              y: 0,
              scale: beatdropTriggered ? [1, 1.15, 1] : 1,
              x: beatdropTriggered ? [0, 10, -10, 5, -5, 0] : 0
            }}
            transition={{ 
              duration: 1, 
              delay: initialLoadComplete ? 0.1 : 0,
              scale: { duration: 0.4, delay: 0.05 },
              x: { duration: 0.5, delay: 0.05 },
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry mb-1"
          >
            Innovate.
          </motion.div>
        </div>
        <div className="overflow-hidden mb-12">
          <motion.div
            initial={{ y: 100 }}
            animate={{ 
              y: 0,
              scale: beatdropTriggered ? [1, 1.2, 1] : 1,
              x: beatdropTriggered ? [0, -15, 15, -7, 7, 0] : 0
            }}
            transition={{ 
              duration: 1, 
              delay: initialLoadComplete ? 0.2 : 0,
              scale: { duration: 0.5, delay: 0.1 },
              x: { duration: 0.5, delay: 0.1 },
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            className="text-8xl sm:text-5xl xm:text-5xl font-bold text-secondry"
          >
            Disrupt.
          </motion.div>
        </div>
        
        {/* Creative description - masked reveal with beatdrop enhancement */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            scale: beatdropTriggered ? [1, 1.05, 1] : 1 
          }}
          transition={{ 
            duration: 0.8, 
            delay: initialLoadComplete ? 0.6 : 0,
            scale: { duration: 0.3 },
            ease: [0.215, 0.61, 0.355, 1]
          }}
          className="text-xl sm:text-lg xm:text-lg text-secondry/70 mb-12 text-center max-w-xl leading-relaxed"
        >
          We craft stories that blur the line between art and strategy. 
          Where brands become experiences, and ideas transform into culture.
        </motion.p>
        
        {/* Creative CTA with unique design - beatdrop enhanced */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            scale: beatdropTriggered ? [0.9, 1.1, 1] : 1,
            rotate: beatdropTriggered ? [0, -2, 2, 0] : 0
          }}
          transition={{ 
            duration: 0.6, 
            delay: initialLoadComplete ? 0.8 : 0,
            scale: { duration: 0.5 },
            rotate: { duration: 0.5 },
          }}
          className="group relative mb-16"
        >
          <Link href="/contact">
            <div className="relative z-10 py-4 px-10 border-2 border-secondry rounded-full overflow-hidden">
              <span className="relative z-10 text-secondry group-hover:text-red-500 font-medium transition-colors duration-400">
                Talk to Us
              </span>
             
            </div>
          </Link>

         
        </motion.div>
        
        {/* Creative process tags with beatdrop animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            y: beatdropTriggered ? [0, -10, 0] : 0
          }}
          transition={{ 
            opacity: { duration: 1, delay: initialLoadComplete ? 1 : 0 },
            y: { duration: 0.5 }
          }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl"
        >
          {['Strategy', 'Design', 'Digital', 'Brand', 'Content', 'Experience', 'Motion'].map((tag, i) => (
            <motion.div 
              key={tag}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`px-4 py-1 rounded-full border border-secondry/30 text-secondry/70 text-sm ${
                beatdropTriggered ? 'beatdrop-tag' : ''
              }`}
              style={
                beatdropTriggered 
                  ? { 
                      animation: `tagPulse 0.5s ${i * 0.05}s ease-out forwards`,
                    } 
                  : {}
              }
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll indicator with artistic effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: beatdropTriggered ? [0.7, 1, 0.7] : 0.7 
        }}
        transition={{ 
          opacity: { duration: 0.5 },
          delay: initialLoadComplete ? 1.5 : 0
        }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
            scale: beatdropTriggered ? [1, 1.2, 1] : 1
          }}
          transition={{ 
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.5 }
          }}
          className="text-secondry flex flex-col items-center"
        >
          <p className="mb-2 text-sm uppercase tracking-wider">Scroll</p>
          <MousePointer size={18} strokeWidth={1.25} />
        </motion.div>
      </motion.div>
      
      {/* Background Animation Component with Beatdrop Enhancement */}
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{ 
          scale: beatdropTriggered ? [1, 1.05, 1] : 1,
          opacity: beatdropTriggered ? [1, 0.8, 1] : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <WavyBackgroundDemo />
      </motion.div>

      {/* Extra style for tag animation */}
      <style jsx global>{`
        @keyframes tagPulse {
          0% { transform: scale(1); background: transparent; }
          50% { transform: scale(1.2); background: rgba(33, 33, 33, 0.8); color: white; }
          100% { transform: scale(1); background: transparent; }
        }
      `}</style>
      
     
    </section>
    
  );
}
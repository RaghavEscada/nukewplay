"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { clientsItem } from "@/constants";
import { Button, Ratings } from "@/components";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTestimonialsDemo } from "@/data/data";



export default function Clients() {
  const [activeAccordion, setActiveAccordion] = useState(clientsItem[0].id);
  const toggleAccordion = (itemId: any) => {
    setActiveAccordion((prev) => (prev === itemId ? null : itemId));
  };

  return (
    <section className="padding-y">
      <h1 className="sub-heading padding-x font-medium font-NeueMontreal text-secondry pb-[50px]">
        Clients' reviews
      </h1>
      
      <AnimatedTestimonialsDemo />
    
      
  
      
    </section>
  );
}
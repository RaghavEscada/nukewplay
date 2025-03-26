"use client";
import { useEffect } from "react";
import { Curve } from "@/components";

export default function ContactPage() {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);


    return (
        <Curve backgroundColor={"#f1f1f1"}>
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
            <iframe
                src="https://nukeblob.vercel.app/"
                style={{ width: "100vw", height: "100vh", border: "none" }}
               
            ></iframe>
        </div>
        </Curve>
    );
}

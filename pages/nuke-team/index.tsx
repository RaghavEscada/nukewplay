"use client";



import { Curve } from "@/components";

export default function ContactPage() {
  return (
    <>
      <Curve backgroundColor={"#f1f1f1"}>
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
          <iframe src="/team.html" style={{ width: "100vw", height: "100vh", border: "none" }}></iframe>
        </div>
      </Curve>
    </>
  );
}

"use client";
import dynamic from "next/dynamic";

// Disable SSR for Spline
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

export default function SplineView() {
    return (
        <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
            <Spline scene="https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode" />
        </div>
    );
}

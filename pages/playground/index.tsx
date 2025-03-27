"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Disable SSR for Spline
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

const scenes = [
    { id: 1, url: "https://prod.spline.design/yxjkoyT5oby9JLPy/scene.splinecode", name: "Scene 1" },
    { id: 2, url: "https://prod.spline.design/G46bcMRddu7fV2GY/scene.splinecode", name: "Game 1" },
    { id: 3, url: "https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode", name: "Game 2" }
];

export default function SplineView() {
    const [selectedScene, setSelectedScene] = useState(scenes[0].url);
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const handleSceneChange = (url) => {
        setSelectedScene(url);
        setButtonsVisible(false);
    };

    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            {buttonsVisible && (
                <div style={{ 
                    position: "absolute", 
                    top: "50%", 
                    left: "50%", 
                    transform: "translate(-50%, -50%)", 
                    display: "flex", 
                    gap: "15px", 
                    zIndex: 1000, 
                    background: "rgba(0, 0, 0, 0.7)", 
                    padding: "15px 20px", 
                    borderRadius: "12px", 
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
                }}>
                    {scenes.slice(1).map(scene => (
                        <button 
                            key={scene.id} 
                            onClick={() => handleSceneChange(scene.url)} 
                            style={{ 
                                padding: "12px 20px", 
                                cursor: "pointer", 
                                background: "linear-gradient(135deg, #ff7eb3, #ff758c)", 
                                color: "#fff", 
                                border: "none", 
                                borderRadius: "8px", 
                                fontSize: "16px", 
                                fontWeight: "bold", 
                                transition: "0.3s ease-in-out", 
                                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)"
                            }}
                            onMouseOver={(e) => e.target.style.opacity = "0.8"}
                            onMouseOut={(e) => e.target.style.opacity = "1"}
                        >
                            {scene.name}
                        </button>
                    ))}
                </div>
            )}
            <div style={{ width: "100vw", height: "100vh" }}>
                <Spline scene={selectedScene} />
            </div>
        </div>
    );
}
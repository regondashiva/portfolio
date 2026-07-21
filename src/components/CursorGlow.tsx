"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function CursorGlow() {
    const { theme } = useTheme();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCoords({ x: e.clientX, y: e.clientY });
            setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    if (theme === "light") {
        // Return subtle cursor glow for light mode or omit to avoid washing out content
        return (
            <div
                className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(37, 99, 235, 0.05), transparent 80%)`,
                    opacity: opacity,
                }}
            />
        );
    }

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: `radial-gradient(550px at ${coords.x}px ${coords.y}px, rgba(59, 130, 246, 0.08), transparent 85%)`,
                opacity: opacity,
            }}
        />
    );
}

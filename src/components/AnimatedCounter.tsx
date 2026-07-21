"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
    end: number;
    duration?: number; // duration in ms
    decimals?: number;
    suffix?: string;
    prefix?: string;
}

export default function AnimatedCounter({
    end,
    duration = 1500,
    decimals = 0,
    suffix = "",
    prefix = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const elementRef = useRef<HTMLSpanElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!isIntersecting) return;

        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            const currentCount = progress * end;
            setCount(currentCount);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end); // Ensure exact end value is set
            }
        };

        window.requestAnimationFrame(step);
    }, [isIntersecting, end, duration]);

    return (
        <span ref={elementRef} className="tabular-nums">
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
}

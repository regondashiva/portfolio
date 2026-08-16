"use client";

import React from "react";

interface BrandLogoProps {
    className?: string;
    size?: number;
}

export default function BrandLogo({ className = "", size = 32 }: BrandLogoProps) {
    return (
        <div
            className={`relative flex items-center justify-center rounded-xl bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-sm border border-stone-800/10 dark:border-stone-200/20 transition-all duration-300 group-hover:scale-105 ${className}`}
            style={{ width: size, height: size }}
        >
            <svg
                width={Math.round(size * 0.62)}
                height={Math.round(size * 0.62)}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Geometric R and S Monogram */}
                <path
                    d="M7 6H18C21.866 6 25 9.13401 25 13C25 16.3534 22.6393 19.1554 19.5 19.82V20L26 27H20.5L14.8 20H11.5V27H7V6ZM11.5 10.5V15.5H17.5C18.8807 15.5 20 14.3807 20 13C20 11.6193 18.8807 10.5 17.5 10.5H11.5Z"
                    fill="currentColor"
                />
                {/* High-tech accent dot */}
                <circle cx="25" cy="7" r="2.2" fill="currentColor" className="text-amber-500 dark:text-amber-600" />
            </svg>
        </div>
    );
}

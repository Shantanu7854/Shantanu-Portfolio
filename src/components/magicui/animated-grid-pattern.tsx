"use client";

import { motion } from "motion/react";
import {
  ComponentPropsWithoutRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

export interface AnimatedGridPatternProps
  extends ComponentPropsWithoutRef<"svg"> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  colors?: string[];
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 60,
  className,
  maxOpacity = 0.9,
  duration = 4,
  repeatDelay = 0.3,
  colors = [
    "#0ea5e9", // cyan-600
    "#22d3ee", // cyan-400
    "#38bdf8", // sky-400
    "#60a5fa", // blue-400
  ],
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const containerRef = useRef<SVGSVGElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.random() > 0.7 ? 8 : 0, // softer glow
      opacity: Math.random() * 0.5 + 0.5,
      rotate: 0,
    }));
  }

  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
              color: colors[Math.floor(Math.random() * colors.length)],
              blur: Math.random() > 0.7 ? 8 : 0,
              opacity: Math.random() * 0.5 + 0.5,
              rotate: 0,
            }
          : sq,
      ),
    );
  };

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
      {...props}
    >
      <defs>
        {/* Neon gradients */}
        <radialGradient id={`${id}-bg1`} cx="30%" cy="40%" r="90%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#000000" stopOpacity="1" />
        </radialGradient>
        <radialGradient id={`${id}-bg2`} cx="70%" cy="60%" r="90%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
        </radialGradient>

        {/* Flowing grid lines */}
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <motion.path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
            stroke="#1e3a8a"
            strokeOpacity="0.1"
            animate={{
              stroke: ["#1e3a8a", "#22d3ee", "#38bdf8", "#1e3a8a"],
              strokeOpacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </pattern>

        {/* Glow filter */}
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background layers */}
      <rect width="100%" height="100%" fill={`url(#${id}-bg1)`} />
      <rect width="100%" height="100%" fill={`url(#${id}-bg2)`} opacity={0.9} />
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={0.2}/>

      {/* Neon squares */}
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ pos: [x, y], id, color, blur, opacity }, index) => (
          <motion.rect
            key={`${x}-${y}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, opacity * maxOpacity, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 5, -5, 0], // gentle floating effect
            }}
            transition={{
              duration: duration + Math.random() * 3,
              repeat: Infinity,
              delay: index * 0.1,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            onAnimationComplete={() => updateSquarePosition(id)}
            width={width - 3}
            height={height - 3}
            x={x * width + 1}
            y={y * height + 1}
            fill={color}
            strokeWidth="0"
            filter={blur ? `url(#${id}-glow)` : undefined}
            style={{
              mixBlendMode: "screen",
            }}
          />
        ))}
      </svg>
    </svg>
  );
}

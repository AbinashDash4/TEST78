import { useEffect, useCallback, useRef } from "react";

const sparkles = ["✨", "💖", "🌸", "⭐", "💕", "🦋"];

const SparkleTrail = () => {
  const lastSpawn = useRef(0);

  const handleMove = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;

    const el = document.createElement("span");
    el.className = "sparkle-cursor";
    el.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    el.style.left = `${e.clientX + (Math.random() - 0.5) * 20}px`;
    el.style.top = `${e.clientY + (Math.random() - 0.5) * 20}px`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return null;
};

export default SparkleTrail;

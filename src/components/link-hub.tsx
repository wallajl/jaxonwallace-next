"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./hero";
import { LinkSection } from "./link-section";
import { SiteNav } from "./site-nav";

gsap.registerPlugin(ScrollTrigger);

export function LinkHub() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .from(".nav", { y: -18, opacity: 0, duration: 0.55 })
        .from(".eyebrow", { y: 10, opacity: 0, duration: 0.45 }, "-=0.22")
        .from("h1", { y: 24, opacity: 0, filter: "blur(10px)", duration: 0.75 }, "-=0.18")
        .from(".lead", { y: 16, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".cta .btn", { y: 14, opacity: 0, stagger: 0.08, duration: 0.45 }, "-=0.25")
        .from(".portrait-card", { y: 22, opacity: 0, rotateX: -4, duration: 0.8 }, "-=0.65");

      gsap.to(".portrait", {
        backgroundPosition: "55% 42%, 62% 48%, 0 0",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.from(".scan", {
        scaleX: 0,
        transformOrigin: "center",
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scan",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".section-head", {
        y: 22,
        opacity: 0,
        duration: 0.55,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".card", {
        y: 28,
        opacity: 0,
        filter: "blur(8px)",
        stagger: 0.1,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".links",
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".footer", {
        y: 16,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 94%",
          once: true,
        },
      });

      gsap.to(".portrait-card", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      root.querySelectorAll<HTMLElement>(".magnetic-card").forEach((card) => {
        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          gsap.to(card, {
            x: x * 0.035,
            y: y * 0.045,
            rotateX: y * -0.018,
            rotateY: x * 0.018,
            duration: 0.35,
            ease: "power3.out",
          });
        };

        const onLeave = () => {
          gsap.to(card, {
            x: 0,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.45,
            ease: "elastic.out(1, 0.55)",
          });
        };

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onLeave);
        });
      });
    }, root);

    return () => {
      cleanups.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="site-shell">
      <div className="wrap">
        <SiteNav />
        <main id="top">
          <Hero />
          <div className="scan" />
          <LinkSection />
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Jaxon Wallace · built with Next.js, React, and GSAP
        </footer>
      </div>
    </div>
  );
}

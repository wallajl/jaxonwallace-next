"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "./hero";
import { LinkSection } from "./link-section";
import { ProfileSections } from "./profile-sections";
import { SiteNav } from "./site-nav";

gsap.registerPlugin(ScrollTrigger);

export function LinkHub() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compactPhone = window.matchMedia("(max-width: 640px)").matches;
    if (reduceMotion || compactPhone) return;

    const cleanups: Array<() => void> = [];

    const ctx = gsap.context(() => {
      gsap.set(".motion-card", {
        y: 90,
        opacity: 0,
        rotateX: -16,
        rotateY: 9,
        scale: 0.92,
        filter: "blur(14px)",
        transformPerspective: 1100,
        transformOrigin: "50% 100%",
      });

      gsap.set(".section-head", { y: 42, opacity: 0, filter: "blur(12px)" });
      gsap.set(".footer", { y: 24, opacity: 0 });

      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .from(".nav", { y: -18, opacity: 0, duration: 0.55 })
        .from(".ambient-orb", { scale: 0.2, opacity: 0, stagger: 0.12, duration: 0.9 }, "-=0.35")
        .from(".eyebrow", { y: 10, opacity: 0, duration: 0.45 }, "-=0.55")
        .from("h1", { y: 30, opacity: 0, filter: "blur(12px)", duration: 0.85 }, "-=0.2")
        .from(".lead", { y: 18, opacity: 0, duration: 0.55 }, "-=0.35")
        .from(".quick-facts span", { y: 12, opacity: 0, stagger: 0.06, duration: 0.36 }, "-=0.28")
        .from(".cta .btn", { y: 16, opacity: 0, stagger: 0.08, duration: 0.45 }, "-=0.2")
        .from(".portrait-card", { y: 32, opacity: 0, rotateX: -7, rotateY: -6, duration: 0.9 }, "-=0.7");

      gsap.to(".portrait", {
        backgroundPosition: "55% 42%, 62% 48%, 0 0",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".portrait-image", {
        scale: 1.11,
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.to(".scroll-progress span", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });

      const heroScroll = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom 25%",
          scrub: 0.85,
        },
      });

      heroScroll
        .to(".hero-copy", { y: -46, opacity: 0.72, filter: "blur(1.5px)", ease: "none" }, 0)
        .to(".portrait-card", { y: -72, rotateZ: 1.6, scale: 0.96, ease: "none" }, 0)
        .to(".ambient-orb.one", { xPercent: 22, yPercent: 20, scale: 1.2, ease: "none" }, 0)
        .to(".ambient-orb.two", { xPercent: -18, yPercent: -14, scale: 1.1, ease: "none" }, 0);

      const reveal = gsap.timeline({
        scrollTrigger: {
          trigger: ".section",
          start: "top 82%",
          end: "top 34%",
          scrub: 0.75,
        },
      });

      reveal
        .to(".section-head", { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.25, ease: "power2.out" })
        .to(
          ".motion-card",
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            filter: "blur(0px)",
            stagger: 0.12,
            duration: 0.68,
            ease: "back.out(1.45)",
          },
          "-=0.08",
        )
        .to(".motion-card .icon", { boxShadow: "0 0 32px rgba(113, 112, 255, 0.38)", stagger: 0.08, duration: 0.25 }, "-=0.38");

      gsap.to(".links", {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: ".section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".motion-card", {
        backgroundPosition: "140% 50%",
        stagger: 0.05,
        ease: "none",
        scrollTrigger: {
          trigger: ".links",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".footer", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".footer",
          start: "top 94%",
          once: true,
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
      <div className="scroll-progress" aria-hidden="true"><span /></div>
      <div className="ambient-orb one" aria-hidden="true" />
      <div className="ambient-orb two" aria-hidden="true" />
      <div className="wrap">
        <SiteNav />
        <main id="top">
          <Hero />
          <LinkSection />
          <ProfileSections />
        </main>
        <footer className="footer">
          © {new Date().getFullYear()} Jaxon Wallace
        </footer>
      </div>
    </div>
  );
}

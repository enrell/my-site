"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect } from "react"; // Changed to useLayoutEffect
import HamburgerButton from "@/app/public/HamburgerButton.svg";
import CloseButton from "@/app/public/CloseButton.svg";

export function Menu() {
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (timeline.current) {
      if (!isOpen) {
        timeline.current.play();
      } else {
        timeline.current.reverse();
      }
      setIsOpen(!isOpen);
    }
  };

  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 0; // Height of the header in pixels
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    handleToggle(); // Close the menu when navigating
  };

  useLayoutEffect(() => {
    // Initialize the timeline when the component mounts
    timeline.current = gsap.timeline({ paused: true })
      .to(buttonRef.current, {
        rotation: 180,
        duration: 0.4,
        ease: "power2.inOut",
      })
      .to(
        modalRef.current,
        {
          y: "0%",
          duration: 0.4,
          ease: "power2.inOut",
        },
        0 // Animation starts at the same time as the button rotation
      )
      .reverse(); // Ensure it starts in reversed state

    // Clean up on component unmount
    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={buttonRef}
        className="relative z-50 cursor-pointer"
        onClick={handleToggle}
      >
        <Image
          src={isOpen ? CloseButton : HamburgerButton}
          width={25}
          height={25}
          alt={isOpen ? "Fechar menu" : "Abrir menu"}
          className="transition-transform duration-300 ease-in-out"
        />
      </div>
      <div
        ref={modalRef}
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform translate-y-full z-40`}
      >
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="text-white text-2xl space-y-8">
            <li>
              <button
                onClick={() => handleNavigation("about")}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Sobre mim
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("social")}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Minhas redes
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("technologies")}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Stack de tecnologias
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("projects")}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Projetos
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/app/(components)/header/header";
import Image from "next/image";
import ProfileImage from "@/app/public/perfil-photo.png";

const techIcons = {
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Go: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  NodeJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

const socialIcons = {
  LinkedIn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  DevCommunity: "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
};

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(aboutRef.current, {
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    if (socialRef.current) {
      gsap.from(socialRef.current.children, {
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
          trigger: socialRef.current,
          start: "top 80%",
        },
      });
    }

    if (techRef.current) {
      gsap.from(techRef.current.children, {
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: "elastic.out(1, 0.7)",
        delay: 1,
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
        },
      });
    }

    gsap.from(projectsRef.current, {
      y: 30,
      duration: 0.8,
      ease: "power2.out",
      delay: 1.5,
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top 80%",
      },
    });

    gsap.to(handRef.current, {
      rotationZ: 30,
      x: 30,
      yoyo: true,
      repeat: -1,
      duration: 0.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-20 relative z-0 pt-32">
        {/* About Section */}
        <section ref={aboutRef} id="about" className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/3">
              <Image
                src={ProfileImage}
                width={300}
                height={300}
                alt="Profile photo"
                className="rounded-full border-4 border-blue-300 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div className="md:w-2/3 text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 mt-20">
                Hi, I'm Ênrell! <span ref={handRef} className="inline-block">👋</span>
              </h1>
              <p className="text-2xl text-gray-700 leading-relaxed">
                A passionate backend developer focused on creating efficient and scalable solutions.
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
            </div>
          </div>
        </section>

        {/* Social Networks */}
        <section ref={socialRef} id="social" className="mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-10 text-center md:text-left text-gray-800">
                Connect with me
              </h2>
              <div className="flex justify-center md:justify-start space-x-16">
                {[
                  { icon: socialIcons.LinkedIn, name: "LinkedIn", link: "https://www.linkedin.com" },
                  { icon: socialIcons.GitHub, name: "GitHub", link: "https://www.github.com" },
                  { icon: socialIcons.DevCommunity, name: "Dev Community", link: "https://dev.to" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group transition-all duration-300 transform hover:scale-110 hover:-translate-y-2"
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-3">
                      <Image
                        src={social.icon}
                        width={40}
                        height={40}
                        alt={`${social.name} icon`}
                      />
                    </div>
                    <p className="font-medium text-gray-700 group-hover:text-blue-600">
                      {social.name}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section ref={techRef} id="technologies" className="mb-20">
          <div className="flex flex-col items-center space-y-8">
            <div className="w-full">
              <h2 className="text-5xl md:text-6xl md:font-extrabold font-bold mb-10 text-center text-gray-800">
                My Technology Stack
              </h2>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
              {Object.entries(techIcons).map(([techName, techIcon], idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-24 h-24 rounded-lg bg-white shadow-md flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <Image
                      src={techIcon}
                      width={60}
                      height={60}
                      alt={`${techName} icon`}
                    />
                  </div>
                  <p className="font-medium text-gray-700 group-hover:text-blue-600">
                    {techName}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/3">
              <h2 className="text-4xl font-bold mb-6 text-center md:text-left text-gray-800">
                Projects
              </h2>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-xl text-gray-600">
                Exciting projects coming soon...
              </p>
              <div className="mt-8 flex justify-center md:justify-start">
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
import React, { useEffect, useRef } from "react";
import { TeamMembers } from "../constants/Index";
import type { TeamMember } from "../types/types";
import Hero from "../sections/Hero";
import HeadText from "../components/HeadText";

declare const gsap: any;

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="team-member-card flex flex-col items-center text-center">
    <div className="relative mb-4">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-600"
      />
    </div>
    <h4 className="text-white font-semibold text-lg">{member.name}</h4>
    <p className="text-gray-400 text-sm">{member.role}</p>
  </div>
);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof gsap === "undefined") return;

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.from(sectionEl.querySelector(".main-title"), {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        [
          sectionEl.querySelector(".mission-content"),
          sectionEl.querySelector(".story-content"),
        ],
        {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        },
        "-=0.5"
      )
      .from(
        sectionEl.querySelectorAll(".team-member-card"),
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.7"
      );
  }, []);

  return (
    <section>
      <Hero />
      <div
        ref={sectionRef}
        className="bg-dark-card section-padding sm:py-6 py-8"
      >
        <div className="text-left mb-12">
          <HeadText headText="About Us"/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="mission-content">
            <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-base leading-relaxed">
              The Maistem your and tslang poritbe anai toota er ter tine etsmedy
              baiest lasan vda sngradia, wliik ine me. Tial wrost ou
              loienticroovss a roivensvra, nid witaue pse qine fiais and youit
              tse poo, youiea yourst tiye tio ppts yon pvoledies in, tqrnae to
              omd wotia itse.
            </p>
          </div>
          <div className="story-content">
            <h3 className="text-3xl font-bold text-white mb-8 text-left lg:text-left">
              Our Story
            </h3>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-8 sm:gap-12">
              {TeamMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

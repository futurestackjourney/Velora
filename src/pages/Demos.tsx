import React from "react";
import GsapTextDemo from "../components/Demos/GsapTextDemo";
import GsapCardDemo from "../components/Demos/GsapCardDemo";
import MotionButtonDemo from "../components/Demos/MotionButtonDemo";
import MotionScrollDemo from "../components/Demos/MotionScrollDemo";
import MotionSwipeDemo from "../components/Demos/MotionSwipeDemo";
import ScrollTriggerDemo from "../components/Demos/ScrollTriggerDemo";
import ScrollTimelineDemo from "../components/Demos/ScrollTimelineDemo";
import FramerScrollDemo from "../components/Demos/FramerScrollDemo";
import HeadText from "../components/HeadText";

const Demos: React.FC = () => {
  return (
    <div className="min-h-screen py-16 sm:py-24 space-y-12 section-padding">
      <HeadText headText=" Velora Animation Demos"/>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <GsapTextDemo />
        <MotionButtonDemo />
        <GsapCardDemo />
        <MotionScrollDemo />
        <MotionSwipeDemo />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
            <HeadText headText="Scroll Trigger" className="mb-4"/>
        <ScrollTriggerDemo />
        </div>
        <div>
            <HeadText headText="Framer Scroll" className="mb-4"/>
        <FramerScrollDemo />
        </div>
        <div>
            <HeadText headText="Scroll Timeline" className="mb-4"/>
        <ScrollTimelineDemo />
        </div>
      </div>
    </div>
  );
};

export default Demos;

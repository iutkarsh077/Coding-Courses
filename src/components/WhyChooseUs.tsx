"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const codingSchoolContent = [
    {
      title: 'Unlock Your Potential: A Personalized Coding Journey',
      description:
        'Embark on a coding journey tailored to your unique needs and goals. Our personalized instruction adapts to your learning style, empowering you to reach new heights in programming proficiency. At our coding school, your aspirations meet our dedicated support, paving the way for mastery.',
    },
    {
      title: 'Real-Time Feedback & Collaboration',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, mimicking the real-time collaboration of software development projects. This approach enhances your understanding and mastery of coding concepts and problem-solving techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum stays ahead of the curve, integrating the latest industry trends and technologies to ensure you’re equipped with the most relevant coding skills. Say goodbye to outdated materials and embrace an education that evolves with the rapidly changing tech landscape.',
    },
    {
      title: 'Endless Learning Opportunities',
      description:
        'With access to our vast resource library and diverse course offerings, you’ll always find new avenues for exploration. Our platform provides continuous opportunities for skill development, ensuring your coding abilities are continually expanding.',
    },
    {
      title: 'Expert-Led Workshops',
      description:
        'Participate in hands-on workshops led by industry experts, where you’ll dive deep into advanced coding topics and gain practical insights from professionals. These workshops supplement your learning journey and prepare you for real-world coding challenges.',
    },
    {
      title: 'Community Support & Networking',
      description:
        'Join a vibrant community of fellow coding enthusiasts and professionals, where you can exchange ideas, collaborate on projects, and build valuable connections. Our supportive network fosters a culture of growth and collaboration, enhancing your coding experience.',
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={codingSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
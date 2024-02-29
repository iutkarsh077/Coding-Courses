"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
const UpcomingWebinars = () => {

    const featuredWebinars = [
        {
          title: 'Understanding Code Theory',
          description:
            'Dive into the intricate world of code theory, exploring the foundational concepts that underpin modern software development. From algorithms to data structures, this webinar delves deep into the theoretical framework of coding, equipping participants with essential knowledge to enhance their coding prowess.',
          isFeatured: true,
        },
        {
          title: 'The Art of Coding',
          description:
            'Uncover the artistry behind coding as experienced developers and programmers share insights into their creative process. Learn how to craft elegant solutions, optimize efficiency, and express complex ideas through clean, concise code. This webinar is a masterclass in the creative and strategic aspects of coding.',
          slug: 'the-art-of-coding',
          isFeatured: true,
        },
        {
          title: 'Mastering Your IDE',
          description:
            'Elevate your coding workflow by mastering your Integrated Development Environment (IDE). Explore advanced features, shortcuts, and customization options to streamline your development process and boost productivity. From debugging to version control, this webinar empowers participants to harness the full potential of their preferred IDE.',
          slug: 'mastering-your-ide',
          isFeatured: true,
        },
        {
          title: 'Code Production Essentials',
          description:
            'Embark on your journey into code production with this comprehensive overview. From project setup to deployment strategies, explore the essential tools, techniques, and best practices for efficient code development. Whether you are a novice coder or a seasoned developer, this webinar provides invaluable insights to optimize your workflow and deliver high-quality code.',
          slug: 'code-production-essentials',
          isFeatured: true,
        },
        // Added two more webinars
        {
          title: 'Live Coding Techniques',
          description:
            'Enhance your coding skills in real-time with expert tips and strategies for live coding. Discover effective approaches for problem-solving, code optimization, and debugging under pressure. Whether you are preparing for technical interviews or live coding competitions, this webinar equips you with the tools and confidence to excel in dynamic coding environments.',
          slug: 'live-coding-techniques',
          isFeatured: true,
        },
        {
          title: 'Digital Code Marketing',
          description:
            'Navigate the digital landscape of code promotion with this insightful webinar. Learn proven strategies for building your online presence, attracting collaborators, and showcasing your coding projects effectively. From social media marketing to community engagement, discover how to leverage digital platforms to elevate your coding brand and connect with a global audience.',
          slug: 'digital-code-marketing',
          isFeatured: true,
        },
      ];
    
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Development Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-gray-300 hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;

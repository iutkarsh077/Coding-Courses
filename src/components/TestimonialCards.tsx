"use client";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function TestimonialCodeCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
    <h2 className="text-3xl font-bold text-center mb-8 z-10"> The Symphony of Code, Each Line a Note</h2>
    <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl hover:cursor-pointer">
        <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
  />
        </div>
    </div>
</div>
  );
}

const testimonials = [
    {
        quote:
          "It was the best of times, it was the worst of times, it was the age of efficient algorithms, it was the age of spaghetti code, it was the epoch of innovation, it was the epoch of skepticism towards new frameworks, it was the season of Agile, it was the season of Legacy Systems, it was the spring of Continuous Integration, it was the winter of Manual Testing.",
        name: "Charles Dickens",
        title: "A Repository of Two Codes",
      },
      {
        quote:
          "To loop, or not to loop, that is the question: Whether 'tis better in the code to suffer The bugs and errors of unhandled exceptions, Or to take up Arms against a Sea of spaghetti code, And by refactoring end them: to fix, to deploy.",
        name: "William Shakespeare",
        title: "Codebase",
      },
      {
        quote: "All that we code or seem is but a program within a program.",
        name: "Edgar Allan Poe",
        title: "A Program Within a Program",
      },
      {
        quote:
          "It is a truth universally acknowledged, that a single developer in possession of a good framework, must be in want of a codebase.",
        name: "Jane Austen",
        title: "API and Prejudice",
      },
      {
        quote:
          "Call me Developer. Some years ago—never mind how long precisely—having little or no experience in my IDE, and nothing particular to interest me in legacy code, I thought I would code about a little and see the digital part of the world.",
        name: "Herman Melville",
        title: "Version Control",
      }
];



export default TestimonialCodeCards;
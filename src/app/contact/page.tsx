"use client";
import { Meteors } from "@/components/ui/meteors";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { use, useState } from "react";

function Page() {
    const words = [
        {
          text: "For",
        },
        {
          text: "Any Queries",
        },
        {
          text: "Contact Us",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = () => {};
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-10 pt-28 relative">
      <Meteors number={20} />
      {/* all page details ka div */}

      <div className="max-w-3xl mx-auto z-20 relative">
        {/* <h1 className="text-center mt-10 mb-5">Contact us</h1> */}
        <TypewriterEffectSmooth words={words} />
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 mt-4 flex flex-col   "
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 m-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;

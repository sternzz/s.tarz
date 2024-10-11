import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="mt-12 h-full">
      <div className="mt-12 text-center">
        <h3 className="text-2xl">About</h3>
        <h3 className="text-xl">Working on it...</h3>
        <Link
          href="/"
          className="mt-12 block px-8 py-4 bg-white/5 w-max mx-auto border border-white/10 rounded-xl "
        >
          Return Home
        </Link>
      </div>
    </section>
  );
};

export default About;

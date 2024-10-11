import React from "react";

const Skills = () => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl text-sky-600 ">My skills</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" bg-neutral-900 mt-6 rounded-xl border border-white/5 overflow-hidden ">
          <div className="p-4 bg-neutral-800">
            <p className="">Web Development</p>
          </div>

          <div className="mt-4 flex flex-col gap-2 px-4 pb-2">
            <p>HTML</p>
            <p>CSS</p>
            <p>React/Next.js</p>
            <p>API using Express.js</p>
            <p>Tailwind CSS</p>
            <p>Novice at Typescript</p>
          </div>
        </div>
        <div className=" bg-neutral-900 mt-6 rounded-xl h-40 border border-white/5 overflow-hidden ">

          <div className="p-4 bg-neutral-800">
            <p>Others</p>
          </div>

          <div className="mt-4 flex flex-col gap-2 px-4 pb-2">
            <p>Started learning C Language</p>
            <p>Basic UI Designing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

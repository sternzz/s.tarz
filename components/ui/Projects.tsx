import React from "react";
import FProject from "../cards/FProject";
import Link from "next/link";
import Image from "next/image";

const projectsData = [
  {
    label: "Quiz App",
    path: "https://github.com/sternzz/quizzio",
  },
  {
    label: "Chrome Homepage Extension",
    path: "https://github.com/sternzz/chrome-launcher-extension",
  },
  {
    label: "Sharp Image compressor",
    path: "https://github.com/sternzz/simple-image-compressor",
  },
];

const Projects = () => {
  return (
    <section className="mt-12">
      <div className="">
        <h2 className="text-2xl text-sky-600 ">Featured Projects</h2>
      </div>
      <div className="mt-8">
        <p>Kinda hard to deploy each of my projects</p>
        <p>Each of these links points to its respective GitHub repo.</p>
      </div>

      <div className="mt-12 text-center flex flex-col gap-4">
        {projectsData?.map((project) => (
          <FProject data={project} key={project?.path} />
        ))}
      </div>

      <Link href="/projects" className="flex gap-2 items-center mt-8 opacity-60 ">
          <Image
            src="/assets/images/icons/icon-arr-diag.svg"
            alt="profile-picture"
            width={20}
            height={20}
            className="object-cover"
          />
          <p>More Projects</p>
        </Link>

    </section>
  );
};

export default Projects;

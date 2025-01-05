import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className="mt-12 h-full">
      <div className="mt-12 text-center">
        <h3 className="text-2xl">Blog</h3>
        <h3 className="text-xl">Tarun is still thinking what to put here 🤔</h3>
        <small>Check back later</small>
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

export default Blog;


// <section className="mt-12 h-full">
    //   <div className="mb-8">
    //   <h1 className="text-4xl">Posts</h1>
    //   </div>
    //   <div className="flex gap-2 justify-between h-24 ">
    //     <div className="aspect-square bg-red-500/50 ">1</div>
    //     <div className="">
    //       <h1 className="text-xl ">What got me into being a web developer</h1>
    //       <p>12 November 2024</p>
    //       </div>
    //       <Link href={''} className="w-12 h-12 grid place-content-center">
    //       <Image
    //         src="/assets/images/icons/icon-arr-diag.svg"
    //         alt="profile-picture"
    //         width={20}
    //         height={20}
    //         className="object-cover group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-linear"
    //       />
    //       </Link>
    //   </div>
    // </section>
    //
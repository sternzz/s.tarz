import Image from "next/image";
import Link from "next/link";
import React from "react";

const socials = [
  {
    label: "instagram",
    path: "https://instagram.com/tarz.me",
    iconPath: "/assets/images/icons/icon-instagram.svg",
  },
  {
    label: "github",
    path: "https://github.com/sternzz",
    iconPath: "/assets/images/icons/icon-github.svg",
  },
  {
    label: "mail",
    path: "mailto:tarunsagar98@gmail.com",
    iconPath: "/assets/images/icons/icon-mail.svg",
  },
];

const Hero = () => {
  return (
    <>
      <section className="mt-12">
        <h1 className="text-5xl ">I&apos;m Tarun</h1>
        <p className="text-xl opacity-50 mt-2">
          Student and Hobbyist Web Designer
        </p>
      </section>

      <section className="flex justify-start mt-12">
        <div className="">
          <Image
            src="/assets/images/profile/profile.png"
            alt="profile-picture"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2 justify-center ml-6 lg:ml-12">
          {socials?.map((social) => {
            return (
              <Link
                key={social?.path}
                href={social?.path}
                target="_blank"
                className="flex gap-4 bg-transparent hover:bg-white/5 px-4 py-2 rounded-lg"
              >
                <Image
                  src={social?.iconPath}
                  alt={social?.label}
                  width={20}
                  height={20}
                  className=" opacity-50"
                />
                <p className="capitalize opacity-90">{social?.label}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-12">
        <h1 className="text-lg">
          Hi I&apos;m Tarun, A student pursuing BCA. <br /> I&apos;m also a self taught
          web developer who loves to build <br /> websites for fun.
        </h1>
        <Link href="/about" className="flex gap-2 items-center mt-4 opacity-60 ">
          <Image
            src="/assets/images/icons/icon-arr-diag.svg"
            alt="profile-picture"
            width={20}
            height={20}
            className="object-cover"
          />
          <p>More about me</p>
        </Link>
      </section>

    </>
  );
};

export default Hero;

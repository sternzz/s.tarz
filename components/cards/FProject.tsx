import Image from "next/image";
import Link from "next/link";
import React from "react";

const FProject = ({ data }: { data: { label: string; path: string } }) => {
  return (
    <Link
      href={data?.path}
      target="_blank"
      className="flex gap-2 underline underline-offset-4 decoration-transparent hover:decoration-white/50  transition-all duration-300 ease-linear w-max "
    >
      <p className="text-lg">{data?.label}</p>
      <Image
        src="/assets/images/icons/icon-arr-diag.svg"
        alt="profile-picture"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default FProject;

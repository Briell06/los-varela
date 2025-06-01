"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLink = ({
  endpoint,
  children,
}: {
  endpoint: string;
  children: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={endpoint}>
      <button className="relative w-full rounded-4xl p-[3px]">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-slate-700 dark:to-slate-800" />
        <div
          className={`${pathname === endpoint ? "!bg-transparent !text-blue-950 dark:!text-white" : ""} group relative rounded-[6px] bg-white px-8 py-2 text-xl font-bold text-blue-600 transition duration-200 hover:bg-transparent hover:text-white dark:bg-black dark:text-white`}
        >
          {children}
        </div>
      </button>
    </Link>
  );
};
export default FooterLink;

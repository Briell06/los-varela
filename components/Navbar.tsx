/* The code you provided is a TypeScript React component called `Navbar`. Here is a breakdown of what
each import and component is doing: */
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 mx-4 mt-3">
      <nav>
        <div
          className={
            "container mx-auto flex items-center justify-between rounded-3xl bg-white px-3 py-3 text-gray-800 shadow-md shadow-gray-200 ring-gray-100 transition-all duration-300 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-950 dark:text-white dark:shadow-black"
          }
        >
          <Link href="/">
            <Image
              src={"/Logo.jpg"}
              alt={"logo"}
              width={70}
              height={70}
              className="rounded-full object-contain"
            />
          </Link>
          <div>
            <SearchBar />
          </div>
          <div>
            <ColorModeButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

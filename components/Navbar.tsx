/* The code you provided is a TypeScript React component called `Navbar`. Here is a breakdown of what
each import and component is doing: */
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import Link from "next/link";
import ColorModeButton from "./ColorModeButton";
import ShoppingCartButton from "./ShoppingCardButton";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 mx-4 mt-3">
      <nav>
        <div
          className={
            "container mx-auto flex items-center justify-between rounded-3xl bg-white px-3 py-3 text-gray-800 shadow-md shadow-gray-200 ring-gray-100 md:justify-around dark:bg-gray-900 dark:text-white dark:shadow-lg dark:shadow-black"
          }
        >
          <Link className="flex items-center justify-center gap-4" href="/">
            <Image
              src={"/logo.jpg"}
              alt={"logo"}
              width={70}
              height={70}
              className="rounded-full object-contain"
            />
            <p className="text-2xl font-bold max-md:hidden">Los Varela</p>
          </Link>
          <div>
            <SearchBar />
          </div>
          <div className="flex items-center gap-2 lg:gap-5 xl:gap-10">
            <ShoppingCartButton />
            <ColorModeButton />
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

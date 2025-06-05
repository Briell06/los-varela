"use client";

import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import Link from "next/link";

const error = () => {
  return (
    <main className="my-20 grid place-content-center">
      <h1 className="px-5 text-center text-4xl font-bold">
        Ha ocurrido un error. <br /> Revise su conexión e intente de nuevo
      </h1>
      <Link className="mx-auto my-5 flex w-fit gap-2" href={"/"}>
        <Button
          variant={"secondary"}
          className="cursor-pointer text-xl font-bold"
        >
          <RefreshCcw />
          Reintentar
        </Button>
      </Link>
    </main>
  );
};

export default error;

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const GoBackLink = () => {
  return (
    <div className="mx-4 mt-3">
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft /> Volver a la tienda
        </Button>
      </Link>
    </div>
  );
};

export default GoBackLink;

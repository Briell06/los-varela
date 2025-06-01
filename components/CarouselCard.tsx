"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CarouselItem } from "./ui/carousel";

const CarouselCard = ({ category }: { category: string }) => {
  const router = useRouter();
  const { push } = router;
  const handleClick = () => {
    push(`/?category=${category}`);
  };

  return (
    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
      <Card className="h-11/12 w-full" onClick={handleClick}>
        <CardHeader>
          <Image
            src="/placeholder.png"
            height={80}
            width={80}
            alt="imagen de la categoría"
            className="mx-auto rounded-full"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-center text-lg font-semibold">
            {category}
          </CardTitle>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default CarouselCard;

import { Loader } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { CarouselItem } from "./ui/carousel";
import { Skeleton } from "./ui/skeleton";

const CategorySkeleton = () => {
  return (
    <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4">
      <Skeleton>
        <Card className="h-11/12 w-full">
          <CardHeader>
            <Skeleton className="mx-auto h-20 w-20 rounded-full" />
          </CardHeader>
          <CardContent>
            <Skeleton>
              <CardTitle className="text-center text-lg font-semibold">
                <Loader className="animate-spin" />
              </CardTitle>
            </Skeleton>
          </CardContent>
        </Card>
      </Skeleton>
    </CarouselItem>
  );
};

export default CategorySkeleton;

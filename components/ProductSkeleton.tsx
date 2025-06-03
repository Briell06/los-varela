import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  return (
    <Skeleton>
      <Card>
        <CardHeader className="lg:h-50 xl:h-45">
          <CardTitle className="text-3xl">
            <Skeleton className="h-8 w-3/4" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-6 w-5/6" />
            <Skeleton className="mt-2 h-6 w-5/6" />
            <Skeleton className="mt-2 h-6 w-4/5" />
          </CardDescription>
        </CardHeader>
        <CardContent className="relative my-auto">
          <Skeleton className="h-94 w-full rounded-lg md:h-90 lg:h-65" />
          <span className="absolute top-0 text-2xl font-bold">
            <Skeleton className="h-8 w-1/3" />
          </span>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-0.5">
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
              <Skeleton className="h-10 w-10 rounded-full" />
            </div>
            <Skeleton className="h-10 w-24" />
          </div>
        </CardFooter>
      </Card>
    </Skeleton>
  );
};

export default ProductSkeleton;

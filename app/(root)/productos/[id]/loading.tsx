import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <Card className="md:flex-row md:items-center md:justify-center md:py-10 lg:mx-5 lg:px-5 lg:py-5 xl:px-15 xl:py-20">
      <CardHeader className="flex-1">
        <Skeleton className="mx-auto h-70 w-70" />
      </CardHeader>
      <CardContent className="flex-1">
        <Skeleton className="h-8 w-10/12" />
        <Skeleton className="my-5 h-8 w-5/12 rounded-3xl" />
        <CardDescription>
          <Skeleton className="h-25" />
        </CardDescription>
        <div className="flex w-full flex-col items-center justify-between gap-5">
          <div className="mt-5 flex gap-0.5">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

export default loading;

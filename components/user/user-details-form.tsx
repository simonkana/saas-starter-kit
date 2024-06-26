import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import Image from "next/image";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

export const UserDetailsForm = async () => {
  const session = await auth();

  return (
    <Card className="w-full max-w-[400px] shadow-md">
      <CardHeader>
        <h2
          className={cn("text-center font-semibold text-2xl", font.className)}
        >
          My profile
        </h2>
      </CardHeader>
      <CardContent className="flex items-center justify-center gap-4">
        <Image
          src={
            session?.user?.image ??
            `https://ui-avatars.com/api/?name=${session?.user?.name}&background=14B8A6&color=fff`
          }
          width="56"
          height="56"
          alt="Profile picture"
          className="rounded-full"
        />

        <div>
          <h3
            className={cn(
              "font-semibold text-xl text-teal-500",
              font.className
            )}
          >
            {session?.user?.name}
          </h3>
          <p>
            Email:{" "}
            <span className="text-slate-500">{session?.user?.email}</span>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <form
          className="mx-auto"
          action={async () => {
            "use server";

            await signOut({
              redirectTo: "/auth/login",
            });
          }}
        >
          <Button type="submit" className="w-full rounded-full">
            Sign out
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

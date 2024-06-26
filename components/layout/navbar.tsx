import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { auth, signOut } from "@/auth";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

export const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link href="/" className={cn("flex items-center", font.className)}>
            🚀 SaaS Starter Kit
            <span className="sr-only">SaaS Starter Kit</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {session?.user ? (
              <form
                className="mx-auto"
                action={async () => {
                  "use server";

                  await signOut({
                    redirectTo: "/auth/login",
                  });
                }}
              >
                <Button type="submit" size="sm">
                  Sign out
                </Button>
              </form>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/auth/register">Register</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

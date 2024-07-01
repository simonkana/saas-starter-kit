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
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between h-14 items-center text-gray-200">
          <Link href="/" className={cn("flex items-center", font.className)}>
            🚀 SaaS Starter Kit
            <span className="sr-only">SaaS Starter Kit</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              href="#"
              className="font-medium flex items-center transition-colors hover:underline"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center transition-colors hover:underline"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center transition-colors hover:underline"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium flex items-center transition-colors hover:underline"
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
                <Button type="submit">Sign out</Button>
              </form>
            ) : (
              <div className="flex gap-2 items-center">
                <Button variant="ghost" asChild>
                  <Link href="/auth/register">Register</Link>
                </Button>
                <Button asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

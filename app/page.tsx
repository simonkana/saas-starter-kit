import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500 to-teal-900">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-3xl sm:text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🚀 SaaS Starter Kit
        </h1>
        <p className="text-white max-w-xs sm:max-w-4xl sm:text-lg">
          A simple template for rapid MVP development
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg" className="rounded-full">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
      <span className="text-gray-200 text-sm absolute bottom-4 right-4">
        v1.0 prerelease (2024.06)
      </span>
    </main>
  );
}

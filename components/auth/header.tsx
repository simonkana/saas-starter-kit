import { Manrope } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Manrope({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Link href="/">
        <h1 className={cn("text-3xl font-semibold", font.className)}>
          🚀 SaaS Starter Kit
        </h1>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

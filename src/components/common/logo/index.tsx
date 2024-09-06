import { Aperture } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <div className="hidden md:block">
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary flex items-center space-x-2"
      >
        <Aperture width={30} height={30} />
        <span>ping</span>
      </Link>
    </div>
  );
}

export default Logo;

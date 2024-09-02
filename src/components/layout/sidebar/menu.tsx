import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuProps {
  pathname: string;
  items: { href: string; icon: React.ComponentType<any>; label: string }[];
}

export function Menu({ pathname, items = [] }: MenuProps) {
  return (
    <div className="px-3 py-2">
      <div className="space-y-1">
        {items?.map(({ href, icon: Icon, label }, index) => (
          <Button
            variant={pathname === href ? "secondary" : "ghost"}
            className={cn("w-full justify-start")}
            asChild
            key={index}
          >
            <Link href={href}>
              <Icon
                className={cn(
                  "h-4 w-4 mr-2 text-muted-foreground",
                  pathname === href && "text-primary",
                )}
              />

              {label}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

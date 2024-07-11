import cn from "classnames";
import { Navigation } from "@/components/navigation";

export default function NavigationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("h-full")}>
      <Navigation />
      <main className="flex flex-col min-h-full pt-[50px]">{children}</main>
    </div>
  );
}

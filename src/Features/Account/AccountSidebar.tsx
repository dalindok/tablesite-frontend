// features/account/AccountSidebar.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { sideBarMenu } from "@/utils/route-utils";
import SidebarItem from "@/components/AccountCom/SidebarItem";
import { useAuth } from "@/hooks/useAuth";

export default function AccountSidebar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const activeIdFromParam = Number(searchParams.get("id"));
  const activeId =
    activeIdFromParam || (pathname.startsWith("/account") ? 1 : 0);

  return (
    <div className="">
      {sideBarMenu.map((item) => (
        // <div className="flex gap-4">
        <SidebarItem
          key={item.id}
          id={item.id}
          name={item.name}
          icon={item.icon}
          iconActive={item.iconActive}
          // href={item.href}
          isActive={activeId === item.id}
          // handleSignOut={handleLogout}
        />
        // </div>
      ))}
    </div>
  );
}

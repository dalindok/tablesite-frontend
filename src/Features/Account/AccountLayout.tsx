// app/account/layout.tsx
"use client";
import AccountSidebar from "@/Features/Account/AccountSidebar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AccountDetail from "./AccountDetail";
import Reservations from "./reservations";
import History from "./history";

export default function AccountLayout() {
  const searchParam = useSearchParams();
  const getId = searchParam.get("id");
  return (
    <div className="flex h-full gap-22 py-20 px-16">
      {/* Sticky Sidebar */}
      <div className="sticky  hidden w-62 self-start lg:block">
        <AccountSidebar />
      </div>
      {/* Main Content */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        <Suspense>
          {(getId === "1" || getId === null) && (
            <>
              <AccountDetail />
            </>
          )}
        </Suspense>

        <Suspense>{getId === "2" && <Reservations />}</Suspense>
        <Suspense>{getId === "3" && <History />}</Suspense>
      </div>
    </div>
  );
}

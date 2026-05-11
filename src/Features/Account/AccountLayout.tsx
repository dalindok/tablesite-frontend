// app/account/layout.tsx
"use client";
import AccountSidebar from "@/Features/Account/AccountSidebar";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import AccountDetail from "./AccountDetail";
import Reservations from "./reservations";
import History from "./history";
import { useRequest } from "ahooks";
import Booking_API from "@/app/api/Booking";

export default function AccountLayout() {
  const searchParam = useSearchParams();
  const getId = searchParam.get("id");
  const { data: bookingsList, refresh: refreshList } = useRequest(
    () => {
      const booking_type =
        getId === "2" ? "upcoming" : getId === "3" ? "history" : undefined;

      return Booking_API.listBookings({ booking_type });
    },
    {
      ready: getId === "2" || getId === "3", // only runs on booking tabs
      refreshDeps: [getId], // re-calls when tab changes
    },
  );
  // AccountLayout.tsx
  const { run: cancelBooking } = useRequest(
    (id: string, reason: string) => Booking_API.cancelBooking(id, reason),
    {
      manual: true,
      onSuccess: () => refreshList(),
    },
  );
  return (
    <div className="flex h-full gap-22 py-28 px-16 ">
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

        <Suspense>
          {getId === "2" && (
            <Reservations
              listReservation={bookingsList ?? []}
              cancelBooking={cancelBooking}
            />
          )}
        </Suspense>
        <Suspense>
          {getId === "3" && <History historyList={bookingsList ?? []} />}
        </Suspense>
      </div>
    </div>
  );
}

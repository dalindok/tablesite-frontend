import { list } from "postcss";

interface SubRoute {
  subName: string;
}

// interface NavigationItem {
//   name: string;
//   route: string;
//   subRoutes: SubRoute[];
// }

export const API_ROUTE = {
  root: "/",

  //auth
  sentSMS: "auth/send-sms",
  verifySMS: "auth/verify-sms",
  // check: "/api/v1/auth/multi-identifier/get-profiles",

  //profile
  profile: "auth/profile",
  editProfile: "auth/update-user",

  // restaurants
  listRestaurants: "restaurants",
};
export const sideBarMenu = [
  {
    id: 1,
    name: "Account Details",
    icon: "/assets/account.svg",
    iconActive: "/assets/account-active.svg",
  },
  {
    id: 2,
    name: "Upcoming Reservations",
    icon: "/assets/date.svg",
    iconActive: "/assets/date-active.svg",
  },
  {
    id: 3,
    name: "History",
    icon: "/assets/history.svg",
    iconActive: "/assets/history-active.svg",
    // href: "/order",
  },
  {
    id: 4,
    name: "Logout",
    icon: "/assets/logout.svg",
    iconActive: "/assets/logout-active.svg",
  },
];

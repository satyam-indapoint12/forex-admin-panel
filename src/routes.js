import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Language from "@material-ui/icons/Language";
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";
import withDirection from "react-with-direction";

const dynamicDirection = "rtl";

const WrappedDashboardComponent = withDirection(DashboardPage, {
  useDeepCompareEffect: true,
  direction: dynamicDirection,
});

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: WrappedDashboardComponent,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
];

export default dashboardRoutes;

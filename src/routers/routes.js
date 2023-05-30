import Chart from "../pages/chart";
import Home from "../pages/home";
import Info from "../pages/info";
import Search from "../pages/search";

const publicRoutes = [
    {
        path: '/',
        element: Home
    },
    {
        path: '/search',
        element: Search
    },
    {
        path: '/chart',
        element: Chart
    },
    {
        path: '/about-me',
        element: Info
    },
];

export { publicRoutes };
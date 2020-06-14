import Home from "./components/Home";

export default [
    {
        path: "/",
        component: Home,
        exact: true,
    },
    {
        path: "/:page",
        component: Home,
        exact: true,
    },
];

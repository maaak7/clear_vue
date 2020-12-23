import home from "@/router/modules/home";

const modules = [
    {
        path: "/",
        redirect: "/home",
        component: () => import("@/core/layout/Layout"),
        children: [
            ...home,
        ]
    }
];

export default modules;

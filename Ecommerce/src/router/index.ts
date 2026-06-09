import { createRouter, createWebHistory } from "vue-router";

const ConsumerLayout = () => import("../layouts/ConsumerLayout.vue");
const AdminLayout = () => import("../layouts/AdminLayout.vue");

const HomeView = () => import("../views/HomeView.vue");
const ProductDetailsView = () => import("../views/ProductDetailsView.vue");
const CheckoutView = () => import("../views/CheckoutView.vue");

const AdminProductsView = () => import("../views/admin/AdminProductsView.vue");
const SalesReportView = () => import("../views/admin/SalesReportView.vue");

const routes = [
  {
    path: "/",
    component: ConsumerLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "product/:id",
        name: "product-details",
        component: ProductDetailsView,
      },
      {
        path: "checkout",
        name: "checkout",
        component: CheckoutView,
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },

  {
    path: "/admin",
    component: AdminLayout,
    meta: {
      requiresAdmin: true,
    },
    children: [
      {
        path: "products",
        name: "admin-products",
        component: AdminProductsView,
      },
      {
        path: "reports",
        name: "admin-reports",
        component: SalesReportView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const isAuthenticated = true;

// Troque para ADMIN para testar a área administrativa
const user = {
  role: "CUSTOMER",
};

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/");
    return;
  }

  if (to.meta.requiresAdmin && user.role !== "ADMIN") {
    next("/");
    return;
  }

  next();
});

export default router;

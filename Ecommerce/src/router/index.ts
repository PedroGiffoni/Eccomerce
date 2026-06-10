import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const ConsumerLayout = () => import("../layouts/ConsumerLayout.vue");
const AdminLayout = () => import("../layouts/AdminLayout.vue");

const HomeView = () => import("../views/HomeView.vue");
const ProductDetailsView = () => import("../views/ProductDetailsView.vue");
const CheckoutView = () => import("../views/CheckoutView.vue");

const LoginView = () => import("../views/LoginView.vue");
const RegisterView = () => import("../views/RegisterView.vue");

const AdminProductsView = () => import("../views/admin/AdminProductsView.vue");
const SalesReportView = () => import("../views/admin/SalesReportView.vue");

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },

  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },

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

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next("/login");
    return;
  }

  if (to.meta.requiresAdmin && !authStore.isAdmin) {
    next("/");
    return;
  }

  next();
});

export default router;

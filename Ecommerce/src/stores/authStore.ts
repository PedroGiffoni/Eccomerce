import { defineStore } from "pinia";

type Role = "ADMIN" | "CUSTOMER";

interface AuthUser {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: Role;
}

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

const savedUser = localStorage.getItem("auth_user");
const savedToken = localStorage.getItem("auth_token");

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: savedUser ? (JSON.parse(savedUser) as AuthUser) : null,
    token: savedToken,
    loading: false,
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === "ADMIN",
  },

  actions: {
    async login(payload: LoginPayload) {
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (payload.email === "admin@email.com" && payload.password === "123456") {
        this.user = {
          id: 1,
          name: "Administrador",
          email: payload.email,
          role: "ADMIN",
        };

        this.token = "fake-admin-token";

        localStorage.setItem("auth_user", JSON.stringify(this.user));
        localStorage.setItem("auth_token", this.token);

        this.loading = false;
        return true;
      }

      if (payload.email === "cliente@email.com" && payload.password === "123456") {
        this.user = {
          id: 2,
          name: "Cliente",
          email: payload.email,
          role: "CUSTOMER",
        };

        this.token = "fake-customer-token";

        localStorage.setItem("auth_user", JSON.stringify(this.user));
        localStorage.setItem("auth_token", this.token);

        this.loading = false;
        return true;
      }

      const registeredUsers = JSON.parse(
        localStorage.getItem("registered_users") || "[]",
      ) as AuthUser[];

      const registeredUser = registeredUsers.find(
        (user) => user.email === payload.email && user.password === payload.password,
      );

      if (registeredUser) {
        this.user = {
          id: registeredUser.id,
          name: registeredUser.name,
          email: registeredUser.email,
          role: registeredUser.role,
        };

        this.token = "fake-registered-user-token";

        localStorage.setItem("auth_user", JSON.stringify(this.user));
        localStorage.setItem("auth_token", this.token);

        this.loading = false;
        return true;
      }

      this.loading = false;
      return false;
    },

    async register(payload: RegisterPayload) {
      this.loading = true;

      await new Promise((resolve) => setTimeout(resolve, 1000));

      const registeredUsers = JSON.parse(
        localStorage.getItem("registered_users") || "[]",
      ) as AuthUser[];

      const emailAlreadyExists = registeredUsers.some((user) => user.email === payload.email);

      if (emailAlreadyExists) {
        this.loading = false;
        return false;
      }

      const newUser: AuthUser = {
        id: Date.now(),
        name: payload.name,
        email: payload.email,
        password: payload.password,
        role: "CUSTOMER",
      };

      registeredUsers.push(newUser);

      localStorage.setItem("registered_users", JSON.stringify(registeredUsers));

      this.user = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      };

      this.token = "fake-register-token";

      localStorage.setItem("auth_user", JSON.stringify(this.user));
      localStorage.setItem("auth_token", this.token);

      this.loading = false;
      return true;
    },

    logout() {
      this.user = null;
      this.token = null;

      localStorage.removeItem("auth_user");
      localStorage.removeItem("auth_token");
    },
  },
});

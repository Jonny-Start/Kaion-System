const KaionSystemRoutes = [];
KaionSystemRoutes.push(
  {
    path: "login",
    nameElement: "Login",
    private: false,
  },
  {
    path: "resetPassword",
    nameElement: "ResetPassword",
    private: false,
  },
  {
    path: "/home",
    nameElement: "Home",
    private: true,
  }
);

export { KaionSystemRoutes };

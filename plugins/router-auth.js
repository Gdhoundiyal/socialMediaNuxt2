
export default function ({ app, redirect }) {

  const router = app.router;

  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

   
    if (process.client) {

      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken)

      if (requiresAuth && !accessToken) {
        console.log("requireAuth   ", requiresAuth);
         redirect("/");
      }

      if (accessToken && to.path === "/") {
        console.log("home block ", accessToken);
         redirect("/home/feed");
      }

      if (!accessToken && to.path.startsWith("/home")) {
         redirect("/");
      }

      if (accessToken && to.path == '/signup') {
         redirect("/home/feed");
      }
      next();
    } else {
        console.log("server")
      next();
    }
  });
}

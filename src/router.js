import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Search from "./views/Search.vue";
import MovieDetails from "./views/MovieDetails.vue";
import Login from "./views/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/search",
      name: "search",
      component: Search
    },
    {
      path: "/movie/:id",
      name: "MovieDetails",
      component: MovieDetails
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});

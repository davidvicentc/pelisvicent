<template>
  <div class="home">
    <Spinner v-show="isLoading"></Spinner>
    <div class="row" v-show="!isLoading">
      <Movie v-for="movie in movies" :movie="movie" :key="movie.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from "@/components/Movie.vue";
import Spinner from "@/components/Spinner";
import movieServices from "../services/movie";

export default {
  name: "home",
  components: {
    Movie,
    Spinner
  },

  data() {
    return {
      movies: [],
      query: "",
      isLoading: false
    };
  },

  created() {
    this.getMovies();
  },

  methods: {
    getMovies() {
      this.isLoading = true;
      movieServices.popular().then(res => {
        this.movies = res.results;
        this.isLoading = false;
      });
    }
  }
};
</script>

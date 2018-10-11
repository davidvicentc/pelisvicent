<template>
  <div class="home">
    <Header />
    <div class="movieGrid">
      <Movie v-for="(movie, key) in movies" :movie="movie" :key="key"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from "@/components/Movie.vue";
import Header from "@/components/Header.vue";
import movieServices from "../services/movie";

export default {
  name: "home",
  components: {
    Movie,
    Header
  },

  data() {
    return {
      movies: [],
      query: ""
    };
  },

  created() {
    this.getMovies();
  },

  methods: {
    getMovies() {
      movieServices.popular().then(res => (this.movies = res.results));
    }
  }
};
</script>

<style>
.movieGrid {
  display: grid;
  grid-gap: 15px;
  padding: 15px;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
}
</style>

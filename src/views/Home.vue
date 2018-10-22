<template>
  <div class="home">
    <h3 class="text-center" v-show="isLoading">Cargando...</h3>
    <div class="movieGrid" v-show="!isLoading">
      <Movie v-for="movie in movies" :movie="movie" :key="movie.id"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from "@/components/Movie.vue";
import movieServices from "../services/movie";

export default {
  name: "home",
  components: {
    Movie
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
    async getMovies() {
      this.isLoading = true;
      
      const { results } = await movieServices.popular()
      
      this.movies = results;
      this.isLoading = false;
    }
  }
};
</script>

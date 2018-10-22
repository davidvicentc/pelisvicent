<template>
    <div>
      <h3 v-show="isLoading" class="text-center">Cargando...</h3>
      <div v-show="!isLoading">
        <input type="text" v-model="query">
        <div class="movieGrid">
          <Movie v-for="movie in movies" :movie="movie" :key="movie.id"/>
        </div>
      </div>
    </div>
</template>

<script>
import movieServices from "@/services/movie";
import Movie from "@/components/Movie";

export default {
  name: "Search",
  components: { Movie },

  data() {
    return {
      query: "",
      movies: [],
      isLoading: false
    };
  },

  methods: {
    debounce(func, wait, immediate) {
      self.timeout = self.timeout || null;
      return function() {
        var context = this,
          args = arguments;
        clearTimeout(self.timeout);
        self.timeout = setTimeout(function() {
          self.timeout = null;
          if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !self.timeout) func.apply(context, args);
      };
    },

    searchMovie(query) {
      if (this.query === "") {
        return;
      }
      this.isLoading = true;
      movieServices.search(query).then(res => {
        this.movies = res.results;
        this.isLoading = false;
      });
    }
  },
  watch: {
    query: function() {
      this.debounce(() => {
        this.searchMovie(this.query);
      }, 500)();
    }
  }
};
</script>

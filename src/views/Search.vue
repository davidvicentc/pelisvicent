<template>
    <div>
      <input type="text" v-model="query">
      <Spinner v-show="isLoading"></Spinner>
      <div v-show="!isLoading">
        <div class="row">
          <Movie v-for="movie in movies" :movie="movie" :key="movie.id"/>
        </div>
      </div>
    </div>
</template>

<script>
import movieServices from "@/services/movie";
import Movie from "@/components/Movie";
import Spinner from "@/components/Spinner";

export default {
  name: "Search",
  components: { Movie, Spinner },

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

<template>
    <div>
      <Header />
      <input type="text" v-model="query">
      <div class="movieGrid">
        <Movie v-for="(movie, key) in movies" :movie="movie" :key="key"/>
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import movieServices from "@/services/movie";
import Movie from "@/components/Movie";

export default {
  name: "Search",
  components: { Header, Movie },

  data() {
    return {
      query: "",
      movies: []
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
      movieServices.search(query).then(res => (this.movies = res.results));
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

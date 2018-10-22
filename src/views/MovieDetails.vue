<template>
    <div>
      <h3 class="text-center" v-show="isLoading">Cargando...</h3>
      <section v-show="!isLoading">
        <div>
          <img width="100px" :src="this.imgUrl" v-if="this.image" alt="">
          <div class="no-image icon-no-image" v-else>Imagen no disponible</div>
        </div>
        <h4>{{ this.movie.title }}</h4>
        <p>{{this.movie.overview}}</p>
        <a :href="videoYoutube">Ver trailer</a>
      </section>
    </div>
</template>

<script>
import movieServices from "@/services/movie";
export default {
  name: "MovieDetails",
  data() {
    return {
      movie: {},
      image: true,
      isLoading: false
    };
  },

  created() {
    const id = this.$route.params.id;
    this.isLoading = true;
    movieServices.getById(id).then(data => {
      this.movie = data;
      this.isLoading = false;
    });
  },

  computed: {
    imgUrl() {
      if (this.movie.poster_path === null) {
        // eslint-disable-next-line
        this.image = false;
        return;
      }
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`;
    },

    videoYoutube() {
      const { key } = this.movie.videos.results[0];
      if (key === null) {
        return;
      }
      return `https://www.youtube.com/watch?v=${key}`;
    }
  }
};
</script>

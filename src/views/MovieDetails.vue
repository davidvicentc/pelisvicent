<template>
    <div>
      <Spinner v-show="isLoading"></Spinner>
      <section v-show="!isLoading">
        <div>
          <img width="100px" :src="this.imgUrl" v-if="this.image" alt="">
          <div class="no-image icon-no-image" v-else>Imagen no disponible</div>
        </div>
        <h4>{{ this.movie.title }}</h4>
        <p>{{this.movie.overview}}</p>
      </section>
    </div>
</template>

<script>
import movieServices from "@/services/movie";
import Spinner from "@/components/Spinner";
export default {
  name: "MovieDetails",
  components: { Spinner },
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
    }
  }
};
</script>

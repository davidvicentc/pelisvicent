<template>
    <a @click="gotToMovie(movie.id)" class="Movie">
      <div >
        <img :src="this.imgUrl" v-if="this.image" alt="">
        <div class="no-image icon-no-image" v-else>Imagen no disponible</div>
      </div>
        <h3 class="movie-title">{{movie.title}}</h3>
    </a>
</template>

<script>
export default {
  props: {
    movie: Object
  },

  data() {
    return {
      image: true
    };
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
  },

  methods: {
    gotToMovie(id) {
      this.$router.push({ name: "MovieDetails", params: { id } });
    }
  }
};
</script>

<style>
.Movie {
  border: 1px solid rgba(0, 0, 0, 0.178);
  border-radius: 3px;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.212);
  width: 100%;
  cursor: pointer;
}

.movie-title {
  text-align: center;
}

.Movie img {
  border-radius: 3px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  width: 100%;
}

.no-image {
  width: 100%;
  height: 300px;
  line-height: 300px;
  font-size: 150px;
}

.icon-no-image {
  display: inline-block;
  text-align: center;
  background-color: #dbdbdb;
  color: #b5b5b5;
  box-sizing: border-box;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
}
</style>

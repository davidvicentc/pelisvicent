<template>
  <div class="col-md-3">
    <div class="card text-center" style="margin-bottom: 10px;" @click="gotToMovie(movie.id)">
      <img class="card-img-top" :src="this.imgUrl" v-if="this.image" alt="Card image cap">
      <div class="no-image icon-no-image" v-else>Imagen no disponible</div>
      <div class="card-body">
        <h5 class="card-title">{{movie.title}}</h5>
      </div>
    </div>
  </div>
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
.card {
  cursor: pointer;
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

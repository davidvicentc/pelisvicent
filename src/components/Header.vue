<template>
    <div>
        <nav class="navPV">
            <router-link :to="{ name: 'home' }">PelisVicent</router-link>
            <div class="navPV-right">
                <router-link :to="{ name: 'search' }" class="navSearch">Search</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navPV {
  background-color: rgb(255, 164, 44);
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
}

.navPV a {
  text-decoration: none;
  color: white;
  font-size: 17px;
}

.navPV-right {
  text-align: right;
  margin-left: auto;
}
</style>

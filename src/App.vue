<template>
  <div id="app">
    <Header />
    <router-view class="container"/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "@/components/Footer";
export default {
  components: { Header, Footer }
};
</script>


<style>
.text-center {
  text-align: center;
}

html {
  min-height: 100%;
  position: relative;
}
body {
  margin: 0;
  margin-bottom: 280px;
}
</style>

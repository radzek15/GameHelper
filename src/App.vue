<template>
  <div class="app-container">
    <ParticlesBackground />
    <NavBar />
    <router-view />
    <PageFooter />
  </div>
</template>

<script>
import ParticlesBackground from "@/components/Background/ParticlesBackground.vue";
import NavBar from "@/components/Bars/NavBar.vue";
import PageFooter from "@/components/Bars/PageFooter.vue";

export default {
  name: 'App',
  components: {
    NavBar,
    ParticlesBackground,
    PageFooter
  }
}
</script>

<style>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>

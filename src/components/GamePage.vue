<script>
import GameName from "@/components/Games/GameName.vue";
import GameDescription from "@/components/Games/GameDescription.vue";
import GameplayMovie from "@/components/Games/GameplayMovie.vue";
import GameTabs from "@/components/Games/GameTabs.vue";

export default {
  name: "GamePage",
  components: {GameTabs, GameplayMovie, GameDescription, GameName}
}
</script>

<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-4 mx-auto my-4">
        <GameName />
        <GameDescription />
      </div>

      <div class="col-lg-8 mx-auto my-4 video-container">
        <GameplayMovie class="p-3"/>
        <GameplayMovie class="p-3"/>
      </div>
    </div>

    <div class="row">
      <GameTabs />
    </div>
  </div>
</template>


<style scoped>
.video-container {
  position: relative;
  overflow: hidden;
}


.video-container iframe {
  top: 0;
  right: 0;
}
</style>
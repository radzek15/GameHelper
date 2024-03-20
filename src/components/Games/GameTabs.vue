<script>
export default {
  data() {
    return {
      tabs: ['Info tab 1', 'Info tab 2', 'Info tab 3', 'Info tab 4'],
      activeTab: 0
    };
  },
  methods: {
    setActiveTab(index) {
      this.activeTab = index;
    }
  }
};
</script>

<template>
  <nav class="nav nav-pills">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      class="nav-link"
      :class="{ active: activeTab === index }"
      @click="setActiveTab(index)"
    >
      <span>{{ tab }}</span>
    </button>
  </nav>
</template>

<style scoped>

</style>
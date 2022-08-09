<template>
  <TopBar></TopBar>
  <router-view />

  <BottomBar></BottomBar>
</template>
<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar'
import BottomBar from '@/components/BottomBar'

export default {
  components: {
    TopBar,
    BottomBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
</style>

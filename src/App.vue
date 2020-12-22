<template>
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
*{ box-sizing: border-box; }
body{
  margin: 0;
  padding: 0;
  outline: 0;
  background-color: var(--main-background);
}
h1,h2,h3,h4,h5,p{
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: arial, sans-serif;
}
</style>

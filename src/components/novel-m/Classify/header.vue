<template>
  <section class="novel-mobile-classify_heade">
    <van-nav-bar
    title="分类"
    left-text="返回"
    right-text="全部作品"
    left-arrow
    @click-left="goBack()"></van-nav-bar>
  </section>
</template>

<script>
export default {
  methods: {
    goBack(){
      window.history.go(-1)
    }
  }
}
</script>

<style lang="scss">

</style>
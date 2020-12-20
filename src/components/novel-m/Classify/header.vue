<template>
  <section class="novel-mobile-classify_heade">
    <van-nav-bar
    title="分类"
    left-text="返回"
    right-text="全部作品"
    left-arrow
    @click-left="goBack"
    @click-right="$router.push({path: '/category'})"></van-nav-bar>
  </section>
</template>

<script>
import {goBack} from '@scripts/tools'

export default {
  methods: {
    goBack
  }
}
</script>

<style lang="scss">

</style>
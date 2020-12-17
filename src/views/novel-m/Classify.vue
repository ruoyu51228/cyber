<template>
  <section class="classify">
    <novel-mobile-classify-classify />
    <novel-mobile-classify-list />
  </section>
</template>

<script>
import novelMobileClassifyClassify from '@components/novel-m/Classify/header'
import novelMobileClassifyList from '@components/novel-m/Classify/list'

export default {
  components: {
    novelMobileClassifyClassify, novelMobileClassifyList
  }
}
</script>

<style lang="scss">

</style>
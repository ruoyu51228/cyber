<template>
  <section class="category">
    <novel-mobile-category-header />
    <novel-mobile-category-list />
  </section>
</template>

<script>
import novelMobileCategoryHeader from '@components/novel-m/Category/header'
import novelMobileCategoryList from '@components/novel-m/Category/list'

export default {
  components: {
    novelMobileCategoryHeader, novelMobileCategoryList
  }
}
</script>

<style lang="scss">

</style>
<template>
  <section class="home">
    <novel-mobile-header />
    <novel-mobile-classify />
    <novel-mobile-list />
  </section>
</template>

<script>
// @ is an alias to /src
import novelMobileHeader from '@components/novel-m/Home/header'
import novelMobileClassify from '@components/novel-m/Home/classify'
import novelMobileList from '@components/novel-m/Home/list'

export default {
  name: 'Home',
  components: {
    novelMobileHeader, novelMobileClassify, novelMobileList
  },
}
</script>

<template>
  <section class="home">
    <novel-mobile-header />
    <novel-mobile-classify />
  </section>
</template>

<script>
// @ is an alias to /src
import novelMobileHeader from '@components/novel-m/header'
import novelMobileClassify from '@components/novel-m/classify'

export default {
  name: 'Home',
  components: {
    novelMobileHeader, novelMobileClassify
  }
}
</script>

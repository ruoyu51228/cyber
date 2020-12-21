<template>
  <section class="search">
    <novel-mobile-search-header @showResult="getStatus" />
    <novel-mobile-search-history :status="state.status" />
  </section>
</template>

<script>
import {reactive } from 'vue'
import novelMobileSearchHeader from '@components/novel-m/Search/header'
import novelMobileSearchHistory from '@components/novel-m/Search/history'

export default {
  components: {
    novelMobileSearchHeader, novelMobileSearchHistory
  },

  setup(){
    const state = reactive({
      status: false,
    })
    return {
      state
    }
  },

  methods: {
    getStatus(status){
      return this.state.status = status
    }
  }
}
</script>

<style lang="scss">

</style>
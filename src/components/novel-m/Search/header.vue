<template>
  <section class="novel-monile-search_header">
    <!-- TODO: search -->
    <van-search 
    v-model="state.search"
    show-action 
    placeholder="请输入书名或作者名"
    @update:model-value="SearchUpdate">
      <template #left>
        <van-icon 
        @click.stop="goBack"
        name="arrow-left" 
        style="margin-right: 8px;"></van-icon>
      </template>
      <template #action>
        <div @click.stop="onSearch">搜索</div>
      </template>
    </van-search>
  </section>
</template>

<script>
import { reactive } from 'vue'
import { goBack } from '@scripts/tools'

export default {
  setup() {
    const state = reactive({
      search: '',
      showResult: false,
    });

    return {
      state
    }
  },

  methods: {
    goBack,
    onSearch(){
      if(!this.state.search) return this.$toast.fail('搜索不能为空！')
      this.$router.push({path: `/search/result/${this.state.search}`})
      this.state.search = '';
    },
    SearchUpdate(){
      this.$emit('showResult', Boolean(this.state.search))
    }
  }
}
</script>

<style lang="scss">
.van-search::before{
  content: '';
  display: inline-block;
}
</style>
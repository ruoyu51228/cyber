<template>
  <section class="novel-mobile-search_history">
    <!-- TODO: search history -->
    <van-row class="novel-mobile-search_history-title" justify="space-between" align="bottom">
      <van-col>搜索历史</van-col>
      <van-col><i class="iconfont">&#xe736;</i>清空</van-col>
    </van-row>
    <div class="novel-mobile-search_history-list">
      <van-tag plain round size="large" @click.stop="$router.push({path: '/category'})"
      v-for="(item, key) in state.history" :key="key">{{item}}</van-tag>
    </div>

    <!-- TODO: search result -->
    <div class="novel-mobile-search_history-result" v-show="status">
      <ul>
        <li 
        v-for="(item, key) in state.searchList" :key="key"
        @click.stop="$router.push(`/search/result/${item}`)">{{item}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    status: Boolean
  },
  setup() {
    const state = reactive({
      history: ['剑神','极品'],
      searchList: [
        '书名1',
        '书名2',
        '书名3',
        '书名4',
        '书名5',
        '书名6',
        '书名7',
        '书名8',
        '书名9'
      ]
    })

    return {
      state
    }
  }
}
</script>

<style lang="scss">
.novel-mobile-search_history{
  position: relative;
  width: 100%;
  font-size: 14px;
  background-color: #fff;

  &-title{
    padding: 16px 8px 6px;
    background-color: rgba(0,0,0,.03);
  }
  &-list{
    padding: 16px 8px;

    & > *{ margin-right: 8px;}
  }

  &-result{
    position: absolute;
    left: 0; right: 0;
    top: 0;
    padding: 0 8px 8px;
    height: calc(100vh - 54px);
    line-height: 30px;
    background-color: #fff;
  }
}
</style>
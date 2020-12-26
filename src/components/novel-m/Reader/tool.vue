<template>
  <section class="novel-mobile-reader_tool">
    <van-nav-bar
    left-arrow
    title="诡秘之主"></van-nav-bar>

    <div class="add-book" v-if="!chapter.add">加入书架</div>

    <van-tabbar>
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="bars">目录</van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
import { toRefs, reactive } from 'vue'

export default {
  props: {
    chapter: Object
  },
  setup() {
    let state = reactive({
      chapter: null
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
.novel-mobile-reader_tool /deep/ .van-nav-bar{
  background-color: #333;

  &__title{ color: #fff; }
  .van-icon{ color: #fff; }
}
.add-book{
  position: fixed;
  right: 0;
  top: 60px;
  padding: 8px 16px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  color: #fff;
  background-color: #333;
}
.van-tabbar{
  z-index: 99;
  background-color: #333;

  &-item{
    color: #999;
    &--active{
      color: #999;
      background-color: #333;
    }
  }
}
</style>
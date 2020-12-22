<template>
  <section class="novel-mobile-reader_main">
    <van-nav-bar :left-text="chapter.title"></van-nav-bar>

    <div class="content">
      <h2>{{chapter.title}}</h2>
      <span v-html="chapter.content"></span>
    </div>

    <van-row class="footer" justify="space-between">
      <van-col>09:44</van-col>
      <van-col>1/8</van-col>
    </van-row>
  </section>
</template>

<script>
export default {
  props: {
    chapter: Object
  }
}
</script>

<style lang="scss">
.van-nav-bar{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 46px;
  z-index: 99;
  background-color: #fff;

  &__text{
    font-size: 14px;
    color: #999;
  }
  &::after{
    border-bottom-width: 0 !important;
  }
}

.novel-mobile-reader_main{
  position: relative;
  padding-top: 46px;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 32px);
  background-color: #fff;

  .content{
    padding: 0 16px;
    height: 100%;
    columns: calc(100vw - 32px) 1;
    column-gap: 16px;

    h2{
      font-weight: 100;
      font-size: 32px;
    }
    p{
      margin: 16px 0;
      line-height: 30px;
      font-weight: 100;
      font-size: 18px;
    }
  }

  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    color: #999;
    z-index: 99;
    background-color: #fff;
  }
}
</style>
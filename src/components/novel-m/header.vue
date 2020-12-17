<template>
  <section class="novel-m-header">
    <!-- TODO: 频道 -->
    <van-row class="novel-header-channel" align="center">
      <van-col span="8">Lionet</van-col>
      <van-col span="8" 
        class="novel-header-channel_choice" 
        align="center">
        <div class="novel-header-channel_active">男频</div>
        <div class="">女频</div>
      </van-col>
      <van-col span="8" class="novel-header-channel_icon">
        <i class="iconfont">&#xe607;</i>
        <i class="iconfont">&#xe60a;</i>
      </van-col>
    </van-row>
    
    <!-- TODO: 轮播图 -->
    <van-swipe class="novel-header-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <!-- TODO: search bar -->
    <van-search class="novel-header-search" 
    v-model="value" 
    placeholder="请输入搜索关键词"
    input-align="center" />
  </section>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    let value = ref("")
    return { value }
  }
}
</script>

<style lang="scss">
.novel-m-header{
  padding: 0 16px;
  
  .novel-header-channel{
    width: 100%;
    height: 48px;
    line-height: 48px;

    .novel-header-channel_choice{
      height: 30px;
      line-height: 28px;
      border-radius: 10px;
      border: 1px solid var(--main-color);
      overflow: hidden;

      & > *{
        display: inline-block;
        width: 50%;
        text-align: center;
      }

      .novel-header-channel_active{
        color: #fff;
        background-color: var(--main-color);
      }
    }

    .novel-header-channel_icon{
      text-align: right;
      color: var(--main-color);

      & > *{ 
        margin-left: 16px;
        font-weight: 600;
        font-size: 20px;
      }
    }
  }
  .novel-header-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .novel-header-search{
    margin: 8px 0;
    padding: 0 !important;
    text-align: center;
    background-color: #fff !important;

    .van-search__content{
      background-color: #fff;
    }
  }
}
</style>
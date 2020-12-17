<template>
  <section class="novel-m-main">
    <!-- TODO: 分类 -->
    <div class="novel-main-classify">
      <van-row justify="space-around" align="center" style="height: 80px;">
        <van-col>
          <div class="type novel-main-icon"
          :style="{'background-image': `url('${require('@assets/img/main-spirit.png')}')`}"></div>
          <br />
          分类
        </van-col>
        <van-col>
          <div class="rank novel-main-icon"
          :style="{'background-image': `url('${require('@assets/img/main-spirit.png')}')`}"></div>
          <br />
          排行榜
        </van-col>
        <van-col>
          <div class="finish novel-main-icon"
          :style="{'background-image': `url('${require('@assets/img/main-spirit.png')}')`}"></div>
          <br />
          完本
        </van-col>
      </van-row>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.novel-main-classify{
  padding: 0 16px;
  width: 100%;
  height: 80px;
  text-align: center;
  font-size: 14px;
  background-color: #fff;

  .novel-main-icon{
    display: inline-block;
    width: 32px;
    height: 32px;
    background-size: 96px auto;
    background-repeat: no-repeat;
  }
  .type{
    background-position: -66px -28px;
  }
  .finish{
    background-position: 0 -66px;
  }
}
</style>
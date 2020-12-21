<template>
  <section class="novel-mobile-detail-footer">
    <van-row justify="space-around">
      <van-button round size="small" >加入书架</van-button>
      <van-button round size="small" type="danger" >免费试读</van-button>
    </van-row>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.novel-mobile-detail-footer{
  position: fixed;
  bottom: 0; left: 0;
  z-index: 999;
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
}
.van-button{
  padding: 4px 16px;
}
.van-button--default{ border: 0;}
</style>
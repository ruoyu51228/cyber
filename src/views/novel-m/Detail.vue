<template>
  <section class="detail">
    <novel-mobile-book-detail :bookInfo="bookInfo" />
    <novel-mobile-book-more :bookInfo="bookInfo" />
    <novel-mobile-book-footer :bookInfo="bookInfo" @addBook="addBook" />
  </section>
</template>

<script>
import novelMobileBookDetail from '@components/novel-m/Detail/header'
import novelMobileBookMore from '@components/novel-m/Detail/more'
import novelMobileBookFooter from '@components/novel-m/Detail/footer'

export default {
  components: {
    novelMobileBookDetail, novelMobileBookMore, novelMobileBookFooter
  },

  data(){
    return {
      bookInfo: {
        add: false,
        author: "爱潜水的乌贼",
        bid: "f8d6a44fbdedc18226031e9729bb4243",
        tag: ['玄幻','异世大陆'],
        chapter: {
          num: 1416, 
          created_at: "2020-08-03"
        },
        created_at: "2020-09-18 00:22",
        describe: "<p>蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：<br>枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊人，封印物……光明依旧照耀，神秘从未远离，这是一段“愚者”的传说。</p>",
        image: "http://r.m.biquge5200.cc/cover/aHR0cDovL3FpZGlhbi5xcGljLmNuL3FkYmltZy8zNDk1NzMvMTAxMDg2ODI2NC8xODA=",
        newUpdated: "2020-08-03",
        status: "1", // 0是连载  1是完本
        title: "诡秘之主",
        wordNumber: "4403760",
        updated_at: "2020-12-21 14:11",
      }
    }
  },

  methods: {
    addBook(flag) {
      this.bookInfo.add = flag;
    }
  }
}
</script>

<style lang="scss">

</style>
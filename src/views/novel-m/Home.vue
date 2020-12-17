<template>
  <section class="home">
    <novel-mobile-header />
    <novel-mobile-classify />
    <novel-mobile-list :bookList="bookList" />
  </section>
</template>

<script>
// @ is an alias to /src
import novelMobileHeader from '@components/novel-m/Home/header'
import novelMobileClassify from '@components/novel-m/Home/classify'
import novelMobileList from '@components/novel-m/list'

export default {
  name: 'Home',
  components: {
    novelMobileHeader, novelMobileClassify, novelMobileList
  },
  data(){
    return {
      bookList: [
        {
          author: '爱潜水的乌贼',
          countWord: 4465200,
          cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          tags: ['玄幻','异世大陆'],
          title: '诡秘之主',
          updateAt: '2020-11-15T16:00:00.000Z',
          introduce: `吕纯良很受伤。
                    穿越仙武世界，天生唬人的气质拿捏得死死的。
                    天赋无双，惊骇世人。
                    打出一掌，便能从天而降。
                    突破境界，更有天地异象。
                    江湖传言，他骨骼惊奇，是那万中无一的武学奇才。
                    再平凡的武功落入他的手中，都能化腐朽为神奇，一力降十会。
                    鹰爪功手撕鬼子、斗兽功斗气化马、童子功罡气护体……
                    然而就在这种妖孽的设定之下。
                    谁又能想到，他只是给自己的武功加了一点小小的特效而已。
                    我，吕纯良，武当山上小师叔，生性纯良。
                    十年修行无人问，一朝下山天下知。`
        },
        {
          author: '爱潜水的乌贼',
          countWord: 4465200,
          cover: 'https://qidian.qpic.cn/qdbimg/349573/1010868264/300',
          tags: ['玄幻','异世大陆'],
          title: '诡秘之主',
          updateAt: '2020-11-15T16:00:00.000Z',
          introduce: `吕纯良很受伤。
                    穿越仙武世界，天生唬人的气质拿捏得死死的。
                    天赋无双，惊骇世人。
                    打出一掌，便能从天而降。
                    突破境界，更有天地异象。
                    江湖传言，他骨骼惊奇，是那万中无一的武学奇才。
                    再平凡的武功落入他的手中，都能化腐朽为神奇，一力降十会。
                    鹰爪功手撕鬼子、斗兽功斗气化马、童子功罡气护体……
                    然而就在这种妖孽的设定之下。
                    谁又能想到，他只是给自己的武功加了一点小小的特效而已。
                    我，吕纯良，武当山上小师叔，生性纯良。
                    十年修行无人问，一朝下山天下知。`
        }
      ]
    }
  }
}
</script>

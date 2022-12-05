<template>
  <div class="home">
    <div class="block1">
      <img :src="banner">

      <div class="block-white flex-colum-center">
        <div>
          <div class="company">苏州<span>盟丰</span>精密机械制造厂</div>
          <div class="text2">专业<span class="red">模具</span>、<span class="red">注塑</span>制造</div>
        </div>
      </div>
    </div>
    <div class="block2">
      <div class="title">公司简介</div>
      <div class="content-wrapper">
        <div class="img-wrapper">
          <BannerCarousel></BannerCarousel>
        </div>
        <div class="desc">
          <p>2013年苏州盟丰精密机械厂（模具部）成立于渭塘镇通成路189号3车间</p>

          <p>2017年，因发展需要搬迁至北桥未来路6号</p>

          <p>本公司承接各种注塑模具的开发，注塑件成型及组装等工艺</p>
        </div>
      </div>
    </div>
    <div class="block3">
      <div class="title">联系我们</div>
      <div
        class="contact"
        id="contactUs"
      >
        <div>
          <div class="company">苏州盟丰精密机械厂</div>
          <p>联系人：曹先生</p>
          <p>邮箱：mengfeng_cao@126.com</p>
        </div>
      </div>
    </div>
    <div class="block4"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerCarousel from '@/components/BannerCarousel.vue'
import banner1 from '@/assets/banner1.jpg'
import banner2 from '@/assets/banner2.jpg'
import banner4 from '@/assets/banner4.png'
import banner5 from '@/assets/banner5.jpg'
export default {
  name: 'HomeView',
  components: {
    BannerCarousel
  },
  data () {
    return {
      banner: banner5,
      banner1: banner1,
      banner2: banner2,
      banner4: banner4
    }
  },
  created () {
    document.title = '苏州盟丰'
  }
}
</script>

<style scoped lang="scss">
.home {
  img {
    width: 100%;
    height: auto;
  }
  .flex-colum-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .flex-row-space-between {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  .block1 {
    position: relative;
  }
  .block-white {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 50%;
    background-color: rgb(255, 255, 255, 0.6);
    padding: 10px;
    .company {
      font-weight: bold;
      font-size: 14px;
    }
    .text2 {
      font-weight: bold;
      font-size: 26px;
      letter-spacing: 2px;
    }
    .text3 {
      font-size: 12px;
    }
    .red {
      color: #d8081b;
    }
  }
  .block2 {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    .content-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
    }
    .title {
      font-weight: bold;
      color: rgba(0, 0, 0, 0.833);
      font-size: 28px;
      line-height: 88px;
    }
    .img-wrapper {
      position: relative;
      width: 400px;
    }
    .desc {
      padding: 20px;
    }
  }
  .block3 {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
    color: #333;
    .title {
      font-weight: bold;
      color: rgba(0, 0, 0, 0.833);
      font-size: 28px;
      line-height: 88px;
    }
    .contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1;
      font-size: 20px;
      .company {
        font-size: 26px;
      }
    }
  }
  .block4 {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 600px) {
  .home {
    .content-wrapper {
      display: flex;
      flex-direction: column !important;
    }
  }
}
</style>

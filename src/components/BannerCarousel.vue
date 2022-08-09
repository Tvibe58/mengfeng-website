
<template>
  <div class="bannerCarousel">
    <el-carousel
      :interval="4000"
      type="card"
      height="200px"
    >
      <el-carousel-item
        v-for="(item, index) in imgList"
        :key="index"
      >
        <div
          class="block-img"
          :style="{
          'background-image':`url(${item.imgUrl})`
        }"
        >
          <div class="desc">{{item.text}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import banner1 from '@/assets/banner1.jpg'
import banner6 from '@/assets/banner6.png'
import banner3 from '@/assets/banner3.jpg'
export default {
  name: 'BannerCarousel',
  data () {
    return {
      imgList: [
        {
          imgUrl: banner1,
          text: '办公室'
        },
        {
          imgUrl: banner3,
          text: '工作间'
        },
        {
          imgUrl: banner6,
          text: '工厂大楼'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bannerCarousel {
  img {
    width: 100%;
    height: auto;
  }
  .block-img {
    width: 100%;
    height: 100%;
    background-position: top;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    .desc {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #fff;
      text-align: center;
      background-color: rgba($color: #000000, $alpha: 0.5);
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>

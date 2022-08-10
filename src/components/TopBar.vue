<template>
  <div class="topbar">
    <div class="logo-block">
      <div class="logo-text">盟丰机械</div>
      <div class="logo-text-en">MENGFENG MACH</div>
    </div>
    <div>
      <a href="#contactUs">
        <div class="btn-contact">联系我们</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped lang="scss">
.topbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  .logo-block {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  .logo-text {
    font-weight: bold;
    color: #000;
    font-size: 28px;
  }
  .logo-text-en {
    font-size: 7px;
    font-weight: bold;
    color: #494949;
    /* color: #fff; */
  }
  .btn-contact {
    border-radius: 12px 1px 12px 1px;
    padding: 10px 28px;
    color: #fff;
    background: linear-gradient(136deg, rgba(50, 124, 255, 0.98) 3%, #7039ff);
  }
}
</style>

<template>
  <div class="hx-button2" :class="[btype,size].join(' ')" @click="(e) => onClick(e)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'hx-button2',
  props: {
    btype: {
      type: String,
      default: 'success'
    },
    size: {
      type: String,
      default: 'small'
    },
    placeholder: {
      type: String,
      default: '按钮2'
    },
    onClick: {
      type: Function,
      default: () => {
        alert('点击hx按钮2')
      }
    }
  }
}
</script>

<style scoped>
  .hx-button2 {
      display: inline-block;
      padding: 3px 6px;
      background: lightskyblue;
      color: #fff;
  }
  .success{
    background-color:lightskyblue;
  }
  .error{
    background-color:orangered;
  }
  .middle{
    padding: 5px 8px;
  }
  .big{
    padding: 8px 10px;
  }
</style>

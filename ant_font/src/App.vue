<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
fnResize()

window.onresize = function () {

fnResize()

}

function fnResize() {

var deviceWidth = document.documentElement.clientWidth || window.innerWidth

document.documentElement.style.fontSize = (deviceWidth / 80) + 'px'

}
export default {
  name:'app'
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
</style>

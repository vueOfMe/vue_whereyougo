<template>
  <div id="app">
    <!--
        1.标签<router-alive>的作用是显示对应路由的内容

          路由的每一次跳转都会重新渲染对应页面，对应mounted函数加载json数据，会多次加载，
          从而降低了页面性能，为此需要使用vue提供的keep-alive技术

          使用了标签<keep-alive>后，当第一次渲染路由对应页面后，会将页面及数据信息存入内存，
          当再次跳入该路由对应页面时，直接将内存中的页面数据信息拿出并做展示即可，无需再次渲染页面或加载json数据。

        2.当使用了缓存技术（<keep-alive>）时，页面不会重新渲染，直接从内存中读取，
          但是有些数据却需要重新获取，不能使用原有内存中的数据，这时就可以使用vue实例的activated这个周期函数，进行相关操作，重新加载相关数据
    -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>

</style>
<!--
路由就是根据不同的URL返回给用户不同的内容
-->

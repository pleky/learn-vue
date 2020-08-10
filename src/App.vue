<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
   </div>
</template>

<script>
// import showBlog from './components/ShowBlog'
import appHeader from './components/appHeader'
export default {
    components: {
        'app-header': appHeader,
    }

}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
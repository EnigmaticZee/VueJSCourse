<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-server-list></app-server-list>
      <app-server-details></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import ServerList from './ServerList.vue'
  import ServerDetails from './ServerDetails.vue'

  export default {
      components: {
          'app-server-list': ServerList,
          'app-server-details': ServerDetails
      }
  }
//  import Header from './Header.vue'
//
//  export default {
//      components: {
//          'app-header': Header
//      }
//  }
</script>

<style>

</style>


<!--<template>-->
  <!--<app-servers></app-servers>-->
<!--</template>-->

<!--<script>-->

<!--</script>-->

<!--<style >-->
<!--</style>-->

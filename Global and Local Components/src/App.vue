<template>
    <div class="container">
        <!-- Global Component -->
        <cmp-header></cmp-header>
        <hr>
        <!-- Local Component -->
        <ServerStatus></ServerStatus>
        <hr>
        <!-- Local Component -->
        <server-details></server-details>
        <hr>
        <!-- Global Component -->
        <cmp-footer></cmp-footer>
    </div>
</template>

<script>
    import ServerStatus from './Components/ServerStatus.vue'
    import ServerDetails from './Components/ServerDetails.vue'
    export default {
        components: {
            ServerStatus, //ES6
            'server-details': ServerDetails
        }
    }
</script>

<style>

</style>

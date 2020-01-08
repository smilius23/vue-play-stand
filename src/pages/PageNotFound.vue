<template>
    <div class="con-full">
        <h1>Not found</h1>
        <p>Oooops, we couldn`t find what you looking for. Why dont`t you
            <router-link :to="{name: 'Home'}">
                go home insted?
            </router-link>
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>

</style>

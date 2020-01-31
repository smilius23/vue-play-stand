<template>
	<div id="app">
		<h1> HI, HEJ, HEI, HALLO, LABAS, ПРИВЕТ, CZEŚĆ, САЛОМ </h1>
		<AppForm />
	</div>
</template>

<script>
import AppForm from '@/components/AppForm'

export default {
	name: 'Home',
	components: {
		AppForm
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

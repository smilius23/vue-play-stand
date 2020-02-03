<template>
	<div
		id="appForm"
		class="app-form"
	>
		<h2>{{ header }}</h2>
		<form
			autocomplete="off"
			@submit.prevent="submitForm"
		>
			<div class="form-group">
				<label for="name">Name:</label>
				<input
					id="name"
					v-model="form.name"
					:class="{error: shouldAppendErrorClass($v.form.name), valid: shouldAppendValidClass($v.form.name)}"
					type="text"
					@blur="$v.form.name.$touch()"
				>
				<p
					v-if="$v.form.name.$error"
					class="error-message"
				>
					Name is required!
				</p>
			</div>
			<div class="form-group">
				<label for="age">Age (10-20) </label>
				<input
					id="age"
					v-model.number="form.age"
					type="text"
					:class="{error: shouldAppendErrorClass($v.form.age), valid: shouldAppendValidClass($v.form.age)}"
					@blur="$v.form.age.$touch()"
				>
				<div v-if="$v.form.age.$error">
					<p
						v-if="!$v.form.age.required"
						class="error-message"
					>
						Age is required!
					</p>
					<p
						v-else-if="!$v.form.age.integer"
						class="error-message"
					>
						Age should be number
					</p>
					<p
						v-else-if="!$v.form.age.between"
						class="error-message"
					>
						Age should be between 10 and 20
					</p>
				</div>
			</div>
			<div>
				<label for="email">Email </label>
				<input
					v-model="form.email"
					:class="{error: shouldAppendErrorClass($v.form.email), valid: shouldAppendValidClass($v.form.email)}"
					@blur="$v.form.email.$touch()"
				>
				<p
					v-if="!$v.form.email.email && $v.form.email.$error"
					class="error-message"
				>
					Invalid email address
				</p>
			</div>
			<div>
				<label for="food">Food </label>
				<input
					v-model="form.food"
					:class="{error: shouldAppendErrorClass($v.form.food), valid: shouldAppendValidClass($v.form.food)}"
					@blur="$v.form.food.$touch()"
				>
				<p
					v-if="!$v.form.food.pizzaOrBurger && $v.form.food.$error"
					class="error-message"
				>
					Invalid food.
				</p>
			</div>
			<button>
				Submit
			</button>
		</form>
	</div>
</template>

<script>
import { required, between, integer, email, helpers } from 'vuelidate/lib/validators'
const pizzaOrBurger =  value => value === 'pizza' || value === 'burger' || !helpers.req(value)
export default {
	name: "AppForm",
	data () {
		return {
			header: 'This the Mr. Form!',
			form: {
				name: null,
				age: null,
				email: null,
				food: null
			}
		}
	},
	validations: {
		form: {
			name: {
				required,
			},
			age: {
				required,
				integer,
				between: between(10, 20)
			},
			email: {
				email
			},
			food: {
				pizzaOrBurger
			}
		}
	},
	methods: {
		shouldAppendValidClass (field) {
			return !field.$invalid && field.$model && field.$dirty
		},
		shouldAppendErrorClass (field) {
			return field.$error
		},
		submitForm () {
			this.$v.form.$touch()
			if (!this.$v.form.$invalid) {
				console.log('🎭 ', this.form)
			} else {
				console.log('%c ⛔ %s ', 'font-size: 18px;', 'Forma yra nevalidi!', this.form)
			}
		}
	}
}
</script>

<style scoped>
	.app-form {
		margin-outside: 15%;
		text-align: left;
	}
	.error-message {
		color: red;
	}
	.error {
		border-width: 1px;
		border-color: red;
	}
	.valid {
		border-width: 1px;
		border-color: #42b983;
	}
</style>

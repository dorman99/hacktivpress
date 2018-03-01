<template>
  <section class="hero is-dark is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-white">Welcome</h3>
          <p class="subtitle has-text-white">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="../assets/fox.png">
            </figure>
            <form>
              <div v-if="daftar" class="field">
                <div class="control">
                  <input v-model="signup.name" class="input is-large" type="text" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input @input="checkemail" v-model="signup.email" class="input is-large" type="email" placeholder="Your Password">
                </div>
              </div>

              <div  class="field">
                <div class="control">
                  <input v-model="signup.password" class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                  <a @click.prevent="showdaftar" href="#">{{cek}}</a>
              </div>
              <button @click="log()" class="button is-block is-info is-large is-fullwidth">proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>
export default {
	name: 'login',
  data () {
    return {
			daftar: false,
			cek: 'signup',
      login: {
        email: '',
        password: ''
      },
      signup: {
				name: '',
        email: '',
        password: ''
			},
			form: {
				
			}
    }
  },
  methods: {
		showdaftar () {
			if (this.daftar === false){
				this.daftar = !this.daftar
				this.cek = 'login'
			} else {
				this.daftar = !this.daftar
				this.cek = 'signup'
			}
		},
		validateEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
      return re.test(String(email).toLowerCase())
    },
    log () {
      if (this.daftar) {
        alert('untuk daftar')
      } else {
				this.$http.post('/users', {
					name: self.signup.name,
					email: self.signup.email,
					password: self.password
				}).then(response => {

				}).catch(err => {
					console.log(err)
				})
      }
		},checkemail (e) {
      console.log(' ini checker', e.target.value)
      console.log(this.validateEmail(e.target.value))
      if (e.target.value.length === 0) {
        this.form.email = 'input'
        this.form.statusEmail = false
      } else if (!this.validateEmail(e.target.value)) {
        this.form.email = 'input is-danger'
        this.form.statusEmail = true
      } else {
        this.form.email = 'input is-success'
        this.form.statusEmail = false
      }
    }
  }
}
</script>

<style>

</style>

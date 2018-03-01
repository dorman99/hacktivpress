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
                  <input v-model="signup.name" class="input" type="text" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input @input="checkemail" v-model="signup.email" :class="form.email" type="email" placeholder="Your Password">
                </div>
              </div>

              <div  class="field">
                <div class="control">
                  <input v-model="signup.password" :class="form.password" type="password" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                  <a @click.prevent="showdaftar" href="#">{{cek}}</a>
              </div>
              <button @click.prevent="sg()" class="button is-block is-info is-large is-fullwidth">{{uhuy}}</button>
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
			cek: 'Signup',
			uhuy: 'Login',
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
        email: 'input',
        password: 'input',
        statusEmail: false,
        statusPassword: false
      }
    }
  },
  methods: {
    showdaftar () {
      if (this.daftar === false) {
        this.daftar = !this.daftar
				this.cek = 'login'
				this.uhuy = 'Sign Up'
      } else {
        this.daftar = !this.daftar
				this.cek = 'signup'
				this.uhuy = 'Login'
      }
    },
    validateEmail (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line no-useless-escape
      return re.test(String(email).toLowerCase())
    },
    log () {
      let self = this
      if (this.daftar) {
        // alert('untuk daftar')
        this.$http.post('/users', {
          name: self.signup.name,
          email: self.signup.email,
          password: self.signup.password
        }).then(response => {
          if (response.data.errmsg) {
            this.$swal('SignUp Fail', 'Email has been used :)', 'error')
            this.signup.name = ''
            this.signup.email = ''
            this.signup.password = ''
          } else {
            console.log('ini response , ', response)
            this.$swal('SignUp Complete', 'Welcome :)', 'success')
            this.signup.name = ''
            this.signup.email = ''
            this.signup.password = ''
          }
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.$http.post('/login', {
          email: this.signup.email,
          password: this.signup.password
        }).then(response => {
          console.log(response.data)
          if (response.data === 'invalid') {
            this.$swal('Fail to Logged in', 'username/password was invalid', 'error')
          } else {
						console.log(response.data)
						localStorage.setItem('token', response.data.token)
						// this.$store.dispatch('hidepostbutton')
            this.$router.push('/')
          }
        }).catch(err => { console.error(err) })
      }
    },
    checkemail (e) {
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
    },
    sg () {
      if (this.cek === 'signup') {
        if (!this.form.statusEmail) {
          this.log()
        } else {
          this.$swal('Login Failed', 'Email input Invalid', 'error')
        }
      } else {
        // alert('signup')
        if (!this.form.statusEmail) {
          this.log()
        } else {
          this.$swal('SignUp Failed', 'Email input Invalid', 'error')
        }
      }
    }
	},
	created () {
		this.$store.dispatch('hidepostbutton')
	}
}
</script>

<style>

</style>

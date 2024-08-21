<template>
  <div class="fullfill-wrapper">
    <div class="auth-block">
      <h3>Авторизация</h3>
      <form action="">
        <label for="login-input"> Логин или телефон </label>
        <div class="input-block">
          <div class="input-group">
            <img src="../assets/call.png" alt="call" />
            <input
              type="phone"
              id="login-input"
              v-maska:unmaskedValue.unmasked="'+7 ### ### ## ##'"
              v-model="username"
            />
          </div>
          <div class="input-group">
            <img src="../assets/lock.png" alt="lock" />
            <input
              :type="!isShow ? 'password' : 'text'"
              id="pass-input"
              placeholder="Пароль"
              v-model="password"
            />
            <img
              src="../assets/show.png"
              alt="eye"
              id="show-btn"
              @click="isShow = !isShow"
            />
          </div>
        </div>

        <div class="btn" @click="toLogin">
          <v-progress-circular
            v-if="loaders.login"
            :size="20"
            :width="2"
            indeterminate
          ></v-progress-circular>
          Войти
        </div>
      </form>
    </div>

    <v-snackbar
      v-if="respData.errorInfo"
      v-model="respData.isError"
      multi-line
      color="red"
      variant="outlined"
      :timeout='2000'
    >
      <h4 class="pb-2">{{respData.errorInfo.detail}}</h4>

      <p>{{respData.errorInfo.data['non_field_errors'][0]}}</p>
    </v-snackbar>

    <!-- {{respData.errorInfo}} -->
  </div>
</template>

<script>
import { vMaska } from "maska/vue";
import { createNamespacedHelpers } from "vuex";
import router from '../router'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers("login");

export default {
  directives: { maska: vMaska },

  data: () => ({
    username: "",
    unmaskedValue: "",
    password: "",

    isShow: false,
  }),

  mounted(){
    // this.SET_IS_AUTH(false)
    // console.log(this.loaders);
  },
  computed: {
    ...mapState([
      'loaders',
      'respData'
    ]),
 

  },

  methods: {
    ...mapActions([
      'authUser'
    ]),
    ...mapMutations([
      'SET_IS_AUTH'
    ]),
    async toLogin() {
      const params = {
        username: this.username.replace(/[ +]/gm, ''),
        password: this.password
      }
      await this.authUser(params)

      if ( this.respData.isAuth ){
        router.push('/')
      }
    },
  },
};
</script>

<style lang="sass" >
div.fullfill-wrapper
  height: 100vh
  box-sizing: border-box
  background: url('../assets/background_auth.jpeg') center center no-repeat 
  background-size: cover
  position: relative
  display: flex
  align-items: center
  justify-content: center

  div.auth-block
    padding: 10px 20px
    width: 100%
    max-width: 340px
    min-height: 200px
    border-radius: 5px
    background-color: #fff

    h3
      text-align: center
      border-radius: 5px
      font-family: Inter
      color: #fff
      padding: 20px 40px
      margin: -30px 15px 10px 15px
      background-color: #44A248

form
  margin-top: 30px

label
  color: #50B053
  margin-left: 25px

div.input-group
  display: inline-flex
  align-items: center
  width: 100%

input
  height: 40px
  width: auto
  padding: 0 10px
  flex-grow: 1
  background-color: none

input:focus-visible
  border: none
  outline: none
div.input-block div

  border-bottom: 1px solid #cccccc
  margin-bottom: 15px

#show-btn
  cursor: pointer

.btn
  display: flex
  justify-content: center
  align-items: center
  margin: 10px auto
  background-color: #44A248
  padding: 12px
  color: #fff
  width: 110px
  padding: 12px 16px 12px 16px
  gap: 8px
  border-radius: 4px
  opacity: 0px
  cursor: pointer
  transition: all .2s linear

.btn:hover, #show-btn:hover
  opacity: .9
</style>



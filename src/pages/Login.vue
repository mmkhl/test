<template>
  <div class="fullfill-wrapper">
    <div class="auth-block">
      <h3>Авторизация</h3>
      <form action="">
        <label for="login-input"> Логин или телефон </label>
        <div class="input-block">
          <div>
            <input type="text" id="login-input">
          </div>
          <div>
            <input :type="'password'" id="pass-input" placeholder="Пароль">
          </div>
        </div>
        
        <div class="btn" @click="123">
          Войти
        </div>
      </form>

    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="sass" >

div.fullfill-wrapper
  height: 100vh
  box-sizing: border-box

  background: url('../assets/background_auth.jpeg') center center no-repeat 
  
  background-blend-mode: multiply
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
      background-color:  #44A248

label
  color: #50B053
  margin-left: 30px 

  
    
input
  width: 100%
  height: 40px
  background-color: none

div.input-block div
  
  border-bottom: 1px solid #e3e3e3
  margin: 10px 0


    
.btn 
  display: flex
  justify-content: center

  margin: 10px auto
  background-color:  #44A248
  padding: 12px
  color: #fff
  width: 110px
  padding: 12px 16px 12px 16px
  gap: 8px
  border-radius: 4px
  opacity: 0px
  cursor: pointer
  transition: all .2s linear 

.btn:hover
  opacity: .9
  



</style>



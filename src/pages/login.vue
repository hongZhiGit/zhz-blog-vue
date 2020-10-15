<template>
  <div class="lay-box">
    <div class="login-box">
      <form ref="form">
        <div>系统登入</div>
        <v-text-field
          v-model="account"
          label="账号"
          required
          :error-messages="accountErrors"
          :error-count="2"
          @input="$v.account.$touch()"
          @blur="$v.account.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="密码"
          required
          :error-messages="passwordErrors"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-btn class="mr-4" @click="login">登入</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      account: '',
      password: ''
    };
  },
  validations: {
    account: {
      required,
      minLength: minLength(4)
    },
    password: {
      required
    }
  },

  computed: {
    accountErrors() {
      const errors = [];
      if (!this.$v.account.$dirty) return errors;
      !this.$v.account.maxLength && errors.push('account must be at most 4 characters long');
      !this.$v.account.required && errors.push('account is required.');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push('password is required.');
      return errors;
    }
  },
  methods: {
    login() {
      if (this.$v.$invalid) {

      }
      if (this.account === 'admin' && this.password === '111111') {
        console.log('login');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lay-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-size: 30px;
  background: #fffeee;
  .login-box {
    width: 500px;
    height: 400px;
    // background: #eeeeee;
  }
}
</style>
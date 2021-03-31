<template>
  <div>
    <div>
      <h1>新規登録画面</h1>
    </div>
    <form @submit.prevent="RegisterUser">
      <ul>
        <li>
          <label>ユーザ名</label>
          <input
            type="text"
            v-model="Username"
            placeholder="userName"
            class="text"
          />
        </li>
        <li>
          <label>メールアドレス</label>
          <input
            type="email"
            v-model="email"
            placeholder="E-mail"
            class="email"
          />
        </li>
        <li>
          <label>パスワード</label>
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="password"
          />
        </li>
      </ul>
    </form>
    <button class="register">新規登録</button><br />
  </div>
</template>

<script>
import firebase from '../plugins/firebase.js';
export default {
  data() {
    return {
      Username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    RegisterUser() {
      firebase.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          response.user.updateProfile({
            displayName: this.Username,
          });
          this.$route.push('/Home');
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
.text,
.email,
.password {
  border: 1px solid;
}
ul li {
  list-style: none;
}
.email {
  margin-right: 47px;
}
.password {
  margin-right: 18px;
}
label {
  text-align: center;
}
.register {
  border: 1px solid;
  background-color: white;
  color: blue;
  outline: none;
}
.register:active {
  box-shadow: none;
  position: relative;
  top: 3px;
}
</style>

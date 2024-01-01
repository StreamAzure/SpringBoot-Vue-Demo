<template>
    <div class="login-container">
      <h2>登录</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      <p><router-link to="/passwd">修改密码</router-link></p>
      <p>还没有账号? <router-link to="/register">注册</router-link></p>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // 在这里添加登录逻辑
        console.log('Login submitted:', this.username, this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left; /* 将label靠左对齐 */
  }
  
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
  }
  
  button {
    background-color: #3498db; /* 蓝色 */
    color: #fff;
    padding: 10px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9; /* 深蓝色 */
  }
  
  p {
    margin-top: 15px;
    font-size: 14px;
  }
  
  router-link {
    color: #3498db;
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  
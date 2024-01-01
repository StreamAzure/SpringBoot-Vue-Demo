<template>
    <div class="change-password-container">
      <h2>修改密码</h2>
      <form @submit.prevent="changePassword">
        <div class="form-group">
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="userName" required />
        </div>
        <div class="form-group">
          <label for="current-password">原密码:</label>
          <input type="password" id="current-password" v-model="currentPassword" required />
        </div>
        <div class="form-group">
          <label for="new-password">新密码:</label>
          <input
            type="password"
            id="new-password"
            v-model="newPassword"
            required
            @input="clearConfirmPassword"
          />
        </div>
        <div class="form-group">
          <label for="confirm-password">确认新密码:</label>
          <input
            type="password"
            id="confirm-password"
            v-model="confirmPassword"
            required
            @input="checkPasswordMatch"
          />
          <span v-if="confirmPassword && passwordsMatch" class="password-match">两次新密码输入一致!</span>
          <span v-if="confirmPassword && !passwordsMatch" class="password-mismatch">两次新密码输入不一致!</span>
        </div>
        <button type="submit" :class="{ 'disabled-btn': !newPassword || !passwordsMatch }">提交</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'ChangePassword',
    data() {
      return {
        userName: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        passwordsMatch: true,
      };
    },
    methods: {
      changePassword() {
        // 在这里添加修改密码逻辑
        console.log('Password change submitted:', this.userName, this.currentPassword, this.newPassword, this.confirmPassword);
      },
      clearConfirmPassword() {
        this.confirmPassword = ''; // 清空确认密码框
        this.checkPasswordMatch(); // 再次检查密码匹配
      },
      checkPasswordMatch() {
        this.passwordsMatch = this.newPassword === this.confirmPassword;
      },
    },
  };
  </script>
  
  <style scoped>
  .change-password-container {
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

  .password-match {
  color: #27ae60; /* 绿色 */
  font-size: 14px;
  margin-top: 5px;
}

.password-mismatch {
    color: #c0392b; /* 红色 */
    font-size: 14px;
    margin-top: 5px;
}
.disabled-btn {
    background-color: #95a5a6 !important; /* 灰色 */
    color: #ecf0f1 !important; /* 白色 */
    cursor: not-allowed ;
}
  </style>
  
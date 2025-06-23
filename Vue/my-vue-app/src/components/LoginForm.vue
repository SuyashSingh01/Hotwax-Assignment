<template>
  <div class="login">
    <section class="login__form-section">
      <h1 class="login__title">Login Form</h1>
      <form @submit.prevent="handleLogin" class="login__form">
        <div class="login__form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model.trim="form.email"
            required
            placeholder="Enter your email"
          />
        </div>

        <div class="login__form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" class="login__submit-btn">Login</button>
      </form>
    </section>

    <section class="login__preview">
      <h2 class="login__subtitle">Login Data</h2>
      <p><strong>Email:</strong> {{ form.email }}</p>
      <p><strong>Password:</strong> {{ form.password }}</p>
      <p v-if="!form.email && !form.password">No data entered yet.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      console.log("Login data submitted:", this.form);
      alert(`Logged in as: ${this.form.email}`);

      this.form = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style>
.login {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  margin-bottom: 2rem;
}

.login__form-section,
.login__preview {
  flex: 1 1 45%;
}

.login__title,
.login__subtitle {
  margin-bottom: 1.2rem;
}

.login__form {
  display: flex;
  flex-direction: column;
}

.login__form-group {
  margin-bottom: 1.2rem;
}

.login__form-group label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.4rem;
}

.login__form-group input {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login__submit-btn,
.toggle-button {
  padding: 0.8rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login__submit-btn:hover {
  background-color: #369c73;
}
</style>

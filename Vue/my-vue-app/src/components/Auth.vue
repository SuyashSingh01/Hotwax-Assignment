<template>
  <div class="auth-wrapper">
    <div class="form-card">
      <h2>{{ isLogin ? "Login" : "Register" }}</h2>

      <form @submit.prevent="handleSubmit">
        <div v-if="!isLogin" class="form-group">
          <label class="form_label">Name</label>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div class="form-group">
          <label class="form_label">Email</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-group">
          <label class="form_label">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" class="btn">
          {{ isLogin ? "Login" : "Register" }}
        </button>
      </form>

      <p class="toggle-text">
        {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        <span @click="toggleForm">{{ isLogin ? "Register" : "Login" }}</span>
      </p>
    </div>

    <!-- Display Submitted Info -->
    <div v-if="submitted" class="output-box">
      <h3>Submitted {{ isLogin ? "Login" : "Registration" }} Info:</h3>
      <ul>
        <li v-if="!isLogin"><strong>Name:</strong> {{ submittedData.name }}</li>
        <li><strong>Email:</strong> {{ submittedData.email }}</li>
        <li><strong>Password:</strong> {{ submittedData.password }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthForm",
  data() {
    return {
      isLogin: true,
      submitted: false,
      form: {
        name: "",
        email: "",
        password: "",
      },
      submittedData: {},
    };
  },
  methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.submitted = false;
      this.form = { name: "", email: "", password: "" };
    },
    handleSubmit() {
      this.submitted = true;
      this.submittedData = { ...this.form };

      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
    },
  },
};
</script>

<style scoped>
.form_label {
  text-align: left;

  font-size: 0.9rem;
}
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
  padding: 20px;
}

.form-card {
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #007bff;
}

.btn {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top: 1rem;
}

.btn:hover {
  background-color: #0056b3;
}

.toggle-text {
  text-align: center;
  margin-top: 1rem;
  color: #555;
  font-size: 0.9rem;
}

.toggle-text span {
  color: #007bff;
  font-weight: 600;
  cursor: pointer;
  margin-left: 6px;
}

.toggle-text span:hover {
  text-decoration: underline;
}

.output-box {
  background: #fff;
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}

.output-box h3 {
  margin-bottom: 1rem;
  color: #333;
}

.output-box ul {
  list-style: none;
  padding: 0;
}

.output-box li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>

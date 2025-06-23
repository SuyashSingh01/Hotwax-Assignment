<template>
  <div class="signup">
    <section class="signup__form-section">
      <h1 class="signup__title">Signup Form</h1>

      <form @submit.prevent="handleSignup" class="signup__form">
        <div class="signup__form-group">
          <label for="username">Username</label>
          <input
            type="text"
            id="username"
            v-model.trim="form.username"
            required
          />
        </div>

        <fieldset class="signup__form-group">
          <legend>Gender</legend>
          <label>
            <input type="radio" value="Male" v-model="form.gender" required />
            Male
          </label>
          <label>
            <input type="radio" value="Female" v-model="form.gender" /> Female
          </label>
        </fieldset>

        <fieldset class="signup__form-group">
          <legend>Skills</legend>
          <label v-for="skill in availableSkills" :key="skill">
            <input type="checkbox" :value="skill" v-model="form.skills" />
            {{ skill }}
          </label>
        </fieldset>

        <div class="signup__form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model.trim="form.email" required />
        </div>

        <div class="signup__form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            required
          />
        </div>

        <button type="submit" class="signup__submit-btn">Sign Up</button>
      </form>
    </section>

    <section class="signup__preview">
      <h2 class="signup__subtitle">Signup Data</h2>
      <p><strong>Username:</strong> {{ form.username }}</p>
      <p><strong>Email:</strong> {{ form.email }}</p>
      <p><strong>Password:</strong> {{ form.password }}</p>
      <p><strong>Gender:</strong> {{ form.gender }}</p>
      <p><strong>Skills:</strong> {{ form.skills.join(", ") }}</p>

      <p
        v-if="
          !form.username &&
          !form.email &&
          !form.password &&
          !form.gender &&
          form.skills.length === 0
        "
      >
        No data entered yet.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
      },
      availableSkills: ["HTML", "CSS", "JavaScript", "Vue"],
    };
  },
  methods: {
    handleSignup() {
      console.log("Form Data:", this.form);

      alert(`Welcome, ${this.form.username}!`);
      this.form = {
        username: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
      };
    },
  },
};
</script>

<style scoped>
.signup {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  max-width: 1000px;
  margin: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  margin-bottom: 2rem;
}

.signup__form-section,
.signup__preview {
  flex: 1 1 45%;
}

.signup__form {
  display: flex;
  flex-direction: column;
}

.signup__form-group {
  margin-bottom: 1.2rem;
}

.signup__form-group label,
.signup__form-group legend {
  font-weight: 600;
  display: block;
  margin-bottom: 0.4rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 95%;
}
.signup__submit-btn {
  padding: 0.8rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.signup__submit-btn:hover {
  background-color: #369c73;
}

.signup__title,
.signup__subtitle {
  margin-bottom: 1rem;
}
</style>

import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useSate("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = form;
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        data,
      );
      console.log(response);
    } catch (err) {}
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <input
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={form.passowrd}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;

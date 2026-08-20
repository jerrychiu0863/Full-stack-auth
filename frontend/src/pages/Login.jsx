import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({ setUser, ...props }) {
  console.log(props);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = form;
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/login`,
        data,
      );
      console.log(response);
      const user = await response.data;
      setUser(user);
      navigate("/");
    } catch (err) {
      console.log(err.response);
      const res = await err.response;
      const errorMsg = await res.data.message;
      setError(errorMsg);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <p>Email: {form.email}</p>
      <p>Password: {form.password}</p>
      <div>
        <input
          className="border-solid border border-gray-400 rounded-xs px-[4px]"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          className="border-solid border border-gray-400 rounded-xs my-[8px] px-[4px]"
          type="password"
          value={form.passowrd}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password"
        />
      </div>

      <button
        className="bg-blue-300 px-[24px] py-[4px] rounded-xs"
        type="submit"
      >
        Login
      </button>
    </form>
  );
}

export default Login;

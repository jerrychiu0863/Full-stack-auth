import { useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const onLogoutClick = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/logout`);

      setUser(null);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header className="flex justify-between bg-blue-100 py-[16px] px-[8px]">
      <NavLink to="/">Auth sys</NavLink>

      <div>
        {user ? (
          <button
            className="border border-blue-400 border-[2px] px-[8px] rounded-sm text-blue-400"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        ) : (
          <div>
            <NavLink
              className=" px-[8px] border-[2px] px-[8px] rounded-sm text-blue-400 mr-[8px]"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="px-[8px] border-[2px] px-[8px] rounded-sm text-blue-400"
              to="/register"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

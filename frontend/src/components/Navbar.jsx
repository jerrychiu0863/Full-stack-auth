import { useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

function Navbar({ user }) {
  const navigate = useNavigate();
  const onLogoutClick = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/auth/logout`,
      );
      console.log("logout");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-between bg-red-100 py-[16px] px-[8px]">
      <div>Auth sys</div>

      <div>
        {user?.id ? (
          <button
            className="bg-red-300 px-[8px] rounded-sm"
            onClick={onLogoutClick}
          >
            Logout
          </button>
        ) : (
          <div>
            <NavLink className="bg-red-300 px-[8px] rounded-sm" to="/login">
              Login
            </NavLink>
            <NavLink className="bg-red-300 px-[8px] rounded-sm" to="/register">
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

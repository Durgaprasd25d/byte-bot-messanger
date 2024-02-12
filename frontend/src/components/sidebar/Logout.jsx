import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";

const Logout = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto">
      {!loading ? (
        <BiLogOut
          onClick={logout}
          className="w-6 h-6 text-sky-500 cursor-pointer"
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default Logout;

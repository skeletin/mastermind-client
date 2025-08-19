import { useState, type ChangeEvent, type FormEvent } from "react";
import Logo from "../../svgs/Logo";
import { useMutation } from "@tanstack/react-query";
import RegistrationEndpoints from "../../../endpoints/RegistrationEndpoints";
import { useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router";

const Login = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: RegistrationEndpoints.login,
    onSuccess: (data) => {
      if (data) {
        localStorage.clear();
        localStorage.setItem("token", data);
        queryClient.invalidateQueries({ queryKey: ["auth-user"] });
        navigate("/");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { username, password } = credentials;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(credentials);
  };

  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Link to="/">
        <Logo />
      </Link>
      <div className="rounded">
        <form
          className="flex flex-col space-y-4 border p-8  w-[20rem] items-center rounded-xl bg-white "
          onSubmit={handleSubmit}
        >
          <h3 className="text-left w-full text-lg font-semibold text-gray-700">
            Log in
          </h3>

          <div className="w-full mt-2 space-y-4">
            <div className="flex flex-col w-full space-y-2">
              <label className="text-gray-700 font-semibold text-sm">
                Username
              </label>
              <input
                className="border rounded p-1 w-full"
                name={"username"}
                value={username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col w-full space-y-2">
              <label className="text-gray-700 font-semibold text-sm">
                Password
              </label>
              <input
                className="border rounded p-1 w-full"
                name={"password"}
                value={password}
                onChange={handleChange}
                type="password"
                required
              />
            </div>
          </div>
          <div className="w-full mt-6">
            <button
              className="cursor-pointer bg-blue-800 font-semibold text-white rounded-full border border-blue-600 shadow  shadow-blue-500 py-1 w-full hover:bg-blue-600 text-md"
              type="submit"
            >
              Log in
            </button>
          </div>

          <div className="text-sm">
            Don't have an account?{" "}
            <Link className="font-semibold text-blue-500" to="/register">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;

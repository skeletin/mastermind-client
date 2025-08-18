import { useState, type ChangeEvent, type FormEvent } from "react";
import Logo from "../../svgs/Logo";
import { useMutation } from "@tanstack/react-query";
import RegistrationEndpoints from "../../../endpoints/RegistrationEndpoints";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [newUser, setNewUser] = useState<NewUser>({
    email: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: RegistrationEndpoints.register,
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

  const { email, username, password } = newUser;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(newUser);
  };
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Logo />
      <div>
        <form className="flex flex-col bg-white" onSubmit={handleSubmit}>
          <input
            className=""
            name={"email"}
            value={email}
            onChange={handleChange}
            type="email"
            required
          />
          <input
            className=""
            name={"username"}
            value={username}
            onChange={handleChange}
            required
          />
          <input
            className=""
            name={"password"}
            value={password}
            onChange={handleChange}
            type="password"
            required
          />
          <button className="cursor-pointer" type="submit">
            sign up
          </button>
        </form>
      </div>
    </main>
  );
};

export default SignUp;

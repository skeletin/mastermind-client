import Logo from "../../svgs/Logo";
import Menu from "./Menu";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <Logo />
      <Menu />
      <button
        className="text-white mt-2 cursor-pointer"
        onClick={() => {
          fetch(
            "https://5hj4knj9d0.execute-api.us-east-2.amazonaws.com/dev/api/v1/auth/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: "test@gmail.com",
                username: "test",
                password: "password",
              }),
            }
          )
            .then((resp) => resp.json())
            .then(console.log);
        }}
      >
        LOG
      </button>
    </main>
  );
};

export default Home;

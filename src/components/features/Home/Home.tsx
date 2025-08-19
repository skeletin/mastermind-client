import Logo from "../../svgs/Logo";
import Menu from "./Menu";
import { motion } from "motion/react";

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center h-full"
    >
      <Logo />
      <Menu />
    </motion.main>
  );
};

export default Home;

import { Button } from "@nextui-org/button";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="text-white py-5 inline-flex gap-3 items-center">
        <Button
          isIconOnly
          className="bg-gradient-to-tr from-purple to-purple-500 text-white text-lg"
        >
          <FaLinkedin />
        </Button>
        <Button
          isIconOnly
          className="bg-gradient-to-tr from-purple to-purple-500 text-white text-lg"
        >
          <FaGithub />
        </Button>
      </div>
    </div>
  );
};

export default Footer;

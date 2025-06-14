import {
  FaGithub,
  FaFilePdf,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

interface ConnectLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const ConnectLinks: ConnectLink[] = [
  {
    label: "Email",
    href: "mailto:sagarr.patel@outlook.com",
    icon: <FiMail />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/p-sagar/",
    icon: <FaLinkedin />,
  },
  {
    label: "GitHub",
    href: "https://github.com/sagar5534",
    icon: <FaGithub />,
  },
  {
    label: "Resume",
    href: "/SagarPatel_Resume.pdf",
    icon: <FaFilePdf />,
  },
];

export default ConnectLinks;


import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", url: "https://facebook.com", icon: <FaFacebook size={24} /> },
  { name: "Instagram", url: "https://instagram.com", icon: <FaInstagram size={24} /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter size={24} /> },
  { name: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin size={24} /> },
];


const SocialMediaSection: React.FC = () => {
  return (
    <div className="p-6 bg-lightGray">
      <h2 className="text-2xl font-bold text-center text-darkGray mb-6">Stay Connected</h2>

      <div className="flex justify-center space-x-4 mb-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primaryLight transition"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaSection;

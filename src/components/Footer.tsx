"use client";

import { FaCcVisa, FaCcMastercard, FaPaypal, FaCcAmex } from "react-icons/fa";

interface FooterLink {
  title: string;
  links: string[];
}

const footerLinks: FooterLink[] = [
  {
    title: "Categories",
    links: ["Men's Fashion", "Women's Fashion", "Electronics", "Home & Living"],
  },
  {
    title: "Customer Service",
    links: ["Contact Us", "Order Tracking", "Returns", "FAQs"],
  },
  {
    title: "Policies",
    links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkGray text-lightGray py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-lightGray hover:text-primaryLight transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
          <div className="flex space-x-4">
            <FaCcVisa size={32} className="text-primary" />
            <FaCcMastercard size={32} className="text-primary" />
            <FaPaypal size={32} className="text-primary" />
            <FaCcAmex size={32} className="text-primary" />
          </div>

          <h3 className="text-lg font-semibold mt-6 mb-4">Secure Checkout</h3>
          <p className="text-sm text-lightGray">
            Your information is protected by advanced encryption.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

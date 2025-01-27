const Footer = () => {
    return (
      <footer className="bg-secondary text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Footer Logo */}
            <div className="text-lg font-bold">E-Shop</div>
  
            {/* Footer Links */}
            <ul className="flex space-x-4 mt-4 md:mt-0">
              <li>
                <a href="#" className="hover:text-secondaryLight">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondaryLight">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondaryLight">
                  Support
                </a>
              </li>
            </ul>
          </div>
  
          {/* Copyright */}
          <div className="text-center text-sm mt-4">
            © 2025 E-Shop. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
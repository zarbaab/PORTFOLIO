import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100074346025045&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/all_in_one8279?igsh=Y2NkOWZmY25weWR4" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/zarbaab-mehboob-23bb42233" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
             
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

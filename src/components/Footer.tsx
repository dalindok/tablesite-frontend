import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-between py-12">
        <div>
          <div className="flex flex-row ">
            <p className="font-semibold text-xl text-white">Table</p>
            <p className="font-semibold text-xl text-primary">Site</p>
          </div>

          <p className="text-text-muted mt-2 text-sm w-125">
            The easiest way to discover and reserve tables at the best
            restaurants near you. Free for diners, always.
          </p>
        </div>
        <div>
          <p className="text-white mb-2">Explore</p>
          <p className="text-text-muted text-sm hover:text-primary">
            All Restaurants
          </p>
          <p className="text-text-muted text-sm hover:text-primary">
            By Location
          </p>
          <p className="text-text-muted text-sm hover:text-primary">
            Top Rated
          </p>
        </div>
        <div>
          <p className="text-white mb-2">Company</p>
          <p className="text-text-muted text-sm hover:text-primary">About Us</p>
          <p className="text-text-muted text-sm hover:text-primary">Contact</p>
          {/* <p className="text-text-muted text-sm">Top Rated</p> */}
        </div>
        <div>
          <p className="text-white mb-2">Support</p>
          <p className="text-text-muted text-sm hover:text-primary">
            Help Center
          </p>
          <p className="text-text-muted text-sm hover:text-primary">
            Privacy Policy
          </p>
          <p className="text-text-muted text-sm hover:text-primary">
            Terms of Service
          </p>
        </div>
      </div>
      <li className="border-t border-text-muted mt-2"></li>
      <div className="flex flex-row justify-between">
        <p className="text-text-muted text-sm">
          © 2026 TableSite. All rights reserved. Built with ❤️ for my Final Year
          Project.
        </p>
        <div className="flex flex-row gap-2 mb-4">
          <p className="text-text-muted text-sm">Made by</p>
          <p className="text-primary text-sm">Dok Dalin</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

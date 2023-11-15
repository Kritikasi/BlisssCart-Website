import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link href="#" className="navbar__link relative">
            Home
          </Link>
          <Link href="#" className="navbar__link relative">
            CATEGORIES
          </Link>
          <Link href="#" className="navbar__link relative">
            MEN'S
          </Link>
          <Link href="#" className="navbar__link relative">
            WOMEN'S
          </Link>
          <Link href="#" className="navbar__link relative">
            JEWELRY
          </Link>
          <Link href="#" className="navbar__link relative">
            PERFUME
          </Link>
          <Link href="#" className="navbar__link relative">
            BLOG
          </Link>
          <Link href="#" className="navbar__link relative">
            HOT OFFERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

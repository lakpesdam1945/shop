import { useState } from "react";
import { NavBrands } from "./NavBrands";
import { NavMenu } from "./NavMenu";
import { NavCTA } from "./NavCTA";
type Props = {};

const Navbar = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <header className="flex flex-col w-full fixed z-50 top-0 px-4 py-4 bg-pink-700">
        <nav className="flex w-full items-center justify-between">
          <NavBrands brands="TwiceShop" />
          <NavMenu />
          <NavCTA click={() => setOpenMenu(!openMenu)} />
        </nav>
      </header>
    </>
  );
};

export default Navbar;

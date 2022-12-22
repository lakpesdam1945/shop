import { Link } from "react-router-dom";

type NavbarBrandsProps = {
  click?: () => void;
  brands?: string;
};

// Navbar Brands
const NavbarBrandsPropsDefault = {
  brands: "Brands Company",
};
export const NavBrands = (propsIn: NavbarBrandsProps) => {
  const props = { ...NavbarBrandsPropsDefault, ...propsIn };
  return (
    <div className="flex w-60">
      <Link to={"/"} className="text-2xl font-bold text-neutral-50">
        {props.brands}
      </Link>
    </div>
  );
};

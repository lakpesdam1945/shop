import { NavLink } from "react-router-dom";
import { menuLink } from "./navMenuList";

type NavbarMenuProps = {
  click?: () => void;
};
export const NavMobileMenu = (props: NavbarMenuProps) => {
  return (
    <>
      <nav className="flex tablet:hidden flex-col items-start justify-between gap-4 w-full">
        <div className="flex flex-col gap-4">
          {menuLink.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={props.click}
              className={({ isActive }) =>
                isActive
                  ? "text-sm text-dark-primary font-semibold"
                  : "text-sm text-dark-tertiary font-light"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

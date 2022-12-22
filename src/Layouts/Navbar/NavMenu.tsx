import { NavLink } from "react-router-dom";
import { menuLink } from "./navMenuList";

export const NavMenu = () => {
  return (
    <>
      <div className="hidden tablet:flex flex-grow gap-4 mx-auto items-center justify-center">
        {menuLink.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              isActive
                ? "text-neutral-50 text-sm font-semibold"
                : "text-neutral-200 text-sm font-light"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

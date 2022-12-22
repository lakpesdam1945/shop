import { CgMenuCheese } from "react-icons/cg";
import { Link } from "react-router-dom";
import { NavMobileMenu } from "./NavMobileMenu";

// Navbar CTA
type NavbarCTAProps = {
  click: () => void;
};
export const NavCTA = (props: NavbarCTAProps) => {
  return (
    <>
      <div className="hidden tablet:flex w-60 items-center justify-end gap-2">
        <Link
          to={"/"}
          className="px-4 py-2 rounded-md text-sm font-medium text-neutral-50"
        >
          Masuk
        </Link>
        <Link
          to={"/"}
          className="px-4 py-2 rounded-md text-sm font-medium text-slate-50 bg-pink-600 hover:bg-pink-800"
        >
          Daftar
        </Link>
      </div>
      <div className="flex tablet:hidden">
        <CgMenuCheese
          className="h-6 w-6 text-neutral-50 hover:cursor-pointer"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
        />
      </div>
      {/* Ofcanvas */}
      <div
        className="offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out top-0 left-0 border-none w-[300px]"
        tabIndex={-1}
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
        data-bs-dismiss="offcanvas"
      >
        <div className="offcanvas-header flex items-center justify-between p-4">
          <h5
            className="offcanvas-title mb-0 leading-normal font-semibold"
            id="offcanvasMenuLabel"
          >
            <Link to={"/"} className="font-bold text-2xl text-pink-600">
              TwiceShop
            </Link>
          </h5>
          <button
            type="button"
            className="btn-close box-content w-4 h-4 p-2 -my-5 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto flex flex-col justify-between w-full">
          <div data-bs-dismiss="offcanvas">
            <NavMobileMenu />
          </div>
          <div className="flex w-full flex-col items-start gap-2 py-4">
            <Link
              to={"/"}
              className="px-4 py-2 rounded-md text-sm font-medium text-dark-primary bg-white border-pink-600 border-2 hover:bg-pink-600 hover:text-neutral-50 w-full text-center"
            >
              Masuk
            </Link>
            <Link
              to={"/"}
              className="px-4 py-2 rounded-md text-sm font-medium text-slate-50 bg-pink-600 hover:bg-pink-800 w-full text-center"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

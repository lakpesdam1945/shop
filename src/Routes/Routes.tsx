import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage } from "../error-page";
import LayoutsApp from "../Layouts/LayoutsApp";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LayoutsApp />} errorElement={<ErrorPage />}>
        <Route index element={<div>Home</div>} errorElement={<ErrorPage />} />
        <Route
          path="/about"
          element={<div>About</div>}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/products"
          element={<div>Products</div>}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/categories"
          element={<div>Categories</div>}
          errorElement={<ErrorPage />}
        />
        <Route
          path="/blogs"
          element={<div>Blogs</div>}
          errorElement={<ErrorPage />}
        />
      </Route>
      <Route
        path="/login"
        element={<div>Login</div>}
        errorElement={<ErrorPage />}
      />
    </>
  )
);
// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);

import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center flex-col space-y-4">
        <h1 className="text-2xl text-dark-primary font-semibold">Oops!</h1>
        <h2 className="text-9xl text-red-700 font-bold">{error.status}</h2>
        <p className="text-2xl font-normal text-red-700 leading-relaxed">
          {error.statusText}
        </p>
        {error.data?.message && (
          <p className="text-2xl font-normal text-red-700 leading-relaxed">
            {error.data.message}
          </p>
        )}
        <Link
          to="/"
          className="px-4 py-2 bg-emerald-500 rounded-md text-dark-neutral text-sm drop-shadow-xl hover:bg-emerald-700 focus:bg-emerald-900"
        >
          Back to home
        </Link>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}

export { ErrorPage };

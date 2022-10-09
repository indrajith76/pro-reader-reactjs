import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error)
  return (
    <>
      <div className="flex flex-col min-h-[400px] justify-center items-center">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && <div>
          <p className="text-red-500">{error.statusText || error.message}</p>
          <p className="text-center">{error.status}</p>
          </div>}
      </div>
    </>
  );
};

export default ErrorPage;

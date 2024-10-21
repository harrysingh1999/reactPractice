import React from "react";
import CustomError from "./CustomError";
import ErrorBoundary from "./ErrorBoundary";

export default function HandleCustomError() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">
        Handling Error using ErrorBoundary
      </h1>

      <p className="text-yellow-600 font-semibold">
        An error will occur after 3 seconds that Will be handled Automatically
        and fallback UI will be provided for the Error, which will avoid Total
        App Crash.
      </p>

      <ErrorBoundary>
        <CustomError />
      </ErrorBoundary>
    </div>
  );
}

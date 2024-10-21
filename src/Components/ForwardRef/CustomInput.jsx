import React, { forwardRef } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export default forwardRef(function CustomInput(props, ref) {
  if (!ref) {
    throw new Error("ref value is not valid");
  }
  return <input type="text" ref={ref} className="border border-black/40 p-1" />;
});

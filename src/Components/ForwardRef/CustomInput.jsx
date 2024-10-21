import React, { forwardRef } from "react";

export default forwardRef(function CustomInput(props, ref) {
  return <input type="text" ref={ref} className="border border-black/40 p-1" />;
});

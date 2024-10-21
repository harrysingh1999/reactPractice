import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    error: "",
  };

  static getDerivedStateFromError(error) {
    return { error: error };
  }

  componentDidCatch(error, info) {
    console.log("Error caught:", error);
    console.log("Error Info:", info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="my-4">
          <h1 className="text-3xl font-bold text-red-500">
            Error is: {this.state?.error?.message}{" "}
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders main page", () => {
    render(<App />);
    const main = screen.getByTestId("main");
    expect(main).toBeInTheDocument();
});

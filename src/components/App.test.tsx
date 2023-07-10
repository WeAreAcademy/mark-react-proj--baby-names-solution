import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Favourites text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Favourites/i);
    expect(linkElement).toBeInTheDocument();
});

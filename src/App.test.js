import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hola", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hola/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders chau", () => {
    render(<App />);
    const linkElement = screen.getByText(/chau/i);
    expect(linkElement).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("muestra el saludo personalizado", () => {
  render(<Greeting name="Maria!" />);
  const greetingElement = screen.getByText("Hello,Maria!");
  expect(greetingElement).toBeInTheDocument();
});

import { render } from "@testing-library/react";
import { Header } from ".";

describe("<Header />", () => {
  it("Should render correctly", () => {
    const component = render(<Header />);
    component.getByText("React Test App");
    expect(component.container).toMatchSnapshot();
  });
});

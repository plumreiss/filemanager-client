import { getByText, render } from "@testing-library/react";
import { BaseTable } from ".";

describe("<BaseTable />", () => {
  it("Should render correctly", () => {
    const lines = [
      {
        text: "uzUVbPfNKGawHWZHeqiO",
        number: 777459,
        hex: "1ec4c6a048194c9b72fad4b0273f2533",
      },
      {
        text: "angel",
        number: 888,
        hex: "4f9e5d1c3a7b2eca8fb3456789012345",
      },
    ];

    const component = render(
      <BaseTable
        files={[
          {
            file: "test2.csv",
            lines,
          },
        ]}
      />
    );

    lines.forEach(({ text, number, hex }) => {
      component.getByText(text);
      component.getByText(number);
      component.getByText(hex);
    });

    expect(component.container).toMatchSnapshot();
  });
});

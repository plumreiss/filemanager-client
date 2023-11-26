import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

import { Provider, useDispatch } from "react-redux";

import App from "./App";

const mockStore = configureStore([]);

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("<App / >", () => {
  it("should be able to render files row", () => {
    const mockDispatch = jest.fn();

    useDispatch.mockReturnValue(mockDispatch);
    const initialState = {
      files: {
        error: "",
        isLoading: false,
        files: [
          {
            file: "test2.csv",
            lines: [
              {
                text: "SvmswXgsimrFzYuiiQrsGIyQ",
                number: 315144,
                hex: "b53f24e6812e8a1d74bcc9159cfb8c19",
              },
            ],
          },
        ],
      },
    };
    const store = mockStore(initialState);

    const component = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    component.getByText("SvmswXgsimrFzYuiiQrsGIyQ");
    component.getByText("315144");
    component.getByText("b53f24e6812e8a1d74bcc9159cfb8c19");

    expect(component.container).toMatchSnapshot();
  });
});

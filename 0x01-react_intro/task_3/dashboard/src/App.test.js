import App from './App';
import React from 'react';
import { shallow } from "enzyme";

describe("App component tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    const app = shallow(<app />);
    expect(app.find(".app-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    const app = shallow(<app />);
    expect(app.find(".app-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    const app = shallow(<app />);
    expect(app.find(".app-footer")).toBeDefined();
  });

});
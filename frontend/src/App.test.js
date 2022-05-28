import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Home from './Home';
import Analytics from './Analytics';
import Instructions from './Instructions';

describe("<Home />", () => {
    it("Renders Home component correctly", () => {
      const { getByText } = render(<Home />);
      expect(getByText(/Welcome To The URL Shortener!/i)).toBeInTheDocument();
    });
  });

describe("<Analytics />", () => {
    it("Renders Analytics component correctly", () => {
      const { getByText } = render(<Analytics />);
      expect(getByText(/Welcome to the Link Analytics/i)).toBeInTheDocument();
    });
});

describe("<Instructions />", () => {
    it("Renders Instruction component correctly", () => {
      const { getByText } = render(<Instructions />);
      expect(getByText(/How To Use/i)).toBeInTheDocument();
    });
});
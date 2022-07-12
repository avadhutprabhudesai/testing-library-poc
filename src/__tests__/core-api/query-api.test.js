import { screen } from '@testing-library/dom';
import { getDOM } from '../../queries/query-api';

describe('Testing Query APIs', () => {
  describe('Testing ByRole', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should return the element with button role by a Textmatch', () => {
      const button = screen.getByRole(/button/i);
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent(/click/i);
    });
    it('should return the element with checked as true', () => {
      const checkbox = screen.getByRole('checkbox', { checked: true });
      expect(checkbox).toBeInTheDocument();
    });
    it('should return the element with the role link', () => {
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveTextContent(/link/i);
    });
  });

  describe('Testing ByLabelText', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should return the input element by its corresponding label element', () => {
      const input = screen.getByLabelText(/inpu/i, { exact: true });
      expect(input).toBeInTheDocument();
      expect(input).toHaveValue('First Input');
    });
    it('should return the input element by its aria-label', () => {
      const input = screen.getByLabelText(/with-aria/i);
      expect(input).toBeInTheDocument();
    });
  });

  describe('Testing ByText', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should return the element by its text content', () => {
      const para = screen.getByText(/this para is hidden/i);
      expect(para).toBeInTheDocument();
      expect(para).toHaveAttribute('id', 'api_para');
    });
  });

  describe('Testing ByDisplayValue', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should return the input element by its value', () => {
      const input = screen.getByDisplayValue(/first input/i);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute('id', 'api_input');
    });
  });
});

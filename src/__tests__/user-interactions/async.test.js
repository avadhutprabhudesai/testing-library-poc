const {
  waitFor,
  screen,
  waitForElementToBeRemoved,
} = require('@testing-library/dom');
const { getDOM } = require('../../async/methods');

describe('Async', () => {
  describe('Testing waitFor()', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should wait for an element to appear on the dom', async () => {
      await waitFor(() => {
        const button = screen.getByText('Click me');
        expect(button).toHaveAttribute('id', 'btn-delay');
      });
    });
  });
  describe('Testing findBy()', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should wait for an element to appear on the dom', async () => {
      const button = await screen.findByText('Click me');
      expect(button).toHaveAttribute('id', 'btn-delay');
    });
  });
  describe('Testing waitForElementToBeRemoved()', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should wait for an element to be removed', async () => {
      const button = await screen.findByText('Click me');
      await waitForElementToBeRemoved(button);
    });
  });
  describe('Testing disappearance()', () => {});
});

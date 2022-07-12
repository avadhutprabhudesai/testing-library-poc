import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { getDOM } from '../../user-interactions/keyboard';
describe('Keyboard interactions', () => {
  describe('Testing type', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should change the value of a textbox after typing into it', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      const keyInput = 'Hello World';
      await user.type(input, keyInput);
      expect(input).toHaveDisplayValue(keyInput);
    });
    it('should not be able to type into a disabled textbox', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/disabled/i);
      const keyInput = 'Hello World';
      await user.type(input, keyInput);
      expect(input).toHaveDisplayValue('');
    });
    it('should be able to enter individual keys into the textbox', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      await user.click(input);
      await user.keyboard('foo');
      expect(input).toHaveDisplayValue('foo');
    });
    it('should be able to emulate pressed keys', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      await user.click(input);
      await user.keyboard('{a>3/}');
      expect(input).toHaveDisplayValue('aaa');
    });
    it('should be able to clear input', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      await user.click(input);
      await user.keyboard('{a>3/}');
      await user.clear(input);
      expect(input).toHaveDisplayValue('');
    });
    it('should focus the first input after pressing tab', async () => {
      const user = userEvent.setup();
      user.tab();
      const input = screen.getByLabelText(/enabled/i);
      expect(input).toHaveFocus();
    });
  });
});

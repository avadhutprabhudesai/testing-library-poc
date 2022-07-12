import { screen } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { getDOM } from '../../user-interactions/mouse';

describe('Mouse interactions', () => {
  describe('Testing click', () => {
    beforeEach(() => {
      getDOM();
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });
    it('should change the value of a textbox by clicking the button', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      const button = screen.getByText('Update');
      await user.click(button);
      expect(input).toHaveDisplayValue('John Doe');
    });
    it('should not be able to click the disabled button', async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText(/enabled/i);
      const button = screen.getByText('Try it');
      await user.click(button);
      expect(input).toHaveDisplayValue('');
    });
  });
});

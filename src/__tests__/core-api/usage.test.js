import { screen } from '@testing-library/dom';
import { getDOM } from '../../queries/usage';

describe('Query usage', () => {
  describe('Testing queries with screen', () => {
    let form;
    beforeEach(() => {
      form = getDOM();
      document.body.append(form); // Need to append it to body. Else screen() does not work
    });
    afterEach(() => {
      document.body.innerHTML = '';
    });

    it('should return 1 input element having display value as Input 1', () => {
      const i1 = screen.getByDisplayValue('Input 1');
      expect(i1).toHaveDisplayValue(/input 1/i);
      expect(i1).toHaveAttribute('id', 'usg_i1');
    });
    it('should return an array of elements having role button', () => {
      const buttons = screen.getAllByRole(/button/i);
      expect(buttons).toHaveLength(2);
    });
  });
});

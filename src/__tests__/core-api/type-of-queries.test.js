/* eslint-disable jest-dom/prefer-in-document */
/* eslint-disable testing-library/prefer-screen-queries */
import {
  findAllByText,
  findByText,
  getAllByRole,
  getByLabelText,
  getByRole,
  queryAllByRole,
  queryByLabelText,
  queryByRole,
} from '@testing-library/dom';
import { getForm } from '../../queries/types.js';

describe('Single Element APIs', () => {
  describe('Testing getBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });

    it('should return the element if exactly 1 matching element is found', () => {
      const input = getByLabelText(toqForm, /heading text/i);
      expect(input).toHaveAttribute('id', 'toq_text');
    });
    it('should throw error if no matching element is found', () => {
      expect(() => {
        getByLabelText(toqForm, /invalid value/i);
      }).toThrow();
    });
    it('should throw error if more than 1 matching element is found', () => {
      expect(() => {
        getByRole(toqForm, /button/i);
      }).toThrow();
    });
  });

  describe('Testing queryBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });
    it('should return the element if exactly 1 matching element is found', () => {
      const input = queryByLabelText(toqForm, /heading text/i);
      expect(input).toHaveAttribute('id', 'toq_text');
    });
    it('should return null if no matching element is found', () => {
      expect(queryByLabelText(toqForm, /invalid value/i)).toBeNull();
    });
    it('should throw error if more than 1 matching element is found', () => {
      expect(() => {
        queryByRole(toqForm, /button/i);
      }).toThrow();
    });
  });

  describe('Testing findBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });
    it('should return the element if exactly 1 matching element is found', async () => {
      const para = await findByText(toqForm, 'Delayed Text');
      expect(para).toHaveTextContent(/delayed/i);
      expect(para).toHaveAttribute('role', 'paragraph');

      // await waitFor(
      //   () => {
      //     console.log('Polling');
      //     const para = getByText(toqForm, 'Delayed Text');
      //     expect(para).toHaveTextContent(/delayed/i);
      //   },
      //   {
      //     interval: '200',
      //     timeout: 2000,
      //   }
      // );
    });
    it('should throw error if no matching element is found', async () => {
      try {
        await findByText(toqForm, 'Delay');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});

describe('Multiple Element APIs', () => {
  describe('Testing getAllBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });
    it('should return an array if exactly 1 element matches the query', () => {
      const inputs = getAllByRole(toqForm, /textbox/i);
      expect(inputs).toHaveLength(1);
    });
    it('should return an array if  more than 1 elements matches the query', () => {
      const buttons = getAllByRole(toqForm, /button/i);
      expect(buttons).toHaveLength(2);
    });
    it('should throw if no match is found', () => {
      expect(() => getAllByRole(toqForm, 'checkbox')).toThrow();
    });
  });

  describe('Testing queryAllBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });
    it('should return an array if exactly 1 element matches the query', () => {
      const inputs = queryAllByRole(toqForm, /textbox/i);
      expect(inputs).toHaveLength(1);
    });
    it('should return an array if more than 1 elements matches the query', () => {
      const buttons = queryAllByRole(toqForm, /button/i);
      expect(buttons).toHaveLength(2);
    });
    it('should return an array if no match is found', () => {
      const checkboxes = queryAllByRole(toqForm, /checkbox/i);
      expect(checkboxes).toHaveLength(0);
    });
  });

  describe('Testing findAllBy', () => {
    let toqForm;
    beforeEach(() => {
      toqForm = getForm();
    });
    it('should return an array if exactly 1 matching element is found', async () => {
      const para = await findAllByText(toqForm, 'Delayed Text');
      expect(para).toHaveLength(1);
    });
    it('should throw error if no matching element is found', async () => {
      try {
        await findAllByText(toqForm, 'Delay');
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
});

/**
 * Characteristics of each query type
 *  - Return value
 *    - no match
 *    - 1 match
 *    - >1 match
 *  - Application
 *
 * Single Element
 *  - getBy
 *  - queryBy
 *  - findBy
 * Multiple Elements
 *  - getAllBy
 *  - queryBy
 *  - findBy
 */

function getDOMElements() {
  const form = document.getElementById('toq_form'),
    input = document.getElementById('toq_text'),
    submit = document.getElementById('toq_submit'),
    reset = document.getElementById('toq_reset'),
    result = document.getElementById('toq_result');

  return {
    form,
    input,
    submit,
    reset,
    result,
  };
}

function createHeadingRow(text) {
  const frag = new DocumentFragment();
  const heading = document.createElement('h1');
  heading.textContent = text;
  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.addEventListener('click', function () {
    this.parentElement.remove();
  });
  heading.append(removeButton);
  frag.append(heading);
  return frag;
}

function handleTOQSubmit(e) {
  const { input, result, form } = getDOMElements();
  e.preventDefault();
  const headingText = input.value;
  result.append(createHeadingRow(headingText));
  form.reset();
}

export function getForm() {
  const form = document.createElement('form');
  form.id = 'toq_form';
  form.addEventListener('submit', handleTOQSubmit);

  form.innerHTML =
    '<label for="toq_text">Heading Text</label> \
        <input type="text" id="toq_text" /> \
        <button id="toq_submit" type="submit">Create</button> \
        <button id="toq_reset" type="reset">Reset</button>';
  const result = document.createElement('div');
  result.id = 'toq_result';
  const div = document.createElement('div');
  div.append(form);
  div.append(result);
  setTimeout(() => {
    div.insertAdjacentHTML(
      'afterbegin',
      '<p role="paragraph">Delayed Text</p>'
    );
  }, 1000);
  return div;
}

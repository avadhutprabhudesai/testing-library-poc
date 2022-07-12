export function getDOM() {
  const frag = new DocumentFragment();

  const i1 = Object.assign(document.createElement('input'), {
    id: 'usg_i1',
    value: 'Input 1',
  });

  const i2 = Object.assign(document.createElement('input'), {
    id: 'usg_i2',
    value: 'Input 2',
  });

  const b1 = Object.assign(document.createElement('button'), {
    id: 'usg_b1',
    textContent: 'Button 1',
  });
  const b2 = Object.assign(document.createElement('button'), {
    id: 'usg_b2',
    textContent: 'Button 2',
  });

  frag.append(i1);
  frag.append(i2);
  frag.append(b1);
  frag.append(b2);

  const div = document.createElement('div');
  div.append(frag);
  return div;
}

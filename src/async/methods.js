export function getDOM() {
  setTimeout(() => {
    let button = document.createElement('button');
    button.textContent = 'Click me';
    button.id = 'btn-delay';
    document.body.append(button);
  }, 200);

  setTimeout(() => {
    document.body.innerHTML = '';
  }, 500);
}

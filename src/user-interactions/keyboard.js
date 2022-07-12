export function getDOM() {
  document.body.innerHTML =
    ' <label for="enabled">Enabled</label>\
      <input id="enabled" />\
      <label for="disabled">Disabled</label>\
      <input id="disabled" disabled />\
      ';
}

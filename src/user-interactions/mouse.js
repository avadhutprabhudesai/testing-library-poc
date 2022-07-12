export function getDOM() {
  document.body.innerHTML =
    ' <label for="enabled">Enabled</label>\
      <input id="enabled" />\
      <label for="disabled">Disabled</label>\
      <input id="disabled" disabled />\
      <button onclick="document.getElementById(\'enabled\').value=\'John Doe\'">Update</button>\
      <button onclick="document.getElementById(\'enabled\').value=\'Bob Smith\'" disabled>Try it</button>\
      ';
}

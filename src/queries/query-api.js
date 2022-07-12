export function getDOM() {
  document.body.innerHTML =
    '<label for="api_input">Input</label>\
    <input id = "api_input" value="First Input"/> \
    <input aria-label="with-aria" value="with aria-label"/> \
    <p aria-hidden="true" id="api_para" role="paragraph"> This para is hidden from accessibility tree</p>\
    <input id="api_email" placeholder="Enter Email"/>\
    <span aria-checked="true" id="api_checkbox" role="checkbox"> Hello</span>\
    <button id="api_button"> Click</button>\
    <a href="/">Link</a>';
}

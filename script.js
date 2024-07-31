// function run() {
//   let html = document.getElementById('html');
//   let css = document.getElementById('css');
//   let js = document.getElementById('js');
//   let output = document.getElementById('output');

//   output.contentDocument.body.innerHTML = html.value + '<style>' + css.value + '</style>';
//   output.contentWindow.eval(js.value);

// }

function run() {
  let html = document.getElementById('html');
  let css = document.getElementById('css');
  let js = document.getElementById('js');
  let output = document.getElementById('output');

  try {
    // Clear previous content
    output.contentDocument.body.innerHTML = '';

    // Add HTML content
    output.contentDocument.body.innerHTML = html.value;

    // Add CSS content
    let style = document.createElement('style');
    style.innerHTML = css.value;
    output.contentDocument.head.appendChild(style);

    // Evaluate JavaScript
    output.contentWindow.eval(js.value);
  } catch (error) {
    console.error('An error occurred while running the code:', error);
  }
}

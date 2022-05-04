function waitingKeypress() {
    return new Promise((resolve) => {
      document.addEventListener('keydown', onKeyHandler);
      function onKeyHandler(e) {
        if (e.keyCode === 13) {
          document.removeEventListener('keydown', onKeyHandler);
          resolve();
        }
      }
    });
  }
async function out(text) {
    $('#cmd').append('<p id="cmdline_text">'+text+'</p>');   
}
async function input(text) {
    $('#cmd').append('<p id="cmdline_text">'+text+'<input class="cmdline" id="cmdline" autofocus></p>');   
    await waitingKeypress();
    var response = $('#cmdline').val();
    $('#cmdline').remove();
    return response;
}
/* Request form: sends the form to Web3Forms and reports the result without leaving the page. */
document.querySelectorAll('form.req').forEach(function (f) {
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = f.querySelector('.status'), button = f.querySelector('button');
    button.disabled = true;
    status.textContent = 'Sending\u2026';
    fetch(f.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(f) })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        if (d.success) { status.textContent = 'Thank you. Your request has been sent.'; f.reset(); }
        else { status.textContent = 'The request could not be sent. Please try again later.'; }
        button.disabled = false;
      })
      .catch(function () {
        status.textContent = 'The request could not be sent. Please try again later.';
        button.disabled = false;
      });
  });
});

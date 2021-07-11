//jshint esversion:6

const loadingOverlay = document.querySelector('.loading-overlay');

setTimeout(() => {
  loadingOverlay.classList.add('dissappear');
}, 1500);
setTimeout(function() {
  $('#loading').addClass('hidden');
}, 2000);

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = '#a5d6a7'; // cambia a verde
    cell.textContent = '✔️';
  });
});

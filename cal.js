document.addEventListener('DOMContentLoaded', () => {
  const monthYear = document.getElementById('monthYear');
  const dates = document.getElementById('dates');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  let date = new Date();

  function renderCalendar() {
      const month = date.getMonth();
      const year = date.getFullYear();
      date.setDate(1);

      const firstDay = date.getDay();
      const lastDate = new Date(year, month + 1, 0).getDate();
      const lastDay = new Date(year, month, lastDate).getDay();

      monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

      dates.classList.add('hidden');
      setTimeout(() => {
          dates.innerHTML = '';

          // Adding empty cells for the first week
          for (let i = 0; i < firstDay; i++) {
              dates.innerHTML += `<div></div>`;
          }

          // Adding the days of the month
          for (let i = 1; i <= lastDate; i++) {
              dates.innerHTML += `<div>${i}</div>`;
          }

          // Adding empty cells for the last week
          for (let i = lastDay; i < 6; i++) {
              dates.innerHTML += `<div></div>`;
          }

          // Ensure there are 6 rows (6 weeks) in the grid
          const totalCells = 6 * 7;
          const currentCells = dates.children.length;

          if (currentCells < totalCells) {
              for (let i = currentCells; i < totalCells; i++) {
                  dates.innerHTML += `<div></div>`;
              }
          }

          dates.classList.remove('hidden');
      }, 300);
  }

  prev.addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
  });

  next.addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
  });

  renderCalendar();
});

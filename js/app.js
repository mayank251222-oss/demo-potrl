document.addEventListener('DOMContentLoaded', () => {
  const search = document.getElementById('jobSearch');
  const table = document.getElementById('jobsTable');
  if (search && table) {
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      table.querySelectorAll('tbody tr').forEach(row => {
        row.style.display = row.innerText.toLowerCase().includes(q) ? '' : 'none';
      });
    });
  }
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
      const button = form.querySelector('button[type="submit"]');
      if (button && !button.dataset.noLoading) {
        button.dataset.originalText = button.textContent;
        button.textContent = 'Saving…';
        button.disabled = true;
        setTimeout(() => { button.disabled = false; button.textContent = button.dataset.originalText || 'Save'; }, 6000);
      }
    });
  });
});

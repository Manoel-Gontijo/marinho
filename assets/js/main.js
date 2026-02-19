(function () {
  // Activate current nav link
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-nav]').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href === path) a.classList.add('active');
  });

  // Product modal (if exists)
  const modalEl = document.getElementById('productModal');
  if (!modalEl) return;

  const bsModal = new bootstrap.Modal(modalEl);
  const modalTitle = modalEl.querySelector('[data-product-title]');
  const modalImg = modalEl.querySelector('[data-product-img]');
  const modalDesc = modalEl.querySelector('[data-product-desc]');

  document.querySelectorAll('[data-product]').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title') || 'Produto';
      const desc  = btn.getAttribute('data-desc')  || '';
      const img   = btn.getAttribute('data-img')   || '';
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalImg)  modalImg.src = img;
      bsModal.show();
    });
  });
})();

  // Service modal
  const serviceModalEl = document.getElementById('serviceModal');
  if (serviceModalEl) {
    const bsService = new bootstrap.Modal(serviceModalEl);
    const t = serviceModalEl.querySelector('[data-service-title]');
    const img = serviceModalEl.querySelector('[data-service-img]');
    const txt = serviceModalEl.querySelector('[data-service-text]');
    document.querySelectorAll('[data-service]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (t) t.textContent = btn.getAttribute('data-title') || 'Serviço';
        if (img) img.src = btn.getAttribute('data-img') || '';
        if (txt) txt.textContent = btn.getAttribute('data-text') || '';
        bsService.show();
      });
    });
  }

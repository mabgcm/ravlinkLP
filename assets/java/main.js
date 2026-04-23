// Theme selection
const getAutomaticTheme = () => {
  const hour = new Date().getHours();
  return hour >= 7 && hour < 19 ? 'day' : 'night';
};

const getStoredTheme = () => {
  try {
    return localStorage.getItem('ravlink-theme');
  } catch {
    return null;
  }
};

const storeTheme = (theme) => {
  try {
    localStorage.setItem('ravlink-theme', theme);
  } catch {
    // Ignore storage restrictions.
  }
};

const applyTheme = (theme) => {
  const selectedTheme = theme === 'day' ? 'day' : 'night';
  document.documentElement.dataset.theme = selectedTheme;
  const logoSrc = selectedTheme === 'day' ? 'assets/images/logo-day.png' : 'assets/images/logo.png';

  document.querySelectorAll('.header-logo, .footer-logo').forEach((logo) => {
    logo.src = logoSrc;
  });

  const toggle = document.getElementById('themeToggle');
  if (!toggle) return;

  const icon = toggle.querySelector('i');
  const nextTheme = selectedTheme === 'day' ? 'night' : 'day';
  toggle.setAttribute('aria-label', `${nextTheme === 'day' ? 'Gündüz' : 'Gece'} temasına geç`);

  if (icon) {
    icon.className = selectedTheme === 'day' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
};

applyTheme(getStoredTheme() || getAutomaticTheme());

const trackPixel = (method, eventName, payload = {}) => {
  if (typeof fbq === 'function') {
    fbq(method, eventName, payload);
  }
};

window.trackPixel = trackPixel;

const getElementLabel = (element) => (
  element.getAttribute('aria-label') ||
  element.textContent ||
  element.id ||
  element.className ||
  element.tagName
).toString().replace(/\s+/g, ' ').trim().slice(0, 120);

const getSectionName = (element) => {
  const section = element.closest('section');
  return section ? section.id || null : null;
};

const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme === 'day' ? 'day' : 'night';
    const nextTheme = currentTheme === 'day' ? 'night' : 'day';
    applyTheme(nextTheme);
    storeTheme(nextTheme);
    trackPixel('trackCustom', 'ThemeChanged', { theme: nextTheme });
  });
}

// Sticky header
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Animate on scroll
const animObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.add('animated', 'animate__animated', 'animate__fadeInUp');
      animObs.unobserve(el);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.animate-box').forEach(el => animObs.observe(el));

// Meta Pixel: section views
const secObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const name = entry.target.dataset.pixelSection || entry.target.id;
      if (name) {
        trackPixel('trackCustom', 'SectionViewed', {
          section: name,
          section_id: entry.target.id || null,
          page_path: window.location.pathname,
        });
        secObs.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('section[id]').forEach(el => secObs.observe(el));

// Meta Pixel: scroll depth
const depthsFired = new Set();
window.addEventListener('scroll', () => {
  const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
  [25, 50, 75, 90].forEach(d => {
    if (pct >= d && !depthsFired.has(d)) {
      depthsFired.add(d);
      trackPixel('trackCustom', 'ScrollDepth', { depth: d, page_path: window.location.pathname });
    }
  });
}, { passive: true });

// Meta Pixel: time on site
[
  [30000, 'TimeOnSite30s', 30],
  [60000, 'TimeOnSite60s', 60],
  [90000, 'TimeOnSite90s', 90],
  [120000, 'TimeOnSite120s', 120],
].forEach(([ms, eventName, seconds]) => {
  setTimeout(() => {
    trackPixel('trackCustom', eventName, { seconds, page_path: window.location.pathname });
  }, ms);
});

// Meta Pixel: page exit with total elapsed time
const pageStartedAt = Date.now();
let pageExitTracked = false;
const trackPageExit = () => {
  if (pageExitTracked) return;
  pageExitTracked = true;
  trackPixel('trackCustom', 'PageExit', {
    seconds_on_page: Math.round((Date.now() - pageStartedAt) / 1000),
    page_path: window.location.pathname,
  });
};

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') {
    trackPageExit();
  }
});
window.addEventListener('pagehide', trackPageExit);

// Meta Pixel: broad interaction tracking
document.addEventListener('click', (event) => {
  const target = event.target.closest('a, button');
  if (!target) return;

  const payload = {
    label: getElementLabel(target),
    element_type: target.tagName.toLowerCase(),
    element_id: target.id || null,
    section: getSectionName(target),
  };

  if (target.tagName.toLowerCase() === 'a') {
    payload.href = target.getAttribute('href') || null;
    payload.is_external = target.hostname ? target.hostname !== window.location.hostname : false;
  }

  trackPixel('trackCustom', 'SiteInteraction', payload);
});

// Meta Pixel: form starts
const formsStarted = new Set();
document.addEventListener('focusin', (event) => {
  const activeForm = event.target.closest('form');
  if (!activeForm || formsStarted.has(activeForm.id)) return;
  formsStarted.add(activeForm.id);
  trackPixel('trackCustom', 'FormStarted', {
    form_id: activeForm.id || null,
    section: getSectionName(activeForm),
    page_path: window.location.pathname,
  });
});

// Form submit
const form = document.getElementById('leadForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnIcon = document.getElementById('btnIcon');
const btnSpinner = document.getElementById('btnSpinner');
const successEl = document.getElementById('formSuccess');
const errorEl = document.getElementById('formError');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const sector = document.getElementById('sector').value;
  if (!name || !phone || !sector) return;

  submitBtn.disabled = true;
  btnText.textContent = 'Gönderiliyor…';
  btnIcon.style.display = 'none';
  btnSpinner.style.display = 'block';
  successEl.classList.remove('show');
  errorEl.classList.remove('show');

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, sector, source: 'landing-texas' }),
    });
    if (res.ok) {
      form.reset();
      successEl.classList.add('show');
      trackPixel('track', 'Lead', { content_name: 'landing-texas-form', content_category: sector });
      successEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      throw new Error('server');
    }
  } catch {
    errorEl.classList.add('show');
  } finally {
    submitBtn.disabled = false;
    btnText.textContent = 'Hemen Başlayalım';
    btnIcon.style.display = '';
    btnSpinner.style.display = 'none';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});

const roiMultipliers = {
  insaat: { reach: 85, clickRate: 0.028, convRate: 0.075 },
  restoran: { reach: 145, clickRate: 0.034, convRate: 0.052 },
  temizlik: { reach: 110, clickRate: 0.031, convRate: 0.06 },
};

const calculateRoi = (sector, budget) => {
  const multiplier = roiMultipliers[sector] || roiMultipliers.insaat;
  const reach = Math.round(budget * multiplier.reach);
  const clicks = Math.round(reach * multiplier.clickRate);
  const leads = Math.round(reach * multiplier.clickRate * multiplier.convRate);
  return { reach, clicks, customers: leads };
};

const formatNumber = (value) => Number(value).toLocaleString('en-US');

const pulseValue = (element) => {
  if (!element) return;
  element.classList.remove('is-pulsing');
  void element.offsetWidth;
  element.classList.add('is-pulsing');
};

// ROI calculator
const calculatorSectorButtons = document.querySelectorAll('#calculatorSectorButtons .sector-button');
const budgetSlider = document.getElementById('budgetSlider');
const budgetDisplay = document.getElementById('budgetDisplay');
const calculatorResults = document.getElementById('calculatorResults');
const reachValue = document.getElementById('reachValue');
const clickValue = document.getElementById('clickValue');
const customerValue = document.getElementById('customerValue');
let calculatorSector = null;
let calculatorSliderMoved = false;
let calculatorTracked = false;

const updateCalculator = () => {
  if (!budgetSlider || !budgetDisplay) return;

  const budget = Number(budgetSlider.value);
  budgetDisplay.textContent = `$${budget}`;

  if (!calculatorSector) return;

  const result = calculateRoi(calculatorSector, budget);
  calculatorResults.classList.add('is-visible');
  reachValue.textContent = formatNumber(result.reach);
  clickValue.textContent = formatNumber(result.clicks);
  customerValue.textContent = formatNumber(result.customers);
  [reachValue, clickValue, customerValue].forEach(pulseValue);

  if (calculatorSliderMoved && !calculatorTracked) {
    trackPixel('trackCustom', 'CalculatorUsed', { sector: calculatorSector, budget });
    calculatorTracked = true;
  }
};

calculatorSectorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculatorSector = button.dataset.sector;
    calculatorSectorButtons.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    updateCalculator();
  });
});

if (budgetSlider) {
  budgetSlider.addEventListener('input', () => {
    calculatorSliderMoved = true;
    updateCalculator();
  });
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item, index) => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach((faqItem) => faqItem.classList.remove('is-open'));

    if (!isOpen) {
      item.classList.add('is-open');
      trackPixel('trackCustom', 'FAQItemOpened', { question: index + 1 });
    }
  });
});

// Shared modal helpers
const openModal = (modal) => {
  if (!modal) return;
  modal.classList.add('is-open');
  trackPixel('trackCustom', 'ModalOpened', { modal_id: modal.id || null });
};

const closeModal = (modal) => {
  if (!modal) return;
  modal.classList.remove('is-open');
  trackPixel('trackCustom', 'ModalClosed', { modal_id: modal.id || null });
};

document.querySelectorAll('.modal-overlay').forEach((modal) => {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal(modal);
  });

  modal.querySelectorAll('.modal-close').forEach((button) => {
    button.addEventListener('click', () => closeModal(modal));
  });
});

// PDF lead magnet
const pdfModal = document.getElementById('pdf-modal');
const openPdfModalButton = document.getElementById('openPdfModal');
const pdfLeadForm = document.getElementById('pdfLeadForm');
const pdfThanks = document.getElementById('pdfThanks');
const pdfModalIntro = document.getElementById('pdfModalIntro');
const pdfDownloadUrl = 'assets/files/5PazarlamaHatasi.pdf';
const pdfSuccessMessage = 'Teşekkürler!';

const triggerPdfDownload = () => {
  const downloadLink = document.createElement('a');
  downloadLink.href = pdfDownloadUrl;
  downloadLink.download = '5PazarlamaHatasi.pdf';
  downloadLink.target = '_blank';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};

const capturePdfLead = async (name, email) => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), 7000);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, source: 'pdf-lead-magnet', sector: 'pdf-download' }),
      keepalive: true,
      signal: controller.signal,
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      console.warn('PDF lead capture returned an error:', result || response.status);
      return;
    }

    if (result?.sheetSaved === false) {
      console.warn('PDF lead was not saved to Google Sheets:', result.sheetError);
    }
  } catch (error) {
    console.warn('PDF lead capture failed:', error);
  } finally {
    window.clearTimeout(timeoutId);
  }
};

if (openPdfModalButton) {
  openPdfModalButton.addEventListener('click', () => {
    if (pdfLeadForm) {
      pdfLeadForm.reset();
      pdfLeadForm.style.display = '';
    }
    if (pdfModalIntro) {
      pdfModalIntro.classList.remove('is-hidden');
    }
    if (pdfThanks) {
      pdfThanks.innerHTML = pdfSuccessMessage;
      pdfThanks.classList.remove('is-visible');
    }
    openModal(pdfModal);
  });
}

if (pdfLeadForm) {
  pdfLeadForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('pdfName').value.trim();
    const email = document.getElementById('pdfEmail').value.trim();
    if (!name || !email) return;

    const submitButton = pdfLeadForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    pdfLeadForm.style.display = 'none';
    if (pdfModalIntro) {
      pdfModalIntro.classList.add('is-hidden');
    }
    pdfThanks.innerHTML = pdfSuccessMessage;
    pdfThanks.classList.add('is-visible');
    trackPixel('track', 'Lead', { content_name: 'pdf-lead-magnet' });

    try {
      await capturePdfLead(name, email);
    } finally {
      triggerPdfDownload();
      submitButton.disabled = false;
    }
  });
}

// Sector quiz
const quizModal = document.getElementById('sector-quiz-modal');
const quizSteps = document.querySelectorAll('#sector-quiz-modal .quiz-step');
const quizSectorCards = document.querySelectorAll('.quiz-sector-card');
const quizBudgetSlider = document.getElementById('quizBudgetSlider');
const quizBudgetDisplay = document.getElementById('quizBudgetDisplay');
const quizBudgetNext = document.getElementById('quizBudgetNext');
const quizCustomerResult = document.getElementById('quizCustomerResult');
const quizWhatsappCta = document.getElementById('quizWhatsappCta');
const quizFormCta = document.getElementById('quizFormCta');
const quizState = { sector: null, budget: 500 };

const showQuizStep = (step) => {
  quizSteps.forEach((item) => {
    item.classList.toggle('is-active', item.dataset.step === String(step));
  });
};

const updateQuizBudget = () => {
  if (!quizBudgetSlider || !quizBudgetDisplay) return;
  quizState.budget = Number(quizBudgetSlider.value);
  quizBudgetDisplay.textContent = `$${quizState.budget}`;
};

function openSectorQuiz() {
  quizState.sector = null;
  quizState.budget = 500;
  quizSectorCards.forEach((card) => card.classList.remove('is-selected'));
  if (quizBudgetSlider) quizBudgetSlider.value = '500';
  updateQuizBudget();
  showQuizStep(1);
  openModal(quizModal);
}

window.openSectorQuiz = openSectorQuiz;

quizSectorCards.forEach((card) => {
  card.addEventListener('click', () => {
    quizState.sector = card.dataset.sector;
    quizSectorCards.forEach((item) => item.classList.remove('is-selected'));
    card.classList.add('is-selected');
    trackPixel('trackCustom', 'QuizSectorSelected', { sector: quizState.sector });
    showQuizStep(2);
  });
});

if (quizBudgetSlider) {
  quizBudgetSlider.addEventListener('input', updateQuizBudget);
}

if (quizBudgetNext) {
  quizBudgetNext.addEventListener('click', () => {
    updateQuizBudget();
    const result = calculateRoi(quizState.sector, quizState.budget);
    quizCustomerResult.textContent = formatNumber(result.customers);
    trackPixel('trackCustom', 'QuizBudgetSet', { budget: quizState.budget });
    showQuizStep(3);
  });
}

if (quizWhatsappCta) {
  quizWhatsappCta.addEventListener('click', () => {
    trackPixel('track', 'Lead', { content_name: 'sector-quiz' });
  });
}

if (quizFormCta) {
  quizFormCta.addEventListener('click', () => {
    trackPixel('track', 'Lead', { content_name: 'sector-quiz' });
    closeModal(quizModal);
    document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
  });
}

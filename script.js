// ============================================
// AMIR STORE - JavaScript
// ============================================

/**
 * فتح صفحة المنتج في تبويب جديد
 * @param {string} url - رابط المنتج
 */
function openProduct(url) {
    window.open(url, '_blank');
}

/**
 * فلترة المنتجات حسب البحث
 */
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        if (name.includes(searchTerm)) {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const countEl = document.getElementById('productsCount');
    if (visibleCount > 0) {
        countEl.textContent = 'عدد المنتجات المعروضة: ' + visibleCount;
    } else {
        countEl.textContent = 'لا توجد منتجات مطابقة للبحث';
    }
}

/**
 * تحديث عداد المنتجات
 */
function updateCount() {
    const visibleCards = document.querySelectorAll('.product-card:not(.hidden)');
    document.getElementById('productsCount').textContent = 'عدد المنتجات: ' + visibleCards.length;
}

/**
 * إخفاء الخانات الفارغة (بدون اسم أو سعر)
 */
function hideEmptySlots() {
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const nameEl = card.querySelector('.product-name');
        const priceEl = card.querySelector('.product-price');

        const nameText = nameEl ? nameEl.textContent.trim() : '';
        const priceText = priceEl ? priceEl.textContent.trim() : '';

        // لو مفيش اسم أو مفيش سعر → اخفي الخانة
        if (!nameText || nameText === '' || !priceText || priceText === '') {
            card.classList.add('hidden');
        }
    });

    updateCount();
}

// ============================================
// Run on page load
// ============================================
window.addEventListener('DOMContentLoaded', function () {
    hideEmptySlots();
    updateCount();
});

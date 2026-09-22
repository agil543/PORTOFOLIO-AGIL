// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Notification Helper (replaces alert)
function showNotification(title, message) {
    const notif = document.getElementById('custom-notification');
    document.getElementById('notif-title').innerText = title;
    document.getElementById('notif-desc').innerText = message;
    
    notif.classList.remove('translate-y-32', 'opacity-0');
    setTimeout(() => {
        notif.classList.add('translate-y-32', 'opacity-0');
    }, 4000);
}


// CV Download handler (Mengarah langsung ke file PDF di folder asset)
function downloadCV() {
    // Tentukan lokasi file PDF CV Anda di dalam folder asset
    const cvUrl = 'asset/CV-Agil.pdf';
    
    // Membuat elemen link tersembunyi untuk memicu unduhan otomatis
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV-Mohammad-Agil-Hafizh.pdf'; // Nama file saat terunduh
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showNotification('Unduh CV', 'File Curriculum Vitae berhasil diunduh.');
}

// Contact Form Submission Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    showNotification('Pesan Terkirim!', `Terima kasih ${name}, pesan Anda telah berhasil dikirim.`);
    document.getElementById('contact-form').reset();
}

// Project Modal Handlers
function openProjectModal(title, desc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('project-modal').classList.remove('hidden');
}

function closeProjectModal() {
    document.getElementById('project-modal').classList.add('hidden');
}

// Close modal on backdrop click
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeProjectModal();
    }
}
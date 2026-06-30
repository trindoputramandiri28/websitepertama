/* =====================================================
   SCRIPT.JS
   BAGIAN 1
   LOADER • STICKY HEADER • MOBILE MENU
===================================================== */

"use strict";

/* =====================================
   LOADER
===================================== */

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/* =====================================
   STICKY HEADER
===================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 80) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* =====================================
   MOBILE MENU
===================================== */

const menuButton = document.querySelector(".menu-toggle");

const navMenu = document.querySelector("nav ul");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", function () {

        navMenu.classList.toggle("show");

        menuButton.classList.toggle("active");

    });

}

/* =====================================
   TUTUP MENU SAAT LINK DIKLIK
===================================== */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        if (navMenu) {

            navMenu.classList.remove("show");

        }

        if (menuButton) {

            menuButton.classList.remove("active");

        }

    });

});

/* =====================================================
   SCRIPT.JS
   BAGIAN 2
   SMOOTH SCROLL • ACTIVE MENU • BACK TO TOP
===================================================== */

/* =====================================
   SMOOTH SCROLL
===================================== */

const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {

    link.addEventListener("click", function(e){

        const targetId = this.getAttribute("href");

        if(targetId === "#") return;

        const target = document.querySelector(targetId);

        if(target){

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});

/* =====================================
   ACTIVE MENU
===================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if(href === "#" + current){

            link.classList.add("active");

        }

    });

});

/* =====================================
   BACK TO TOP
===================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function(){

    if(!backToTop) return;

    if(window.scrollY > 500){

        backToTop.style.display = "block";

    }else{

        backToTop.style.display = "none";

    }

});

if(backToTop){

    backToTop.addEventListener("click", function(){

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/* =====================================================
   SCRIPT.JS
   BAGIAN 3
   GALERI LIGHTBOX
===================================================== */

/* =====================================
   LIGHTBOX
===================================== */

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

/* =====================================
   BUKA LIGHTBOX
===================================== */

function openLightbox(imageSrc){

    if(!lightbox || !lightboxImage) return;

    lightbox.style.display = "flex";

    lightboxImage.src = imageSrc;

    document.body.style.overflow = "hidden";

}

/* =====================================
   TUTUP LIGHTBOX
===================================== */

function closeLightbox(){

    if(!lightbox) return;

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

}

/* =====================================
   KLIK AREA GELAP UNTUK MENUTUP
===================================== */

if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target === lightbox){

            closeLightbox();

        }

    });

}

/* =====================================
   TOMBOL ESC
===================================== */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeLightbox();

    }

});

/* =====================================
   ANIMASI SAAT MEMBUKA
===================================== */

if(lightboxImage){

    lightboxImage.addEventListener("load", function(){

        lightboxImage.style.opacity = "0";

        lightboxImage.style.transform = "scale(.9)";

        setTimeout(function(){

            lightboxImage.style.transition = ".35s ease";

            lightboxImage.style.opacity = "1";

            lightboxImage.style.transform = "scale(1)";

        },50);

    });

}

/* =====================================================
   SCRIPT.JS
   BAGIAN 4
   FORM PEMESANAN → WHATSAPP ADMIN 1
===================================================== */

/* =====================================
   NOMOR ADMIN 1
===================================== */

const admin1Number = "6281382256017";

/* =====================================
   KIRIM KE ADMIN 1
===================================== */

function kirimWA1() {

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const unit = document.getElementById("unitSelect").value;
    const lama = document.getElementById("lama").value.trim();
    const lokasi = document.getElementById("lokasi").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const catatan = document.getElementById("catatan").value.trim();

    /* ==========================
       VALIDASI
    ========================== */

    if (nama === "" || telepon === "" || lokasi === "") {

        alert("Silakan lengkapi Nama, Nomor WhatsApp, dan Lokasi Proyek.");

        return;

    }

    /* ==========================
       FORMAT PESAN
    ========================== */

    const pesan =
`Halo Admin 1,

Saya ingin melakukan pemesanan sewa alat berat.

==========================
Nama          : ${nama}
WhatsApp      : ${telepon}
Unit          : ${unit}
Lama Sewa     : ${lama}
Lokasi Proyek : ${lokasi}
Tanggal Mulai : ${tanggal}
==========================

Catatan:
${catatan || "-"}

Mohon informasi mengenai harga, ketersediaan unit, dan proses pemesanannya.

Terima kasih.`;

    /* ==========================
       BUKA WHATSAPP
    ========================== */

    const url = `https://wa.me/${admin1Number}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

}

/* =====================================================
   SCRIPT.JS
   BAGIAN 5
   FORM PEMESANAN → WHATSAPP ADMIN 2
===================================================== */

/* =====================================
   NOMOR ADMIN 2
===================================== */

const admin2Number = "6285882719261";

/* =====================================
   KIRIM KE ADMIN 2
===================================== */

function kirimWA2() {

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();
    const unit = document.getElementById("unitSelect").value;
    const lama = document.getElementById("lama").value.trim();
    const lokasi = document.getElementById("lokasi").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const catatan = document.getElementById("catatan").value.trim();

    /* ==========================
       VALIDASI
    ========================== */

    if (nama === "" || telepon === "" || lokasi === "") {

        alert("Silakan lengkapi Nama, Nomor WhatsApp, dan Lokasi Proyek.");

        return;

    }

    /* ==========================
       FORMAT PESAN
    ========================== */

    const pesan =
`Halo Admin 2,

Saya ingin melakukan pemesanan sewa alat berat.

==========================
Nama          : ${nama}
WhatsApp      : ${telepon}
Unit          : ${unit}
Lama Sewa     : ${lama}
Lokasi Proyek : ${lokasi}
Tanggal Mulai : ${tanggal}
==========================

Catatan:
${catatan || "-"}

Mohon informasi mengenai harga, ketersediaan unit, dan proses pemesanannya.

Terima kasih.`;

    /* ==========================
       BUKA WHATSAPP
    ========================== */

    const url = `https://wa.me/${admin2Number}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank");

}

/* =====================================================
   SCRIPT.JS
   BAGIAN 6
   ANIMASI SCROLL • ACTIVE NAVBAR • INIT
===================================================== */

"use strict";

/* =====================================
   ANIMASI SCROLL
===================================== */

const animatedElements = document.querySelectorAll(
    ".card, .unit-card, .gallery-item, .testimonial-card, .admin-card"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    animatedElements.forEach(function (element) {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}

animatedElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all .7s ease";

});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =====================================
   HOVER EFFECT
===================================== */

const buttons = document.querySelectorAll(
    ".btn,.btn2,.btn-unit,.wa-btn"
);

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", function () {

        button.style.transform = "translateY(0)";

    });

});

/* =====================================
   AKTIFKAN MENU BERDASARKAN SECTION
===================================== */

const navItems = document.querySelectorAll("nav ul li a");

function activeMenu() {

    let current = "";

    document.querySelectorAll("section").forEach(function(section){

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

/* =====================================
   PRELOAD GAMBAR
===================================== */

window.addEventListener("load", function(){

    document.querySelectorAll("img").forEach(function(img){

        if(img.complete){

            img.classList.add("loaded");

        }else{

            img.onload = function(){

                img.classList.add("loaded");

            }

        }

    });

});

/* =====================================
   COPYRIGHT YEAR OTOMATIS
===================================== */

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    "&copy; " +
    new Date().getFullYear() +
    " Sewa Alat Berat Jakarta. All Rights Reserved.";

}

/* =====================================
   KONFIRMASI SCRIPT
===================================== */

console.log("Website Sewa Alat Berat Premium berhasil dimuat.");

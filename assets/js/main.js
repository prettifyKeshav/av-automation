$(function () {
    if (!$('header').is('.header-fixed')) {
        $(window).on('scroll', function () {
            $(this).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');
        });
        $(window).scrollTop() > 100 ? $('header').addClass('header-fixed') : $('header').removeClass('header-fixed');
    }

    //


    const formControls = $(".form-control");
    formControls.on('focus input change blur', throttle(handleForm));
    formControls.each(function () {
        handleForm.call(this);
    });

    // auto fill label up 
    const labelInput = $("input,textarea");
    labelInput.on('change', function () {
        if ($(this).val() !== "") {
            $(this).addClass("valid");
        } else {
            $(this).removeClass("valid");
        }
    });

    niceSelect($);
    $('select').niceSelect();

    // Data-animate function call
    handleAnimations()
    //

    adjustWhatsAppUrls();
    $(window).resize(function () {
        adjustWhatsAppUrls();
    });

    //

    startCountAnimation();
    $(window).scroll(function () {
        startCountAnimation();
    })

    //

    // Image to SVG Converter =====================================>>>
    document.querySelectorAll('img.svg').forEach(img => {
        fetch(img.src)
            .then(response => response.text())
            .then(data => {
                const svg = new DOMParser().parseFromString(data, 'image/svg+xml').querySelector('svg');
                if (svg) {
                    svg.classList.add('svg');
                    img.replaceWith(svg);
                }
            });
    });
    // Image to SVG Converter =====================================>>>

    //
    $(document).on('click', '.tab-nav [data-tab]:not(.disabled-btn)', function () {
        var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');
        $('.tab-nav-content >*[data-tab= ' + tab + ']').addClass('active').siblings().removeClass('active');
    });
    //


    // =============== PRODUCT SIFTING =================== //
    // $(document).on('click', '.product-tab-nav [data-attr]:not(.disabled-btn)', function () {
    //     var tab = $(this).addClass('active').siblings().removeClass('active').end().data('tab');
    //     $('.product-tab-nav-content >*[data-attr= ' + tab + ']').addClass('active').siblings().removeClass('active');
    // });
    // =============== PRODUCT SIFTING =================== //


    $(document).on('click', '[data-scrollTo]', function () {
        headerheight = parseInt($(':root').css('--headerfixed')) + parseInt($(':root').css('--headerstripfixed'));
        var section = $(this).attr('data-scrollTo');
        if (section) {
            $('html, body').stop().animate({
                scrollTop: $(section).offset().top - headerheight
            }, 1000);
        }
    });

    //

    $(document).on('click', '[data-model]', function () {
        var model = $(this).attr('data-model');
        openModel(model);
    });

    $(document).on('click', '.overlay,.close', function () {
        closeModel();
    });

    //

    $('input[type="file"].form-control').on('change', function () {
        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
        if (fileName) {
            $(this).siblings('.file-name').css('--filenameinitial', `"${fileName}"`);
        } else {
            $(this).siblings('.file-name').css('--filenameinitial', 'var(--filename)');
        }
    });

    //
    $(document).on('click', '[data-video]', function () {
        var src = $(this).attr('data-video');
        if (src.includes('youtube.com/embed/')) {
            var videoId = src.split('embed/')[1].split('?')[0];
            src += '&autoplay=1&loop=1&playlist=' + videoId;
            $('#iframe1').attr('src', src);
        }
        else {
            $('#iframe1').attr('src', src);
        }
        $('.video-pop').addClass('is-open');
    });

    $('.close-video').on('click', function () {
        $('#iframe1').attr('src', '');
        $('.video-pop').removeClass('is-open');
        $('.overlay').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);
    });
    //

    // ============ hamburger close on slide- START ================>>>>
    $('#solutionsHamClose').on('click', function () {
        $('.overlay').removeClass('is-open');
        $('.ham-pop').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);
    });

    $('#productHamClose').on('click', function () {
        $('.overlay').removeClass('is-open');
        $('.ham-pop').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);
    });
    // ============ hamburger END ================>>>>


    // ============ SCROLL TO SECTION START ================>>>>
    // var headerheight = parseInt($(':root').css('--headerheight'));
    function scrollToSection() {
        var pathname = window.location.hash.slice(1);
        if (pathname) {
            $('html, body').stop().animate({
                scrollTop: $('#' + pathname).offset().top - 152
            }, 0.1); // 600ms animation
        }
    }
    scrollToSection();
    $(window).on('hashchange', function () {
        scrollToSection();
        if (typeof closeModel === "function") {
            closeModel();
        }
    });
    // ============ SCROLL TO SECTION END ================>>>>


    // ============ ABOUT POPUP START ================>>>>
    $(document).on('click', '[data-video]', function () {
        $('.about-pop').addClass('is-open');
    });
    $('.close-about-pop').on('click', function () {
        $('.about-pop').removeClass('is-open');
        $('.overlay').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);

    });
    // ============ ABOUT POPUP END ================>>>>

    // ============ PRODUCT POPUP START ================>>>>
    $(document).on('click', '[data-video]', function () {
        $('.product-pop').addClass('is-open');
    });
    $('.close-product-pop').on('click', function () {
        $('.product-pop').removeClass('is-open');
        $('.overlay').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);

    });
    // ============ PRODUCT POPUP END ================>>>>

    // ============ CONTACT POPUP START ================>>>>
    $(document).on('click', '[data-video]', function () {
        $('.contact-pop').addClass('is-open');
    });
    $('.close-contact-pop').on('click', function () {
        $('.contact-pop').removeClass('is-open');
        $('.overlay').removeClass('is-open');
        $(`body`).removeClass(`overflow-hidden`);

    });
    // ============ CONTACT POPUP END ================>>>>

    $('.summery-detail-content .col:has(article) .title').click(function () {
        var $parentCol = $(this).parent('.col');
        $('.summery-detail-content .col').not($parentCol).find('article').stop().slideUp();
        $('.summery-detail-content .col').not($parentCol).removeClass('active');
        $parentCol.toggleClass('active');
        $(this).siblings('article').stop().slideToggle();
    });

    //convert tab nav to dropdown in mobile

    if ($(window).width() < 991) {
        $('.tab-filter').each(function () {
            var $this = $(this);
            setTimeout(function () {
                var activeText = $this.find('li.active').text();
                $this.find('ul').before(`<span class="tab-filter-span">${activeText}</span>`);
            }, 0);

            $(document).on('click', '.tab-filter-span', function () {
                $(this).siblings('ul').stop().slideToggle();
            })
        });

        $(document).on('click', function (e) {
            if (!$(e.target).closest('.tab-filter-span').length) {
                $('.tab-filter ul').stop().slideUp();
            }
        });
    }

    // ===========================================================================================================
    $('.hasDropdown').click(function (e) {
        e.stopPropagation(); // Prevents event bubbling

        var slideMenu = $(this).find('.dropdown-menu-ham');
        var plusIcon = $(this).find('.plu-ico'); // Get the specific .plu-ico inside clicked .hasDropdown

        // Close other open menus and remove active class
        $('.dropdown-menu-ham').not(slideMenu).slideUp();
        $('.hasDropdown').not(this).removeClass('active');
        $('.plu-ico').not(plusIcon).removeClass('active'); // Remove active from other icons

        // Toggle active class for the clicked menu and icon
        $(this).toggleClass('active');
        plusIcon.toggleClass('active'); // Only add/remove active for the clicked plu-ico

        slideMenu.stop().slideToggle();
    });
    // ===========================================================================================================

    $('.hasDropdownChild').click(function (e) {
        e.stopPropagation(); // Prevents event bubbling

        var slideMenu = $(this).find('.dropdown-menu-ham-child');
        var plusIcon = $(this).find('.plu-ico-child'); // Get the specific .plu-ico inside clicked .hasDropdown

        // Close other open menus and remove active class
        $('.dropdown-menu-ham-child').not(slideMenu).slideUp();
        $('.hasDropdownChild').not(this).removeClass('active');
        $('.plu-ico-child').not(plusIcon).removeClass('active'); // Remove active from other icons

        // Toggle active class for the clicked menu and icon
        $(this).toggleClass('active');
        plusIcon.toggleClass('active'); // Only add/remove active for the clicked plu-ico

        slideMenu.stop().slideToggle();
    });


    // Home-Swiper==========================>>>>
    new Swiper(".homeSwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 9000,
            disableOnInteraction: false,
        },
    });
    // Home-Swiper==========================>>>>


    new Swiper('.options-available-slider .swiper', {
        loop: false,
        navigation: {
            prevEl: '.options-available-prev',
            nextEl: '.options-available-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });

    // industries-slider start
    new Swiper('.industries-swiper', {
        loop: false,
        navigation: {
            prevEl: '.industries-swiper-prev',
            nextEl: '.industries-swiper-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });
    // industries-slider End

    // industries-slider start
    new Swiper('.Infrastructure-swiper', {
        loop: true,
        centeredSlides: true,
        navigation: {
            prevEl: '.Infrastructure-swiper-prev',
            nextEl: '.Infrastructure-swiper-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 1.5,
                spaceBetween: 50,
                speed: 1000,
            },
            992: {
                slidesPerView: 1.9,
                spaceBetween: 100,
                speed: 1000,
            },
            1300: {
                slidesPerView: 2.3,
                spaceBetween: 100,
                speed: 1000,
            }
        }
    });
    // industries-slider End



    // MORE SLIDER START ======================>
    new Swiper('.project-detail-slider', {
        loop: false,
        navigation: {
            prevEl: '.project-detail-prev',
            nextEl: '.project-detail-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });
    // MORE  SLIDER END ======================>

    // About  SLIDER START ======================>
    new Swiper('.about-slider1', {
        loop: false,
        navigation: {
            prevEl: '.about-prev1',
            nextEl: '.about-next1',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2.2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 3.6,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });

    new Swiper('.about-slider2', {
        loop: false,
        navigation: {
            prevEl: '.about-prev2',
            nextEl: '.about-next2',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2.2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 3.6,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });
    // About  SLIDER END ======================>


    // MORE BLOG DETAILS PAGE SLIDER START ======================>
    new Swiper('.blogs-swiper', {
        loop: false,
        navigation: {
            prevEl: '.blogs-swiper-prev',
            nextEl: '.blogs-swiper-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });

    // MORE BLOG DETAILS PAGE SLIDER END ======================>




    // Review Slider Start ====================>
    new Swiper('.review-slider', {
        loop: false,
        navigation: {
            prevEl: '.review-prev',
            nextEl: '.review-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 500,
            },
            675: {
                slidesPerView: 2.2,
                spaceBetween: 12,
                speed: 1000,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
                speed: 1000,
            }
        }
    });
    // Review Slider End ====================>


    // center slide START ======================>
    const swiper = new Swiper('.Leadership-slider', {
        loop: true,
        navigation: {
            prevEl: '.Leadership-prev',
            nextEl: '.Leadership-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                // centeredSlides: true,
                spaceBetween: 20,
                speed: 1000,
            },
            992: {
                slidesPerView: 1.6,
                centeredSlides: true,
                spaceBetween: 20,
                speed: 1000,
            }
        },
        on: {
            slideChangeTransitionEnd: function () {
                $('.Leadership-slider .swiper-slide').removeClass('custom-active custom-prev custom-next');
                const activeSlide = this.slides[this.activeIndex];
                const prevSlide = this.slides[this.activeIndex - 1];
                const nextSlide = this.slides[this.activeIndex + 1];
                if (activeSlide) activeSlide.classList.add('custom-active');
                if (prevSlide) prevSlide.classList.add('custom-prev');
                if (nextSlide) nextSlide.classList.add('custom-next');
            },
            init: function () {
                const swiperInstance = this;
                setTimeout(() => {
                    swiperInstance.emit('slideChangeTransitionEnd');
                }, 0);
            }
        }
    });

    $('.Leadership-slider').on('click', '.swiper-slide', function () {
        const index = $(this).index();
        swiper.slideTo(index);
    });
    // center slide START ======================>

    $(document).ready(function () {
        $('.information-slider .swiper-slide .viewprofile').on('click', function () {
            var slide = $(this).closest('.swiper-slide');

            var imageUrl = slide.find('figure img').attr('src');
            var name = slide.find('.user-heading p:first-child').text();
            var degination = slide.find('.user-heading p:last-child').text();
            var text = slide.find('.desc p').text();
            var socialIcons = slide.find('.icon a').html();

            $('.information-pop .user-image img').attr('src', imageUrl);
            $('.information-pop .user-name p').html('<b> ' + name + '</b> ');
            $('.information-pop .degination p').html(degination);
            $('.information-pop .description-text p').text(text);
            $('.information-pop .social-icon').html(socialIcons);
        });
    });

    $(document).ready(function () {
        $('.information-slider-second .swiper-slide a').on('click', function () {
            var slide = $(this).closest('.swiper-slide');

            var imageUrl = slide.find('figure img').attr('src');
            var name = slide.find('figcaption h5').text();
            var degination = slide.find('figcaption p').text();
            var text = slide.find('.desc p').text();
            var socialIcons = slide.find('.icon a').html();

            $('.information-pop .user-image img').attr('src', imageUrl);
            $('.information-pop .user-name p').html('<b> ' + name + '</b> ');
            $('.information-pop .degination p').html(degination);
            $('.information-pop .description-text p').text(text);
            $('.information-pop .social-icon').html(socialIcons);
        });
    });

    // About Us Slider One ===========================->
    new Swiper(".proficiencies-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".proficiencies-next",
            prevEl: ".proficiencies-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1.2
            },
            0: {
                spaceBetween: 20,
                slidesPerView: 1.2
            }
        }
    });


    // home page banner slider
    //
    new Swiper(".proejct-swiper-slider", {
        pagination: {
            el: '.proejct-slider-dots',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 1000,
                centeredSlides: true,
            },
            520: {
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 1000,
                centeredSlides: true,
            },
            769: {
                slidesPerView: 1,
                spaceBetween: 50,
                speed: 1000,
                centeredSlides: true,
            },
            991: {
                slidesPerView: 1,
                spaceBetween: 70,
                speed: 1000,
                centeredSlides: true,
            },
            1100: {
                slidesPerView: 1,
                spaceBetween: 80,
                speed: 1000,
                centeredSlides: true
            }
        }
    });
    // home page banner slider end
    //==============================
    const body = document.querySelector("body");
    const header = document.querySelector("header");

    if (body.classList.contains("home-page") && header.classList.contains("header-fill")) {
        header.classList.remove("header-fill");
    }
    //==============================

    // testimonials slider
    new Swiper(".testimonials-slider", {
        pagination: {
            el: '.testimonials-dots',
            clickable: true,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 1000,
                centeredSlides: true,
            },
            520: {
                slidesPerView: 1,
                spaceBetween: 10,
                speed: 1000,
                centeredSlides: true,
            },
            769: {
                slidesPerView: 2,
                spaceBetween: 20,
                speed: 1000,
                centeredSlides: true,
            },
            991: {
                slidesPerView: 2.9,
                spaceBetween: 30,
                speed: 1000,
                centeredSlides: true,
            },
            1100: {
                slidesPerView: 2.9,
                spaceBetween: 40,
                speed: 1000,
                centeredSlides: true
            }
        }
    });
    // testimonials end

    //Sliders

    function commonSlider1(containerSelector, prevButtonSelector, nextButtonSelector) {
        return new Swiper(containerSelector, {
            loop: false,
            navigation: {
                prevEl: prevButtonSelector,
                nextEl: nextButtonSelector,
            },
            a11y: {
                enabled: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 12,
                    speed: 500,
                },
                675: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                    speed: 2000,
                },
                991: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    speed: 2000,
                },
                1153: {
                    slidesPerView: 4,
                    spaceBetween: 23,
                    speed: 2000,
                }
            }
        });
    }

    commonSlider1('.home-logo-slider', '.home-logo-prev', '.home-logo-next');
    commonSlider1('.more-blog-slider', '.more-blog-prev', '.more-blog-next')
    commonSlider1('.career-gallery-slider', '.career-gallery-prev', '.career-gallery-next')

    new Swiper('.logo-slider', {
        loop: true,
        a11y: {
            enabled: false,
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 16,
                speed: 3000,
            },
            521: {
                slidesPerView: 3,
                spaceBetween: 16,
                speed: 3000,
            },
            675: {
                slidesPerView: 3,
                spaceBetween: 16,
                speed: 3000,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 16,
                speed: 3000,
            },
            1153: {
                slidesPerView: 5,
                spaceBetween: 20,
                speed: 3000,
            }
        }
    });

    new Swiper('.product-preview-slider', {
        loop: false,
        speed: 500,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: '.product-preview-prev',
            nextEl: '.product-preview-next',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            675: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            991: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            1153: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            }
        }
    });

    new Swiper('.detail-slider', {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".detail-pagination",
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            675: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            991: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            },
            1153: {
                slidesPerView: 1,
                spaceBetween: 100,
                speed: 1000,
            }
        }
    });

    // filterswiper('.product-preview-slider', '.product-nav')

    new Swiper('.certificate-slider', {
        loop: true,
        speed: 2000,
        navigation: {
            prevEl: '.certificate-prev',
            nextEl: '.certificate-next',
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 10,
                speed: 1500,
                centeredSlides: true,
                centeredSlidesBounds: true
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
                speed: 1500,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 50,
                speed: 2000,
                centeredSlides: true,
            }
        }
    });

    new Swiper('.more-products-slider', {
        loop: false,
        navigation: {
            prevEl: '.more-products-prev',
            nextEl: '.more-products-next',
        },
        a11y: {
            enabled: false,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 12,
                speed: 500,
            },
            675: {
                slidesPerView: 2,
                spaceBetween: 12,
                speed: 2000,
            },
            991: {
                slidesPerView: 4,
                spaceBetween: 30,
                speed: 2000,
            },
            1153: {
                slidesPerView: 5,
                spaceBetween: 42,
                speed: 2000,
            }
        }
    });


    new Swiper('.about-journey-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 1500,
        loop: false,
        pagination: {
            el: '.about-journey-pagination',
            clickable: true,
            bulletClass: `journey-btn`,
            bulletActiveClass: 'active',
            renderBullet: function (index, className) {
                const year = $('.about-journey-slider .swiper-slide').eq(index).attr('data-year');
                return `<button type="button" class="${className}"><span></span><p>${year}</p></button>`;
            }
        },
        on: {
            slideChange: function () {
                const $bullets = $('.about-journey-pagination .journey-btn');
                $bullets.removeClass('prev next');
                $bullets.filter('.journey-btn.active').prevAll().addClass('prev');
                $bullets.filter('.journey-btn.active').nextAll().addClass('next');
            }
        },
        navigation: {
            prevEl: '.about-journey-prev',
            nextEl: '.about-journey-next',
        },
    });
    // Bedge Slider End

    // CUSTOM DROPDOWN ADD CLASS AND REMOVE ===================================
    const menuItems = document.querySelectorAll(".left-menu ul > .ll");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            menuItems.forEach(li => {
                li.classList.remove("active");
                const submenu = li.querySelector(".left-submenu");
                if (submenu) submenu.classList.remove("visible");
            });
            item.classList.add("active");
            const submenu = item.querySelector(".left-submenu");
            if (submenu) submenu.classList.add("visible");
        });
    });
    // CUSTOM DROPDOWN ADD CLASS AND REMOVE ===================================


    //<!-- Fixed Navbar active tab =========================== -->
    const activeTabs = document.querySelectorAll(".fixed-navbar ul li");
    activeTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            activeTabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });
    //  Fixed Navbar active tab =========================== -->

    // Search dropdown script here=
    $(function () {
        $searchWrap = $('.search_wrap')
        $searchInput = $('.search_input')
        $searchDropdown = $('.search_dropdown_menu')
        $searchBtn = $('.search_btn')
        $searchOpenImg = $('.search-open-img')
        $searchCloseImg = $('.search-close-img')
        $searchFromGroup = $('search-bar form-group')


        $searchInput.on('input', function () {
            if ($(this).val() != '') {
                $searchDropdown.slideDown();
                $searchDropdown.addClass('is-open');
                $searchOpenImg.hide();
                $searchCloseImg.show();
                $searchBtn.addClass('close-search-btn');
            }
            else {
                $searchDropdown.stop().slideUp();
                $searchDropdown.removeClass('is-open');
                $searchOpenImg.show();
                $searchCloseImg.hide();
                $searchBtn.removeClass('close-search-btn');
            }
        })

        $(".search_input").on("input", function () {
            const $parent = $(this).closest(".form-group");

            if ($(this).val().trim() !== "") {
                $parent.addClass("radius-open");
            } else {
                $parent.removeClass("radius-open");
            }
        });


        $searchInput.on('click', function () {
            $searchWrap.addClass('search_wrap_active')
        })
        $searchInput.on('blur', function () {
            if ($(this).val() == '') {
                $searchWrap.removeClass('search_wrap_active')
            }
        })
        $(document).on('click', '.close-search-btn', function () {
            $searchInput.val('');
            $searchDropdown.stop().slideUp();
            $searchDropdown.removeClass('is-open');
            $searchCloseImg.hide();
            $searchOpenImg.show();
            $searchBtn.removeClass('close-search-btn');
            $searchWrap.removeClass('search_wrap_active')
        })
    })


    // For Header Search=========================
    $(function () {

        const $headerSearchWrap = $('.header_search_wrap');
        const $headerSearchInput = $('.header_search_input');
        const $headerSearchDropdown = $('.header_search_dropdown_menu');
        const $headerSearchBtn = $('.header_search_btn');
        const $headerOpenImg = $('.header-search-open-img');
        const $headerCloseImg = $('.header-search-close-img');

        // Input typing
        $headerSearchInput.on('input', function () {
            const $parent = $(this).closest(".header-form-group");

            if ($(this).val().trim() !== '') {
                $headerSearchDropdown.stop().slideDown().addClass('is-open');
                $headerOpenImg.hide();
                $headerCloseImg.show();
                $headerSearchBtn.addClass('close-search-btn');
                $parent.addClass("radius-open");
            } else {
                $headerSearchDropdown.stop().slideUp().removeClass('is-open');
                $headerOpenImg.show();
                $headerCloseImg.hide();
                $headerSearchBtn.removeClass('close-search-btn');
                $parent.removeClass("radius-open");
            }
        });

        // Focus
        $headerSearchInput.on('focus', function () {
            $headerSearchWrap.addClass('search_wrap_active');
        });

        // Blur
        $headerSearchInput.on('blur', function () {
            if ($(this).val() === '') {
                $headerSearchWrap.removeClass('search_wrap_active');
            }
        });

        // Close button click
        $headerSearchBtn.on('click', function () {
            if ($headerSearchBtn.hasClass('close-search-btn')) {
                $headerSearchInput.val('');
                $headerSearchDropdown.stop().slideUp().removeClass('is-open');
                $headerOpenImg.show();
                $headerCloseImg.hide();
                $headerSearchBtn.removeClass('close-search-btn');
                $headerSearchWrap.removeClass('search_wrap_active');
                $('.header-form-group').removeClass('radius-open');
            }
        });

    });
});

// CUSTOM DROPDOWN ADD CLASS AND REMOVE ===================================
document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector(".catSubCatHasDropdown");
    if (!dropdown) return;
    const categoryList = dropdown.querySelector(".categories ul");
    const categories = dropdown.querySelectorAll(".categories li");
    const subcats = dropdown.querySelectorAll(".subCategories .subcat");
    // Helper: remove active classes
    function resetActive() {
        categories.forEach(li => li.classList.remove("active"));
        subcats.forEach(sc => sc.classList.remove("active"));
    }
    // Event delegation for hover
    categoryList.addEventListener("mouseover", function (e) {
        const li = e.target.closest("li[data-target]");
        if (!li) return;
        const targetId = li.getAttribute("data-target");
        const targetSubcat = dropdown.querySelector(`#${targetId}`);
        if (!targetSubcat) return;
        resetActive();
        li.classList.add("active");
        targetSubcat.classList.add("active");
    });
});
// CUSTOM DROPDOWN ADD CLASS AND REMOVE ===================================

function clearFormWhenClosing() {
    const closeButton = document.querySelector('.model.enquire-pop .close');
    if (!closeButton) {
        console.warn("Close button not found");
        return;
    }
    closeButton.addEventListener('click', () => {
        const modal = document.querySelector('.model.enquire-pop');
        if (!modal) return;
        const inputs = modal.querySelectorAll('.form-group input, textarea');
        inputs.forEach(input => {
            input.value = '';
            input.classList.remove('error', 'valid', 'dirty', 'touched');
        });
    });
}
clearFormWhenClosing();


// function filterOpenClose(){
//     const filter_group = document.querySelectorAll('.filter-option-group')
//     const inputs = document.querySelectorAll('.filter-option-group .filter-option-header input')
//     inputs.forEach((input)=>{
//         // filter_group.forEach((cl)=>{
//         //     cl.classList.remove("open")
//         // })
//         this.closest('.filter-option-group').classList.toggle('open');
//         input.addEventListener("change", ()=>{
//             input.classList.add("clicked")
//         })
//     })
// }
// filterOpenClose()


// function filterOpenClose() {
//     const radioInputs = document.querySelectorAll('.filter-option-group .filter-option-header input');

//     radioInputs.forEach((input) => {

//         input.addEventListener('change', function () {
//             document.querySelectorAll('.filter-option-group').forEach(group => group.classList.remove('open'));
//             this.closest('.filter-option-group').classList.toggle('open');
//         });

//         // input.addEventListener('change', function () {
//         //     const parentGroup = this.closest('.filter-option-group');

//         //     // remove open from all groups (optional – accordion behavior)
//         //     document.querySelectorAll('.filter-option-group').forEach(group => group.classList.remove('open'));
            
//         //     // add open only to clicked one
//         //     parentGroup.classList.add('open');
//         // });
//     });
// }
// filterOpenClose();


function filterOpenClose() {
    const filterGroups = document.querySelectorAll('.filter-option-group');

    filterGroups.forEach(group => {
        const header = group.querySelector('.filter-option-header');
        const body = group.querySelector('.filter-options-body');

        header.addEventListener('click', () => {

            // Close all others
            filterGroups.forEach(g => {
                g.classList.remove('open');
                g.querySelector('.filter-options-body').style.display = 'none';
            });

            // Toggle current
            const isOpen = group.classList.contains('open');

            if (!isOpen) {
                group.classList.add('open');
                body.style.display = 'block';
            } else {
                group.classList.remove('open');
                body.style.display = 'none';
            }
        });
    });
}

// Run after DOM loads
document.addEventListener('DOMContentLoaded', filterOpenClose);










//   if ($(window).width() < 991) {
//     $(".tab-filter").each(function () {
//       var $this = $(this);
//       setTimeout(function () {
//         var activeText = $this.find("li.active").text();
//         $this
//           .find("ul")
//           .before(`<span class="tab-filter-span">${activeText}</span>`);
//       }, 0);

//       $(document).on("click", ".tab-filter-span", function () {
//         $(this).siblings("ul").stop().slideToggle();
//       });
//     });

//     $(document).on("click", function (e) {
//       if (!$(e.target).closest(".tab-filter-span").length) {
//         $(".tab-filter ul").stop().slideUp();
//       }
//     });
//   }


// // filter product
// $(document).ready(function () {
//   const toggleActiveState = ($element, contentSelector, className) => {
//     $(className).not($element).removeClass("active").find(contentSelector).slideUp(300);
//     $element.toggleClass("active").find(contentSelector).slideToggle(300);
//   };

//   // $(".category:first").addClass("active").find(".category-content").slideDown(300);
//   // $(".filter-option-group:first").addClass("active").find(".filter-options").slideDown(300);

//   $(".category-header").click(function () {
//     const $category = $(this).closest(".category");
//     toggleActiveState($category, ".category-content", ".category");

//     $(".category-header svg").removeClass("active");
//     $(this).find("svg").toggleClass("active");
//   });

//   $(".filter-option-header").click(function (e) {
//     e.stopPropagation();
//     const $group = $(this).closest(".filter-option-group");
//     toggleActiveState($group, ".filter-options", ".filter-option-group");

//     $(".filter-option-header .icon").removeClass("active");
//     $(this).find(".icon").toggleClass("active");
//   });
// });



// $(document).ready(function () {
//     const pathSegments = window.location.pathname.split('/').filter(Boolean);
//     const secondLastSegment = pathSegments[pathSegments.length - 2];
//     const lastSegment = pathSegments[pathSegments.length - 1];
//     console.log(pathSegments)
    
//     console.log(secondLastSegment)
//     console.log(lastSegment)
    
    
// });

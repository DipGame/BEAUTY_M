document.addEventListener("DOMContentLoaded", function () {

    function addClass(el, class_name) {
        el.classList.add(class_name);
    }
    function removeClass(el, class_name) {
        el.classList.remove(class_name);
    }
    function toggleClass(el, class_name) {
        el.classList.toggle(class_name);
    }

    if (document.querySelector('.left_fix_link')) {
        addClass(document.querySelector('.left_fix_link'), 'vis');
    }

    if (document.querySelector('.search')) {
        var searchTop = document.querySelector('.search');
        var btnCloseSearch = searchTop.querySelector('.close_svg');
        var btnOpenSearch = searchTop.querySelector('.cont_1');
        var hiddCont = document.querySelector('.header_cont_bottom .hidd');
        var headerContMob = document.querySelector('.header_cont_bottom .header_cont_mob');
        var headerContBottomHidden = document.querySelector('.header_cont_bottom_hidden');

        btnCloseSearch.addEventListener('click', () => {
            removeClass(hiddCont, "invise");
            removeClass(headerContMob, "invise");
            removeClass(headerContBottomHidden, "invise");
            removeClass(searchTop, "open");
        })

        btnOpenSearch.addEventListener('click', () => {
            addClass(hiddCont, "invise");
            addClass(headerContMob, "invise");
            addClass(headerContBottomHidden, "invise");
            addClass(searchTop, "open");
        })
    }

    

    if (document.querySelector('[data-max-line]')) {
        const feedText = document.querySelectorAll('[data-max-line]');
        feedText.forEach(element => {
            let maxLine = element.getAttribute('data-max-line');
            let dopTitle = document.querySelector(`[data-for-max-line-text="${element.id}"]`);
            const el = element; // Замените 'yourIdHere' на ID вашего элемента
            const lineHeight = parseInt(window.getComputedStyle(el).lineHeight); // Определяем высоту строки
            const lineCount = Math.ceil(el.scrollHeight / lineHeight) - 1;

            if (lineCount > maxLine) {
                element.setAttribute("style", `-webkit-line-clamp:${maxLine}`);
                if (dopTitle) {
                    removeClass(dopTitle, 'invise');
                    dopTitle.addEventListener('click', () => {
                        if (element.closest(".swiper-slide")) {
                            addClass(element.closest(".swiper-slide"), 'v2');
                        }
                        addClass(dopTitle, 'invise');
                        element.setAttribute("style", `-webkit-line-clamp:none`);
                    })
                }
            }
        });
    }

    if (document.querySelector('[data-max-card]')) {

        const sectDataInvise = document.querySelectorAll('[data-max-card]');
        sectDataInvise.forEach(sect => {
            let btnMore = document.querySelector(`[for='${sect.id}']`);
            let dataInvise = sect.getAttribute('data-max-card');
            let cards = sect.querySelectorAll('.card');
            let num = 0;
            cards.forEach(element => {
                if (num > dataInvise - 1) {
                    addClass(element, 'invise');
                }
                num++;
            });

            btnMore.addEventListener('click', () => {
                if (sect.querySelector('.card.invise')) {
                    let num_2 = 0;
                    cards.forEach(element => {
                        if (element.classList.contains('invise')) {
                            if (num_2 < 3) {
                                removeClass(element, 'invise');
                                if (!sect.querySelector('.card.invise')) {
                                    addClass(btnMore, 'invise');
                                }
                            } else {
                                if (!sect.querySelector('.card.invise')) {
                                    addClass(btnMore, 'invise');
                                }
                            }
                            num_2++;
                        }
                    });
                } else {
                    addClass(btnMore, 'invise');
                }
            })
        })


    }

    if (document.querySelector('.header_fixed_container')) {
        const headerHiddenFixedContainer = document.querySelector('.header_fixed_container');
        const btnOpenHiddenMenu = document.querySelector('.burger_menu_open_btn');
        const btnCloseHiddenMenu = headerHiddenFixedContainer.querySelector('.close_menu');

        btnOpenHiddenMenu.addEventListener('click', () => {
            addClass(headerHiddenFixedContainer, 'open');
            addClass(overlay, 'open');
        })
        btnCloseHiddenMenu.addEventListener('click', () => {
            removeClass(headerHiddenFixedContainer, 'open');
            removeClass(overlay, 'open');
        })
    }

    if (document.querySelector('[data-for]')) {
        const btnFor = document.querySelectorAll('[data-for]');
        btnFor.forEach(element => {
            let dataAtributeFor = element.getAttribute('data-for');
            let inviseElement = document.getElementById(dataAtributeFor);
            addClass(inviseElement, 'invise');

            element.addEventListener('click', () => {
                toggleClass(inviseElement, 'invise');
                toggleClass(element, 'invise');
            })
        });
    }

    if (document.getElementById("cont_ans")) {
        const contAns = document.getElementById("cont_ans");
        const cardsAns = contAns.querySelectorAll(".card");

        cardsAns.forEach(card => {
            card.addEventListener('click', () => {
                toggleClass(card, 'active');
            })
        });
    }

    if (document.getElementById("anons-detail")) {
        const anonsDetailContainer = document.getElementById('anons-detail');
        const anonsDetailCards = anonsDetailContainer.querySelectorAll('.card');
        anonsDetailCards.forEach(card => {
            card.addEventListener('click', () => {
                toggleClass(card, 'active');
            })
        });
    }

    if (document.querySelector('.overlay')) {
        var overlay = document.querySelector('.overlay');
        var overlay_v2 = document.querySelector('.overlay.v2');

        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(element => {
                removeClass(element, 'open');
            });
        })
        overlay_v2.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(element => {
                removeClass(element, 'open');
            });
        })
    }

    if (document.querySelector('footer')) {
        const footer = document.querySelector('footer');
        const footer_menu = footer.querySelectorAll('.footer_menu');
        if (footer_menu) {
            footer_menu.forEach(element => {
                let footer_menu_title = element.querySelector('h3');
                footer_menu_title.addEventListener('click', () => {
                    toggleClass(element, 'active');
                })
            });

        }
    }

    if (document.querySelector('.popupForm')) {
        var popupForm = document.querySelector('.popupForm');
        var popupCloseBtn = popupForm.querySelector('.close-btn');
        var popupCheck = document.querySelector('.popupCheck')
        var popupCheckCloseBtn = popupCheck.querySelector('.close-btn');

        popupCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        popupCheckCloseBtn.addEventListener('click', () => {
            removeClass(overlay, 'open');
            removeClass(popupForm, 'open');
            removeClass(popupCheck, 'open');
        })
        overlay.addEventListener('click', () => {
            document.querySelectorAll('.open').forEach(el => {
                removeClass(el, 'open');
            })
        })
    }

    if (document.querySelector('.form-all')) {
        const formSect = document.querySelectorAll(".form-all");
        const titlePopupCheck = popupCheck.querySelector('h2');
        formSect.forEach(formSect => {


            let form = formSect.querySelector("form");
            let formBtn = formSect.querySelector("[type='submit']");
            let nameInp = formSect.querySelector("[name='name']");
            let phoneInp = formSect.querySelector("[name='phone']");


            window.addEventListener("DOMContentLoaded", function () {
                [].forEach.call(document.querySelectorAll("[name='phone']"), function (input) {
                    var keyCode;
                    function mask(event) {
                        event.keyCode && (keyCode = event.keyCode);
                        var pos = this.selectionStart;
                        if (pos < 3) event.preventDefault();
                        var matrix = "+7 (___) ___ ____",
                            i = 0,
                            def = matrix.replace(/\D/g, ""),
                            val = this.value.replace(/\D/g, ""),
                            new_value = matrix.replace(/[_\d]/g, function (a) {
                                return i < val.length ? val.charAt(i++) : a
                            });
                        i = new_value.indexOf("_");
                        if (i != -1) {
                            i < 5 && (i = 3);
                            new_value = new_value.slice(0, i)
                        }
                        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                            function (a) {
                                return "\\d{1," + a.length + "}"
                            }).replace(/[+()]/g, "\\$&");
                        reg = new RegExp("^" + reg + "$");
                        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                            this.value = new_value;
                        }
                        if (event.type == "blur" && this.value.length < 5) {
                            this.value = "";
                        }
                    }

                    input.addEventListener("input", mask, false);
                    input.addEventListener("focus", mask, false);
                    input.addEventListener("blur", mask, false);
                    input.addEventListener("keydown", mask, false);

                });
            });



            function checkInputsValid(input, num) {
                if (input.value.length < num) {
                    input.parentNode.classList.add("err");
                    formBtn.disabled = true;
                    return false;
                } else {
                    input.parentNode.classList.remove("err");

                    return true;
                }
            }

            let check;

            function addLisInput(input, num) {
                checkInputsValid(input, num);
                input.addEventListener('input', check = () => {
                    checkInputsValid(input, num);
                    if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                        formBtn.disabled = false;
                    } else {
                        formBtn.disabled = true;
                    }
                })
            }

            function removeLisInput(input) {
                input.removeEventListener('input', check)
            }

            function clearInputs(input) {
                input.value = '';
            }

            function handleTextGood() {
                titlePopupCheck.textContent = 'Спасибо за заявку! Скоро с вами свяжется наш консультант!';
                removeClass(formSect, 'open');
                addClass(overlay, 'open')
                addClass(popupCheck, 'open')
                clearInputs(nameInp);
                clearInputs(phoneInp);
                setTimeout(() => {
                    document.querySelectorAll('.open').forEach(el => {
                        removeClass(el, 'open');
                    })
                }, 3500);
            }

            function handleTextNoGood() {
                titlePopupCheck.textContent = 'Повторите попытку позже';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            function handleTextError() {
                titlePopupCheck.textContent = 'Что-то пошло не так';
                removeClass(formSect, 'open');
                addClass(popupCheck, 'open');
                setTimeout(() => {
                    if (overlay.classList.contains('open')) {
                        addClass(formSect, 'open');
                    }
                }, 3500);
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                removeLisInput(nameInp);
                removeLisInput(phoneInp);

                addLisInput(nameInp, 1);
                addLisInput(phoneInp, 17);

                if (checkInputsValid(nameInp, 1) && checkInputsValid(phoneInp, 17)) {
                    // grecaptcha.ready(function () {
                    //     grecaptcha.execute('6Lfk9qspAAAAALXnyJqhAd6kX-ZFapXhfIN0DmQ-', { action: 'submit' }).then(function (token) {
                    //         let formData = new FormData();
                    //         formData.append('name', nameInp.value);
                    //         formData.append('phone', phoneInp.value);
                    //         formData.append('token', token);
                    //         fetch('/local/templates/main/tools/send.php', {
                    //             method: 'POST',
                    //             body: formData,
                    //         })
                    //             .then((res) => {
                    //                 return res.json();
                    //             })
                    //             .then(result => {
                    //                 if (result > 0.5) {
                    //                     handleTextGood();
                    //                 } else {
                    //                     handleTextNoGood();
                    //                 }
                    //             })
                    //             .catch((err) => {
                    //                 handleTextError();
                    //                 console.log(err);
                    //             })
                    //     });
                    // });
                    form.querySelectorAll('input').forEach(inp => {
                        console.log(inp.value.trim());

                    });

                    handleTextGood();
                }
            })
        });
    }


    window.addEventListener('click', (e) => {
        if (searchTop && !e.target.closest(".search")) {
            removeClass(hiddCont, "invise");
            removeClass(headerContMob, "invise");
            removeClass(headerContBottomHidden, "invise");
            removeClass(searchTop, "open");
        }
        if (e.target.id == 'open-form-popup') {
            if (popupForm && overlay_v2) {
                addClass(overlay_v2, 'open');
                addClass(popupForm, 'open');
            }
        }
    })

    console.log('index.js finish work');
});
document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // xử lý sự kiện để show popupLogin
    function handleShowPopupLogin() {
        const showPopupLogins = document.querySelectorAll(".js__showPopupLogin");
        const popupLoginContainer = document.querySelector(".js__popupLoginContainer");

        if(popupLoginContainer && showPopupLogins) {

            const popupLogin = popupLoginContainer.querySelector(".js__popupLogin");
            const closePopupLogin = popupLoginContainer.querySelector(".js__closePopupLogin");
            const overlay = popupLoginContainer.querySelector(".js__overlay");
            
            if (showPopupLogins.length === 0) return;

                
            showPopupLogins.forEach((showPopupLogin)=>{

                showPopupLogin.onclick = function() {
                    popupLogin.classList.add('active')
                    overlay.classList.add('active')
                    document.querySelector("body").style.overflow = "hidden";
                }
    
                closePopupLogin.onclick = function () {
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active')
                    overlay.classList.remove('active')
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };
    
                overlay.onclick = function () {
                    this.classList.remove("active");
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active');
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };

                // change form login register forgot
                const loginContainerForm = document.querySelector(".js__loginContainerForm");

                if(!loginContainerForm) return

                const loginForm = loginContainerForm.querySelector('.js__loginForm')
                const registerForm = loginContainerForm.querySelector('.js__registerForm')
                const forgotForm = loginContainerForm.querySelector('.js__forgotForm')

                const loginBtn = registerForm.querySelector('.js__loginBtn')
                const registerBtn = loginForm.querySelector('.js__registerBtn')
                const forgotBtn = loginForm.querySelector('.js__forgotBtn')
                
                // login
                registerBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    registerForm.classList.add('active')
                    forgotForm.classList.remove('active')
                }
                // register
                loginBtn.onclick = function() {
                    registerForm.classList.remove('active')
                    loginForm.classList.add('active')
                }
                // forgot
                forgotBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    forgotForm.classList.add('active')
                }
            })

            
        }
        
        
    }
    
     // xử lý sự kiện để show dropdown
     function handleShowDropdown() {
        
        const dropdownContainers = document.querySelectorAll(".js__dropdownContainer");


        if (dropdownContainers.length === 0) return;


        dropdownContainers.forEach((dropdownContainer)=>{

            const dropdown = dropdownContainer.querySelector(".js__showDropdown");
            const dropdownContent = dropdownContainer.querySelector(".js__dropdownContent");
            const overlay = dropdownContainer.querySelector(".js__overlay");


            dropdown.onclick = function () {
                dropdownContent.classList.toggle("active");
                overlay.classList.add('active')

            };

            overlay.onclick = function () {
                dropdownContent.classList.remove("active");
                this.classList.remove("active");
            };
        })

      
    }


    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
        
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }


    // xử lý sự kiện để show sub menu
    function handleShowSubMenu() {
        const subMenu = document.querySelector(".js__clickShowMenuMb");
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }
    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
        dropdownSubMenu &&
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo169() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s) {
            video169s.forEach((video169) => {
                var videos = video169.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 9) / 16 + "px";
                    });
                }
            });
        }
    }

    function handleVideo916() {
        const video916s = document.querySelectorAll(".js__video916");
        if (video916s) {
            video916s.forEach((video916) => {
                var videos = video916.querySelectorAll("iframe");
                if (videos) {
                    videos.forEach((video) => {
                        var w = video.offsetWidth;
                        video.style.height = (w * 16) / 9 + "px";
                    });
                }
            });
        }
    }

    // Xử lý sự kiện show search mb
    function handleShowSearchMb() {
        const searchMbs = document.querySelectorAll(".js__searchMb");

        if (searchMbs.length === 0) return;
        searchMbs.forEach((searchMb) => {
            var closeSearchMb =
                document.querySelector(".js__closeSearchMb");
            var formSearchMb = document.querySelector(".js__formSearchMb");
            const focusElement =
                formSearchMb.querySelector(".js__focusSearchMb");
            searchMb.onclick = function () {
                formSearchMb.classList.add("active");
                focusElement.focus();
            };
            closeSearchMb.onclick = function () {
                formSearchMb.classList.remove("active");
                focusElement.value = "";
            };
        });
    }
    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }
    // Hàm hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }
    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleBackTop();
        handleShowPopupLogin();
        handleShowDropdown();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleShowSearchMb();
        handleVideo169();
        handleVideo916();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});
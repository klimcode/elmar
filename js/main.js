window.G = {
    isMobile: window.innerWidth < 768 ? true : false,

    pages: {
        'drawings': {
            type: 'gallery',
        },
        'paintings': {
            type: 'gallery',
        },
        'about': {
            type: 'static',
        },
    },
};

;(function start() {
    initMenu();
    initPages();
    checkForMobile();
})();

function initMenu() {
    $('.menu').on('click', 'div', toggleMenu);

    function toggleMenu() {
        console.log(this);
        var $menu__btn = $(this);
        var $menu = $menu__btn.parents('.menu');
        var classOpened = 'menu-opened';

        if($menu.hasClass(classOpened)) {
            $menu.removeClass(classOpened);
        } else {
            $menu.addClass(classOpened);
        }
    }
}

function initPages() {
    var loaders = {
        'gallery': loadGalleryPage,
        'static': loadStaticPage,
    }

    $('.nav').on('click', '.nav__item', switchPage);

    function switchPage(e) {
        var $btn = $(e.currentTarget);
        var page = $btn.data('page');
        loaders[G.pages[page].type]();
    }
    function loadGalleryPage() {
        console.log('load gallery page');
    }
    function loadStaticPage() {
        console.log('load static page');
    }
}

function checkForMobile() {
    $(window).resize(function () {
        G.isMobile = window.innerWidth < 768 ? true : false;
    });
}


function getPictures() {
    $.get('http://api-fotki.yandex.ru/api/users/disturh/album/547654/photos/', function (data) {
        console.log(data);
    })
}

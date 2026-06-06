
$(document).ready(function () {
    // === ХЕДЕР ===
    var $header = $('<header class="header"></header>');
    var $headerContainer = $('<div class="container"></div>');
    var $logo = $('<a href="index3.html" class="logo"></a>');
    $logo.append($('<img>').attr('src', 'images/logo.png').attr('alt', 'AREMA'));
    var $navMenu = $('<nav class="nav-menu"></nav>');
    var $navLinks = $('<ul class="nav-links"></ul>');
    $navLinks.append($('<li>').append($('<a>').attr('href', '#').text('Ремонт квартир')));
    $navLinks.append($('<li>').append($('<a>').attr('href', '#').text('Ремонт ванн')));
    $navLinks.append($('<li>').append($('<a>').attr('href', '#').text('Дизайн интерьеров')));
    $navLinks.append($('<li>').append($('<a>').attr('href', '#').addClass('active').text('Блог')));
    $navMenu.append($navLinks);
    var $headerRight = $('<div class="header-right"></div>');
    var $phone = $('<a href="tel:+74994507786" class="header-phone">+7 (499) 450 77 86</a>');
    var $btnCall = $('<button class="btn-call">Заказать звонок</button>');
    var $hamburger = $('<button class="hamburger"><span></span><span></span><span></span></button>');
    $headerRight.append($phone).append($btnCall).append($hamburger);
    $headerContainer.append($logo).append($navMenu).append($headerRight);
    $header.append($headerContainer);
    $('body').append($header);

    $hamburger.on('click', function () {
        $hamburger.toggleClass('active');
        $navMenu.toggleClass('active');
    });
    $navMenu.find('.nav-links a').on('click', function () {
        $hamburger.removeClass('active');
        $navMenu.removeClass('active');
    });

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $header.addClass('scrolled');
        } else {
            $header.removeClass('scrolled');
        }
    });

    // === СЕКЦИЯ ПОДПИСКИ ===
    var $newsletterSection = $('<section class="newsletter-section"></section>');
    var $newsletterBg = $('<div class="newsletter-bg"></div>');
    $newsletterBg.append($('<img>').attr('src', 'images/Дочер.jpg').attr('alt', 'Фон'));
    $newsletterBg.append($('<div class="newsletter-overlay"></div>'));
    $newsletterSection.append($newsletterBg);
    var $newsletterContainer = $('<div class="container"></div>');
    var $newsletterContent = $('<div class="newsletter-content"></div>');
    var $title = $('<h1 class="newsletter-title"></h1>');
    $title.append($('<span class="title-accent">БУДЬТЕ В КУРСЕ</span>'));
    $title.append($('<span class="title-white">актуальных новостей</span>'));
    var $subtitle = $('<p class="newsletter-subtitle">в мире ремонта и дизайна</p>');
    var $divider = $('<div class="newsletter-divider"><span class="divider-dot"></span></div>');
    var $text = $('<p class="newsletter-text">ПОДПИШИТЕСЬ НА НАШУ РАССЫЛКУ И ПОЛУЧИТЕ<br>БОНУС: СКИДКА 20% НА ВСЕ УСЛУГИ КОМПАНИИ</p>');
    var $btnNewsletter = $('<button class="btn-newsletter">Быть в курсе</button>');
    $newsletterContent.append($title).append($subtitle).append($divider).append($text).append($btnNewsletter);
    $newsletterContainer.append($newsletterContent);
    $newsletterSection.append($newsletterContainer);
    $('body').append($newsletterSection);

    // === СЕКЦИЯ СТАТЕЙ ===
    var $articlesSection = $('<section class="articles-section"></section>');
    var $articlesContainer = $('<div class="container"></div>');
    var $articlesTitle = $('<h2 class="articles-title">Дизайн интерьера</h2>');
    var $articlesLayout = $('<div class="articles-layout"></div>');
    var $articlesMain = $('<div class="articles-main"></div>');
    var articlesData = [
        { img: 'images/чил.png', date: 'Февраль 10, 2020' },
        { img: 'images/чил2.png', date: 'Февраль 10, 2020' },
        { img: 'images/чил3.png', date: 'Февраль 10, 2020' },
        { img: 'images/чил4.png', date: 'Февраль 10, 2020' }
    ];
    articlesData.forEach(function (article) {
        var $card = $('<article class="article-card"></article>');
        var $imgDiv = $('<div class="article-image"></div>');
        $imgDiv.append($('<img>').attr('src', article.img).attr('alt', 'Интерьер'));
        var $contentDiv = $('<div class="article-content"></div>');
        var $h3 = $('<h3 class="article-title">Интерьер 2020 года: актуальное в дизайне квартир и домов</h3>');
        var $date = $('<p class="article-date">' + article.date + '</p>');
        var $excerpt = $('<p class="article-excerpt">Тенденции оформления жилых пространств...</p>');
        var $footer = $('<div class="article-footer"></div>');
        $footer.append($('<span class="article-time">2 мин.</span>'));
        $footer.append($('<button class="btn-read-more">Читать далее</button>'));
        $footer.append($('<span class="article-author">Автор: Александра Жекова</span>'));
        $contentDiv.append($h3).append($date).append($excerpt).append($footer);
        $card.append($imgDiv).append($contentDiv);
        $articlesMain.append($card);
    });

    // === САЙДБАР ===
    var $sidebar = $('<aside class="articles-sidebar"></aside>');
    var $searchWidget = $('<div class="sidebar-widget"></div>');
    var $searchBox = $('<div class="search-box"></div>');
    $searchBox.append($('<input type="text" placeholder="Поиск по статьям" class="search-input">'));
    $searchBox.append($('<button class="search-btn">🔍</button>'));
    $searchWidget.append($searchBox);
    $sidebar.append($searchWidget);
    var $categoriesWidget = $('<div class="sidebar-widget"></div>');
    var $catTitle = $('<h4 class="widget-title">Рубрики</h4>');
    var $catList = $('<ul class="category-list"></ul>');
    $catList.append($('<li class="category-item active"><span class="category-dot"></span><a href="#">Дизайн интерьера</a></li>'));
    $catList.append($('<li class="category-item"><span class="category-dot"></span><a href="#">Ремонт от а до я</a></li>'));
    $categoriesWidget.append($catTitle).append($catList);
    $sidebar.append($categoriesWidget);
    var $tagsWidget = $('<div class="sidebar-widget"></div>');
    var $tagsTitle = $('<h4 class="widget-title">Теги</h4>');
    var $tagsCloud = $('<div class="tags-cloud"></div>');
    var tags = ['Минимализм', 'Лофт', 'Поп-арт', 'Скандинавия', 'Классика', 'Ретро', 'Хай-тек', 'Барокко'];
    tags.forEach(function (tag) { $tagsCloud.append($('<a href="#" class="tag">' + tag + '</a>')); });
    $tagsWidget.append($tagsTitle).append($tagsCloud);
    $sidebar.append($tagsWidget);
    var $popularWidget = $('<div class="sidebar-widget"></div>');
    var $popTitle = $('<h4 class="widget-title">Популярные статьи</h4>');
    var $popularArticles = $('<div class="popular-articles"></div>');
    $popularArticles.append($('<a href="#" class="popular-item"><h5>Интерьер 2020 года</h5><span class="popular-date">Февраль 10, 2020</span></a>'));
    $popularArticles.append($('<a href="#" class="popular-item"><h5>Авторский дизайн интерьера</h5><span class="popular-date">Февраль 7, 2020</span></a>'));
    $popularArticles.append($('<a href="#" class="popular-item"><h5>Индустриальный стиль</h5><span class="popular-date">Январь 23, 2020</span></a>'));
    $popularWidget.append($popTitle).append($popularArticles);
    $sidebar.append($popularWidget);
    $articlesLayout.append($articlesMain).append($sidebar);
    $articlesContainer.append($articlesTitle).append($articlesLayout);
    $articlesSection.append($articlesContainer);
    $('body').append($articlesSection);

    // === ПАГИНАЦИЯ ===
    var $paginationWrapper = $('<div class="pagination-wrapper"></div>');
    var $pagContainer = $('<div class="container"></div>');
    var $pagination = $('<div class="pagination"></div>');
    $pagination.append($('<a href="#" class="page-link">&larr;</a>'));
    $pagination.append($('<a href="#" class="page-link">1</a>'));
    $pagination.append($('<a href="#" class="page-link active">2</a>'));
    $pagination.append($('<a href="#" class="page-link">3</a>'));
    $pagination.append($('<a href="#" class="page-link">4</a>'));
    $pagination.append($('<a href="#" class="page-link">5</a>'));
    $pagination.append($('<a href="#" class="page-link">6</a>'));
    $pagination.append($('<a href="#" class="page-link">7</a>'));
    $pagination.append($('<a href="#" class="page-link">&rarr;</a>'));
    $pagContainer.append($pagination);
    $paginationWrapper.append($pagContainer);
    $('body').append($paginationWrapper);

    // === FOOTER ===
    var $footer = $('<footer class="footer"></footer>');
    var $footerContent = $('<div class="footer-content"></div>');
    $footerContent.append($('<p class="footer-copyright">© AREMA профессиональный ремонт квартир в Москве и МО. ИНН 7716912681 ОГРН 1187746496233</p>'));
    $footerContent.append($('<a href="#" class="footer-policy">Политика конфиденциальности</a>'));
    $footer.append($footerContent);
    $('body').append($footer);

    // === СОБЫТИЯ ===
    $btnNewsletter.on('click', function () {
        alert('Спасибо за подписку! Скидка 20% на все услуги.');
    });
    $('.page-link').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $('.page-link').removeClass('active');
            $this.addClass('active');
        }
    });
});

function openSubscriptionModal() {
    console.log('Открыть модальное окно подписки');
}
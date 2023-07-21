let app = document.querySelector('#app')

async function header() {
    let page = await import('./components/page_header.js');
    let render = await page.header_page();

    app.appendChild(await render);
}

async function footer() {
    let page = await import('./components/page_footer.js');
    let render = await page.footer_page();

    app.appendChild(await render);
}

async function init_app() {
    let page = await import('./pages/home_page.js');
    let render = await page.home_page();
    await header();
    app.appendChild(await render);
    await footer();
}

init_app();


function handle_mobile_nav() {
    let btn = document.querySelector('#nav-trigger'),
        nav = document.querySelector('.header_page .sub-menu'),
        overlay = document.createElement('div');
    overlay.classList.add('overlay');
    btn.addEventListener('click', function() {
        nav.classList.toggle('show');
        document.body.appendChild(overlay);
    });

    overlay.addEventListener('click', function(e) {
        e.target.remove();
        nav.classList.remove('show');
    })
}
handle_mobile_nav();
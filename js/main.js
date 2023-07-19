let app = document.querySelector('#app')

async function header() {
    let page = await import('./components/page_header.js');
    let render = await page.header_page();

    app.appendChild(await render);
}

header();

async function init_app() {
    let page = await import('./pages/home_page.js');
    let render = await page.home_page();

    app.appendChild(await render);
}

init_app();

async function footer() {
    let page = await import('./components/page_footer.js');
    let render = await page.footer_page();

    app.appendChild(await render);
}

footer();
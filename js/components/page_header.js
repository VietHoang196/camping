export async function header_page() {
    let template = document.createElement('header');
    template.classList.add('header_page');
    template.innerHTML = `
        <div class="container flex">
            <div>
                <div class="logo image4-3" style="background-image: url(./img/logo.png)"></div>
            </div>
            <div class="flex sub-menu">
                <a href="#">home</a>
                <a href="#">best camping</a>
                <a href="#">booking</a>
                <a href="#">about us</a>
            </div>
            <button id="nav-trigger" class="hamburger"><i class="fa-solid fa-bars"></i></button>
        </div>
    `;
    return template;
}
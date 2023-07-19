export async function home_page() {
    let template = document.createElement('main');
    template.classList.add('home-page');
    template.innerHTML = `
    <main>
            <div class="container">
                <section class="image16-9 booking" style="background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./img/background/river.jpg); position: relative;">
                    <div class=" flex banner">
                        <h1 class="c-white text-playfair">Book your outdoor adventure</h1>
                        <p class="c-white">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit </p>
                        <a href="#" class="c-white uppercase c-a79770">booking now</a>
                        <di class="info c-white grid">
                            <div class="item">
                                <span>
                                    <img src="./img/icon/trekking.png" style="width: 50%;">
                                </span>
                                <h4 class="uppercase">trekking</h4>
                            </div>
        
                            <div class="item">
                                <span>
                                    <img src="./img/icon/camping.png" style="width: 50%;">
                                </span>
                                <h4 class="uppercase">camping</h4>
                            </div>
        
                            <div class="item">
                                <span>
                                    <img src="./img/icon/beachtent.png" style="width: 50%;">
                                </span>
                                <h4 class="uppercase">beach tents</h4>
                            </div>
        
                            <div class="item">
                                <span>
                                    <img src="./img/icon/news.png" style="width: 50%;">
                                </span>
                                <h4 class="uppercase">news & events</h4>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section class="about-us grid">
                    <div class="picture">
                        <div class="image couple" style="background-image: url(./img/background/couple.jpg);"></div>
                    </div>
                    <div class="sub">
                        <h2 class="text-playfair">about us</h2>
                        <p>Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet purus quis elementum. Phasellus sed efficitur dolor, et ultricies sapien. Quisque fringilla sit amet dolor commodo efficitur. Aliquam et sem odio. In ullamcorper nisi nunc, et molestie ipsum</p>
                        <a href="#" class="c-white uppercase c-a79770">see more</a>
                    </div>
                </section>
        
                <section class="find-more c-white c-a79770 flex">
                    <h2 class="text-playfair">Find your next getaway</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div class="category grid">
                        <div class="item">
                            <div class="image" style="background-image: url(./img/background/best-camping.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>Best RV camping</h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image" style="background-image:linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(./img/background/lake-camping.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>Lake camping</h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image" style="background-image:linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(./img/background/beach-stay.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>Beach stays</h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image" style="background-image:linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(./img/background/backyard.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>Backyard Camping</h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image" style="background-image:linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(./img/background/car-camping.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>car camping</h4>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image" style="background-image:linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(./img/background/wilderness.jpg);"></div>
                            <div class="sub-content flex">
                                <h4>Wilderness Camping</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    `;

    return template;
}
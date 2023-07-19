export async function footer_page() {
    let template = document.createElement('footer');
    template.classList.add('footer_page');
    template.innerHTML = `
    <div class="image16-9 contact" style="background-image: linear-gradient(0deg, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./img/background/footer.jpg); position: relative;">
        <div class="content grid">
            <div class="sub-info flex">
                <h2>Contact Us</h2>
                <p>If you would like to contact us regarding the camping site, we would be happy to assist you. Please provide us with your preferred method of contact (phone, email, etc.) and any specific questions or concerns you may have.</p>
                <p>Address: New York City</p>
                <p>Hotline: 0978648283</p>
                <p>Email: campingseason@gmail.com</p>
                <div class="social">
                    <a href="https://facebook.com/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <div class="form">
                <div class="sub-form grid">
                    <div class="name">
                        <p>Name</p>
                        <input type="text" placeholder="Enter your name">
                    </div>
                    <div class="email">
                        <p>Email Address</p>
                        <input type="text" placeholder="Enter your email">
                    </div>
                </div>
                <div class="mes">
                    <p>Message</p>
                    <textarea rows="5" cols="63" placeholder="Enter your message"></textarea>
                </div>
                <button class="btn c-a79770">Submit</button>
            </div>
        </div>
    </div>

    `;
    return template;
}
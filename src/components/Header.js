export function Header(email) {

    const header = document.createElement("header")

    header.innerHTML = `
        <div class="container">
            <div class="header__wrapper">
                <div class="link">
                    <a href="/pages/my_wallet/">Мои кошельки</a>
                    <a href="/pages/my-transaction/">Мои транзакции</a>
                </div>
                <nav class="google_link">
                    <a href="#">${email}</a>
                    <a href="/signup/"><img src="/img/log-out (1) 1.png" alt=""></a>
                </nav>
            </div>
        </div>
    `

    return header
}
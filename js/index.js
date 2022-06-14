var gamesAPI =  [
    {
        id: 1,
        name: "ASSASSINS CREED 4",
        description: "Nihil laborum qui harum maxime nibh maiores cubilia, voluptatibus turpis, posuere, tempor. Condimentum dolorem, ultricies convallis at natoque, assumenda cum! Excepteur posuere! Aperiam feugiat! Luctus non doloribus sunt, justo occaecat dicta fugit porttitor. Vehicula asperiores pede parturient minim! Consequatur ipsa? Laudantium hymenaeos, illo senectus dignissimos consequat perferendis quod, eaque aenean accusantium parturient risus arcu autem, rutrum, quisque! Commodo eveniet bibendum, amet penatibus, dignissim, ridiculus tempor enim, laudantium aliquip, duis. Nostrud!",
        price: "24.00",
        imgProduct: "./assets/img/ac4-product.jpg",
        imgSlide: "./assets/img/ac4-slide.jpg",
        imgBanner: "./assets/img/ac4-banner.jpg",
        genre: [
            "Action", "Casual"
        ],
        format: [
            "PC", "Nintendo 3DS & 2DS"
        ]
    },
    {
        id: 2,
        name: "FALLOUT 4",
        description: "Facilisi felis culpa potenti enim officiis tempor primis natus? Nisi tempor incididunt rutrum ducimus pretium penatibus! Tincidunt optio. Nam magni inventore iaculis cum cupidatat nisi cupidatat eos, ipsum feugiat reprehenderit? Tempor adipisicing magni irure laboriosam dignissimos, architecto tellus leo excepteur, torquent dis purus parturient incididunt. Occaecati adipisci convallis. Eu dictum mollis nostrum provident voluptatum! Maxime sed. Dapibus. Primis, veritatis ac et laoreet, tortor sollicitudin quo cras, nostra esse, feugiat dolores",
        price: "19.99",
        imgProduct: "./assets/img/fallout4-product.jpg",
        imgSlide: "./assets/img/fallout4-slide.jpg",
        imgBanner: "./assets/img/fallout4-banner.jpg",
        genre: [
            "Free to Play", "Casual"
        ],
        format: [
            "Nintendo Wii U/Wii", "Playstation 3"
        ]
    },
    {
        id: 3,
        name: "CALL OF DUTY 4",
        description: "Sint hendrerit qui consequat scelerisque quisquam? Maecenas litora voluptatibus mus? Nesciunt mi, elit! Incididunt massa habitasse voluptate, elementum animi, exercitationem delectus sociosqu, esse lectus eget delectus? Iaculis blandit. Occaecat nisi, nam nullam! Optio minima nostra quidem veritatis error sit nobis rem vivamus, pretium pulvinar, ipsum dolorum incidunt erat! At, magna maiores? Est et nobis lectus aperiam, sapiente potenti? Aspernatur assumenda eligendi vulputate ac id pariatur molestiae! Rerum penatibus egestas cras dolorum interdum semper ligula ratione, architecto.",
        price: "23.00",
        imgProduct: "./assets/img/cod4-product.jpg",
        imgSlide: "./assets/img/cod4-slide.jpg",
        imgBanner: "./assets/img/cod4-banner.jpg",
        genre: [
            "Massively Multiplayer", "RPG"
        ],
        format: [
            "Nintendo 3DS & 2DS", "Playstation 4"
        ]
    },
    {
        id: 4,
        name: "X COM 2",
        description: "Quia morbi class possimus cupiditate porta, ullamcorper porta consectetur semper quibusdam? Odio semper libero elementum quisquam dignissimos congue volutpat dictumst facere, sapien natus leo. Quod montes! Class. Eleifend? Ea dictum litora placerat! Voluptate sapien a massa ex, veritatis parturient. Nisi, rerum curae nonummy rerum ducimus, nibh veniam aperiam eget blandit habitasse sagittis primis penatibus corrupti! Neque consequatur enim. Ullamcorper commodo? Ullamco elit montes. Vehicula posuere id aperiam integer id est perspiciatis facilisis. Auctor eaque sunt quae ultricies rerum",
        price: "59.99",
        imgProduct: "./assets/img/xcom2-product.jpg",
        imgSlide: "./assets/img/xcom2-slide.jpg",
        imgBanner: "./assets/img/xcom2-banner.jpg",
        genre: [
            "Free to Play", "Action"
        ],
        format: [
            "PC", "Playstation 3"
        ]
    }
]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var slideContent = $('.slide-show__content')
var slideNext = $('.slide-show__next-slide')
var prevNext = $('.slide-show__prev-slide')
var bestSeller = $('.row.best-seller')
var product = $('.row.products')
var numberResult = $('.content-product__sort-result span')
var searchByFormat = $('.content-product__sort-select-all-format')
var searchByGenre = $$('.content-product__menu-genre-item')
var heightHeader = $('.header-top')
var topSlideShow = $('.slide-show')
var contentSlide = $('.slide-show__content')

var currentSlide = 1

const start = function() {
    
    handleData(gamesAPI)
    
}

// const getGames = (callback) => {
//     fetch(gamesAPI)
//         .then((response) => {
//             return response.json()
//         })
//         .then(callback)
// }

const handleData = (game) => {
    var games = game

    showSlide(games, currentSlide)

    showProductBestSeller(games)

    showProductContent(games)

    numberResult.innerText = games.length

    searchByGenre.forEach((genre) => {
        genre.onclick = (e) => {
            var genreActive = $('.content-product__menu-genre-item.active')

            if(genreActive){
                genreActive.classList.remove('active')
                e.target.classList.add('active')
            }else {
                e.target.classList.add('active')
            }

            var result = games.filter((game) => {
                return game.genre.includes(e.target.innerText)
            })
        
            showProductContent(result)
            numberResult.innerText = result.length
        }
    })

    searchByFormat.onchange = ((e) => {
        var selectedIndex = e.target.options.selectedIndex
        var valueSelected = e.target.options[selectedIndex].value

        if(valueSelected == '') {
            showProductContent(games)
            numberResult.innerText = games.length
        } else {
            var result = games.filter((game) => {
                return game.format.includes(valueSelected)
            })
        
            showProductContent(result)
            numberResult.innerText = result.length
        }

    })

    slideNext.onclick = function() {
        if(currentSlide > games.length - 1)
        {
            currentSlide = 1
        }else {
            currentSlide++
        }
        showSlide(games, currentSlide)
    }

    prevNext.onclick = function() {
        if(currentSlide <= 1)
        {
            currentSlide = games.length
        }else {
            currentSlide--
        }
        showSlide(games, currentSlide)
    }

    document.onscroll = (() => {
        if(Math.floor(window.scrollY) >= 100) {
            heightHeader.style.height = '60px'
            topSlideShow.style.marginTop = '60px'
        }else {
            heightHeader.style.height = '80px'
            topSlideShow.style.marginTop = '80px'
        }
    })
}


const showSlide = (games, currentSlide) => {
    var html = games.map((game) => {
        if(game.id == currentSlide){
            return `<div class="slide-show__img">
                        <img width="1950" height="750" src="${game.imgSlide}" alt="">
                    </div>
                    <div class="slide-show__info">
                        <div class="slide-show__info-title">
                            <a href="" class="slide-show__info-title-link">
                                ${game.name}
                            </a>
                        </div>
                        <div class="slide-show__info-description">
                            ${game.description}
                        </div>
                        <div class="slide-show__info-note">
                            <p>PLEASE NOTE</p>
                            Prices in GAME Stores may differ
                        </div>
                        <div class="slide-show__info-price">$${game.price}</div>
                        <div class="btn">Add to cart</div>
                    </div>`
        }
    })

    slideContent.innerHTML = html.join('')
}

const showProductBestSeller = (games) => {
    var html = games.map((game) => {
        return `
        <div class="col c-6 m-6 l-3">
            <div class="card">
                <img class="card-img" src="${game.imgProduct}" alt="">
                
                <div class="card-info">
                    <div class="card-info-title">
                        <a href="http://127.0.0.1:5500/detail.html" class="card-info-title-link">${game.name}</a>
                    </div>
                    
                    <p class="card-info-decs">${game.description}</p>
                    
                    <div class="card-info-price-logo">
                        <span class="card-info-price">$${game.price}</span>
                        <div class="card-info-logo">
                            <i class="fa-brands fa-windows"></i>
                            <i class="fa-brands fa-xbox"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    bestSeller.innerHTML = html.join('')
}

const showProductContent = (games) => {
    var html = games.map((game) => {
        return `
        <div class="col l-4 c-6 m-6">
            <div class="content-product__main">
                <div class="card">
                    <img class="card-img" src="${game.imgProduct}" alt="">
                    
                    <div class="card-info">
                        <div class="card-info-title">
                            <a href="http://127.0.0.1:5500/detail.html" class="card-info-title-link">${game.name}</a>
                        </div>
                        
                        <p class="card-info-decs">${game.description}</p>
                        
                        <div class="card-info-price-logo">
                            <span class="card-info-price">$${game.price}</span>
                            <div class="card-info-logo">
                                <i class="fa-brands fa-windows"></i>
                                <i class="fa-brands fa-xbox"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    product.innerHTML = html.join('')
}

start();
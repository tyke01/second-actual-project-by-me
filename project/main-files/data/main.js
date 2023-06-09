const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`you fucked up. Make sure the ${selector} even exists`);

}
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }
    else {
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');
const mobileMenu = selectElement('#menu');
const toggleMenu = () => {
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);


const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('currentTheme')
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')
});
if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
}
else {
    localStorage.removeItem('current-theme')
}

const swiper1 = new Swiper('.swiper-container-1',
    {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true,

        pagination: {
            clickable: true,
            el: '.swiper-pagination'
        },
        breakpoints: {
            400: {
                slidesPerView: 1
            },
            700: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        }
    })
const swiper2 = new Swiper('.sample-slider', {
    effect: "cards",
    grabCursor: true,
    loop: true,
    pagination: {
        clickable: true,
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

const swiper3 = new Swiper('.application-slider', {
    autoplay: {
        delay: 3000,
    },
    disableOnInteraction: true,
    loop: true,

})
const cartButton = selectElement('.ri-shopping-cart-line');
cartButton.addEventListener('click', function () {
    window.location.href = 'checkout.html';
});

const products = [
    {
        id: 0001,
        Image: '../thumbnails/cool/cool-2.jpg',
        name: 'White custom airforces',
        rating: {
            stars: 4.5,
            count: 87
        },
        price: 2500
    },
    {
        id: 0002,
        Image: '../thumbnails/cool/cool-3.jpg',
        name: 'Green Nikes',
        rating: {
            stars: 4,
            count: 102
        },
        price: 3999,
    },
    {
        id: 0003,
        Image: '../thumbnails/cool/cool-5.jpg',
        name: 'White jordan 4',
        rating: {
            stars: 3,
            count: 200
        },
        price: 1500
    },
    {
        id: 0004,
        Image: '../thumbnails/cool/cool-6.jpg',
        name: 'Exotic air jordans',
        rating: {
            stars: 5,
            count: 600
        },
        price: 4500,
    },
    {
        id: 0005,
        Image: '../thumbnails/cool/cool-7.jpg',
        name: 'Blue air jordans',
        rating: {
            stars: 5,
            count: 600
        },
        price: 4500,
    },
    {
        id: 0006,
        Image: '../thumbnails/cool/cool-8.jpg',
        name: 'Exotic air forces',
        rating: {
            stars: 5,
            count: 600
        },
        price: 4500,
    },
];

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="products-container">
    <div class="product-image-container">
      <img
        src="${product.Image}"
        alt=""
        class="product-image"
      />
    </div>
    <div class="product-specs">
      <div class="product-name">
        <p>${product.name}</p>
      </div>
      <div class="items">
        <p class="items-left">42 items left</p>
        <div class="item-bar">
          <div class="items-rem wd-1"></div>
        </div>
      </div>
      <div class="product-rating-container">
        <img
          src="../thumbnails/ratings/rating-${product.rating.stars * 10}.png"
          alt="no image"
          class="product-rating-stars"
        />
        <p class="rating-count">${product.rating.count}</p>
      </div>
      <div class="offers">
        <p class="offer-1">price : 2800</p>
      </div>
      <div class="product-price">
        <p>Now shs ${product.price}</p>
      </div>
      <div class="product-quantity-container">
        <select
          class="selector"
          name="select"
          id="select1"
          title="select"
        >
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
          <option value="2">5</option>
          <option value="2">6</option>
          <option value="2">7</option>
          <option value="2">8</option>
          <option value="2">9</option>
        </select>
      </div>
      <div class="added-to-cart">
        <img src="../thumbnails/icons/checkmark.png" alt="" />
        added
      </div>
      <button 
      class="add-to-cart-btn js-add-to-cart" 
      title="cart" 
      data-product-id= "${product.id}">
      Add to cart
      </button>
    </div>
  </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        // console.log(button.dataset.productName);


        const productId = button.dataset.productId;


        let matchingItem;
        cart.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });
        if (matchingItem) {
            matchingItem.quantity += 1
        }
        else {
            cart.push({
                productId: productId,
                quantity: 1,
            });
        };

        let cartQuantity = 0;

        cart.forEach((item) => {
            cartQuantity += item.quantity
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

    });
});



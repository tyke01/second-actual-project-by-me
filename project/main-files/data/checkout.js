let cart = [];

const shop = [
    {
        date: ' Tuesday, june 15',
        Image: '../thumbnails/cool/cool-2.jpg',
        name: 'white custom airforces',
        price: '2500',
        deliveryOptions1: {
            deliveryDate: 'Tuesday, june 15',
            deliveryPrice: 'FREE SHIPPING'
        },
        deliveryOptions2: {
            deliveryDate: 'Monday, june 24',
            deliveryPrice: '200'
        },
        deliveryOptions3: {
            deliveryDate: 'Thursday, may 12',
            deliveryPrice: '150'
        }
    },

    {
        date: ' Tuesday, june 15',
        Image: '../thumbnails/cool/cool-3.jpg',
        name: 'green nikes',
        price: '3999',
        deliveryOptions1: {
            deliveryDate: 'Tuesday, june 15',
            deliveryPrice: 'FREE SHIPPING'
        },
        deliveryOptions2: {
            deliveryDate: 'Monday, june 24',
            deliveryPrice: '200'
        },
        deliveryOptions3: {
            deliveryDate: 'Thursday, may 12',
            deliveryPrice: '150'
        }
    },

    {
        date: ' Tuesday, june 15',
        Image: '../thumbnails/cool/cool-7.jpg',
        name: 'Blue air jordans ',
        price: '2000',
        deliveryOptions1: {
            deliveryDate: 'Tuesday, june 15',
            deliveryPrice: 'FREE SHIPPING'
        },
        deliveryOptions2: {
            deliveryDate: 'Monday, june 24',
            deliveryPrice: '200'
        },
        deliveryOptions3: {
            deliveryDate: 'Thursday, may 12',
            deliveryPrice: '150'
        }
    },

];

//     cartHTML += `
//     <div class="cart-item-container">
//     <div class="delivery-date">
//     Delivery date: ${checkout.date}
//     </div>
//     <div class="cart-item-detail-grid">
//       <img
//         src="${checkout.Image}"
//         alt=""
//         class="product-image"
//       />
//       <div class="cart-items-details">
//         <p class="product-name">
//         ${checkout.name} - 2 pairs
//         </p>
//         <p class="product-price">
//         Ksh ${checkout.price}
//         </p>
//         <div class="product-quantity">
//           <span> Quantity: <span class="quantity-label">2</span> </span>
//           <span class="update-quantity-link link-primary">
//             Update
//           </span>
//           <span class="delete-quantity-link link-primary">
//             Delete
//           </span>
//         </div>
//       </div>
//       <div class="delivery-option">
//         <p class="delivery-option-title">Choose a delivery option:</p>
//         <div class="delivery-options">
//           <input
//             type="radio"
//             class="delivery-option-input"
//             name="delivery-option-1"
//             title="option 1"
//           />
//           <div class="delivery-options-details">
//             <p class="delivery-option-date">
//             ${checkout.deliveryOptions1.deliveryDate}
//             </p>
//             <p class="delivery-option-price">
//             ${checkout.deliveryOptions1.deliveryPrice}
//             </p>
//           </div>
//         </div>
//         <div class="delivery-options">
//           <input
//             type="radio"
//             class="delivery-option-input"
//             name="delivery-option-1"
//             title="option 1"
//           />
//           <div>
//           <div class="delivery-option-date">
//           ${checkout.deliveryOptions2.deliveryDate}
//           </div>
//           <div class="delivery-option-price">
//           ${checkout.deliveryOptions2.deliveryPrice} - Shipping
//           </div>
//         </div>
//         </div>
//         <div class="delivery-options">
//           <input
//             type="radio"
//             class="delivery-option-input"
//             name="delivery-option-1"
//             title="option 1"
//           />
//           <div>
//           <div class="delivery-option-date">
//           ${checkout.deliveryOptions3.deliveryDate}
//           </div>
//           <div class="delivery-option-price">
//           ${checkout.deliveryOptions3.deliveryPrice}
//           - Shipping</div>
//         </div>
//         </div>
//       </div>
//     </div>
//   </div>
//     `;
// });
// document.querySelector('.js-order-summary').innerHTML = cartHTML;

let cartContainer = '';
shop.forEach((shopping)=>{
  cartContainer += `
  <div class="delivery-date">Delivery date: ${shopping.date}</div>
            <div class="cart-item-detail-grid">
              <img
                src="${shopping.Image}"
                alt=""
                class="product-image"
              />
              <div class="cart-items-details">
                <p class="product-name">${shopping.name}- 4 pairs</p>
                <p class="product-price">Ksh ${shopping.price}</p>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">4</span> </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary">
                    Delete
                  </span>
                </div>
              </div>
              <div class="delivery-option">
                <p class="delivery-option-title">Choose a delivery option:</p>
                <div class="delivery-options">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                    title="option 1"
                  />
                  <div class="delivery-options-details">
                    <p class="delivery-option-date">${shopping.deliveryOptions1.deliveryDate}</p>
                    <p class="delivery-option-price">${shopping.deliveryOptions1.deliveryPrice}</p>
                  </div>
                </div>
                <div class="delivery-options">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                    title="option 1"
                  />
                  <div>
                    <div class="delivery-option-date">${shopping.deliveryOptions2.deliveryDate}</div>
                    <div class="delivery-option-price">${shopping.deliveryOptions2.deliveryPrice} - Shipping</div>
                  </div>
                </div>
                <div class="delivery-options">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1"
                    title="option 1"
                  />
                  <div>
                    <div class="delivery-option-date">${shopping.deliveryOptions3.deliveryDate}</div>
                    <div class="delivery-option-price">${shopping.deliveryOptions3.deliveryPrice} - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
  `;
});
document.querySelector('.cart-item-container').innerHTML = cartContainer;
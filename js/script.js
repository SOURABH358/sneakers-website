const bars = document.querySelector('.bars');
const Close = document.querySelector('.close');
const tabs = document.querySelector('.tabs');
const cartIcon = document.querySelector('.cart-icon');
const cart = document.querySelector('.cart');
const items = document.querySelector('.items');
const next = document.querySelector('.product-slides .next svg');
const previous = document.querySelector('.product-slides .previous svg');
const root = document.querySelector(':root');
const productImage = document.querySelectorAll('.slide img');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const counter = document.querySelector('.counter p');
const addToCart = document.querySelector('.add-to-cart');
const list = document.querySelector('.cart ul');
const modalPrevious = document.querySelector('.modal-slides .previous svg');
const modalNext = document.querySelector('.modal-slides .next svg');
const modalThumbnail = document.querySelectorAll('.modal-thumbnails img');
const productThumbnail = document.querySelectorAll('.product-thumbnails img')
const avatar = document.querySelector('.avatar');
const profile = document.querySelector('.profile');

let value = 0;
let y = parseInt(getComputedStyle(root).getPropertyValue('--y'));
let x = parseInt(getComputedStyle(root).getPropertyValue('--x'));
window.addEventListener('DOMContentLoaded', () => {
    modalThumbnail.forEach(item => {
        if (item.getAttribute('data-id') === String(y)) {
            item.classList.add('highlight');
        }
        else {
            item.classList.remove('highlight')
        }
    })
    productThumbnail[0].classList.add('highlight');
})
bars.addEventListener('click', () => {
    tabs.classList.add('show-tabs');
    overlay.classList.add('show-overlay');
})
Close.addEventListener('click', () => {
    tabs.classList.remove('show-tabs');
    overlay.classList.remove('show-overlay');

})
cartIcon.addEventListener('click', () => {
    cart.classList.toggle('show-cart');
    cartIcon.querySelector('svg').classList.toggle('show-svg');
    if (cart.classList.contains('show-cart')) {
        items.classList.add('show-items');
    }
    else {
        items.classList.remove('show-items');
    }
})

next.addEventListener('click', () => {
    let x = parseInt(getComputedStyle(root).getPropertyValue('--x'));
    if (x < 3) {
        root.style.setProperty('--x', x + 1);
    }

})
previous.addEventListener('click', () => {
    let x = parseInt(getComputedStyle(root).getPropertyValue('--x'));
    if (x > 0) {
        root.style.setProperty('--x', x - 1);
    }
})
productImage.forEach(item => {
    item.addEventListener('click', () => {
        if (innerWidth > 600) {
            modal.classList.add('show-modal');
            overlay.classList.add('show-overlay');
        }
    });
})
modal.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('show-modal');
    overlay.classList.remove('show-overlay');
})
modalPrevious.addEventListener('click', () => {
    let y = parseInt(getComputedStyle(root).getPropertyValue('--y'));
    if (y > 0) {
        root.style.setProperty('--y', y - 1);
        modalThumbnail.forEach(item => {
            if (item.getAttribute('data-id') === String(y - 1)) {
                item.classList.add('highlight');
            }
            else {
                item.classList.remove('highlight')
            }
        })
    }
})
modalNext.addEventListener('click', () => {
    let y = parseInt(getComputedStyle(root).getPropertyValue('--y'));
    if (y < 3) {
        root.style.setProperty('--y', y + 1);
        modalThumbnail.forEach(item => {
            if (item.getAttribute('data-id') === String(y + 1)) {
                item.classList.add('highlight');
            }
            else {
                item.classList.remove('highlight')
            }
        })

    }
})
minus.addEventListener('click', () => {
    value = parseInt(counter.innerText);
    if (value > 0) {
        counter.innerText = value - 1
    }
});
plus.addEventListener('click', () => {
    value = parseInt(counter.innerText);
    counter.innerText = value + 1
});
addToCart.addEventListener('click', () => {
    list.innerHTML = '';
    let text;
    if (innerWidth <= 600) {
        text = 'Autumn Edition Sneakers...'
    }
    else {
        text = 'Fall Limited Edition Sneakers';
    }
    const element = document.createElement('li');
    element.innerHTML = `<div class="product-thumb">
    <img src="./images/image-product-1-thumbnail.jpg" alt="image-product-1-thumbnail">
    <div>
        <p>${text}</p>
        <p>$125.00 x<span class="quantity">${counter.innerText}</span><span class="total">$${parseInt(counter.innerText) * 125.00}</span></p>
    </div>
    <svg id = "delete" width="14" height="16" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <path
                d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                id="a" />
        </defs>
        <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
    </svg>
</div>
<div class="checkout"><a href="#">Checkout</a></div>`;
    list.append(element);
    document.querySelector('.items').innerText = counter.innerText;
    document.querySelector('.back').style.display = "none";
    element.querySelector('#delete').addEventListener('click', () => {
        list.innerHTML = '';
        document.querySelector('.items').classList.remove('show-items');
        document.querySelector('.back').style.display = "block";

    })
})
productThumbnail.forEach(item => {
    item.addEventListener('click', () => {
        productThumbnail.forEach(val => {
            val.classList.remove('highlight');
        })
        root.style.setProperty('--x', parseInt(item.getAttribute('data-name')))
        item.classList.add('highlight');

    })
})
modalThumbnail.forEach(item => {
    item.addEventListener('click', () => {
        modalThumbnail.forEach(val => {
            val.classList.remove('highlight');
        })
        root.style.setProperty('--y', parseInt(item.getAttribute('data-id')))
        item.classList.add('highlight');

    })
})

avatar.addEventListener('click',()=>{
    profile.classList.toggle('show-profile');
})
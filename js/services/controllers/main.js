import { servicesProducts} from "../services/producServices.js";

const productContainer = document.querySelector("[data-product]");

function createCard (name, price, image, id) {
const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
<div class="img-container">
    <img src="${image}" alt="${name}">
</div>

<div class="card-container--info">
    <p>${name}</p>
        <div class="card-container--value">
            <p>$ ${price}</p>
            <button class="delete-button" data-id="${id}">
                <img src="assets/trash-solid (1).svg">
            </button>   
        </div>
        </div>
`;

productContainer.appendChild(card-container);
return card-container;

const render = async () => {
    try {
        const listProducts = await servicesProducts.productList();

        listProducts.forEach(product => {
            productContainer.appendChild(
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id
                )
            )
        });

    } catch (error) {
        console.log(error);
    }
}

}
render();
// This would make things look cleaner, but isn't widely supported yet.
// const data = await fetch('/data.json');
// const products = await data.json();


fetch('/data.json')
  .then(response => response.json())
  .then(products => {
    products.map(product => {
      const { id, brand, name, description, qty, price, image } = product;
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      productElement.innerHTML = `
      <div class="flex min-h-full flex-auto justify-center">
        <div class="border-2 min-h-full border-gray-900 rounded-lg p-4 flex flex-col justify-between">
          <div>
              <div class="flex justify-center">
                <img src="${image}" alt="${description}" class="w-64 h-64 rounded-lg mb-3 drop-shadow-md hover:drop-shadow-xl">
              </div>
              <h2 class="text-xl font-bold text-gray-900 cursor-pointer">${brand} ${name} <span class="text-sm font-light">ID: ${id}</span></h2>
          </div>
          
         
          <p class="text-gray-900 py-3">${description}</p>
          
          <div class="">
              <p class="text-gray-900 font-bold text-2xl">${price}</p>
              <p class="text-green-500 font-bold mb-2">In stock - ${qty} at your store</p>
              <button class="bg-gray-900 text-white px-4 py-2 rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>
      `;
      document.querySelector('.products').appendChild(productElement);

    }
    );
  })
  .catch(error => console.error(error));




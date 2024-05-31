import React from 'react'

function Market() {
  const product = {
    image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627969658i/58681160.jpg',
    name: 'Product Name',
    price: 999,
    stock: 12,
  };

  return (
    <div className="flex gap-7 justify-center items-center min-h-screen">
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />

    </div>
  );
};


function ProductCard ({ product }){
  return (
    <div className="flex flex-col max-w-sm gap-8 rounded-3xl overflow-hidden shadow-lg bg-white">
      <img className="w-40 rounded-3xl h-30 p-5 mt-3 ml-3 " src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">Price: ₹{product.price}</p>
        <p className="text-gray-700 text-base">Stock left: {product.stock}</p>
      </div>
    </div>
  );
};

// Example usage
// const App = () => {
  export default Market





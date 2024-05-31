import React from 'react'

function Market() {
  const product = {
    image: 'https://images-na.ssl-images-amazon.com/images/I/91OlNrX9RbL.png',
    name: 'The Vikings',
    price: 999,
    stock: 12,
  };

  return (
      <div className="p-10  grid grid-cols-4  gap-4">
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
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
    <div className="flex flex-col h-90 w-60 gap-8 rounded-3xl mt-5 overflow-hidden shadow-lg bg-white border-solid border-black">
      <img className="w-41 rounded-3xl h-64 p-5 mt-3" src={product.image} alt={product.name} /> //h30 w40
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

//   import React from 'react';

// function Market() {
//   const product = {
//     image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627969658i/58681160.jpg',
//     name: 'Product Name',
//     price: 999,
//     stock: 12,
//   };

//   return (
//     <div className='grid grid-cols-4 gap-4 p-4'>
//       <ProductCard product={product} />
//       <ProductCard product={product} />
//       <ProductCard product={product} />
//       <ProductCard product={product} />
//       <ProductCard product={product} />
//       <ProductCard product={product} />
//     </div>
//   );
// }

// function ProductCard({ product }) {
//   return (
    // <div className="flex flex-col max-w-sm gap-8 rounded-3xl overflow-hidden shadow-lg bg-white">
    //   <img className="w-full rounded-3xl h-64 p-5 mt-3" src={product.image} alt={product.name} />
    //   <div className="px-6 py-4">
    //     <div className="font-bold text-xl mb-2">{product.name}</div>
    //     <p className="text-gray-700 text-base">Price: ₹{product.price}</p>
    //     <p className="text-gray-700 text-base">Stock left: {product.stock}</p>
    //   </div>
    // </div>
//   );
// }

// export default Market;






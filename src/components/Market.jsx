import React, { useState } from 'react';

function Market() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const products = [
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085601/sm_9789395085601_080520241156923.jpg',
      name: 'Internet Technologies',
      currPrice: 199,
      originalPrice: 350,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085175/md_9789395085175_080520241156855.jpg',
      name: 'Computer Architecture',
      currPrice: 219,
      originalPrice: 325,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },   
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085410/sm_9789395085410_231220221126019.jpg',
      name: 'Computer Networks',
      currPrice: 149,
      originalPrice: 225,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085946/sm_9789395085946_301220231116199.jpg',
      name: 'Artificial Intelligence',
      currPrice: 149,
      originalPrice: 250,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085243/md_9789395085243_270820221217562.jpg',
      name: 'Software    Testing',
      currPrice: 99,
      originalPrice: 175,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    }, 
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085786/sm_9789395085786_160520241036827.jpg',
      name: 'Machine Learning',
      currPrice: 149,
      originalPrice: 275,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085434/sm_9789395085434_231220221126539.jpg',
      name: 'Operating Systems',
      currPrice: 149,
      originalPrice:275,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085793/sm_9789395085793_301220231116803.jpg',
      name: 'Data Mining',
      currPrice: 99,
      originalPrice:200,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085113/sm_9789395085113_080520241155651.jpg',
      name: 'Discrete Maths',
      currPrice: 199,
      originalPrice:295,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085885/sm_9789395085885_281220231023383.jpg',
      name: 'Web Programming',
      currPrice: 219,
      originalPrice:350,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085991/sm_9789395085991_300520241205959.jpg',
      name: 'Software Testing',
      currPrice: 149,
      originalPrice:300,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085953/sm_9789395085953_301220231116687.jpg',
      name: 'Computer Graphics',
      currPrice: 99,
      originalPrice:150,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/5551234122862/sm_5551234122862_310520241318087.jpg',
      name: 'Electronic Content Design',
      currPrice: 149,
      originalPrice:250,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085168/sm_9789395085168_080520241156919.jpg',
      name: 'Database Management',
      currPrice: 149,
      originalPrice:285,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085618/sm_9789395085618_310720231012557.jpg',
      name: 'Python Programming',
      currPrice: 229,
      originalPrice:379,
      sellerName: 'Venkat',
      contactNumber: '9886729334',
    },
    
    // Add more products here...
  ];

  const handleButtonClick = (product) => {
    setModalContent(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-9 p-4">
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 p-4"> */}
        {products.map((product, index) => (
          <div key={index} className="card border-2 border-black rounded-3xl shadow-lg bg-white p-4">
            <div className="img">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="desc">
              <p>
                <span className="bname font-bold">{product.name}</span> <br />by Skyward Publishers
              </p>
              <p>
                <span className="cost text-green-600">₹{product.currPrice}</span>{' '}
                <span className="discount line-through text-red-600">₹{product.originalPrice}</span>
              </p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleButtonClick(product)}
              >
                View Seller Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl mb-4">Seller Details</h2>
            <p><strong>Name:</strong> {modalContent.sellerName}</p>
            <p><strong>Contact Number:</strong> {modalContent.contactNumber}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Market;

// import React from 'react'

// function Market() {
//   const products = [
//     {
//       image: 'https://cdn01.sapnaonline.com/product_media/9789395085601/sm_9789395085601_080520241156923.jpg',
//       name: 'Internet Technologies',
//       currPrice: 199,
//       originalPrice: 350,
//     },
//     {
//       image: 'https://cdn01.sapnaonline.com/product_media/9789395085175/md_9789395085175_080520241156855.jpg',
//       name: 'Computer Architecture',
//       currPrice: 219,
//       originalPrice: 325,
//     },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085243/md_9789395085243_270820221217562.jpg',
    //   name: 'Software Testing',
    //   currPrice: 99,
    //   originalPrice: 175,
    // },    
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085410/sm_9789395085410_231220221126019.jpg',
    //   name: 'Computer Networks',
    //   currPrice: 149,
    //   originalPrice: 225,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085946/sm_9789395085946_301220231116199.jpg',
    //   name: 'Artificial Intelligence',
    //   currPrice: 149,
    //   originalPrice: 250,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085786/sm_9789395085786_160520241036827.jpg',
    //   name: 'Machine Learning',
    //   currPrice: 149,
    //   originalPrice: 275,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085434/sm_9789395085434_231220221126539.jpg',
    //   name: 'Operating Systems',
    //   currPrice: 149,
    //   originalPrice:275,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085793/sm_9789395085793_301220231116803.jpg',
    //   name: 'Data Mining',
    //   currPrice: 99,
    //   originalPrice:200,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085113/sm_9789395085113_080520241155651.jpg',
    //   name: 'Discrete Maths',
    //   currPrice: 199,
    //   originalPrice:295,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085885/sm_9789395085885_281220231023383.jpg',
    //   name: 'Web Programming',
    //   currPrice: 219,
    //   originalPrice:350,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085991/sm_9789395085991_300520241205959.jpg',
    //   name: 'Software Testing',
    //   currPrice: 149,
    //   originalPrice:300,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085953/sm_9789395085953_301220231116687.jpg',
    //   name: 'Computer Graphics',
    //   currPrice: 99,
    //   originalPrice:150,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/5551234122862/sm_5551234122862_310520241318087.jpg',
    //   name: 'Electronic Content Design',
    //   currPrice: 149,
    //   originalPrice:250,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085168/sm_9789395085168_080520241156919.jpg',
    //   name: 'DBMS',
    //   currPrice: 149,
    //   originalPrice:285,
    // },
    // {
    //   image: 'https://cdn01.sapnaonline.com/product_media/9789395085618/sm_9789395085618_310720231012557.jpg',
    //   name: 'Python Programming',
    //   currPrice: 229,
    //   originalPrice:379,
    // },
//   ];

//   return ( 
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 p-4">
//       {products.map((product,index)=>(
//           <div key={index} class="card">
//             <div class="img">
//              <img src={product.image} alt={product.name}/>
//             </div>
//             <div class="desc">
//               <p> <span class="bname">{product.name}</span> <br/>by skyward publisher</p>
//               <p><span class="cost">₹{product.currPrice}</span> <span class="discount">₹{product.originalPrice}</span> </p>
//             </div>
//           </div>
//       ))}
//     </div>
//     );
// };



//   export default Market






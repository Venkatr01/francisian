import React from 'react'

function Market() {
  const products = [
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085601/sm_9789395085601_080520241156923.jpg',
      name: 'Internet Technologies',
      currPrice: 199,
      originalPrice: 350,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085175/md_9789395085175_080520241156855.jpg',
      name: 'Computer Architecture',
      currPrice: 219,
      originalPrice: 325,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085243/md_9789395085243_270820221217562.jpg',
      name: 'Software Testing',
      currPrice: 99,
      originalPrice: 175,
    },    
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085410/sm_9789395085410_231220221126019.jpg',
      name: 'Computer Networks',
      currPrice: 149,
      originalPrice: 225,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085946/sm_9789395085946_301220231116199.jpg',
      name: 'Artificial Intelligence',
      currPrice: 149,
      originalPrice: 250,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085786/sm_9789395085786_160520241036827.jpg',
      name: 'Machine Learning',
      currPrice: 149,
      originalPrice: 275,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085434/sm_9789395085434_231220221126539.jpg',
      name: 'Operating Systems',
      currPrice: 149,
      originalPrice:275,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085793/sm_9789395085793_301220231116803.jpg',
      name: 'Data Mining',
      currPrice: 99,
      originalPrice:200,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085113/sm_9789395085113_080520241155651.jpg',
      name: 'Discrete Maths',
      currPrice: 199,
      originalPrice:295,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085885/sm_9789395085885_281220231023383.jpg',
      name: 'Web Programming',
      currPrice: 219,
      originalPrice:350,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085991/sm_9789395085991_300520241205959.jpg',
      name: 'Software Testing',
      currPrice: 149,
      originalPrice:300,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085953/sm_9789395085953_301220231116687.jpg',
      name: 'Computer Graphics',
      currPrice: 99,
      originalPrice:150,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/5551234122862/sm_5551234122862_310520241318087.jpg',
      name: 'Electronic Content Design',
      currPrice: 149,
      originalPrice:250,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085168/sm_9789395085168_080520241156919.jpg',
      name: 'DBMS',
      currPrice: 149,
      originalPrice:285,
    },
    {
      image: 'https://cdn01.sapnaonline.com/product_media/9789395085618/sm_9789395085618_310720231012557.jpg',
      name: 'Python Programming',
      currPrice: 229,
      originalPrice:379,
    },
  ];

  return ( 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9 p-4">
      {products.map((product,index)=>(
          <div key={index} class="card">
            <div class="img">
             <img src={product.image} alt={product.name}/>
            </div>
            <div class="desc">
              <p> <span class="bname">{product.name}</span> <br/>by skyward publisher</p>
              <p><span class="cost">₹{product.currPrice}</span> <span class="discount">₹{product.originalPrice}</span> </p>
            </div>
          </div>
      ))}
    </div>
    );
};



  export default Market






import React from 'react'

function Home() {

  const date = new Date();
  const day = date.getDate()
  const month = date.getMonth()
  
  const formattedDate = `${day}-${month+1}`
  
  const bday = "28-5";
  
  
  if(formattedDate === bday){
    alert("Happy Birthday")
  }else{
    alert("Not your birthday")
  }
  

  return (
    <div className='flex justify-center align-middle py-64 ' >
        <div className='flex border-solid border-b-2 border-pink-200 ' >
            Welcome Home baby!!
        </div>
    </div>
  )
}

export default Home

// const date = new Date();
// // console.log(date);
// const day = date.getDate()
// // console.log(day)
// const month = date.getMonth()
// // console.log(month+1)

// const formattedDate = `${day}-${month+1}`
// console.log(formattedDate)

// const bday = "29-5";
// console.log(bday)


// if(formattedDate === bday){
//   console.log("Happy Birthday")
// }else{
//   console.log("Not your birthday")
// }

import React, { useEffect, useState } from 'react'

function Home() {
  const [msg,setMsg] = useState("Welcome");
//  useEffect(()=>{
//   Birthday();
//  },[])
  useEffect(()=>{
    const date = new Date();
  const day = date.getDate()
  const month = date.getMonth()
  const formattedDate = `${day}-${month+1}`
  const people = [
    { name: "Deepak Sirvee", birthday: "01-5" },
    { name: "venkat ", birthday: "29-5" },

    { name: "Rishi", birthday: "27-4" },
    { name: "Hemanth", birthday: "02-7" },
    { name: "Ankit", birthday: "28-12" },
    { name: "Bharat", birthday: "18-5" },
    { name: "Diwakar", birthday: "1-11" },
    { name: "Deepak pt", birthday: "16-5" },
    { name: "Preetham", birthday: "19-2" },
    { name: "Akash p", birthday: "10-12" },
    { name: "Akash Maurya", birthday: "31-1" },
    { name: "Sahil", birthday: "23-1" },
    { name: "Vamsi", birthday: "23-5" }
  ];

  const birthdayToday = people.filter(person => person.birthday === formattedDate);
  // console.log(birthdayToday)
  const namesWithBirthdayToday = birthdayToday.map(person => person.name);
  console.log("Happy Birthday "+ namesWithBirthdayToday.join(', '));
  setMsg("Happy Birthday "+ namesWithBirthdayToday.join(', '))
 
  },[])
  

  return (
    <div className='flex justify-center align-middle py-64 ' >
        <div className='flex border-solid border-b-2 border-pink-200 flex-row gap-3' >
            {/* Welcome Home baby!! */}
          {msg}
        </div>
    </div>
  )
}


 function Birthday() {

  

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

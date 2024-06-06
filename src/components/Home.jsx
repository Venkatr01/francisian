import React, { useEffect, useState } from 'react'
import Happybirthday from './Happybirthday';
import Timetable from './Timetable';
import Dropdown from './Dropdown';
function Home() {
  const [msg,setMsg] = useState("");

  useEffect(()=>{
    const date = new Date();
    const day = date.getDate()
    const month = date.getMonth()
    const formattedDate = `${day}-${month+1}`
    const people = [
      { name: "Sufiya", birthday: "31-5" },
      { name: "venkat ", birthday: "2-6" },
      { name: "Rishi", birthday: "27-4" },
      { name: "Hemanth", birthday: "02-7" },
      { name: "Ankit", birthday: "30-5" },
      { name: "Bharat", birthday: "18-5" },
      { name: "Diwakar", birthday: "1-11" },
      { name: "Deepak pt", birthday: "16-5" },
      { name: "Preetham", birthday: "19-2" },
      { name: "Akash p", birthday: "10-12" },
      { name: "Akash Maurya", birthday: "1-6" },
      { name: "Sahil", birthday: "23-1" },
      { name: "Vamsi", birthday: "23-5" }
    ];

  const birthdayToday = people.filter(person => person.birthday === formattedDate);
  const namesWithBirthdayToday = birthdayToday.map(person => person.name);
  // console.log(namesWithBirthdayToday)

  setMsg("Happy Birthday venkat "+ namesWithBirthdayToday.join(', '))
 
  },[])
  

  return (
    <div className=' ' >
        <div className='' >
          <Happybirthday name={msg} />
        </div>
        {/* <Timetable /> */}
        <div className='ml-30 pl-20'>
          <Dropdown/>
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

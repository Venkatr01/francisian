import React, { useEffect, useState } from 'react'
import Happybirthday from './Happybirthday';
import Timetable from './Timetable';
import Dropdown from './Dropdown';
import Weather from './Weather';
function Home() {
  const [msg,setMsg] = useState("");
  const [date,setDate] = useState('');
  const [month,setMonth] = useState('');

  useEffect(()=>{
    const date = new Date();
    const day = date.getDate()
    console.log(day)
    setDate(day);
    const month = date.getMonth()
    setMonth(month)
    const formattedDate = `${day}-${month+1}`
    // const people = [
    //   { name: "Sufiya", birthday: "31-5" },
    //   { name: "venkat ", birthday: "2-6" },
    //   { name: "Rishi", birthday: "27-4" },
    //   { name: "Hemanth", birthday: "02-7" },
    //   { name: "Ankit", birthday: "30-5" },
    //   { name: "Bharat", birthday: "18-5" },
    //   { name: "Diwakar", birthday: "1-11" },
    //   { name: "Deepak pt", birthday: "16-5" },
    //   { name: "Preetham", birthday: "19-2" },
    //   { name: "Akash p", birthday: "10-12" },
    //   { name: "Akash Maurya", birthday: "1-6" },
    //   { name: "Sahil", birthday: "23-1" },
    //   { name: "Vamsi", birthday: "23-5" }
    // ];
    const people = [
      { name: "Jared Leto", birthday: "26-12" },
      { name: "Rowan Atkinson", birthday: "6-1" },
      { name: "Oprah Winfrey", birthday: "29-1" },
      { name: "Shakira", birthday: "2-2" },
      { name: "Jennifer Aniston", birthday: "11-2" },
      { name: "Rihanna", birthday: "20-2" },
      { name: "Justin Bieber", birthday: "1-3" },
      { name: "Daniel Craig", birthday: "2-3" },
      { name: "Jessica Biel", birthday: "3-3" },
      { name: "Eva Mendes", birthday: "5-3" },
      { name: "Catherine O'Hara", birthday: "4-3" },
      { name: "Will.i.am", birthday: "15-3" },
      { name: "Adam Levine", birthday: "18-3" },
      { name: "Lady Gaga", birthday: "28-3" },
      { name: "Celine Dion", birthday: "30-3" },
      { name: "Eddie Murphy", birthday: "3-4" },
      { name: "Robert Downey Jr.", birthday: "4-4" },
      { name: "Pharrell Williams", birthday: "5-4" },
      { name: "Paul Rudd", birthday: "6-4" },
      { name: "Kristen Stewart", birthday: "9-4" },
      { name: "Emma Watson", birthday: "15-4" },
      { name: "Victoria Beckham", birthday: "17-4" },
      { name: "James McAvoy", birthday: "21-4" },
      { name: "Gigi Hadid", birthday: "23-4" },
      { name: "Jessica Alba", birthday: "28-4" },
      { name: "Dwayne Johnson", birthday: "2-5" },
      { name: "Adele", birthday: "5-5" },
      { name: "George Clooney", birthday: "6-5" },
      { name: "Enrique Iglesias", birthday: "8-5" },
      { name: "Bono", birthday: "10-5" },
      { name: "Rami Malek", birthday: "12-5" },
      { name: "Megan Fox", birthday: "16-5" },
      { name: "Cher", birthday: "20-5" },
      { name: "Chris Pratt", birthday: "21-5" },
      { name: "Lenny Kravitz", birthday: "26-5" },
      { name: "Kanye West", birthday: "8-6" },
      { name: "Johnny Depp", birthday: "9-6" },
      { name: "Liam Neeson", birthday: "7-6" },
      { name: "Natalie Portman", birthday: "9-6" },
      { name: "Courteney Cox", birthday: "15-6" },
      { name: "Lionel Messi", birthday: "24-6" },
      { name: "Elon Musk", birthday: "28-6" },
      { name: "Tom Cruise", birthday: "3-7" },
      { name: "Sylvester Stallone", birthday: "6-7" },
      { name: "Kevin Bacon", birthday: "8-7" },
      { name: "Tom Hanks", birthday: "9-7" },
      { name: "Sofia Vergara", birthday: "10-7" },
      { name: "Vin Diesel", birthday: "18-7" },
      { name: "Jennifer Lopez", birthday: "24-7" },
      { name: "Daniel Radcliffe", birthday: "23-7" },
      { name: "Sandra Bullock", birthday: "26-7" },
      { name: "Arnold Schwarzenegger", birthday: "30-7" },
      { name: "Mick Jagger", birthday: "26-7" },
      { name: "Wesley Snipes", birthday: "31-7" },
      { name: "Barack Obama", birthday: "4-8" },
      { name: "Charlize Theron", birthday: "7-8" },
      { name: "Chris Hemsworth", birthday: "11-8" },
      { name: "Ben Affleck", birthday: "15-8" },
      { name: "Madonna", birthday: "16-8" },
      { name: "Robert De Niro", birthday: "17-8" },
      { name: "Cameron Diaz", birthday: "30-8" },
      { name: "Keanu Reeves", birthday: "2-9" },
      { name: "Beyoncé", birthday: "4-9" },
      { name: "P!nk", birthday: "8-9" },
      { name: "Hugh Grant", birthday: "9-9" },
      { name: "Prince Harry", birthday: "15-9" },
      { name: "Will Smith", birthday: "25-9" },
      { name: "Serena Williams", birthday: "26-9" },
      { name: "Gwyneth Paltrow", birthday: "27-9" },
      { name: "Avril Lavigne", birthday: "27-9" },
      { name: "Gwen Stefani", birthday: "3-10" },
      { name: "Bruno Mars", birthday: "8-10" },
      { name: "Eminem", birthday: "17-10" },
      { name: "Ryan Reynolds", birthday: "23-10" },
      { name: "Julia Roberts", birthday: "28-10" },
      { name: "Matthew McConaughey", birthday: "4-11" },
      { name: "Leonardo DiCaprio", birthday: "11-11" },
      { name: "Anne Hathaway", birthday: "12-11" },
      { name: "Miley Cyrus", birthday: "23-11" },
      { name: "Scarlett Johansson", birthday: "22-11" },
      { name: "Brad Pitt", birthday: "18-12" },
      { name: "Katie Holmes", birthday: "18-12" },
      { name: "Jude Law", birthday: "29-12" },
      { name: "Tiger Woods", birthday: "30-12" }
  ];
  

  const birthdayToday = people.filter(person => person.birthday === formattedDate);
  const namesWithBirthdayToday = birthdayToday.map(person => person.name);

  setMsg("Happy Birthday "+ namesWithBirthdayToday.join(', '))
 
  },[])
  


  return (
    <div className=' ' >
      <div className='ml-11 mt-5'>
        Date: {date} / {month+1}
      </div>
      <div className='ml-10 mt-5'>
        <Weather />
      </div>

        <div className='' >
          <Happybirthday name={msg} />
        </div>
        {/* <Timetable /> */}
        <div className='ml-30 pl-10 mr-10'>
          <Dropdown/>
        </div>
    </div>
  )
}



export default Home


import React from 'react'
import Navbar from './Navbar'

function Announcements() {
  return (
    <div>
      <AnnounceMsg date={"14-June-2024"} msgContent={"The College will remain closed on 17-June-2024(Monday) on account of Bakrid."} />
      <AnnounceMsg date={"06-June-2024"} msgContent={"The last date for payment of BCU semester examination fees as per the notification issued on 22nd May 2024 is 10th June 2024. Those students who fail to pay their examination fees within the due date will not be allowed to appear for the university examination."} />
      <AnnounceMsg date={"30-May-2024"} msgContent={"On 1st June 2024(Saturday) the compensatory classes to all the UG students would be coducted as per Thursdays time table between 8:30am to 1:30pm"} /> 
      <AnnounceMsg date={"25-May-2024"}  msgContent={"The last date for paying college fee has been extended till 01-June-2024, failing to do so will attract a fine of 100rs per day"}/>
      <AnnounceMsg date={"09-May-2024"} msgContent={"The College will remain closed tomorrow(10/05/2024)on account of Basava Jayanti."} />
    </div>
  )
}

function AnnounceMsg({date,msgContent}){
  return(
    <div className=' flex flex-col pt-5 p-9 align-middle mt-20 ml-20 bg-whit rounded-3xl mr-20 border-2 border-black' >
    <br /> <b>Date: {date} </b><br /> <br />
    Dear Students,<br/>
    {msgContent}
    <br /><br />Regards,<br /><br />
    <b>Dr. R N Subba Rao <br /> Principal <br />ST. Francis College  </b>    
  </div>
  )
}

export default Announcements

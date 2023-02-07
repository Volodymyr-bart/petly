// import { nanoid } from "nanoid";
// import { Div } from "./OurFriendsWorkSchedule.styled";


const currentDayOfWeekName = new Date().toLocaleString( 'en-US', {weekday: 'short'});
console.log(currentDayOfWeekName);



const WorkingDays = ({workDays}) => {
    // const WEEK_DAY_NAMES = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
//     console.log(workDays);
//   return (
//     <Div id="demo" className="collapse">
//       <span>
//         <ul>
//       {workDays.forEach(workDay => {
//         return (
//             <li>
//               {workDay.isOpen ? (
//                 <p> 
//                   {workDay.from} - {workDay.to}
//                 </p>
//               ) : (
//                 <p>Closed</p>
//               )}
//             </li>)
        
//       })}
//         </ul>
//       </span>
//       </Div>
//   );
};

export default WorkingDays;
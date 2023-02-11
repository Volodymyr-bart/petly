// import { nanoid } from "nanoid";
import { StyledTimeDiv, WorkDayStyledTr,  StyledTable, StyledTimeUl, StyledTimeSpan } from "./OurFriendsWorkSchedule.styled";
import { FriendsInfoStyledTime } from "./OurFriendsItem.styled";


// const currentDayOfWeekName = new Date().toLocaleString( 'en-US', {weekday: 'short'});
// console.log(currentDayOfWeekName);


const WorkingDays = ({workDays}) => {
    const WEEK_DAY_NAMES = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const currentDayOfWeekName = new Date().getDay();
    const dayIndex = currentDayOfWeekName === 0 ? 6 : currentDayOfWeekName-1;
// console.log(currentDayOfWeekName - 1);
//     console.log(dayIndex);
  return (
    <StyledTimeDiv>
        
        <FriendsInfoStyledTime>Time:</FriendsInfoStyledTime>
        <StyledTimeUl>
        {workDays.map((workDay, index) => {
          if(index === dayIndex){
            return (
              <li key={index}>
              <StyledTimeSpan>
              {`${WEEK_DAY_NAMES[index]}`}
              </StyledTimeSpan>
                {workDay.isOpen ? (
                  <span> 
                    {workDay.from} - {workDay.to} 
                  </span>
                ) : (
                  <span>Closed</span>
                )}
              </li>)
          }
          return null;
        })}
        </StyledTimeUl>
        <div>
        
        <StyledTable>
        <tbody>
      {workDays.map((workDay, index) => {
        return (
            <WorkDayStyledTr key={index}  style={{ color: index === dayIndex ? '#f59256' : '#000000'}}>
              {/* <div> */}
              <td>
              {`${WEEK_DAY_NAMES[index]}`}
              </td>
                
              {workDay.isOpen ? (
                <td> 
                  {workDay.from} - {workDay.to} 
                </td>
                 
              ) : (
                <td>Closed</td>
              )}
              {/* </div> */}
            </WorkDayStyledTr>)
      })}
      </tbody>
        </StyledTable>
        </div>
    
        </StyledTimeDiv>
  );
};

export default WorkingDays;
// import { nanoid } from "nanoid";
import { StyledTimeDiv, WorkDayStyledTr,  StyledTable } from "./OurFriendsWorkSchedule.styled";


// const currentDayOfWeekName = new Date().toLocaleString( 'en-US', {weekday: 'short'});
// console.log(currentDayOfWeekName);


const WorkingDays = ({workDays}) => {
    const WEEK_DAY_NAMES = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
    const currentDayOfWeekName = new Date().getDay();
// console.log(currentDayOfWeekName - 1);
    // console.log(workDays);
  return (
    <StyledTimeDiv>
        <div>
        <StyledTable>
        <tbody>
      {workDays.map((workDay, index) => {
        return (
            <WorkDayStyledTr key={index}  style={{ color: index === currentDayOfWeekName - 1 ? '#f59256' : '#000000'}}>
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
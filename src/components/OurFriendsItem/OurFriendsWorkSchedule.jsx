// import { nanoid } from "nanoid";
import { StyledTimeDiv, WorkDayStyledLi, WorkDayStyledSpan } from "./OurFriendsWorkSchedule.styled";


// const currentDayOfWeekName = new Date().toLocaleString( 'en-US', {weekday: 'short'});
// console.log(currentDayOfWeekName);


const WorkingDays = ({workDays}) => {
    const WEEK_DAY_NAMES = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
//     const currentDayOfWeekName = new Date().getDay();
// console.log(currentDayOfWeekName);
    // console.log(workDays);
  return (
    <StyledTimeDiv>
        <div>
        <ul>
      {workDays.map((workDay, index) => {
        return (
            <WorkDayStyledLi key={index}>
                {`${WEEK_DAY_NAMES[index]}`}
              {workDay.isOpen ? (
                <WorkDayStyledSpan> 
                  {workDay.from} - {workDay.to}
                </WorkDayStyledSpan>
              ) : (
                <WorkDayStyledSpan>Closed</WorkDayStyledSpan>
              )}
            </WorkDayStyledLi>)
      })}
        </ul>
        </div>
    
        </StyledTimeDiv>
  );
};

export default WorkingDays;
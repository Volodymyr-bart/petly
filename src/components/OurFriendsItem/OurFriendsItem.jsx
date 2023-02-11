import { 
    FriendsStyledLi,
    FriendsStyledA, 
    FriendsStyledDiv, 
    FriendsStyledImage, 
    FriendsStyledUL,
    StyledLink,
    StyledNoInfo,
    FriendsInfoStyledLi,
    FriendsInfoStyledP,
    StyledDivBox,
    FriendsInfoStyledTime

} from "./OurFriendsItem.styled";
import image from "../../img/placeholder.png";
import WorkingDays from "./OurFriendsWorkSchedule";



// const curretyDayOfWeekName = new Date().toLocaleString( 'en-US', {weekday: 'short'});

// const currentDayOfWeekName = new Date().getDay();
// console.log(currentDayOfWeekName);



const noInfo = '-----------------------------------';


const OurFriendsItem = ({friend}) => {
    const { title, url, address, addressUrl, imageUrl, workDays, phone, email,  } = friend;
    const onWorkDays = workDays && workDays.length > 0;

    return (
        <FriendsStyledLi>
        <FriendsStyledA href={url} target="_blank" rel="noreferrer">
            {title}
        </FriendsStyledA>

        <FriendsStyledDiv>
            {imageUrl ? (
            <FriendsStyledImage src={imageUrl} alt={title} />
             ) : ( 
             <FriendsStyledImage src={image} alt={title} /> 
            )}

            <FriendsStyledUL>
            <FriendsInfoStyledLi>
                { !onWorkDays && <FriendsInfoStyledTime>Time:</FriendsInfoStyledTime>}
                <StyledDivBox>
                {onWorkDays ? ( 
                <WorkingDays workDays={workDays}/> ) : (
                    <StyledNoInfo>{noInfo}</StyledNoInfo>
                )}
                </StyledDivBox>
            </FriendsInfoStyledLi>

            <FriendsInfoStyledLi>
                <FriendsInfoStyledP>Address:</FriendsInfoStyledP>
                {addressUrl ? (
              <StyledLink href={addressUrl} target="_blank" rel="noreferrer">
                {address || noInfo}
              </StyledLink>
            ) : (
              <StyledNoInfo>{address || noInfo}</StyledNoInfo>
            )}
            </FriendsInfoStyledLi>

            <FriendsInfoStyledLi>
                <FriendsInfoStyledP>Email:</FriendsInfoStyledP>
                {email ? (
              <StyledLink
                isNotDecorated={true}
                href={`mailto:${email}`}
                target="blank"
                rel="noreferrer"
              >
                {email}
              </StyledLink>
            ) : (
                <StyledNoInfo>{noInfo}</StyledNoInfo>
            )}
            </FriendsInfoStyledLi>

            <FriendsInfoStyledLi>
                <FriendsInfoStyledP>Phone:</FriendsInfoStyledP>
                {phone ? (
              <StyledLink
                isNotDecorated={true}
                href={`tel:${phone}`}
                target="_blank"
                rel="noreferrer"
              >
                {phone}
              </StyledLink>
            ) : (
                <StyledNoInfo>{noInfo}</StyledNoInfo>
            )}
            </FriendsInfoStyledLi>
            </FriendsStyledUL>
        </FriendsStyledDiv>
        </FriendsStyledLi>
        );

};

export default OurFriendsItem;
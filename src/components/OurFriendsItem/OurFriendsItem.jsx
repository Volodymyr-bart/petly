import { 
    FriendsStyledLi,
    FriendsStyledA, 
    FriendsStyledDiv, 
    FriendsStyledImage, 
    FriendsStyledUL,
} from "./OurFriendsItem.styled";

const OurFriendsItem = ({friend}) => {
    const { title, url, address, imageUrl, workDays, phone, email } = friend;

    return (
        <FriendsStyledLi>
        <FriendsStyledA href={url} target="_blank" rel="noreferrer">
            {title}
        </FriendsStyledA>

        <FriendsStyledDiv>
            {imageUrl ? (
            <FriendsStyledImage src={imageUrl} alt={title} />
            ) : (
            <div>no image</div>
            )}

            <FriendsStyledUL>
            <li>
                <p>Time</p>
                {workDays ? (`${workDays.from} - ${workDays.to}`) : (
                    <div>--------</div>
                )}
                {/* <OurFriendsTimeList
                workDays={workDays}
                dayOfTheWeek={DAY_OF_THE_WEEK}
                >
                <Box>
                    <Typography>Time:</Typography>
                    {checkField("time", workDays)}
                </Box>
                </OurFriendsTimeList> */}
            </li>

            <li>
                <p>Address:</p>
                {address}
            </li>

            <li>
                <p>Email:</p>
                {email}
            </li>

            <li>
                <p>Phone:</p>
                {phone}
            </li>
            </FriendsStyledUL>
        </FriendsStyledDiv>
        </FriendsStyledLi>
        );

};

export default OurFriendsItem;
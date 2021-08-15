import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem, Divider } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddCircleIcon from '@material-ui/icons/AddCircle';
export const StyledGrid = styled(Grid)(() => ({
    width: '80vw',
    paddingBottom: '2vh',
    paddingLeft: '1vw',
    paddingTop: '1vh',
}));
export const StyledTypography = styled(Typography)(() => ({
    fontSize: '12px',
    color: '	#808080'
}));
export const StyledTitle = styled(Typography)(() => ({
    fontSize: '20px',
    color: 'black'
}));
export const StyledAuthorIcon = styled(PersonIcon)(() => ({
    fontSize: '14px',
    color: '	#808080'
}));
export const StyledHorizontalList = styled(List)(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
}));
export const StyledCommentsIcon = styled(QuestionAnswerIcon)(() => ({
    fontSize: '14px',
    color: '	#808080'
}));
export const StyledTimeIcon = styled(WatchLaterIcon)(() => ({
    fontSize: '14px',
    color: '	#808080'
}));
export const StyledPointsIcon = styled(AddCircleIcon)(() => ({
    fontSize: '14px',
    color: '	#808080'
}));
export const StyledListItem = styled(ListItem)(() => ({
    paddingRight: '10px',
}));
export const StyledDivider = styled(Divider)(() => ({
    width: '80vw'
}));
export const DividerGrid = styled(Grid)(() => ({
    width: '80vw'
}));
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Typography, List, ListItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddCircleIcon from '@material-ui/icons/AddCircle';
export const StyledGrid = styled(Grid)(() => ({
    width: '70vw',
    marginTop: '7vh',
}));
export const StyledTypography = styled(Typography)(() => ({
    fontSize: '12px'
}));
export const StyledTitle = styled(Typography)(() => ({
    fontSize: '18px'
}));
export const StyledAuthorIcon = styled(PersonIcon)(() => ({
    fontSize: '18px'
}));
export const StyledHorizontalList = styled(List)(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
}));
export const StyledCommentsIcon = styled(QuestionAnswerIcon)(() => ({
    fontSize: '18px'
}));
export const StyledTimeIcon = styled(WatchLaterIcon)(() => ({
    fontSize: '18px'
}));
export const StyledPointsIcon = styled(AddCircleIcon)(() => ({
    fontSize: '18px'
}));
export const StyledListItem = styled(ListItem)(() => ({
    paddingRight: '10px'
}));
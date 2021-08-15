import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Typography, Grid, List } from '@material-ui/core';
export const StyledURL = styled(Typography)(() => ({
    fontSize: '12px',
    color: '#808080'
}));
export const StyledGrid = styled(Grid)(() => ({
    width:'80vw',
    paddingTop:20,
    paddingBottom:20
}));
export const GreyGrid = styled(List)(() => ({
    color: '#808080'
}));
export const StyledTypography = styled(Typography)(() => ({
    color: '	#808080',
    fontSize: '12px',
}));
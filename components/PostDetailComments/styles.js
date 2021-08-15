import { experimentalStyled as styled } from '@material-ui/core/styles';
import {Grid, Typography, Divider} from '@material-ui/core';

export const HeaderGrid = styled(Grid)(() => ({
    backgroundColor: '#72A0C1',
    color: 'white',
}));
export const StyledGrid = styled(Grid)(() => ({
    width:'80vw',
}));
export const StyledTypography = styled(Typography)(() => ({
    fontSize: '12px',
    color: '#808080',
    overflow:"auto"
}));
export const DarkDivider = styled(Divider)(() => ({
    color:'black'
}));
export const LightDivider = styled(Divider)(() => ({
    color:'#808080'
}));
export const DividerGrid = styled(Grid)(() => ({
    width: '80vw'
}));

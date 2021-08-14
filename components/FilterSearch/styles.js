import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Select, List } from '@material-ui/core';
export const StyledSelect = styled(Select)(() => ({
    height: '30px'
}));
export const StyledHorizontalList = styled(List)(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
}));

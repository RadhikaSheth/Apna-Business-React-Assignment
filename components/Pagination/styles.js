import { experimentalStyled as styled } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
export const StyledHorizontalList = styled(List)(() => ({
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
}));

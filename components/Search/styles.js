import { experimentalStyled as styled } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

export const SearchGrid = styled(Grid)(() => ({
    backgroundColor: '#72A0C1',
    color: 'white',
    padding: 20
}));
export const BrowserGrid = styled(Grid)(() => ({
    paddingRight: 20
}));

import { Grid, Paper, InputBase, Divider, IconButton, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { SearchGrid, BrowserGrid} from './styles'
import { isBrowser } from 'react-device-detect';
export default function Search(props) {
    return (
        <SearchGrid container alignItems="center" justifyContent="center" >
            {isBrowser ?
                <BrowserGrid item>
                    <Grid container justifyContent="flex-start">
                        <Typography>Search <br /> Hacker News</Typography>
                    </Grid>
                </BrowserGrid>
                : 
                <Grid item >
                    <Grid container >
                        <Typography>Search Hacker News</Typography>
                    </Grid>
                </Grid>
            }
            <Grid item xs={10}>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Enter search query"
                        onChange={props.handleChange}
                    />
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <IconButton sx={{ p: '10px' }} aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </SearchGrid>
    )
}
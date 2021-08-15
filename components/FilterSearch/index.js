import { Grid, ListItem, MenuItem, Typography } from '@material-ui/core'
import { StyledSelect, StyledHorizontalList } from './styles'
export default function FilterSearch(props) {
    return (
        <Grid container justifyContent="center">
            <StyledHorizontalList>
                <ListItem>
                    <Typography>Search</Typography>
                </ListItem>
                <ListItem>
                    <StyledSelect value={props.tag} onChange={props.handleTags} color="info">
                        <MenuItem value="story">Story</MenuItem>
                        <MenuItem value="comments">Comments</MenuItem>
                    </StyledSelect>
                </ListItem>
            </StyledHorizontalList>
            <StyledHorizontalList>
                <ListItem>
                    <Typography>by</Typography>
                </ListItem>
                <ListItem>
                    <StyledSelect value={props.searchBy} onChange={props.handleSearchBy} color="info">
                        <MenuItem value="search">Popularity</MenuItem>
                        <MenuItem value="search_by_date">Date</MenuItem>
                    </StyledSelect>
                </ListItem>
            </StyledHorizontalList>
        </Grid>
    )
}
import { Button, ListItem, Typography } from '@material-ui/core'
import { StyledHorizontalList } from './styles'
export default function Pagination(props) {
    return (
        <StyledHorizontalList>
            <ListItem>
                {props.currentPage == 0 ?
                    <Button variant="contained" disabled >Prev</Button>
                    :
                    <Button variant="contained" onClick={props.prevPage}>Prev</Button>
                }
            </ListItem>
            <ListItem>
                <Typography>{props.currentPage} / {props.maxPage}</Typography>
            </ListItem>
            <ListItem>
                {props.currentPage == props.maxPage ?
                    <Button variant="contained" disabled >Next</Button>
                    :
                    <Button variant="contained" onClick={props.nextPage}>Next</Button>
                }
            </ListItem>
        </StyledHorizontalList>
    )
}
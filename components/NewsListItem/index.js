import { Grid } from '@material-ui/core'
import { StyledGrid, StyledTitle, StyledAuthorIcon, StyledHorizontalList, StyledCommentsIcon, StyledTimeIcon, StyledPointsIcon } from './styles'
import SubListItem from './subListItem';
export default function NewsListItem({ Title, Author, Points, Date, Comments }) {
    return (
        <Grid container alignItems="center" justifyContent="center">
            <StyledGrid container direction="column" alignItems="flex-start" justifyContent="space-between" >
                <Grid item>
                    <StyledTitle variant="h6">{Title}</StyledTitle>
                </Grid>
                <Grid item >
                    <Grid container direction="row" >
                        <StyledHorizontalList >
                            <SubListItem
                                Icon={<StyledAuthorIcon />}
                                Value={Author}
                            />
                            <SubListItem
                                Icon={<StyledPointsIcon />}
                                Value={Points}
                            />
                            <SubListItem
                                Icon={<StyledTimeIcon />}
                                Value={Date.substr(0, 4)}
                            />
                            <SubListItem
                                Icon={<StyledCommentsIcon />}
                                Value={Comments}
                            />
                        </StyledHorizontalList>
                    </Grid>
                </Grid>
            </StyledGrid>
        </Grid>
    )
}
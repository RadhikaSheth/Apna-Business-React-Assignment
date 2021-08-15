import { Grid, Typography, Link } from '@material-ui/core'
import { StyledURL, StyledGrid, GreyGrid } from './styles'

export default function PostDetailTitle(props) {
    return (
        <>
            <Grid container justifyContent="center">
                <StyledGrid container >
                    <Grid container alignItems="flex-end">
                        <Grid item>
                            <Typography variant="h4">{props.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Link href={props.url}><StyledURL>{props.url}</StyledURL></Link>
                        </Grid>
                    </Grid>
                    <GreyGrid container pt={1}>
                        {props.points} points created by {props.author} in {props.date}
                    </GreyGrid>
                </StyledGrid>
            </Grid>
        </>
    )
}
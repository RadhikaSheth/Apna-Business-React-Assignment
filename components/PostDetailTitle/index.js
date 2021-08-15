import { Grid, Typography, Link } from '@material-ui/core'
import { StyledURL, StyledGrid, GreyGrid, StyledTypography } from './styles'
export default function PostDetailTitle(props) {
    return (
        <Grid container justifyContent="center">
            <StyledGrid container >
                <Grid container alignItems="flex-end">
                    <Grid item>
                        <Typography variant="h4">{props.title}</Typography>
                    </Grid>
                    <Grid item>
                        <StyledTypography>
                            <Grid container pb={1}>
                               <Link href={props.url}><StyledURL> &nbsp;({props.url})</StyledURL></Link>
                            </Grid>
                        </StyledTypography>
                    </Grid>
                </Grid>
                <GreyGrid container pt={1}>
                    {props.points} points created by {props.author} in {props.date}
                </GreyGrid>
            </StyledGrid>
        </Grid>
    )
}
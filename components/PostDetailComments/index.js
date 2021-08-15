import { Grid, Divider } from '@material-ui/core'
import { StyledGrid } from './styles'
import ChildComment from './childComment'
export default function PostDetailComments(props) {
    return (
        <Grid container justifyContent="center">
            {props.children.map((child) => {
                return (
                    <>
                        {child.text ?
                            <StyledGrid pt={2}>
                                <ChildComment text={child.text} date={child.created_at} author={child.author} comment={child.children} indentationLevel={0} />
                                <Divider variant="middle" />
                            </StyledGrid>
                            :
                            <></>
                        }
                    </>
                )
            })}
        </Grid>
    )
}
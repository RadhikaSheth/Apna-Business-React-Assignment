import { Box } from '@material-ui/core'
import { StyledTypography } from './styles'
export default function ChildComment(props) {
    return (
        <Box pl={props.indentationLevel >= 4 ? 4 : props.indentationLevel * 1}>
            <StyledTypography >{props.author} on {props.date.substr(5, 2)}-{props.date.substr(0, 4)}</StyledTypography>
            <div style={{ overflow: "auto" }} dangerouslySetInnerHTML={{ __html: props.text }} />
            {props.comment.map((child) => {
                return (
                    <>
                        {
                            child.text ?
                                <>
                                    <ChildComment text={child.text} date={props.date} author={props.author} comment={child.children} indentationLevel={props.indentationLevel + 1} />
                                </>

                                :
                                <></>
                        }
                    </>
                )
            })}
        </Box>
    )
}
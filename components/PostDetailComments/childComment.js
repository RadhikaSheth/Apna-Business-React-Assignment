import { Box, Tooltip } from '@material-ui/core'
import { StyledTypography } from './styles'
export default function ChildComment(props) {
    let indent = props.indentationLevel >= 4 ? 4 : props.indentationLevel
    return (
        <Box pl={`${indent}vw`}>
            <StyledTypography >
                {props.author} on
                <Tooltip title={props.date} placement="right">
                    <span> {props.date.substr(5, 2)}-{props.date.substr(0, 4)}</span>
                </Tooltip>
            </StyledTypography>
            <div style={{ overflow: "auto" }} dangerouslySetInnerHTML={{ __html: props.text }} />
            {props.comment.map((child) => {
                return (
                    <>
                        {
                            child.text ?
                                <>
                                    <ChildComment text={child.text} date={child.created_at} author={child.author} comment={child.children} indentationLevel={props.indentationLevel + 1} />
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
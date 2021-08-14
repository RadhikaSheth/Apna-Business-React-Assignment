import {StyledTypography, StyledListItem} from './styles'
export default function SubListItem({Icon, Value}) {
    return (
        <StyledListItem disableGutters={true}>
            {Icon}&nbsp;
            <StyledTypography>{Value}</StyledTypography>
        </StyledListItem>
    )
}
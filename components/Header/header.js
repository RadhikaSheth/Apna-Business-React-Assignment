import { Button, Typography } from '@material-ui/core'
import { HeaderGrid, StyledGrid } from './styles'
export default function Header() {
    return (
        <HeaderGrid container justifyContent="center">
            <StyledGrid>
                <Button href="/"><Typography color="white"> Go to Home</Typography></Button>
            </StyledGrid>
        </HeaderGrid>
    )
}
import { Grid } from '@material-ui/core'
import { StyledSearch } from './styles'
export default function Search(props){
    return(
        <Grid container alignItems="center" justifyContent="center"> 
            <StyledSearch label="Search" variant="outlined" onChange={props.handleChange}/>
        </Grid>
    )
}
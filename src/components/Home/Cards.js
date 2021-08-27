import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import Box from "@material-ui/core/Box"

const mediaCards = [
    {
        image: '../../images/photo1.jpg',
        title: 'online Tutoring',
        description: "Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum" 
        
    },
    {
        image: '../../images/photo1.jpg',
        title: 'online Tutoring',
        description: "Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum"

    },
    {
        image: '../../images/photo1.jpg',
        title: 'online Tutoring',
        description: "Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum Lorem iptsum"
    }
];
export default function Cards() {
    return (
        <Box p={5}>
            <Grid container spacing={5}>
                {mediaCards.map((mediacard, i)=> {
                    return (
                        <Grid key={i} item>
                            
                            {/* <MediaCard {...mediacard}/> */}
                        </Grid>
                    )
                })}
            </Grid>

        </Box>
    )
}



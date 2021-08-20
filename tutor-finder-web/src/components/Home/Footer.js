import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import  Link  from '@material-ui/core/Link'

const Footer = () => {
    return <footer>
        <Box px={{ xs: 3,sm: 10}} py={{xs: 5, sm: 5}} bgcolor="text.secondary" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">Contact</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Support</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Privacy Policy</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Contact</Link>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={2}>Account</Box>
                        <Box>
                            <Link href="/" color="inherit">Login</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Register</Link>

                        </Box>
                        
                        <Box>
                            <Link href="/" color="inherit">Contact</Link>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link href="/" color="inherit">Backup</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">History</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Roll</Link>

                        </Box>
                        <Box>
                            <Link href="/" color="inherit">Contact</Link>

                        </Box>
                    </Grid>

                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm: 10}} pb={{xs: 5, sm: 0}}>
                    Tutor finder &reg; {new Date().getFullYear()}

                </Box>

            </Container>
        </Box>
    </footer>
    
}

export default Footer

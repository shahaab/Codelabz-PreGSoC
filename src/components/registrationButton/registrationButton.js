import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';


export default function RegistrationButton() {
    return (
        <Box  sx={{ width: '50%', p: 2, border: '1px solid grey', borderRadius: '10px'}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Button variant="outlined" startIcon={<FacebookIcon color="primary" fontSize="large" />} sx={{ width: '100%', marginBottom:'10px' }}>Connect with Facebook</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" startIcon={<GitHubIcon color="secondary" fontSize="large" />} sx={{ width: '100%' }}>Connect with Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid item xs={12}>
                        <Button variant="outlined" startIcon={<TwitterIcon color="primary" fontSize="large" />} sx={{ width: '100%', marginBottom:'10px'}}>Connect with Google</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" startIcon={<GoogleIcon color="dark" fontSize="large" />} sx={{ width: '100%' }}>Connect with Twitter</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

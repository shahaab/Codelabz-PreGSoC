import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import profile from './Profile.png'
import CardMedia from '@mui/material/CardMedia';
import PropTypes from "prop-types";


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function ProfileBanner() {
    return (
        <Box sx={{ flexGrow: 1, p: 2, border: '1px solid grey', width: '50%', borderRadius: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={10} md={9} sx={{ textAlign: 'left', }}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ marginBottom: '0', marginTop: '20px' }}>
                        Shahaab Manzar
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        25 followers • 5 following
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Follow</Button>
                        <Button sx={{ color: 'black' }}>Share</Button>
                        <Button sx={{ color: 'black' }}>Report</Button>
                    </Stack>

                </Grid>
                <Grid item xs={2} md={3}>
                    <CardMedia
                        component="img"
                        image={profile}
                        alt="python"
                        display="initial"
                        width="70%"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

ProfileBanner.prototype = {
    background: PropTypes.string,
  };


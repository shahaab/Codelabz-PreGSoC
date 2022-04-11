import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@mui/material/Link';


export default function BasicCard() {

    return (
        <Card variant="outlined" sx={{
            width: '20%',
            padding: '2% 2% 2% 2%', borderRadius: '10px'
        }}>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6} sx={{ textAlign: 'initial' }}>
                    <Grid item xs={12}>
                        <Link href="#" underline="hover" sx={{ color: 'black' }}>Help</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#" underline="hover" sx={{ color: 'black' }}>Contact</Link>
                    </Grid>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: 'initial' }}>
                    <Grid item xs={12} >
                        <Link href="#" underline="hover" sx={{ color: 'black' }}>About</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#" underline="hover" sx={{ color: 'black' }}>Terms</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#" underline="hover" sx={{ color: 'black', }}>Content Policy</Link>
                    </Grid>
                    <Grid item xs={12}>
                        <Link href="#" underline="hover" sx={{ color: 'black' }}>Privacy Policy</Link>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: '10px' }}>
                <Link href="#" underline="hover" sx={{ color: 'black' }}>CodeLabz © 2021</Link>
            </Grid>
        </Card>
    );
}

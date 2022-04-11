import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
    <React.Fragment>
        <CardContent>
            <Typography variant="h4" component="div">
                Description
            </Typography>
            <hr></hr>
            <Typography variant="h7" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique pharetra mi eu pellente. Morbi nec metus vel sem tristique porttitor. Vestibulum porta mauris ac odio suscipit pretium. Suspendisse maximus nunc ipsum, at gravida nunc posuere in.
            </Typography>
        </CardContent>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ width: '25%', borderRadius: '10px', }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}

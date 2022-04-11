import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function PostCard() {
    return (
        <Card sx={{ width: '50%', textAlign: 'left' }} variant="outlined">
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                subheader="Software Engineer • Uploaded 1 month ago"
                title="Shahaab Manzar"
            />
            <CardContent sx={{ textAlign: 'left', paddingTop: '0', paddingBottom: '0' }}>
                <Typography variant="h5" color="text.primary">
                    I Made 100 more CSS loaders for your next projects
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
                <Stack sx={{ paddingTop: '5px' }} direction="row" spacing={1}>
                    <Chip label="HTML" />
                    <Chip label="CSS" />
                    <Chip label="JAVASCRIPT" />
                    <Chip label="REACT JS" />
                </Stack>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <InsertCommentIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
                <Button variant="contained">Save</Button>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>
        </Card>
    );
}

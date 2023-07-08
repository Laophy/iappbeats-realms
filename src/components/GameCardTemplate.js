import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export function GameCardTemplate({ name, image, url, description }) {
    return (
        <Card sx={{ maxWidth: 345, height: 320, display: "flex", flexDirection: "column" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions style={{ marginTop: "auto" }}>
                <Link to={url} style={{ float: "left" }}>
                    <Button size="small" color="primary">
                        Play
                    </Button>
                </Link>
                <Button size="small" color="primary" style={{ float: 'right' }}>
                    <AddIcon />
                </Button>
            </CardActions>
        </Card>
    )
}
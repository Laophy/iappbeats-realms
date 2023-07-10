import React from "react"
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';

export function NewsCard({title = 'Some News Title', image, url, description}) {
    return (
        <Box p={1} style={{ textAlign: 'center', margin: 1, }}>
            <Card sx={{ width: '100%', minHeight: 320, display: "flex", borderRadius: 7, flexDirection: "column", boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px' }}>
                <CardActionArea>
                    {
                        image ?
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt={title}
                            />
                            :
                            <Skeleton variant="rounded" width={'100%'} height={140} />
                    }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title ? title : <Skeleton animation="wave" width={100} />}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description ? description : <><Skeleton animation="wave" /><Skeleton animation="wave" /></>}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ marginTop: "auto" }}>
                    <Link to={url ? url : '/error'} style={{ float: "left" }}>
                        <Button size="large" color="primary">
                            View
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Box>
    )
}
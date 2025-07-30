import React from "react";
import {Grid} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {Typography} from "@mui/material";
import { useState } from "react";
import ModalVideo from "./ModalVideo";
import {titleStyle, positionStyle, overlayStyle} from './styles'


export default function VideoPlayer({videoid, img, name, position}) {

    const [autoplayNumber, setAutoplayNumber] = useState(0);
    const handleMouseOver = () => setAutoplayNumber(1);
    const handleMouseLeave = () => setAutoplayNumber(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => { setOpen(true)};
    const handleClose = () => {setOpen(false)};

    const videoStyle = {
        width:'320px',
        position:'relative',
        transform: autoplayNumber ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.2s'
    }
    
    
    return (
        <div 
          style={videoStyle} 
          onMouseOver={handleMouseOver} 
          onMouseLeave={handleMouseLeave} 
          >
            <iframe className="video"   title="youtube video" onClick={handleOpen}
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=${autoplayNumber}&mute=1&enablejsapi=0`}
                     allowFullScreen  width='320px' height='180px' />
            <div style={overlayStyle} onClick={handleOpen}></div>
            <Avatar alt={name} src={img} sx={{ width: '4.7rem', height: '4.7rem', position:'absolute', top:'170px'}}/>      
            <Grid container direction="column" spacing={2} margin='0 40px 40px 0'>
                <Typography sx={titleStyle}> 
                    {name}
                </Typography>
                <p style={positionStyle}> 
                    {position}
                </p>
            </Grid>
            <ModalVideo videoid={videoid} open={open} handleClose={handleClose}/>
         </div>         
    )
}
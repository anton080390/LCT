import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { red } from '@mui/material/colors';

const color = red[50];

export default function ModalVideo ({videoid, open, handleClose}) {
    const style = {
        position:'relative',
        overflow:'hidden',
        width:'100%',
        paddingTop:'56.25%',
        backroud:'none'
      };
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    > 
        <Grid container item xs={12} sx={{position:'relative'}} direction='row' justifyContent='center' alignItems='center' height='100%' margin='auto 0'>
            <Button aria-label="close" style={{position:'absolute', top:'10px', right:'10px'}} onClick={handleClose}>
                <CloseIcon  sx={{ color: red[50] }}  fontSize="large"/>
            </Button>
            <Grid item xs={12} sm={10} sx={style}>
                <iframe style={{position:'absolute', top:'0', left:'0', width:'100%', height:'100%', maxHeight:'100vh', border:'none'}}   title="youtube video"
                        src={`https://www.youtube.com/embed/${videoid}?autoplay=1&mute=1`}
                        allowFullScreen />
            </Grid>
        </Grid>
    </Modal>
  );
}

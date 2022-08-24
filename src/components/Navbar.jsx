import React from "react";
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")

const Navbar = () => {
  return (
    <AppBar position="stick">
    <StyledToolbar >
    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
         CHIM CHIM
        </Typography>
        <EmojiNatureIcon sx={{display: {xs:"block", sm: "none"}}} />
    </StyledToolbar>
    
  </AppBar>
  )
};

export default Navbar;

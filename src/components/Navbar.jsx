import React from "react";
import { AppBar, Toolbar, styled, Typography,  InputBase, Box } from "@mui/material";
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)({
  display: "none",
  align: "center",
  gap: "10px",
})

const Navbar = () => {
  return (
    <AppBar position="stick">
    <StyledToolbar >
    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
         CHIM CHIM
        </Typography>
        <EmojiNatureIcon sx={{display: {xs:"block", sm: "none"}}} />
        <Search>
          <InputBase placeholder="search..." />
          search
        </Search>
        <Icons>
        </Icons>
    </StyledToolbar>
    
  </AppBar>
  )
};

export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar
  // MailIcon,
  // Notifications
} from "@mui/material";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  align: "center",
  gap: "20px"
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  align: "center",
  gap: "20px"
}));

const Navbar = () => {
  return (
    <AppBar position="stick">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          CHIM CHIM
        </Typography>
        <EmojiNatureIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
          search
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            {/* <MailIcon /> */}
          </Badge>
          <Badge badgeContent={2} color="error">
            {/* <Notifications />  */}
          </Badge>
          <Avatar
            src="https://images.unsplash.com/photo-1621346945190-51bcf3d4b96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{ width: 30, height: 30 }}
          />
          <UserBox variant="span">
            <Avatar
              src="https://images.unsplash.com/photo-1621346945190-51bcf3d4b96d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span">John</Typography>
          </UserBox>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

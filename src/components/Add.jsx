import React, { useState } from "react";
import { Box } from "@mui/material/Box";
import { Tooltip, Fab } from "@mui/material";
import { Add as AddIcon, FullscreenExit } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 }
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6">Post Photos</Typography>
        </Box>
      </SytledModal>
    </>
  );
};

export default Add;

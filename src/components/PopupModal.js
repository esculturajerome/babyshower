import React from "react";

import { Modal, IconButton } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";

const useStyles = makeStyles((theme) => ({
  popup: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    border: "none",
  },
  popup__content: {
    width: 350,
    background: "#fff",
    border: "none",
    padding: theme.spacing(2, 4, 3),
    borderRadius: "20px 20px 0 0 !important",
    outline: "none",
  },
  popup__buttons: {
    marginTop: 25,
  },
  popup__yesBtn: {
    marginRight: 10,
  },
  popup__header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

function PopupModal({
  open,
  onClick,
  handleClose,
  title,
  caption,
  buttonCaption,
}) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      className={classes.popup}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <div className={classes.popup__content}>
        <div className={classes.popup__header}>
          <h2 id="spring-modal-title">{title}</h2>
          <IconButton onClick={handleClose}>
            <CloseOutlinedIcon />
          </IconButton>
        </div>
        {caption && <p id="spring-modal-description">{caption}</p>}

        {buttonCaption && (
          <div className={classes.popup__buttons}>
            <IconButton className={classes.popup__yesBtn} onClick={onClick}>
              <p>{buttonCaption}</p>
            </IconButton>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default PopupModal;

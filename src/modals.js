import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { makeStyles, TextField } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import "react-phone-input-2/lib/style.css";
import "./style.css";

const useStyle = makeStyles({
  btn: {
    borderRadius: "50px",
  },
});

Modal.setAppElement(document.getElementById("root"));

function Modals() {
  const classes = useStyle();
  const [phone, setPhone] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleModalForm = (e) => {
    e.preventDefault();
    console.log(phone, email);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 10);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <BrowserRouter>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="Modal"
        >
          {/* <div className="inner-modal"> */}
          <div className="left"></div>
          <div className="right">
            <CloseIcon onClick={closeModal} className="closeIcon" />
            <div className="content">
              <p className="heading">
                Get a hug collection of free resources for web designer{" "}
              </p>
              <form className="modal-form" noValidate autoComplete="off">
                <div>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{ width: "100%", marginBottom: "10px" }}
                    requireds
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    textAlign: "start",
                    width: "100%",
                    marginBottom: "10px",
                  }}
                >
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    className={classes.modal_phone_input}
                  />
                </div>

                <Button
                  size="medium"
                  variant="contained"
                  color="primary"
                  className={classes.btn}
                  onClick={handleModalForm}
                >
                  Yes, i want
                </Button>
              </form>

              {/* <Link to="https://material-ui.com/components/buttons/">
                <p>No,i don't want any free resources</p>
              </Link> */}
              <p
                onClick={closeModal}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                No, thank
              </p>
            </div>
          </div>
          {/* </div> */}
        </Modal>
        <div>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
          <a href="https://material-ui.com/components/buttons">
            <p>No,i don't want any free resources</p>
          </a>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Modals;

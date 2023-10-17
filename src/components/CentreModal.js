import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
  margin: auto;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 0px 20px;
  background: white;
  z-index: 1000;
`;
const ModalHeader = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  background: white;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
`;
const ModalBody = styled.div`
  width: 100%;
  background: white;
  padding: 15px;
  border-bottom: 1px solid #d9d9d9;
  max-height: 500px;
  overflow-y: auto;
`;
const ModalFooter = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px 3px 15px 3px;
`;
const ModalWrapper = styled.div`
  height: 91vh;
  background: rgba(0, 0, 0, 0.7);
  width: 100vw;
  position: absolute;
`;
const CentreModal = (props) => {
  const handleClick = () => {
    props.handleClick();
  };
  const hideModal = () => {
    props.hideModal(false);
  };
  return (
    <ModalWrapper>
      <Modal>
        <ModalHeader>Create Profile</ModalHeader>
        <ModalBody>{props.children}</ModalBody>
        <ModalFooter>
          <Button variant="contained" onClick={handleClick}>
            Save
          </Button>
          <Button variant="outlined" className="ml-5" onClick={hideModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </ModalWrapper>
  );
};

export default CentreModal;

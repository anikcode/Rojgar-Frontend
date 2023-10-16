import { Button } from "@mui/material";
import React from "react";
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
  height: 50px;
  width: 100%;
  background: white;
  padding: 15px;
  border-bottom: 1px solid #d9d9d9;
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
  /* z-index: 10000; */
  position: absolute;
`;
const CentreModal = () => (
  <ModalWrapper>
    <Modal>
      <ModalHeader>Create Profile</ModalHeader>
      <ModalBody>Are you sure you want to continue</ModalBody>
      <ModalFooter>
        <Button variant="contained">Save</Button>
        <Button variant="outlined" className="ml-5">
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </ModalWrapper>
);

export default CentreModal;

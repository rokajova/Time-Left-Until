import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalLink = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div style={{ textAlign: "center" }}>
      <Button onClick={toggle}>Open Modal</Button>
      <Modal size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody style={{ height: "75vh" }}>
          <iframe
            style={{
              height: "100%",
              width: "100%",
              borderStyle: "none",
              borderRadius: "10px",
            }}
            src="website URL here"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            OK{" "}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalLink;

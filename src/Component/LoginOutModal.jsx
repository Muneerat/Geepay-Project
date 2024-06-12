import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Logout } from "../assets/icon";

export default function LogoutModal() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen}  className="px-0 max- bg-transparent m-0 flex">
      <Logout width={30} height={30} />
      </Button>
      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Confirm Logout</ModalHeader>
              <ModalBody>
                <p> 
                This action will log your account out of the Dashboard. Do you want to proceed?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="danger" onPress={onClose}>
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

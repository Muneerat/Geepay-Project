import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function Modals({children}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        className="px-0 max-w-10 bg-transparent m-0 justify-start"
      >
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          View
        </a>
      </Button>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Invoice #0082995
              </ModalHeader>
              <ModalBody className="text-slate-800 text-sm">
              <p className="text-slate-500">Notes</p>
                <p className="py-2 border- border-slate-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit. Nulla corrupti dignissimos, odio nemo nam repellendus
                  ducimus, saepe magni, ipsam earum ullam. Eos, consequatur
                  ratione! Est expedita quos animi amet voluptatum.
                </p>
                <div className=" border-y border-slate-600">
                <div className="py-1">
                <p className="text-slate-500">Contact</p>
                <p >Marcus Bergson</p>
                </div>
                 <div className="">
                <p className="text-slate-500">Order</p>
                <p >Pretty Palms Laser Cut Low Wedge Sandals (QTY: 4)</p>
                </div>
                <div className="py-1">
                <p className="text-slate-500">Delivery Address</p>
                <p >1313, Mockingbird Lane, Mockingbird Heights, CA 78704</p>
                </div>
                </div>
                {children}
                {/* <div className="flex justify-between py-4">
                  <div>
                    Payment Status: 
                  </div>
                  <div className="text-blue-600">Paid</div>
                </div>
                <div className="flex justify-between">
                  <div>
                    Amount
                  </div>
                  <div className="">$80,000</div>
                </div> */}
              </ModalBody>
   
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

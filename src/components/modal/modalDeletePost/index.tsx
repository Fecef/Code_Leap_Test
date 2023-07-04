import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useContext } from "react";

import { PostContext } from "../../../context/postContext";
import { IModalProps } from "../../../interfaces";

function ModalDeletePost({ postId, isOpen, onClose }: IModalProps) {
  const { deletePost } = useContext(PostContext);

  const handleClick = () => {
    deletePost(postId);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} isCentered>
      <ModalOverlay />
      <ModalContent maxW="41.25rem" borderRadius="16px">
        <ModalHeader fontSize="xl" fontWeight="700">
          Are you sure you want to delete this item?
        </ModalHeader>

        <ModalFooter display="flex" gap="1rem">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="warning" onClick={handleClick}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalDeletePost;

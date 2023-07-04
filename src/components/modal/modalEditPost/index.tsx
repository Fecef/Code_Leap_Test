import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { PostContext } from "../../../context/postContext";
import { IModalProps, IPostData } from "../../../interfaces";

function ModalEditPost({ postId, isOpen, onClose }: IModalProps) {
  const { editPost } = useContext(PostContext);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const { register, handleSubmit } = useForm<IPostData>();

  const formSubmit = (data: IPostData) => {
    editPost(postId, data);
    setTitleValue("");
    setContentValue("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        as="form"
        maxW="41.25rem"
        borderRadius="16px"
        onSubmit={handleSubmit(formSubmit)}
      >
        <ModalHeader fontSize="xl" fontWeight="700">
          Edit item
        </ModalHeader>

        <ModalBody>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              border="1px solid #777"
              autoComplete="off"
              placeholder="Hello world"
              value={titleValue}
              {...register("title", {
                onChange: (e) => setTitleValue(e.target.value.trim()),
              })}
            />

            <FormLabel mt="1rem">Content</FormLabel>
            <Textarea
              resize="none"
              border="1px solid #777"
              placeholder="Content here"
              value={contentValue}
              {...register("content", {
                onChange: (e) => setContentValue(e.target.value.trim()),
              })}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter display="flex" gap="1rem">
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>

          <Button
            type="submit"
            variant="success"
            onClick={onClose}
            isDisabled={titleValue && contentValue ? false : true}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalEditPost;

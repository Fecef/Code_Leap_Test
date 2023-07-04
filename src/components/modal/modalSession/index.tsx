import {
  Box,
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ModalSession() {
  const [isEmpty, setIsEmpty] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const { onClose } = useDisclosure();
  const { register, handleSubmit } = useForm<{ username: string }>();
  const navigate = useNavigate();

  function formSubmit(data: { username: string }) {
    if (data.username !== "Felipe César") {
      return setIsInvalid(true);
    }
    localStorage.setItem("@username", data.username);
    navigate("/dashboard");
  }

  return (
    <Modal isOpen={true} onClose={onClose} isCentered>
      <ModalOverlay bg="grey.2" />
      <ModalContent
        as="form"
        w="90%"
        maxW="31.25rem"
        borderRadius="16px"
        onSubmit={handleSubmit(formSubmit)}
      >
        <ModalHeader fontSize="xl" fontWeight="700">
          Welcome to CodeLeap network!
        </ModalHeader>

        <ModalBody>
          <FormLabel>Please enter your username</FormLabel>
          <Input
            type="text"
            border="1px solid #777"
            autoComplete="off"
            placeholder="John doe"
            {...register("username", {
              onChange: (e) => setIsEmpty(e.target.value.trim()),
            })}
          />

          {isInvalid && (
            <Box mt="2rem">
              <Text
                className="animate__animated animate__flash"
                color="red"
                textAlign="center"
              >
                Username not found.
              </Text>
            </Box>
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            variant="default"
            type="submit"
            isDisabled={isEmpty.length ? false : true}
          >
            ENTER
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ModalSession;

import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { IPostData } from "../../../interfaces";
import { PostContext } from "../../../context/postContext";

function CreatePost() {
  const { createPost } = useContext(PostContext);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const { register, handleSubmit } = useForm<IPostData>();
  const username = localStorage.getItem("@username");

  const formSubmit = (data: IPostData) => {
    if (username) {
      data.username = username;

      createPost(data);
      setTitleValue("");
      setContentValue("");
    }
  };

  return (
    <Stack
      as="form"
      p="2rem"
      gap="1rem"
      border="1px solid #777"
      borderRadius="16px"
      onSubmit={handleSubmit(formSubmit)}
    >
      <Heading fontSize="xl">What's on your mind?</Heading>

      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          type="text"
          autoComplete="off"
          border="1px solid #777"
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

      <Button
        variant="default"
        type="submit"
        alignSelf="flex-end"
        isDisabled={titleValue && contentValue ? false : true}
      >
        Create
      </Button>
    </Stack>
  );
}

export default CreatePost;

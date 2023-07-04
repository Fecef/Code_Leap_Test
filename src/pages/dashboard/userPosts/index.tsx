import { useState } from "react";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import moment from "moment";

import { IPostData } from "../../../interfaces";
import ModalDeletePost from "../../../components/modal/modalDeletePost";
import ModalEditPost from "../../../components/modal/modalEditPost";

function UserPosts({ post }: { post: IPostData }) {
  const [isOpenDM, setIsOpenDM] = useState(false);
  const [isOpenEM, setIsOpenEM] = useState(false);
  const onCloseDM = () => setIsOpenDM(false);
  const onCloseEM = () => setIsOpenEM(false);
  const handleEdit = () => setIsOpenEM(true);
  const handleDelete = () => setIsOpenDM(true);
  const isPostOwner = localStorage.getItem("@username") === post.username;
  const date = moment.utc(post.created_datetime).fromNow();

  return (
    <>
      <Stack
        mt="2rem"
        overflow="hidden"
        border="1px solid #777"
        borderRadius="16px"
      >
        <Flex
          as="header"
          p="1.5rem"
          justifyContent="space-between"
          alignItems="center"
          color="white"
          bg="primary.1"
        >
          <Heading as="h1" fontSize="xl">
            {post.title}
          </Heading>

          <Flex display={isPostOwner ? "flex" : "none"} gap="1rem">
            <DeleteIcon fontSize="xl" cursor="pointer" onClick={handleDelete} />
            <EditIcon fontSize="xl" cursor="pointer" onClick={handleEdit} />
          </Flex>
        </Flex>

        <Stack p="0.5rem 1.5rem 1.5rem" fontSize="lg">
          <Flex color="grey" justifyContent="space-between">
            <Text fontWeight="700">@{post.username}</Text>
            <Text>{date}</Text>
          </Flex>

          <Text>{post.content}</Text>
        </Stack>
      </Stack>

      <ModalDeletePost postId={post.id} isOpen={isOpenDM} onClose={onCloseDM}>
        Modal
      </ModalDeletePost>

      <ModalEditPost postId={post.id} isOpen={isOpenEM} onClose={onCloseEM}>
        Modal
      </ModalEditPost>
    </>
  );
}

export default UserPosts;

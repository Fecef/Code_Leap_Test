import { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { CircularProgress, Flex } from "@chakra-ui/react";

import Header from "../../components/header";
import Container from "../../components/container";
import CreatePost from "./createPost";
import UserPosts from "./userPosts";
import { PostContext } from "../../context/postContext";

function Dashboard() {
  const { post, fetchMoreData } = useContext(PostContext);

  return (
    <>
      <Header />

      <Container py="2rem">
        <CreatePost />

        <main>
          <InfiniteScroll
            dataLength={post.length}
            next={fetchMoreData}
            hasMore={true}
            scrollThreshold={1}
            loader={
              <Flex justifyContent="center">
                <CircularProgress m="0 auto" value={80} />
              </Flex>
            }
          >
            {post.map((post, i) => (
              <UserPosts key={i} post={post} />
            ))}
          </InfiniteScroll>
        </main>
      </Container>
    </>
  );
}

export default Dashboard;

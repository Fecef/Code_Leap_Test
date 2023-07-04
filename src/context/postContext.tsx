import { createContext, useEffect, useState } from "react";

import { IPostContext, IPostData } from "../interfaces";
import { api } from "../actions/api";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext<IPostContext>({} as IPostContext);

export function PostProvider({ children }: { children: React.ReactNode }) {
  const [post, setPost] = useState<IPostData[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [limit, setLimit] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("@username");

    if (user) {
      getAllPosts(limit);
      return navigate("/dashboard");
    }
    return navigate("/");
  }, [refresh, limit, navigate]);

  const fetchMoreData = () => {
    setLimit(limit + 10);
  };

  const getAllPosts = async (limit: number) => {
    const { data } = await api.get("/", {
      params: {
        limit: `${limit}`,
      },
    });
    setPost(data.results);
  };

  const createPost = async (data: IPostData) => {
    await api.post("/", data);
    setRefresh(!refresh);
  };

  const editPost = async (postId: number, data: IPostData) => {
    await api.patch(`/${postId}/`, data);
    setRefresh(!refresh);
  };

  const deletePost = async (postId: number) => {
    await api.delete(`/${postId}/`);
    setRefresh(!refresh);
  };

  return (
    <PostContext.Provider
      value={{
        post,
        getAllPosts,
        createPost,
        editPost,
        deletePost,
        fetchMoreData,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

import { ModalProps } from "@chakra-ui/react";

export interface IModalProps extends ModalProps {
  postId: number;
}

export interface IPostData {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
}

export interface IPostContext {
  post: IPostData[];
  getAllPosts: (limit: number) => Promise<void>;
  createPost: (data: IPostData) => Promise<void>;
  editPost: (postId: number, data: IPostData) => Promise<void>;
  deletePost: (postId: number) => Promise<void>;
  fetchMoreData: () => void;
}

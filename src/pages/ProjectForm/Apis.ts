import { Post } from "@/API/axios";

const createProject = (data: any, ownerId: number) => {
  return Post(`/Projects/addProject/${ownerId}`, data);
};
export { createProject };

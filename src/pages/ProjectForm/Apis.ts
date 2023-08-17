import { Post } from "@/API/methods";

const createProject = (data: any, ownerId: number) => {
  return Post(`/Projects/addProject/${ownerId}`, data);
};
export { createProject };

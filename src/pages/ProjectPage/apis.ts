import { Get } from "@/API/axios";

const getProjectList = (id: number) => {
  return Get(`/Projects/${id}`);
};
export { getProjectList };

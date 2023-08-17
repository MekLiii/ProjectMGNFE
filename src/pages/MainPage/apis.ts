import { Get } from "@/API/methods";

const getProjectList = (id: number) => {
  return Get(`/Projects/${id}`);
};
export { getProjectList };

import { createSlice } from "@reduxjs/toolkit";

interface IProject {
  id: number;
  name: string;
  configurationId?: number;
}
const initialState: IProject[] = [];

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject: (state, action: { payload: IProject }) => {
      state.push(action.payload);
    },
    removeProject: (state, action: { payload: number }) => {
      return state.filter((project) => project.id !== action.payload);
    },
    updateProject: (state, action: { payload: IProject }) => {
      const index = state.findIndex(
        (project) => project.id === action.payload.id
      );
      state[index] = action.payload;
    },
  },
});
export const { addProject, removeProject, updateProject } =
  projectSlice.actions;

export default projectSlice.reducer;

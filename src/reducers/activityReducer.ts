import { Activity } from "../types/Activity";

export type ActivityActions = {};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {};

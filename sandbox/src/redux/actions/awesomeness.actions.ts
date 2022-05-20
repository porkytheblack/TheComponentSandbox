import { ActionCreator } from "redux";
import { awesomeness_action_types, update_awesomeness_type } from "../types";

export const update_awesomeness_level: ActionCreator<awesomeness_action_types> = (payload?: number) => {
    return {
        type: update_awesomeness_type,
        payload
    }
}
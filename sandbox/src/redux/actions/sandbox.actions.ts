import { sandbox_action_types, update_sandbox_color } from './../types';
import { ActionCreator } from "redux";

export const change_bg: ActionCreator<sandbox_action_types> = (payload?: string) => {
    return {
        type: update_sandbox_color,
        payload
    }
}
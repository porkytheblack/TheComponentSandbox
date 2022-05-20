export const update_awesomeness_type: string = "update [awesomeness]"

//state interface
export interface initialState {
    awesomeness_level?: number;
    name: string;
}

export interface update_awesomeness_action_interface {
    type: typeof update_awesomeness_type;
    payload?: number;
}

export type awesomeness_action_types = update_awesomeness_action_interface

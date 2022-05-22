export const update_awesomeness_type: string = "update [awesomeness]"
export const update_sandbox_color: string = "update sandbox [bgColor]"

//state interface
export interface initialState {
    awesomeness_level?: number;
    name: string;
}

export interface sandboxState {
    bgColor: string;
}

export interface update_awesomeness_action_interface {
    type: typeof update_awesomeness_type;
    payload?: number;
}

export interface update_sandbox_bg_interface {
    type: typeof update_sandbox_color,
    payload?: string
}

export type awesomeness_action_types = update_awesomeness_action_interface
export type sandbox_action_types = update_sandbox_bg_interface

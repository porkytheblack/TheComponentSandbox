import { awesomeness_action_types, initialState } from "../types";

const awesomenessState: initialState = {
    awesomeness_level: 5,
    name: "Don 😁"
}

export function awesomeness_reducer(state: initialState = awesomenessState, action: awesomeness_action_types): initialState{
    switch(action.type){
        case "update [awesomeness]":
            awesomenessState.awesomeness_level = action.payload
            return {
                ...awesomenessState
            }
        default:
            return awesomenessState
    }
}
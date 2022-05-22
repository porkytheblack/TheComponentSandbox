import { sandboxState, sandbox_action_types } from './../types';

const sandState: sandboxState = {
    bgColor: "transparent"
}

export function sandbox_reducer(state: sandboxState = sandState, action: sandbox_action_types): sandboxState{
    switch(action.type){
        case "update sandbox [bgColor]":
            
            return {
                 ...sandState, 
                 bgColor: typeof action.payload != "undefined" ? action.payload : sandState.bgColor,
            }
        default:
            return sandState
    }
}
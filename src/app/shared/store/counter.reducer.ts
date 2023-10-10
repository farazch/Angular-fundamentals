import { createFeature, createReducer,on } from "@ngrx/store";
import { increment,decrement,reset,incrementtenn } from "./counter.actions";

// I can get initial state from below file. Or i can get use interface for initial state
//import { initialState } from "./counter.state";

import { counterStateInterface } from "src/app/types/counterState.interface";


export const initialState:counterStateInterface = {
    counter:0,
    loading:true,
    
};

/*
const counterFeature = createFeature({
    name: 'count',
    reducer: counterReducer

});

export const {
    name: postCounterKey,
    reducer: postReducer,
} = counterFeature 
*/


const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter:state.counter+1 
        };
    }),     
    on(decrement, (state) => {
        return {
            ...state,
            counter:state.counter-1 
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter:0 
        };
    }),
    on(incrementtenn,(state,action)=>{
        return{
            ...state,
            counter:state.counter+10+action.value
        };
    }),
    
)

export function counterReducer(state: any,action:any){
    return _counterReducer(state,action);

}
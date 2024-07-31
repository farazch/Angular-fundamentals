import { createFeature, createReducer,on } from "@ngrx/store";
import { increment,decrement,reset,incrementtenn,setInitialValue,disableInitial,setText } from "./counter.actions";

// I can get initial state from below file. Or i can get use interface for initial state
//import { initialState } from "./counter.state";

import { counterStateInterface } from "src/app/types/counterState.interface";


export const initialState:counterStateInterface = {
    counter:6,
    loading:true,
    total:1000,
    disableInitial:false,
    text:'',
    helper:{
        name:'',
        id:0
    }
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
            counter:state.counter+1,
            total:30000,  
        };
    }),     
    on(decrement, (state) => {
        return {
            ...state,
            counter:state.counter-1,
            total:10000, 
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter:0, 
            total:5000,
        };
    }),
    on(incrementtenn,(state,action)=>{
        return{
            ...state,
            counter:state.counter+10+action.value,
            total:state.total+100,
        };
    }),
    on(setInitialValue,(state,action)=>{
        return{
            ...state,
            counter:action.value,
            
        };
    }),
    on(disableInitial,(state,action)=>{
        return{
            ...state,
            disableInitial:action.value,
            
        };
    }),
    on(setText,(state,action)=>{ 
        return{
            ...state,
            text:action.value,
            helper:{
                id:action.helper.id,
                name:action.helper.name,
            }
        };
    }),
)

export function counterReducer(state: any,action:any){
    return _counterReducer(state,action);
}
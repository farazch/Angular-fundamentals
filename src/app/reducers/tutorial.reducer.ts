import { Action } from "@ngrx/store";
import { Tutorial } from "./../models/tutorial.model";
import * as TutorialActions from './../actions/tutorial.actions';

const initialState : Tutorial = {
    name: 'Initial Tutorial',
    url: 'https://google.com'

}

//export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions)
export function reducer(state: Tutorial[] = [initialState], action:Action)
{

    const tutorialAction = action as TutorialActions.Actions;

    switch(tutorialAction.type) {
        case TutorialActions.ADD_TUTORIAL:
            return [...state,tutorialAction.payload];
        default:
            return state;        



    }
}
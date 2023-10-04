import { counterStateInterface } from "./counterState.interface"

// This file will have whole global states of applications
// Right now it has only counter, there can be many states like authentication, counter etc

export interface AppStateInterface {
    counter: counterStateInterface;
}

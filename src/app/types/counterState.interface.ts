export interface counterStateInterface {
    counter: number,
    loading:boolean,
    total:number,
    disableInitial: boolean,
    text: string,
    // name:string,
    helper:{
        name:string,
        id:number
    }
}
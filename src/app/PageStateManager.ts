
interface State{
     [state: string]: boolean;
}

export class StateManager
{
    private states: State = {}

    constructor(stateValues: string[]){
        for (const name of stateValues) {
            this.states[name] = false;
        }
    }
    
    setState(name: string, value: boolean){
        if (Object.keys(this.states).indexOf(name) != -1){
            for (const name of Object.keys(this.states)) {
                this.states[name] = false
            }
            this.states[name] = value
        }
        else throw new Error("IfesError: The " + name + " value cannot be found in the provided states");
    }

    getState(name: string){
        return this.states[name];
    }
}

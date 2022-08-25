export type Store<State = any, Action = { type: string }> = {
    getState(): State;
    dispatch(action: Action): any;
    subscribe(cb: () => void): () => void;
    replaceReducer(newReducer: () => void):void;
};

export type Reducer<State, Action> = (
    state: State | undefined,
    action: Action
) => State;


export type CreateStore<State, Action> = (
    reducer: Reducer<State, Action>,
    initialState?: State | undefined,
) => Store<State, Action>;

export function createStore<State, Action>(
    reducer: Reducer<State, Action>,
    state?: State
) {
    let initialState: State | undefined = state;
    let funcs: Array<() => any> = [];
    return {
        getState(): State {
            return initialState as State;
        },
        dispatch(action: Action): void {
            initialState = reducer(initialState, action);
            funcs.forEach((func: () => any) => {
                func();
            });
        },
        subscribe(cb: () => void) {
            funcs.push(cb);
            return () => {
                funcs = funcs.filter((func: () => any) => {
                    return func !== cb;
                });
            };
        },
        replaceReducer(newReducer: Reducer<State, Action>) {
            reducer = newReducer;
        },
    };
}

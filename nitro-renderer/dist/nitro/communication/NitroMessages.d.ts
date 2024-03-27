import { IMessageConfiguration } from '../../api';
export declare class NitroMessages implements IMessageConfiguration {
    private _events;
    private _composers;
    constructor();
    private registerEvents;
    private registerComposers;
    get events(): Map<number, Function>;
    get composers(): Map<number, Function>;
}

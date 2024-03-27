import { INitroEvent } from '../../api';
export declare class NitroEvent implements INitroEvent {
    private _type;
    constructor(type: string);
    get type(): string;
}

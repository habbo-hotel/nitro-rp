import { IMessageComposer } from '../../../../../api';
export declare class ModeratorActionMessageComposer implements IMessageComposer<any> {
    static readonly ACTION_ALERT = 0;
    static readonly ACTION_KICK = 1;
    static readonly ACTION_MESSAGE = 3;
    static readonly ACTION_MESSAGE_AND_SOFT_KICK = 4;
    private _data;
    constructor(k: number, arg2: string, arg3: string);
    getMessageArray(): any[];
    dispose(): void;
}

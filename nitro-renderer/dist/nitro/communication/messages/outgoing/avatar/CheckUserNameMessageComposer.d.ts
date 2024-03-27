import { IMessageComposer } from '../../../../../api';
export declare class CheckUserNameMessageComposer implements IMessageComposer<ConstructorParameters<typeof CheckUserNameMessageComposer>> {
    private _data;
    constructor(name: string);
    dispose(): void;
    getMessageArray(): [name: string];
}

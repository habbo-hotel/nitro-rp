import { IMessageComposer } from '../../../../../api';
export declare class ChangeUserNameMessageComposer implements IMessageComposer<ConstructorParameters<typeof ChangeUserNameMessageComposer>> {
    private _data;
    constructor(name: string);
    dispose(): void;
    getMessageArray(): [name: string];
}

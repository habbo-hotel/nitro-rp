import { IMessageComposer } from '../../../../../../api';
export declare class UserMottoComposer implements IMessageComposer<ConstructorParameters<typeof UserMottoComposer>> {
    private _data;
    constructor(motto: string);
    getMessageArray(): [motto: string];
    dispose(): void;
}

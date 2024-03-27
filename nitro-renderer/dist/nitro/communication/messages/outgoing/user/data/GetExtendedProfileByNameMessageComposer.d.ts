import { IMessageComposer } from '../../../../../../api';
export declare class GetExtendedProfileByNameMessageComposer implements IMessageComposer<ConstructorParameters<typeof GetExtendedProfileByNameMessageComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}

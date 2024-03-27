import { IMessageComposer } from '../../../../../../api';
export declare class GetIgnoredUsersComposer implements IMessageComposer<ConstructorParameters<typeof GetIgnoredUsersComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}

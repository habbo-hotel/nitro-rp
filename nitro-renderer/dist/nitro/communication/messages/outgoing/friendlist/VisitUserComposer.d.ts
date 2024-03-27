import { IMessageComposer } from '../../../../../api';
export declare class VisitUserComposer implements IMessageComposer<ConstructorParameters<typeof VisitUserComposer>> {
    private _data;
    constructor(username: string);
    getMessageArray(): [username: string];
    dispose(): void;
}

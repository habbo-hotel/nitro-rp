import { IMessageComposer } from '../../../../../../api';
export declare class AcceptGameInviteMessageComposer implements IMessageComposer<ConstructorParameters<typeof AcceptGameInviteMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number);
    dispose(): void;
    getMessageArray(): [k: number, _arg_2: number];
}

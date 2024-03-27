import { IMessageComposer } from '../../../../../api';
export declare class UpdateForumReadMarkerMessageComposer implements IMessageComposer<any> {
    private _data;
    constructor(...data: UpdateForumReadMarkerEntry[]);
    getMessageArray(): any;
    dispose(): void;
}
export declare class UpdateForumReadMarkerEntry {
    k: number;
    _arg_2: number;
    _arg_3: boolean;
    constructor(k: number, _arg_2: number, _arg_3: boolean);
}

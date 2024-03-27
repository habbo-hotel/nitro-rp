import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpFromForumThreadMessageComposer implements IMessageComposer<ConstructorParameters<typeof CallForHelpFromForumThreadMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: string);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: string];
    dispose(): void;
}

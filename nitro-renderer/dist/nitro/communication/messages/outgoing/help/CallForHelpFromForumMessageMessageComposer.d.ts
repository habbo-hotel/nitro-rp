import { IMessageComposer } from '../../../../../api';
export declare class CallForHelpFromForumMessageMessageComposer implements IMessageComposer<ConstructorParameters<typeof CallForHelpFromForumMessageMessageComposer>> {
    private _data;
    constructor(k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: string);
    getMessageArray(): [k: number, _arg_2: number, _arg_3: number, _arg_4: number, _arg_5: string];
    dispose(): void;
}

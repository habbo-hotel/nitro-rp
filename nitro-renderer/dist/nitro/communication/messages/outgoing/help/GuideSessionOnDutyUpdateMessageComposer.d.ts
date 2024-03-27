import { IMessageComposer } from '../../../../../api';
export declare class GuideSessionOnDutyUpdateMessageComposer implements IMessageComposer<ConstructorParameters<typeof GuideSessionOnDutyUpdateMessageComposer>> {
    private _data;
    constructor(k: boolean, _arg_2: boolean, _arg_3: boolean, _arg_4: boolean);
    getMessageArray(): [k: boolean, _arg_2: boolean, _arg_3: boolean, _arg_4: boolean];
    dispose(): void;
}

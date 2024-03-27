import { IMessageComposer } from '../../../../../api';
export declare class TryPhoneNumberMessageComposer implements IMessageComposer<ConstructorParameters<typeof TryPhoneNumberMessageComposer>> {
    private _data;
    constructor(k: string, _arg_2: string);
    getMessageArray(): [k: string, _arg_2: string];
    dispose(): void;
}

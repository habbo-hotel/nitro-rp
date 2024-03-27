import { IMessageDataWrapper } from '../../../../../../api';
export declare class RarityCategoryData {
    private _chance;
    private _breeds;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get chance(): number;
    get breeds(): number[];
}

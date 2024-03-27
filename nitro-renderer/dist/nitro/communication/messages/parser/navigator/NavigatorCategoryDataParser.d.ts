import { IMessageDataWrapper } from '../../../../../api';
export declare class NavigatorCategoryDataParser {
    private _id;
    private _name;
    private _visible;
    private _automatic;
    private _automaticCategoryKey;
    private _globalCategoryKey;
    private _staffOnly;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get id(): number;
    get name(): string;
    get visible(): boolean;
    get automatic(): boolean;
    get automaticCategoryKey(): string;
    get globalCategoryKey(): string;
    get staffOnly(): boolean;
}

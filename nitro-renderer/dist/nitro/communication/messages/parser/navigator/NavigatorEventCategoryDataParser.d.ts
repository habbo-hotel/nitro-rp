import { IMessageDataWrapper } from '../../../../../api';
export declare class NavigatorEventCategoryDataParser {
    private _id;
    private _name;
    private _visible;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get id(): number;
    get name(): string;
    get visible(): boolean;
}

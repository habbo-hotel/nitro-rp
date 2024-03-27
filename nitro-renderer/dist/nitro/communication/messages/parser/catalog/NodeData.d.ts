import { IMessageDataWrapper } from '../../../../../api';
export declare class NodeData {
    private _visible;
    private _icon;
    private _pageId;
    private _pageName;
    private _localization;
    private _children;
    private _offerIds;
    constructor(wrapper: IMessageDataWrapper);
    flush(): boolean;
    parse(wrapper: IMessageDataWrapper): boolean;
    get visible(): boolean;
    get icon(): number;
    get pageId(): number;
    get pageName(): string;
    get localization(): string;
    get children(): NodeData[];
    get offerIds(): number[];
}

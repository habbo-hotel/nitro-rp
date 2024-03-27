import { IMessageDataWrapper } from '../../../../../api';
export declare class PromoArticleData {
    static readonly LINK_TYPE_URL = 0;
    static readonly LINK_TYPE_INTERNAL = 1;
    static readonly LINK_TYPE_NO_LINK = 2;
    private _id;
    private _title;
    private _bodyText;
    private _buttonText;
    private _linkType;
    private _linkContent;
    private _imageUrl;
    constructor(k: IMessageDataWrapper);
    get id(): number;
    get title(): string;
    get bodyText(): string;
    get buttonText(): string;
    get linkType(): number;
    get linkContent(): string;
    get imageUrl(): string;
}

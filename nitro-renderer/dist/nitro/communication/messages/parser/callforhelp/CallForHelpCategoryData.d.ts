import { IDisposable, IMessageDataWrapper } from '../../../../../api';
import { INamed } from '../moderation';
import { CallForHelpTopicData } from './CallForHelpTopicData';
export declare class CallForHelpCategoryData implements INamed, IDisposable {
    private _name;
    private _topics;
    private _disposed;
    constructor(wrapper: IMessageDataWrapper);
    dispose(): void;
    get disposed(): boolean;
    get name(): string;
    get topics(): CallForHelpTopicData[];
}

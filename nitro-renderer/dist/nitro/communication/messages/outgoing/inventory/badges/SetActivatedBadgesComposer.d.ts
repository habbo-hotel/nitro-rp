import { IMessageComposer } from '../../../../../../api';
export declare class SetActivatedBadgesComposer implements IMessageComposer<any[]> {
    private _badges;
    getMessageArray(): any[];
    dispose(): void;
    addActivatedBadge(badge: string): void;
}

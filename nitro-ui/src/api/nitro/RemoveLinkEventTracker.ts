import { ILinkEventTracker } from '@nitro-rp/renderer';
import { GetNitroInstance } from './GetNitroInstance';

export function RemoveLinkEventTracker(tracker: ILinkEventTracker): void
{
    GetNitroInstance().removeLinkEventTracker(tracker);
}

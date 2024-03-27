import { ILinkEventTracker } from '@nitro-rp/renderer';
import { GetNitroInstance } from './GetNitroInstance';

export function AddEventLinkTracker(tracker: ILinkEventTracker): void
{
    GetNitroInstance().addLinkEventTracker(tracker);
}

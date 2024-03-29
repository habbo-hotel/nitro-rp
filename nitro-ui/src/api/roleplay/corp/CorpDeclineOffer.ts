import { CorpDenyOfferComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '../..';

export function CorpDeclineOffer(corpName: string): void
{
    SendMessageComposer(new CorpDenyOfferComposer(corpName));
}

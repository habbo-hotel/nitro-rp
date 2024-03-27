import { CorpDemoteUserComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function CorpOfferJob(username: string): void
{
    SendMessageComposer(new CorpDemoteUserComposer(username));
}

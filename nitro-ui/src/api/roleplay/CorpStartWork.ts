import { CorpStartWorkComposer } from '@nitro-rp/renderer';
import { SendMessageComposer } from '..';

export function CorpStartWork(): void
{
    SendMessageComposer(new CorpStartWorkComposer());
}

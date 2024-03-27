import { SellablePetPaletteData } from '@nitro-rp/renderer';

export class CatalogPetPalette
{
    constructor(
        public readonly breed: string,
        public readonly palettes: SellablePetPaletteData[]
    ) 
    {}
}

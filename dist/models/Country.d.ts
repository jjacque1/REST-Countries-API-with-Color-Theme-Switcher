export interface Country {
    name: {
        common: string;
        nativeName: string;
        official: string;
    };
    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    currencies?: {
        [code: string]: {
            name: string;
            symbol: string;
        };
    };
    languages?: {
        [key: string]: string;
    };
    borders?: string[];
}
//# sourceMappingURL=Country.d.ts.map
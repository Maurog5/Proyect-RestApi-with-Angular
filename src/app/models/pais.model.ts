export interface IPais {
  favorite: boolean;
  
    name: {
      common: string;
      official: string;
      nativeName: {
        [key: string]: {
          official: string;
          common: string;
        };
      };
    };
    // ... otras propiedades ...
    flags: {
      png: string;
      svg: string;
      alt: string;
    };
    capital: string;
    population: number;
    area:number;
    region: string;
    
    maps: {
      googleMaps: string; 
      openStreetMaps: string;
      
    };
  }
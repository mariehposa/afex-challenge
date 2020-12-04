export const fetcBuy = [
    {id: 1, security: 'FETC(Fair Trade ETC)', qty: 10.00, bidPrice: 9750.00},
    {id: 2, security: 'FETC(Fair Trade ETC)', qty: 1.00, bidPrice: 9750.00}
]

export const fetcSell = [
    {id: 3, security: 'FETC(Fair Trade ETC)', qty: 8558.00, offerPrice: 10000.00}
]

export const ssbsBuy = [
    {id: 4, security: 'SSBS(Soyabean)', qty: 1.00, bidPrice: 17800.00},
    {id: 5, security: 'SSBS(Soyabean)', qty: 1.00, bidPrice: 17800.00},
    {id: 6, security: 'SSBS(Soyabean)', qty: 20.00, bidPrice: 18000.00},
    {id: 7, security: 'SSBS(Soyabean)', qty: 3.00, bidPrice: 15300.00},
    {id: 8, security: 'SSBS(Soyabean)', qty: 1.00, bidPrice: 14750.00}
]

export const ssgmBuy = [
    {id: 9, security: 'SSGM(Sorghum)', qty: 1.00, bidPrice: 17500.00},
    {id: 10, security: 'SSGM(Sorghum)', qty: 1.00, bidPrice: 17500.00},
    {id: 11, security: 'SSGM(Sorghum)', qty: 1.00, bidPrice: 17500.00},
    {id: 12, security: 'SSGM(Sorghum)', qty: 1.00, bidPrice: 12700.00}
]

export const ssgmSell = [
    {id: 13, security: 'SSGM(Sorghum)', qty: 1.00, offerPrice: 175000.00}
]

export const smazBuy = [
    {id: 14, security: 'SMAZ(Maize)', qty: 250.00, bidPrice: 14800.00},
    {id: 15, security: 'SMAZ(Maize)', qty: 1.00, bidPrice: 14478.75},
    {id: 16, security: 'SMAZ(Maize)', qty: 1.00, bidPrice: 14500.00},
    {id: 17, security: 'SMAZ(Maize)', qty: 1.00, bidPrice: 12000.00},
    {id: 18, security: 'SMAZ(Maize)', qty: 1.00, bidPrice: 12100.00}
]

export const smazSell = [
    {id: 19, security: 'SMAZ(Maize)', qty: 12.00, offerPrice: 14850.00},
    {id: 20, security: 'SMAZ(Maize)', qty: 1.00, offerPrice: 15221.25},
    {id: 21, security: 'SMAZ(Maize)', qty: 142.00, offerPrice: 14850.00},
    {id: 22, security: 'SMAZ(Maize)', qty: 1.00, offerPrice: 15221.25},
    {id: 23, security: 'SMAZ(Maize)', qty: 1.00, offerPrice: 215000.00}
]

export const sprlBuy = [
    {id: 24, security: 'SPRL(Paddy Rice)', qty: 250.00, bidPrice: 19350.00},
    {id: 25, security: 'SPRL(Paddy Rice)', qty: 3.00, bidPrice: 16050.00}
]

export const sprlSell = [
    {id: 26, security: 'SPRL(Paddy Rice)', qty: 229.00, offerPrice: 19400.00}
]

export const scocBuy = [
    {id: 27, security: 'SCOC(Cocoa)', qty: 250.00, bidPrice: 95950.00}
]

export const scocSell = [
    {id: 28, security: 'SCOC(Cocoa)', qty: 247.00, offerPrice: 96000.00}
]

export const allBuy = [ ...fetcBuy, ...ssbsBuy, ...ssgmBuy, ...smazBuy, ...sprlBuy, ...scocBuy, ];

export const allSell = [ ...fetcSell, ...ssgmSell, ...smazSell, ...sprlSell, ...scocSell, ];
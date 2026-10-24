export interface SolarPackage {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  capacityKw: number;
  popular?: boolean;
  priceNumber: number;
  originalPriceNumber?: number;
  priceDisplay: string;
  originalPriceDisplay?: string;
  hardware: {
    inverter: string;
    battery: string;
    panels: string;
    panelsCount: number;
    panelWattage: string;
  };
  features: string[];
  idealFor: string;
  monthlyGeneration: string;
  warranty: string;
  financing: string;
}

export const OFFICIAL_SOLAR_PACKAGES: SolarPackage[] = [
  {
    id: "5kw-offgrid",
    name: "5kW Off-Grid Solar Package",
    badge: "Zero Power Cuts",
    tagline: "Power Your Home with Clean, Reliable and Affordable Solar Energy",
    capacityKw: 5,
    popular: false,
    priceNumber: 1350000,
    priceDisplay: "LKR 1,350,000",
    hardware: {
      inverter: "1 x 5kW Inverter",
      battery: "1 x 5kW Battery",
      panels: "8 x Jinko 740W Solar Panels",
      panelsCount: 8,
      panelWattage: "740W",
    },
    features: [
      "Zero Electricity Bills & Zero Power Cuts",
      "1 x 5kW Inverter + 1 x 5kW Battery",
      "8 x Jinko 740W High-Efficiency Panels",
      "10 Years Hardware Warranty Included",
      "Free Site Inspection (නොමිලේ)",
      "0% Credit Card Installments Available",
    ],
    idealFor: "1-3 Bedroom residences, refrigerators, fans, TV, laptop workstations & essentials",
    monthlyGeneration: "~600 kWh / mo",
    warranty: "10 Years Warranty",
    financing: "0% Installments (HNB, Commercial, NDB, Union, DFCC, Seylan)",
  },
  {
    id: "5kw-hybrid",
    name: "5kW Off-Grid Hybrid Inverter System",
    badge: "Special Package Price",
    tagline: "Smart Hybrid Technology for Homes & Small Businesses",
    capacityKw: 5.12,
    popular: true,
    priceNumber: 1725000,
    priceDisplay: "LKR 1,725,000",
    hardware: {
      inverter: "1 x 5kW Hybrid Inverter (Vertex / Premium Brand)",
      battery: "1 x 5kW Dyness High-Performance Battery",
      panels: "8 x 640W Jinko Solar Panels (5.12kW Generation)",
      panelsCount: 8,
      panelWattage: "640W",
    },
    features: [
      "1 x 5kW Hybrid Inverter (Vertex Home / Premium Brand)",
      "1 x 5kW Dyness High-Performance Battery",
      "8 x 640W Jinko Solar Panels (5.12kW Generation)",
      "Reliable Backup Power During Outages",
      "Smart Hybrid Technology (Efficient & Flexible)",
      "Ideal for Homes & Small Businesses",
      "Professional Installation & After Sales Support",
    ],
    idealFor: "2-3 Bedroom residences, inverter ACs, small businesses, clinics & studios",
    monthlyGeneration: "~620 kWh / mo",
    warranty: "10 Years Warranty",
    financing: "0% Installments (HNB, Commercial, NDB, Union, DFCC, Seylan)",
  },
  {
    id: "10kw-offgrid",
    name: "10kW Off-Grid Solar Package",
    badge: "Limited Time Offer • Most Popular",
    tagline: "Power Your Entire Home 24/7 with Reliable LiFePO4 Storage",
    capacityKw: 10,
    popular: true,
    priceNumber: 2350000,
    originalPriceNumber: 2500000,
    priceDisplay: "LKR 2,350,000",
    originalPriceDisplay: "LKR 2,500,000",
    hardware: {
      inverter: "1 x 10kW Hybrid Inverter",
      battery: "1 x 16kW LiFePO4 High-Cycle Battery",
      panels: "14 x Jinko 640W Solar Panels",
      panelsCount: 14,
      panelWattage: "640W",
    },
    features: [
      "1 x 10kW Hybrid Inverter",
      "1 x 16kW LiFePO4 Battery Storage",
      "14 x Jinko 640W Solar Panels",
      "Powers Whole Home 24/7 with Sub-Second Switchover",
      "Save LKR 150,000 Limited Time Offer",
      "10 Years Warranty Included",
      "Free Site Inspection & 0% Bank Installments",
    ],
    idealFor: "3-5 Bedroom large homes, multiple inverter ACs, water pumps & home EV charging",
    monthlyGeneration: "~1,250 kWh / mo",
    warranty: "10 Years Warranty",
    financing: "0% Installments (HNB, Commercial, NDB, Union, DFCC, Seylan)",
  },
  {
    id: "20kw-commercial",
    name: "20kW Off-Grid Commercial Package",
    badge: "Enterprise Commercial",
    tagline: "Turn Your Commercial Rooftop into a High-Yield Profit Engine",
    capacityKw: 20,
    popular: false,
    priceNumber: 2955000,
    priceDisplay: "Starting from LKR 2,955,000",
    hardware: {
      inverter: "Commercial High-Capacity Hybrid Inverter",
      battery: "Modular Commercial Battery Storage Bank",
      panels: "28+ Large High-Efficiency Solar Panel Array",
      panelsCount: 28,
      panelWattage: "640W / 740W",
    },
    features: [
      "High-Capacity Commercial Hybrid Inverter",
      "Modular Commercial Battery Storage Bank",
      "Large High-Yield Solar Panel Array",
      "Tailored for Commercial Rooftops & Heavy Business Loads",
      "Dramatically Reduces Operating Expenditures",
      "Energy Independence with High ROI",
      "Free Site Inspection & 0% Commercial Financing",
    ],
    idealFor: "Commercial facilities, warehouses, hotels, schools, supermarkets & factories",
    monthlyGeneration: "~2,400+ kWh / mo",
    warranty: "10 Years Warranty",
    financing: "0% Commercial Financing & Bank Installment Plans",
  },
];

export const PARTNER_BANKS = [
  "HNB",
  "Commercial Bank",
  "NDB Bank",
  "Union Bank",
  "DFCC Bank",
  "Seylan Bank",
];

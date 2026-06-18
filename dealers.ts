// data/dealers.ts
export interface CraneProduct {
  model: string;
  capacity: string;
  boomLength: string;
  image: string;
}

export interface DealerProfile {
  id: string;
  companyName: string;
  region: string;
  contactEmail: string;
  phone: string;
  primaryColor: string;
  accentColor: string;
  headline: string;
  featuredCranes: CraneProduct[];
}

export const dealersData: Record<string, DealerProfile> = {
  "americas-lift": {
    id: "dl-us",
    companyName: "Apex Crane Americas Corp",
    region: "North & South America Hub (Houston, TX)",
    contactEmail: "sales.us@apex-crane.com",
    phone: "+1 (800) 555-0199",
    primaryColor: "#0f172a", // Slate Dark
    accentColor: "#f59e0b",  // Heavy Equipment Yellow
    headline: "Unmatched Power. Precision Lifting Across the Americas.",
    featuredCranes: [
      {
        model: "Apex AT-500 All-Terrain",
        capacity: "500 Metric Tons",
        boomLength: "80 Meters",
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=600"
      },
      {
        model: "Apex CC-1200 Crawler",
        capacity: "1,200 Metric Tons",
        boomLength: "144 Meters",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  "euro-lift": {
    id: "dl-eu",
    companyName: "Apex Heavy Lift Europe GmbH",
    region: "European Logistics Hub (Rotterdam, Netherlands)",
    contactEmail: "rentals.eu@apex-crane.eu",
    phone: "+31 10 555 4321",
    primaryColor: "#1e3a8a", // Maritime Blue
    accentColor: "#38bdf8",  // Clean Sky Blue
    headline: "Sustainable Engineering. Next-Generation Tower & Marine Crane Solutions.",
    featuredCranes: [
      {
        model: "Apex TC-750 Tower Crane",
        capacity: "75 Metric Tons",
        boomLength: "75 Meters",
        image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=600"
      },
      {
        model: "Apex SmartLift Electric E-20",
        capacity: "20 Metric Tons",
        boomLength: "45 Meters",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
};

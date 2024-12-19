import { BuildingType } from "../../interfaces/IBuilding";


export interface ITech {
  key: string;
  displayName: string;
  description: string;
  cost: number;
  paid: number;
  benefit?: BuildingType;
  dependsOn?: string;
  active: boolean;
}

export interface ITechTree {
  economy: ITech[];
  infrastructure: ITech[];
  military: ITech[];
  science: ITech[];
  culture: ITech[];
}

export function initTechTree(): ITechTree {
 return {
  economy: [
    {
      key: crypto.randomUUID(),
      displayName: "Landwirtschaft",
      description: "Freischaltung von Feldern, Obstgärten",
      cost: 10,
      paid: 0,
      benefit: "wheatField",
      active: false

    },

    {
      key: crypto.randomUUID(),
      displayName: "Handwerk",
      description: "einfache Lager, Werkstätten, Herstellung grundlegender Waren",
      cost: 10,
      paid: 0,
      dependsOn: "a1",
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Bergbau",
      description: "Erzförderung und Verarbeitung",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Textilproduktion",
      description: "Webereien und Kleidung",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Handel",
      description: "Freischaltung von Handelsrouten und Marktplätzen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Maschinenbau",
      description: "effizientere Produktionsanlagen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Luxusgüter",
      description: "Wein, Schmuck",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Banken und Finanzen",
      description: "Investitionen und Steuereinnahmen optimieren",
      cost: 10,
      paid: 0,
      active: false
    }
  ],

  infrastructure: [
    {
      key: crypto.randomUUID(),
      displayName: "Straßenbau",
      description: "Erhöhung der Transportgeschwindigkeit",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Brunnen und Wasserversorgung",
      description: "Verbesserung der Lebensqualität",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Lagerhäuser",
      description: "verbesserte Lagerkapazitäten",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Fortgeschrittene Straßen",
      description: "Pflasterstraßen, Brücken",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Wohnhäuser",
      description: "bessere Lebensqualität für Einwohner",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Energieversorgung",
      description: "Windmühlen, erste Kraftwerke",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Elektrifizierung",
      description: "effizientere Energiequellen, wie Wasserkraft oder Solarenergie",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Transportsysteme",
      description: "Züge, Schiffe, Luftverkehr",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Hochhäuser",
      description: "maximale Raumnutzung",
      cost: 10,
      paid: 0,
      active: false
    }

  ],
  military: [
    {
      key: crypto.randomUUID(),
      displayName: "Wachtürme und Stadtmauern",
      description: "Schutz vor Angriffen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Basis-Krieger",
      description: "Schwertkämpfer, Bogenschützen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Ausbildungslager",
      description: "Training von Kriegern",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Kavallerie",
      description: "schnelle Angriffstruppen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Belagerungsmaschinen",
      description: "Katapulte, Ballisten",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Spionage",
      description: "Informationen über Gegner",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Artillerie",
      description: "Kanonen, Geschütze",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Luft- und Seestreitkräfte",
      description: "Kampfflugzeuge, Kriegsschiffe",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Geheimtechnologien",
      description: "Unsichtbarkeit, Drohnen",
      cost: 10,
      paid: 0,
      active: false
    }

  ],
  science: [
    {
      key: crypto.randomUUID(),
      displayName: "Schrift und Bildung",
      description: "Schulen freischalten",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Naturforschung",
      description: "Verbesserung von Ernten und Ressourcen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Medizin",
      description: "Erhöhung der Lebensdauer der Bevölkerung",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Alchemie",
      description: "Erforschung von Edelmetallen, chemischen Prozessen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Astronomie",
      description: "Verbesserung von Navigation",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Mechanik",
      description: "erste Maschinen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Forschungslabore",
      description: "Erhöhung der Forschungsgeschwindigkeit",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Genetik",
      description: "Verbesserung der Landwirtschaft oder Medizin",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Erneuerbare Energien",
      description: "Solar, Wind",
      cost: 10,
      paid: 0,
      active: false
    }
  ],
  culture: [
    {
      key: crypto.randomUUID(),
      displayName: "Monumente",
      description: "Erhöhung des Ruhms",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Musik und Kunst",
      description: "Verbesserung der Zufriedenheit",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Religiöse Gebäude",
      description: "Kultur und Spiritualität stärken",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Bibliotheken und Universitäten",
      description: "Wissen und Forschung",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Theater und Opernhäuser",
      description: "Kulturelle Veranstaltungen",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Diplomatie",
      description: "Frieden mit Nachbarn sichern",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Weltwunder",
      description: "massive kulturelle Vorteile",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Medien",
      description: "Verbreitung der Kultur und Beeinflussung anderer Völker",
      cost: 10,
      paid: 0,
      active: false
    },
    {
      key: crypto.randomUUID(),
      displayName: "Tourismus",
      description: "wirtschaftliche und kulturelle Vorteile",
      cost: 10,
      paid: 0,
      active: false
    }
  ]
}
}

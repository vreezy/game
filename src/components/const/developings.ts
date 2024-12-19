import { BuildingType } from "../../interfaces/IBuilding";
import { IResources } from "../../interfaces/IResources";

interface IResearch {
  key: string;
  displayName: string;
  description: string;
  cost?: Partial<IResources>;
  allows?: BuildingType;
  dependsOn?: string;

}

interface IDeveloping {
  economy: IResearch[];
  infrastructure: IResearch[];
  military: IResearch[];
  science: IResearch[];
  culture: IResearch[];
}
export const DEVELOPING: IDeveloping = {
  economy: [
    {
      key: "a1",
      displayName: "Landwirtschaft",
      description: "Freischaltung von Feldern, Obstgärten",
      cost: {
        wood: 10,
      },
      allows: "wheatField"

    },

    {
      key: "a3",
      displayName: "Handwerk",
      description: "einfache Lager, Werkstätten, Herstellung grundlegender Waren",
      dependsOn: "a1"
    },
    {
      key: "a4",
      displayName: "Bergbau",
      description: "Erzförderung und Verarbeitung"
    },
    {
      key: "a5",
      displayName: "Textilproduktion",
      description: "Webereien und Kleidung"
    },
    {
      key: "a6",
      displayName: "Handel",
      description: "Freischaltung von Handelsrouten und Marktplätzen"
    },
    {
      key: "a7",
      displayName: "Maschinenbau",
      description: "effizientere Produktionsanlagen"
    },
    {
      key: "a8",
      displayName: "Luxusgüter",
      description: "Wein, Schmuck"
    },
    {
      key: "a9",
      displayName: "Banken und Finanzen",
      description: "Investitionen und Steuereinnahmen optimieren"
    }
  ],

  infrastructure: [
    {
      key: "b1",
      displayName: "Straßenbau",
      description: "Erhöhung der Transportgeschwindigkeit"
    },
    {
      key: "b2",
      displayName: "Brunnen und Wasserversorgung",
      description: "Verbesserung der Lebensqualität"
    },
    {
      key: "b3",
      displayName: "Lagerhäuser",
      description: "verbesserte Lagerkapazitäten"
    },
    {
      key: "b4",
      displayName: "Fortgeschrittene Straßen",
      description: "Pflasterstraßen, Brücken"
    },
    {
      key: "b5",
      displayName: "Wohnhäuser",
      description: "bessere Lebensqualität für Einwohner"
    },
    {
      key: "b6",
      displayName: "Energieversorgung",
      description: "Windmühlen, erste Kraftwerke"
    },
    {
      key: "b7",
      displayName: "Elektrifizierung",
      description: "effizientere Energiequellen, wie Wasserkraft oder Solarenergie"
    },
    {
      key: "b8",
      displayName: "Transportsysteme",
      description: "Züge, Schiffe, Luftverkehr"
    },
    {
      key: "b9",
      displayName: "Hochhäuser",
      description: "maximale Raumnutzung"
    }

  ],
  military: [
    {
      key: crypto.randomUUID(),
      displayName: "Wachtürme und Stadtmauern",
      description: "Schutz vor Angriffen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Basis-Krieger",
      description: "Schwertkämpfer, Bogenschützen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Ausbildungslager",
      description: "Training von Kriegern"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Kavallerie",
      description: "schnelle Angriffstruppen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Belagerungsmaschinen",
      description: "Katapulte, Ballisten"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Spionage",
      description: "Informationen über Gegner"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Artillerie",
      description: "Kanonen, Geschütze"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Luft- und Seestreitkräfte",
      description: "Kampfflugzeuge, Kriegsschiffe"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Geheimtechnologien",
      description: "Unsichtbarkeit, Drohnen"
    }

  ],
  science: [
    {
      key: crypto.randomUUID(),
      displayName: "Schrift und Bildung",
      description: "Schulen freischalten"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Naturforschung",
      description: "Verbesserung von Ernten und Ressourcen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Medizin",
      description: "Erhöhung der Lebensdauer der Bevölkerung"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Alchemie",
      description: "Erforschung von Edelmetallen, chemischen Prozessen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Astronomie",
      description: "Verbesserung von Navigation"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Mechanik",
      description: "erste Maschinen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Forschungslabore",
      description: "Erhöhung der Forschungsgeschwindigkeit"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Genetik",
      description: "Verbesserung der Landwirtschaft oder Medizin"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Erneuerbare Energien",
      description: "Solar, Wind"
    }
  ],
  culture: [
    {
      key: crypto.randomUUID(),
      displayName: "Monumente",
      description: "Erhöhung des Ruhms"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Musik und Kunst",
      description: "Verbesserung der Zufriedenheit"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Religiöse Gebäude",
      description: "Kultur und Spiritualität stärken"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Bibliotheken und Universitäten",
      description: "Wissen und Forschung"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Theater und Opernhäuser",
      description: "Kulturelle Veranstaltungen"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Diplomatie",
      description: "Frieden mit Nachbarn sichern"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Weltwunder",
      description: "massive kulturelle Vorteile"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Medien",
      description: "Verbreitung der Kultur und Beeinflussung anderer Völker"
    },
    {
      key: crypto.randomUUID(),
      displayName: "Tourismus",
      description: "wirtschaftliche und kulturelle Vorteile"
    }
  ]
}

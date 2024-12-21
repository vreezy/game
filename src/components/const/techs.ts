import { ITechTree } from "../../interfaces/ITechTree";

export function initTechTree(): ITechTree {
  return {
    economyTech: [
      {
        key: crypto.randomUUID(),
        techKey: "a1",
        displayName: "Landwirtschaft",
        description: "Freischaltung von Feldern, Obstgärten",
        cost: 10,
        paid: 0,
        unlocks: ["wheatField"],
        requiredTechKeys: []
      },
      {
        key: crypto.randomUUID(),
        techKey: "a2",
        displayName: "Handwerk",
        description:
          "einfache Lager, Werkstätten, Herstellung grundlegender Waren",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a1"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a3",
        displayName: "Bergbau",
        description: "Erzförderung und Verarbeitung",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a2"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a4",
        displayName: "Textilproduktion",
        description: "Webereien und Kleidung",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a3"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a5",
        displayName: "Handel",
        description: "Freischaltung von Handelsrouten und Marktplätzen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a4"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a6",
        displayName: "Maschinenbau",
        description: "effizientere Produktionsanlagen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a5"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a7",
        displayName: "Luxusgüter",
        description: "Wein, Schmuck",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a6"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "a8",
        displayName: "Banken und Finanzen",
        description: "Investitionen und Steuereinnahmen optimieren",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["a7"]
      },
    ],

    infrastructureTech: [
      {
        key: crypto.randomUUID(),
        techKey: "b1",
        displayName: "Straßenbau",
        description: "Erhöhung der Transportgeschwindigkeit",
        cost: 10,
        paid: 0,
        requiredTechKeys: []
      },
      {
        key: crypto.randomUUID(),
        techKey: "b2",
        displayName: "Brunnen und Wasserversorgung",
        description: "Verbesserung der Lebensqualität",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b1"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b3",
        displayName: "Lagerhäuser",
        description: "verbesserte Lagerkapazitäten",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b2"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b4",
        displayName: "Fortgeschrittene Straßen",
        description: "Pflasterstraßen, Brücken",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b3"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b5",
        displayName: "Wohnhäuser",
        description: "bessere Lebensqualität für Einwohner",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b4"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b6",
        displayName: "Energieversorgung",
        description: "Windmühlen, erste Kraftwerke",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b5"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b7",
        displayName: "Elektrifizierung",
        description:
          "effizientere Energiequellen, wie Wasserkraft oder Solarenergie",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b6"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b8",
        displayName: "Transportsysteme",
        description: "Züge, Schiffe, Luftverkehr",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b7"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "b9",
        displayName: "Hochhäuser",
        description: "maximale Raumnutzung",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["b8"]
      },
    ],
    militaryTech: [
      {
        key: crypto.randomUUID(),
        techKey: "c1",
        displayName: "Wachtürme und Stadtmauern",
        description: "Schutz vor Angriffen",
        cost: 10,
        paid: 0,
        requiredTechKeys: []
      },
      {
        key: crypto.randomUUID(),
        techKey: "c2",  
        displayName: "Basis-Krieger",
        description: "Schwertkämpfer, Bogenschützen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c1"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c3",
        displayName: "Ausbildungslager",
        description: "Training von Kriegern",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c2"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c4",
        displayName: "Kavallerie",
        description: "schnelle Angriffstruppen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c3"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c5",
        displayName: "Belagerungsmaschinen",
        description: "Katapulte, Ballisten",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c4"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c6",
        displayName: "Spionage",
        description: "Informationen über Gegner",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c5"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c7",
        displayName: "Artillerie",
        description: "Kanonen, Geschütze",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c6"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c8",
        displayName: "Luft- und Seestreitkräfte",
        description: "Kampfflugzeuge, Kriegsschiffe",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c7"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "c9",
        displayName: "Geheimtechnologien",
        description: "Unsichtbarkeit, Drohnen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["c8"]
      },
    ],
    scienceTech: [
      {
        key: crypto.randomUUID(),
        techKey: "d1",
        displayName: "Schrift und Bildung",
        description: "Schulen freischalten",
        cost: 10,
        paid: 0,
        requiredTechKeys: []
      },
      {
        key: crypto.randomUUID(),
        techKey: "d2",
        displayName: "Naturforschung",
        description: "Verbesserung von Ernten und Ressourcen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d1"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d3",
        displayName: "Medizin",
        description: "Erhöhung der Lebensdauer der Bevölkerung",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d2"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d4",
        displayName: "Alchemie",
        description: "Erforschung von Edelmetallen, chemischen Prozessen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d3"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d5",
        displayName: "Astronomie",
        description: "Verbesserung von Navigation",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d4"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d6",
        displayName: "Mechanik",
        description: "erste Maschinen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d5"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d7",
        displayName: "Forschungslabore",
        description: "Erhöhung der Forschungsgeschwindigkeit",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d6"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d8",
        displayName: "Genetik",
        description: "Verbesserung der Landwirtschaft oder Medizin",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d7"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "d9",
        displayName: "Erneuerbare Energien",
        description: "Solar, Wind",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["d8"]
      },
    ],
    cultureTech: [
      {
        key: crypto.randomUUID(),
        techKey: "e1",
        displayName: "Monumente",
        description: "Erhöhung des Ruhms",
        cost: 10,
        paid: 0,
        requiredTechKeys: []
      },
      {
        key: crypto.randomUUID(),
        techKey: "e2",
        displayName: "Musik und Kunst",
        description: "Verbesserung der Zufriedenheit",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e1"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e3",
        displayName: "Religiöse Gebäude",
        description: "Kultur und Spiritualität stärken",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e2"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e4",
        displayName: "Bibliotheken und Universitäten",
        description: "Wissen und Forschung",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e3"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e5",
        displayName: "Theater und Opernhäuser",
        description: "Kulturelle Veranstaltungen",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e4"]  
      },
      {
        key: crypto.randomUUID(),
        techKey: "e6",
        displayName: "Diplomatie",
        description: "Frieden mit Nachbarn sichern",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e5"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e7",
        displayName: "Weltwunder",
        description: "massive kulturelle Vorteile",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e6"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e8",
        displayName: "Medien",
        description: "Verbreitung der Kultur und Beeinflussung anderer Völker",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e7"]
      },
      {
        key: crypto.randomUUID(),
        techKey: "e9",
        displayName: "Tourismus",
        description: "wirtschaftliche und kulturelle Vorteile",
        cost: 10,
        paid: 0,
        requiredTechKeys: ["e8"]
      },
    ],
  };
}

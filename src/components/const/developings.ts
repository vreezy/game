interface IResearch {
  displayName: string;
  description: string;

}

interface IDeveloping {
  economy: {
    [key: string]: IResearch[]
  },
  infrastructure: {
    [key: string]: IResearch[]
  },
}
export const DEVELOPING: IDeveloping = {
  economy: {
    basicEconomy: [{
      displayName: "Basiswirtschaft",
      description: "Freischaltung von Landwirtschaft, Holzverarbeitung, Basis-Handwerk"
    }],
    industrialDevelopment: [{
      displayName: "Industrielle Entwicklung",
      description: "Freischaltung von Bergbau, Textilproduktion, Handel"
    }],
    advancedEconomy: [{
      displayName: "Fortgeschrittene Wirtschaft",
      description: "Freischaltung von Maschinenbau, Luxusgüter, Banken und Finanzen"
    }]
  },
  infrastructure: {
    basicSupply: {
      displayName: "Grundversorgung",
      description: "Freischaltung von Straßenbau, Brunnen und Wasserversorgung, Lagerhäuser"
    },
    urbanPlanning: {
      displayName: "Städtebau",
      description: "Freischaltung von Fortgeschrittenen Straßen, Wohnhäuser, Energieversorgung"
    },
    modernInfrastructure: {
      displayName: "Moderne Infrastruktur",
      description: "Freischaltung von Elektrifizierung, Transportsysteme, Hochhäuser"
    }
  }
}
  



// 1. Wirtschaft
// Stufe 1: Basiswirtschaft

// Grundlegende Landwirtschaft (Freischaltung von Feldern, Obstgärten)
// Holzverarbeitung (Freischaltung von Bauwerken und Werkzeugen)
// Basis-Handwerk (einfache Werkstätten, Herstellung grundlegender Waren)
// Stufe 2: Industrielle Entwicklung

// Bergbau (Erzförderung und Verarbeitung)
// Textilproduktion (Webereien und Kleidung)
// Handel (Freischaltung von Handelsrouten und Marktplätzen)
// Stufe 3: Fortgeschrittene Wirtschaft

// Maschinenbau (effizientere Produktionsanlagen)
// Luxusgüter (Wein, Schmuck)
// Banken und Finanzen (Investitionen und Steuereinnahmen optimieren)
// 2. Infrastruktur
// Stufe 1: Grundversorgung

// Straßenbau (Erhöhung der Transportgeschwindigkeit)
// Brunnen und Wasserversorgung
// Lagerhäuser (verbesserte Lagerkapazitäten)
// Stufe 2: Städtebau

// Fortgeschrittene Straßen (Pflasterstraßen, Brücken)
// Wohnhäuser (bessere Lebensqualität für Einwohner)
// Energieversorgung (Windmühlen, erste Kraftwerke)
// Stufe 3: Moderne Infrastruktur

// Elektrifizierung (effizientere Energiequellen, wie Wasserkraft oder Solarenergie)
// Transportsysteme (Züge, Schiffe, Luftverkehr)
// Hochhäuser (maximale Raumnutzung)
// 3. Militär
// Stufe 1: Verteidigung

// Wachtürme und Stadtmauern
// Basis-Krieger (Schwertkämpfer, Bogenschützen)
// Ausbildungslager
// Stufe 2: Offensivstrategie

// Kavallerie
// Belagerungsmaschinen (Katapulte, Ballisten)
// Spionage (Informationen über Gegner)
// Stufe 3: Moderne Kriegsführung

// Artillerie
// Luft- und Seestreitkräfte
// Geheimtechnologien (z. B. Unsichtbarkeit oder Drohnen)
// 4. Wissenschaft
// Stufe 1: Grundlagen

// Schrift und Bildung (Schulen freischalten)
// Naturforschung (Verbesserung von Ernten und Ressourcen)
// Medizin (Erhöhung der Lebensdauer der Bevölkerung)
// Stufe 2: Technologischer Fortschritt

// Alchemie (Erforschung von Edelmetallen, chemischen Prozessen)
// Astronomie (Verbesserung von Navigation)
// Mechanik (erste Maschinen)
// Stufe 3: Moderne Wissenschaft

// Forschungslabore (Erhöhung der Forschungsgeschwindigkeit)
// Genetik (Verbesserung der Landwirtschaft oder Medizin)
// Erneuerbare Energien (Solar, Wind)
// 5. Kultur
// Stufe 1: Traditionen

// Monumente (Erhöhung des Ruhms)
// Musik und Kunst (Verbesserung der Zufriedenheit)
// Religiöse Gebäude (Kultur und Spiritualität stärken)
// Stufe 2: Gesellschaft

// Bibliotheken und Universitäten
// Theater und Opernhäuser
// Diplomatie (Frieden mit Nachbarn sichern)
// Stufe 3: Globale Kultur

// Weltwunder (massive kulturelle Vorteile)
// Medien (Verbreitung der Kultur und Beeinflussung anderer Völker)
// Tourismus (wirtschaftliche und kulturelle Vorteile)

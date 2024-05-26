// Stwórz klasę Storage, która będzie tworzyć obiekty do zarządzania magazynem towarów.
// Klasa oczekuje tylko jednego argumentu — początkowej tablicy towarów, która jest zapisywana do utworzonego
// obiektu w prywatnej właściwości items.

// Ogłoś następujące metody klasy:

// getItems() — zwraca tablicę bieżących towarów w prywatnej właściwości items.
// addItem(newItem) — przyjmuje nowy towar newItem i dodaje go do tablicy towarów w prywatnej właściwości items obiektu.
// removeItem(itemToRemove) — przyjmuje ciąg znaków z nazwą towaru itemToRemove i usuwa go z tablicy towarów w prywatnej właściwości items obiektu.
// Ogłoszona klasa Storage
// W klasie Storage ogłoszony metod getItems
// W klasie Storage ogłoszony metod addItem
// W klasie Storage ogłoszony metod removeItem
// Właściwość items w klasie Storage ogłoszona prywatnie
// Metoda getItems zwraca wartość prywatnej właściwości items instancji klasy, która ją wywołuje
// Metoda addItem zmienia wartość prywatnej właściwości items instancji klasy, która ją wywołuje
// Metoda removeItem zmienia wartość prywatnej właściwości items instancji klasy, która ją wywołuje
// W wyniku wywołania new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) wartość zmiennej storage to obiekt
// Obiekt storage nie zawiera publicznej właściwości items
// Pierwsze wywołanie storage.getItems() zaraz po inicjalizacji instancji zwraca tablicę ["Nanitoids", "Prolonger", "Antigravitator"]
// Drugie wywołanie storage.getItems() po wywołaniu storage.addItem("Droid") zwraca tablicę ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Trzecie wywołanie storage.getItems() po wywołaniu storage.removeItem("Prolonger") zwraca tablicę ["Nanitoids", "Antigravitator", "Droid"]

// Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy, aby sprawdzić poprawność działania.
// W konsoli zostaną wyświetlone wyniki ich pracy.Proszę, nic tam nie zmieniaj.

class Storage {
  #items;

  constructor({ items }) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items = newItem;
    // this.addItem.push.newItem
  }

  removeItem(itemToRemove) {}
}

const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem('Droid');
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem('Prolonger');
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Napisz klasę StringBuilder, która przyjmuje jeden parametr initialValue — dowolny ciąg znaków,
// który jest zapisywany w prywatnej właściwości value obiektu, który jest tworzony.

// Ogłoś następujące metody klasy:

// getValue() — zwraca aktualną wartość prywatnej właściwości value.
// padEnd(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na końcu wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.
// padStart(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.
// padBoth(str) — otrzymuje parametr str (ciąg znaków) i dodaje go na początku i na końcu wartości prywatnej właściwości value obiektu, który wywołuje tę metodę.

// Zadeklarowana klasa StringBuilder
// Właściwość value w klasie StringBuilder zadeklarowana jako prywatna
// W klasie StringBuilder zadeklarowana metoda getValue
// Metoda getValue zwraca wartość prywatnej właściwości value instancji klasy, która ją wywołuje
// W klasie StringBuilder zadeklarowana metoda padEnd
// Metoda padEnd zmienia wartość prywatnej właściwości value instancji klasy, która ją wywołuje
// W klasie StringBuilder zadeklarowana metoda padStart
// Metoda padStart zmienia prywatną właściwość value instancji klasy, która ją wywołuje
// W klasie StringBuilder zadeklarowana metoda padBoth
// Metoda padBoth zmienia wartość prywatnej właściwości value instancji klasy, która ją wywołuje
// W wyniku wywołania new StringBuilder(".") wartość prywatnej zmiennej builder to obiekt
// Obiekt builder nie zawiera publicznej właściwości value
// Pierwsze wywołanie builder.getValue() zaraz po inicjalizacji instancji zwraca ciąg znaków .
// Drugie wywołanie builder.getValue() po wywołaniu builder.padStart("^") zwraca ciąg znaków ^.
// Trzecie wywołanie builder.getValue() po wywołaniu builder.padEnd("^") zwraca ciąg znaków ^.^
//     Czwarte wywołanie builder.getValue() po wywołaniu builder.padBoth("=") zwraca ciąg znaków =^.^=

// Weź kod poniżej z inicjalizacją instancji i wywołaniami metod i wstaw go po deklaracji klasy,
// aby sprawdzić poprawność działania.W konsoli zostaną wyświetlone wyniki ich pracy.Proszę, nic tam nie zmieniaj.

const builder = new StringBuilder('.');
console.log(builder.getValue()); // "."
builder.padStart('^');
console.log(builder.getValue()); // "^."
builder.padEnd('^');
console.log(builder.getValue()); // "^.^"
builder.padBoth('=');
console.log(builder.getValue()); // "=^.^="

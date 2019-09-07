# js
Libraries for apiunit implementation, works on js.apiunit.com

Static files works on js.apiunit.com with nginx server

## Apiunit
rozwiązanie dla programistów szukających prostych rozwiązań
a nie wchodzących co chwilę w nowe technologie a potem wszelkie zmiany i konflikty sprawiają dużo pośrednich problemów

Aby zachować komfort używania wielu technologii na raz i mieć swobodę tworzenia prostego kodu potrzebny jest prosty loader
działający wedle prostych zasad i pozwalający na szybką rozbudowę.

To nie jest zamknięte rozwiązanie, tutaj możliwe jest łatwe wzbogacenie o własne środowiskowe potrzeby.

### Funkcjonalność
możliwe jest ładowanie dynamiczne, poprzez dodawanie przez JS odpowiednich tagów dla:

+ javascript
+ link - style
+ image, file/base64
+ zagnieżdzony html, system pluginów

###  Wnioski
praktyka pokazuje, że najlepsze rozwiązania są proste do zrozumienia i serwisowania
apiunit składa się z kilku elementów:

+ e.js
klasa do parsowania struktury dom, wyszukuje i zwraca jeden lub więcej elementów

+ formToObject.min.js
służy do parsowania formularzy i zwracania danych w formacie json

+ response.js
pobieranie z obiektu XHR danych JSON
zwraca obiekt

+ rest.js

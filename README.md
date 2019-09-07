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

## kaskadowe ładowanie plików
coś więcej niż tylko łaodwanie plików, one są ładowane w dokładnie takiej samej kolejności


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

## PANEL PLESK

https://support.plesk.com/hc/en-us/articles/115001338265-How-to-set-up-CORS-cross-origin-resource-sharing-in-Plesk-for-Linux-

    Access-Control-Allow-Origin: [SCHEME]://[HOST]:[PORT_OPTIONAL]

+ Apache & nginx Settings for [domain]
    
+ APACHE
        Additional directives for HTTP:
        Additional directives for HTTPS:
    
    
            Header set Access-Control-Allow-Origin "*"
    
    
+ NGINX
    
        uncheck: Smart static files processing 
    
        Additional nginx directives:
            



        
          
            location ~ \.(ttf|ttc|otf|eot|woff|woff2|font.css|css|js|html)$ {
                add_header Access-Control-Allow-Origin "*";
            }


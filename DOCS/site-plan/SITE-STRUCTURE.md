# POMI — struktura strony

Nie sklep. Katalog produktów + oferta marki własnej (private label) dla B2B. Brak koszyka, brak cen online — kontakt telefoniczny/mailowy jako ścieżka konwersji.

## Hierarchia URL

```
/                           Strona główna
/o-nas                      O firmie
/produkty                   Katalog produktów (spis kategorii)
/produkty/lopaty             — Łopaty
/produkty/szpadle             — Szpadle
/produkty/widly                — Widły
/produkty/swidry-do-gleby        — Świdry do gleby
/marka-wlasna                Produkcja pod marką własną (private label)
/kontakt                     Kontakt
```

## Dlaczego tak

- **Katalog jako 4 osobne podstrony kategorii**, nie jedna długa strona — każda kategoria to inny typ narzędzia z innym zastosowaniem, warto żeby każda miała własny adres URL do indeksowania i linkowania.
- **`/marka-wlasna` osobno od `/produkty`** — to inny odbiorca (hurtownik/dystrybutor szukający producenta pod własną marką) niż ktoś szukający konkretnego narzędzia. Osobna strona pozwala mówić wprost do tej grupy.
- **Brak `/blog`** — brak sygnałów, że firma planuje regularnie publikować treści; dodanie bloga bez planu na utrzymanie generowałoby martwe podstrony. Do dodania później, jeśli klient zdecyduje się na strategię contentową.
- **Brak cennika online** — badanie (research.md) nie potwierdziło żadnych cen ani jasnego kanału sprzedaży detalicznej; profil firmy to głównie produkcja pod marki klientów. Ceny/wyceny idą przez kontakt, nie przez stronę.

## Dane firmowe użyte na stronie (potwierdzone)

- Nazwa handlowa: POMI Producent narzędzi ogrodowych (Michał Popek)
- Adres: Galicyjska 61, 32-040 Rzeszotary
- Telefon: 603 679 210
- E-mail: biuro@lopaty.eu
- Godziny: pon–pt 07:00–17:00, sob–niedz nieczynne

**Uwaga zostawiona do wiadomości klienta (nie do publikacji):** research.md sygnalizował, że rejestr CEIDG dla tego NIP-u wskazuje inny adres (ul. Różana 27, Świątniki Górne) niż podany w briefie (Galicyjska 61, Rzeszotary). Klient potwierdził adres z Rzeszotar i numer telefonu jako właściwe — ten plan wykorzystuje potwierdzone dane klienta. Jeśli kiedyś pojawi się rozbieżność między stroną a wpisem w CEIDG/Google Business Profile, warto to wyjaśnić przy okazji zakładania profilu firmy w Google.

## Plik → strona

| Plik | Strona |
|---|---|
| `pages/index.md` | `/` |
| `pages/o-nas.md` | `/o-nas` |
| `pages/produkty/index.md` | `/produkty` |
| `pages/produkty/lopaty.md` | `/produkty/lopaty` |
| `pages/produkty/szpadle.md` | `/produkty/szpadle` |
| `pages/produkty/widly.md` | `/produkty/widly` |
| `pages/produkty/swidry-do-gleby.md` | `/produkty/swidry-do-gleby` |
| `pages/marka-wlasna.md` | `/marka-wlasna` |
| `pages/kontakt.md` | `/kontakt` |

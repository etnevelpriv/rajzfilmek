# Rajzfilmek – React alkalmazás fejlesztése

Hozz létre egy Vite-alapú React alkalmazást a saját neveddel és a `rajzfilmek` szó kiegészítéssel!
Például: `gipsz_jakab_rajzfilmek`

## Feladatok

Az `App` komponensen belül hozz létre egy `RajzfilmLista` nevű komponenst!

- Az oldal főcíme `Rajzfilmek` legyen, ugyanez vonatkozik az oldal title-re is!

- Töltsd be a kapott `rajzfilmek.json` fájl tartalmát a tanult módszerrel (`useEffect`, `fetch`, `async/await`, `interface` vagy `type`)!

- Jelenítsd meg az alábbi statisztikai adatokat:
  - Rajzfilmek száma.
  - Legkorábbi megjelenési év.
  - Legkésőbbi megjelenési év.

- A rajzfilmek megjelenítését egy külön `Rajzfilm` nevű komponensre bízd!

- Minden rajzfilmet Bootstrap segítségével kialakított kártyában jeleníts meg!

- A kártyákon jelenítsd meg:
  - A rajzfilm címét. (h2)
  - A készítő stúdió nevét. (p, i)
  - A megjelenés évét. (p, b)

- A megjelenési év alapján feltételes kiíratással jelenítsd meg az alábbi kategóriákat:
  - 2000 előtt megjelent rajzfilm: **„Klasszikus rajzfilm”.**
  - 2000 és 2010 között megjelent rajzfilm: **„Régebbi rajzfilm”.**
  - 2010 után megjelent rajzfilm: **„Modern rajzfilm”.**

- Minden rajzfilm kártyáján legyen egy gomb, amellyel elrejthető vagy újra megjeleníthető a premier dátuma!

- A dátum megjelenítésének kezeléséhez használj `useState` hookot!

## Fontos szabályok

- A feladat megoldásához mesterséges intelligencia használata tilos!
- Kizárólag általános internetes keresés és hivatalos dokumentáció használható.
- A feladatot önállóan kell elkészíteni!

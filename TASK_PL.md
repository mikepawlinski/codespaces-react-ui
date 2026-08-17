# Zadanie w parze — Zbuduj komponent karty „Speaker"

**Czas:** ~45 min, w parze. Ty prowadzisz; my rozmawiamy na bieżąco.
**Stack:** React + TypeScript, czysty CSS (bez bibliotek komponentów — chcemy zobaczyć Twoje własne instynkty co do układu i stylowania). Korzystaj ze zmiennych CSS, które Ci dajemy.
**Dane:** dostarczane przez mały, lokalny hook **TanStack Query**, `useSpeakers()` (w `src/hooks/useSpeakers.ts`), który pobiera `public/speakers.json` — bez prawdziwego backendu. Skonsumuj hooka i obsłuż jego stany `isLoading` / `isError`. Hook ma sztuczne opóźnienie, a aplikacja ma checkbox „Simulate error" (podpięty pod query key hooka), żebyś mógł/mogła wywołać stany Loading i Error. Kształt danych jest otypowany jako `Speaker` w `src/types.ts`.

To normalny kawałek pracy nad UI: projektant przekazał Ci specyfikację, a Ty zamieniasz ją w prawdziwy, solidny komponent. Myśl na głos, pytaj o wszystko, traktuj nas jak członków zespołu, z którymi programujesz w parze.

**Korzystaj z AI tak, jak zwykle** — Copilot, Cursor, Claude, ChatGPT, cokolwiek masz w swoim workflow. Nie sprawdzamy, czy potrafisz pisać Reacta z pamięci; sprawdzamy Twój osąd.

## Co zbudować

**Komponent karty**, który wyświetla prelegenta (z `public/speakers.json`), wraz ze stanami, których wymaga prawdziwa karta. Wyrenderuj kilka z nich w prostej siatce.

### Karta powinna pokazywać

- Awatar (inicjały w kolorowym kółku, wyprowadzone z imienia i nazwiska), imię i nazwisko, stanowisko
- Krótką etykietę ścieżki (track, np. „Engineering", „Business", „Marketing")
- Kilka informacji dodatkowych (temat prelekcji, słowa kluczowe)
- Główny przycisk akcji („View profile") i akcję drugorzędną

### Stany, które chcemy zobaczyć (to jest właściwy test)

- **Domyślny / spoczynkowy**
- **Hover** oraz **focus z klawiatury** (karta jest interaktywna)
- **Loading** (zanim dane będą „gotowe" — szkielet/skeleton lub podobnie)
- **Empty** (co, gdy nie ma żadnych prelegentów?)
- **Error / brakujące dane** (np. prelegent z brakującym polem, jak jeszcze nieustalony temat)

Wyświetlenie wszystkich kart ze „szczęśliwej ścieżki" to łatwe 60%. Powyższe stany to miejsce, gdzie kryje się właściwa praca — nie pomijaj ich, żeby tylko wyglądało na skończone.

### Design system

To nasz design system, już gotowy w **`src/index.css`** (prymitywy + tokeny semantyczne: kolory, odstępy, zaokrąglenia, typografia, cienie). **Korzystaj z tych tokenów zamiast wpisywać wartości na sztywno** — poprawne ich użycie jest częścią oceny. Otwórz `src/index.css`, żeby zobaczyć pełną listę, albo wejdź w zakładkę **Design System** w uruchomionej aplikacji, żeby zobaczyć je wyrenderowane.

## Specyfikacja projektowa (design spec)

Nasz projektant przekazał następujące wymagania. **Zbuduj zgodnie z tą specyfikacją** — ale potraktuj ją tak, jak potraktował(a)byś każdy prawdziwy handoff. Będziemy w pobliżu (w roli projektanta), jeśli chcesz coś omówić.

1. Tło karty: użyj `--card`. Dla prelegentów „featured" (wyróżnionych) użyj nowego firmowego odcienia `#e8f0ff`.
2. Track pokazany jako mała pigułka (pill), w neutralnych odcieniach szarości z palety (np. tło `--muted` z tekstem `--muted-foreground`) — takie samo neutralne potraktowanie dla każdego tracku (Engineering / Business / Marketing).
3. Imię i nazwisko w `--text-lg`, stanowisko w `--text-sm` `--muted-foreground`.
4. Wiersz z metadanymi używa `--subtle-foreground`.
5. Główny przycisk: tło `--primary`, biały tekst. Drugorzędny: link tekstowy w kolorze `--primary`.
6. Rogi karty `--radius-lg`. Awatar to idealne koło pokazujące inicjały osoby w bieli (`--primary-foreground`) na wypełnieniu `--accent`.
7. Na hover cała karta się unosi (`--shadow-md`), a obramowanie zmienia się na `--primary`.
8. Wewnątrz karty użyj odstępu 10px między awatarem a blokiem z imieniem/stanowiskiem.

## Zasady

- **Pytaj i mów, co myślisz.** Jeśli jakaś część specyfikacji wydaje się nie tak, błędna albo problematyczna, powiedz to — sposób, w jaki radzisz sobie z handoffem, jest częścią tego, na co patrzymy.
- **AI jest dozwolone i zachęcamy do jego użycia** — ale przeglądaj to, co wygeneruje. Bardziej zależy nam na tym, co wyłapiesz i poprawisz, niż na tym, co wygenerujesz.
- Bez testów, bez konfiguracji builda. Skup się na komponencie i jego stanach.
- Utknąłeś/utknęłaś? Powiedz gdzie. Milczenie jest gorsze niż „nie jestem pewien/pewna".

## Dane

Rekordy prelegentów znajdują się w **`public/speakers.json`**, otypowane jako `Speaker` w **`src/types.ts`** — otwórz jeden z nich, żeby poznać dokładny kształt i pełną listę. Nie importujesz pliku bezpośrednio; hook `useSpeakers()` pobiera go za Ciebie.

_(Uwaga: nie ma obrazków awatarów — wyprowadź awatar z inicjałów imienia i nazwiska prelegenta. `topic` może też być pusty — obsłuż to elegancko.)_

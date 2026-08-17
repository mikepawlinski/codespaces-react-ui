# Zadanie w parze — Zbuduj komponent karty „Speaker"

**Czas:** ~45 min, w parze. Ty prowadzisz; rozmawiamy na bieżąco.
**Stack:** React + TypeScript, czysty CSS (bez bibliotek komponentów — chcemy zobaczyć Twoje własne instynkty co do layoutu i stylowania). Korzystaj ze zmiennych CSS, które Ci dajemy.
**Dane:** dostarcza je mały, lokalny hook **TanStack Query**, `useSpeakers()` (w `src/hooks/useSpeakers.ts`), który pobiera `public/speakers.json` — bez prawdziwego backendu. Użyj hooka i obsłuż jego stany `isLoading` / `isError`. Hook ma sztuczne opóźnienie, a aplikacja ma checkbox „Simulate error" (podpięty pod query key hooka), żebyś mógł/mogła wywołać stany Loading i Error. Dane są otypowane jako `Speaker` w `src/types.ts`.

To normalny kawałek pracy nad UI: designer przekazał Ci specyfikację, a Ty zamieniasz ją w prawdziwy, solidny komponent. Myśl na głos, pytaj o wszystko, traktuj nas jak członków zespołu, z którymi programujesz w parze.

**Korzystaj z AI tak, jak zwykle** — Copilot, Cursor, Claude, ChatGPT, cokolwiek masz w swoim workflow. Nie sprawdzamy, czy umiesz pisać Reacta z pamięci; sprawdzamy Twój osąd.

## Co zbudować

**Komponent karty**, który wyświetla prelegenta (z `public/speakers.json`), wraz ze stanami, których wymaga prawdziwa karta. Wyrenderuj kilka takich kart w prostym gridzie.

### Karta powinna pokazywać

- Awatar (inicjały w kolorowym kółku, wygenerowane z imienia i nazwiska), imię i nazwisko, stanowisko
- Krótką etykietę tracku (np. „Engineering", „Business", „Marketing")
- Kilka dodatkowych informacji (temat prelekcji, słowa kluczowe)
- Główny przycisk akcji („View profile") i akcję drugorzędną

### Stany, które chcemy zobaczyć (to jest właściwy test)

- **Domyślny / spoczynkowy**
- **Hover** oraz **focus z klawiatury** (karta jest interaktywna)
- **Loading** (zanim dane się załadują — skeleton lub coś w tym stylu)
- **Empty** (co, gdy nie ma żadnych prelegentów?)
- **Error / brakujące dane** (np. prelegent z brakującym polem, typu jeszcze nieustalony temat)

### Design system

To nasz design system, już gotowy w **`src/index.css`** (prymitywy + tokeny semantyczne: kolory, odstępy, zaokrąglenia, typografia, cienie). **Korzystaj z tych tokenów zamiast hardkodować wartości** — poprawne ich użycie jest częścią oceny. Zajrzyj do `src/index.css`, żeby zobaczyć pełną listę, albo wejdź w zakładkę **Design System** w uruchomionej aplikacji, żeby zobaczyć je wyrenderowane.

## Specyfikacja projektowa (design spec)

Nasz designer przekazał następujące wymagania. **Zbuduj zgodnie z tą specyfikacją** — ale potraktuj ją tak, jak potraktował(a)byś każdy prawdziwy handoff. Będziemy w pobliżu (w roli designera), jeśli chcesz coś omówić.

1. Tło karty: użyj `--card`. Dla prelegentów „featured" (wyróżnionych) użyj nowego firmowego odcienia `#e8f0ff`.
2. Track jako mały pill, w neutralnych odcieniach szarości z palety (np. tło `--muted` z tekstem `--muted-foreground`) — tak samo neutralnie dla każdego tracku (Engineering / Business / Marketing).
3. Imię i nazwisko w `--text-lg`, stanowisko w `--text-sm` `--muted-foreground`.
4. Wiersz z metadanymi na `--subtle-foreground`.
5. Główny przycisk: tło `--primary`, biały tekst. Drugorzędny: tekstowy link w kolorze `--primary`.
6. Rogi karty `--radius-lg`. Awatar to idealne koło z inicjałami osoby w bieli (`--primary-foreground`) na wypełnieniu `--accent`.
7. Na hover cała karta się unosi (`--shadow-md`), a border zmienia się na `--primary`.
8. Wewnątrz karty daj 10px odstępu między awatarem a blokiem z imieniem/stanowiskiem.

## Zasady

- **Pytaj i mów, co myślisz.** Jeśli jakaś część specyfikacji wydaje się nie tak, błędna albo problematyczna, powiedz to — sposób, w jaki radzisz sobie z handoffem, jest częścią tego, na co patrzymy.
- **AI jest dozwolone**
- Bez testów, bez konfiguracji builda. Skup się na komponencie i jego stanach.
- Zaciąłeś/zacięłaś się? Powiedz gdzie. Milczenie jest gorsze niż „nie jestem pewien/pewna".

## Dane

Rekordy prelegentów siedzą w **`public/speakers.json`**, otypowane jako `Speaker` w **`src/types.ts`** — zajrzyj do jednego z nich, żeby poznać dokładny kształt danych i pełną listę pól. Nie importujesz pliku bezpośrednio; hook `useSpeakers()` pobiera go za Ciebie.

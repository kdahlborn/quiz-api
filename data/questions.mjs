const questions = [
    // =========================
    // history – easy
    // =========================
    {
        id: 1,
        category: 'history',
        difficulty: 'easy',
        question: 'Vem var Sveriges första kung av huset Bernadotte?',
        options: {
            a: 'Karl XIV Johan',
            b: 'Gustav III',
            c: 'Karl XII',
            d: 'Oscar I',
        },
        correctAnswer: 'a',
    },
    {
        id: 2,
        category: 'history',
        difficulty: 'easy',
        question: 'Vilket år började andra världskriget?',
        options: {
            a: '1935',
            b: '1939',
            c: '1941',
            d: '1945',
        },
        correctAnswer: 'b',
    },
    {
        id: 3,
        category: 'history',
        difficulty: 'easy',
        question: 'Vilket land byggde pyramiderna i Giza?',
        options: {
            a: 'Grekland',
            b: 'Romarriket',
            c: 'Egypten',
            d: 'Persien',
        },
        correctAnswer: 'c',
    },
    {
        id: 4,
        category: 'history',
        difficulty: 'easy',
        question: 'Vem var USA:s första president?',
        options: {
            a: 'Abraham Lincoln',
            b: 'Thomas Jefferson',
            c: 'George Washington',
            d: 'John Adams',
        },
        correctAnswer: 'c',
    },
    {
        id: 5,
        category: 'history',
        difficulty: 'easy',
        question: 'Vilken svensk kung dog vid Fredrikstens fästning 1718?',
        options: {
            a: 'Karl XI',
            b: 'Karl XII',
            c: 'Gustav II Adolf',
            d: 'Karl X Gustav',
        },
        correctAnswer: 'b',
    },

    // history – medium
    {
        id: 6,
        category: 'history',
        difficulty: 'medium',
        question: 'Vilket år upplöstes unionen mellan Sverige och Norge?',
        options: {
            a: '1895',
            b: '1900',
            c: '1905',
            d: '1910',
        },
        correctAnswer: 'c',
    },
    {
        id: 7,
        category: 'history',
        difficulty: 'medium',
        question: 'Vilken svensk kung införde enväldet 1680?',
        options: {
            a: 'Karl XI',
            b: 'Karl XII',
            c: 'Gustav II Adolf',
            d: 'Karl X Gustav',
        },
        correctAnswer: 'a',
    },
    {
        id: 8,
        category: 'history',
        difficulty: 'medium',
        question:
            'Vilket slag år 1709 blev ett avgörande nederlag för Karl XII?',
        options: {
            a: 'Slaget vid Lützen',
            b: 'Slaget vid Poltava',
            c: 'Slaget vid Narva',
            d: 'Slaget vid Breitenfeld',
        },
        correctAnswer: 'b',
    },
    {
        id: 9,
        category: 'history',
        difficulty: 'medium',
        question:
            'Vem ledde Sovjetunionen under större delen av andra världskriget?',
        options: {
            a: 'Vladimir Lenin',
            b: 'Josef Stalin',
            c: 'Nikita Chrusjtjov',
            d: 'Michail Gorbatjov',
        },
        correctAnswer: 'b',
    },
    {
        id: 10,
        category: 'history',
        difficulty: 'medium',
        question: 'Vilket år föll Berlinmuren?',
        options: {
            a: '1985',
            b: '1987',
            c: '1989',
            d: '1991',
        },
        correctAnswer: 'c',
    },

    // history – hard
    {
        id: 11,
        category: 'history',
        difficulty: 'hard',
        question: 'Vilket år ägde Stockholms blodbad rum?',
        options: {
            a: '1497',
            b: '1520',
            c: '1523',
            d: '1544',
        },
        correctAnswer: 'b',
    },
    {
        id: 12,
        category: 'history',
        difficulty: 'hard',
        question: 'Vilken fred avslutade det stora nordiska kriget?',
        options: {
            a: 'Freden i Roskilde',
            b: 'Freden i Brömsebro',
            c: 'Freden i Nystad',
            d: 'Freden i Kiel',
        },
        correctAnswer: 'c',
    },
    {
        id: 13,
        category: 'history',
        difficulty: 'hard',
        question:
            'Vem var Sveriges statsminister när landet gick med i Nationernas förbund?',
        options: {
            a: 'Hjalmar Branting',
            b: 'Per Albin Hansson',
            c: 'Arvid Lindman',
            d: 'Carl Gustaf Ekman',
        },
        correctAnswer: 'a',
    },
    {
        id: 14,
        category: 'history',
        difficulty: 'hard',
        question:
            'Vilken romersk kejsare gjorde kristendomen tillåten i Romarriket genom Milanoediktet?',
        options: {
            a: 'Nero',
            b: 'Augustus',
            c: 'Konstantin den store',
            d: 'Trajanus',
        },
        correctAnswer: 'c',
    },
    {
        id: 15,
        category: 'history',
        difficulty: 'hard',
        question: 'Vilket år undertecknades Magna Carta?',
        options: {
            a: '1066',
            b: '1215',
            c: '1315',
            d: '1415',
        },
        correctAnswer: 'b',
    },

    // =========================
    // geography – easy
    // =========================
    {
        id: 16,
        category: 'geography',
        difficulty: 'easy',
        question: 'Vilket land är störst till ytan?',
        options: {
            a: 'Kanada',
            b: 'Kina',
            c: 'USA',
            d: 'Ryssland',
        },
        correctAnswer: 'd',
    },
    {
        id: 17,
        category: 'geography',
        difficulty: 'easy',
        question: 'Vad heter Sveriges huvudstad?',
        options: {
            a: 'Göteborg',
            b: 'Stockholm',
            c: 'Malmö',
            d: 'Uppsala',
        },
        correctAnswer: 'b',
    },
    {
        id: 18,
        category: 'geography',
        difficulty: 'easy',
        question:
            'Vilken är världens längsta flod enligt vanlig geografisk indelning?',
        options: {
            a: 'Nilen',
            b: 'Amazonfloden',
            c: 'Mississippi',
            d: 'Yangtze',
        },
        correctAnswer: 'a',
    },
    {
        id: 19,
        category: 'geography',
        difficulty: 'easy',
        question: 'På vilken kontinent ligger Brasilien?',
        options: {
            a: 'Afrika',
            b: 'Asien',
            c: 'Sydamerika',
            d: 'Nordamerika',
        },
        correctAnswer: 'c',
    },
    {
        id: 20,
        category: 'geography',
        difficulty: 'easy',
        question: 'Vilket hav ligger mellan Sverige och Finland?',
        options: {
            a: 'Nordsjön',
            b: 'Östersjön',
            c: 'Svarta havet',
            d: 'Medelhavet',
        },
        correctAnswer: 'b',
    },

    // geography – medium
    {
        id: 21,
        category: 'geography',
        difficulty: 'medium',
        question: 'Vilket land har flest öar i världen?',
        options: {
            a: 'Indonesien',
            b: 'Filippinerna',
            c: 'Sverige',
            d: 'Japan',
        },
        correctAnswer: 'c',
    },
    {
        id: 22,
        category: 'geography',
        difficulty: 'medium',
        question: 'Vilken är Europas längsta flod?',
        options: {
            a: 'Donau',
            b: 'Volga',
            c: 'Rhen',
            d: 'Dnepr',
        },
        correctAnswer: 'b',
    },
    {
        id: 23,
        category: 'geography',
        difficulty: 'medium',
        question: 'Vilket land ligger mellan Spanien och Frankrike?',
        options: {
            a: 'Portugal',
            b: 'Andorra',
            c: 'Monaco',
            d: 'Luxemburg',
        },
        correctAnswer: 'b',
    },
    {
        id: 24,
        category: 'geography',
        difficulty: 'medium',
        question: 'Vilken är Afrikas största sjö till ytan?',
        options: {
            a: 'Tanganjikasjön',
            b: 'Malawisjön',
            c: 'Victoriasjön',
            d: 'Turkanasjön',
        },
        correctAnswer: 'c',
    },
    {
        id: 25,
        category: 'geography',
        difficulty: 'medium',
        question: 'Vilken huvudstad ligger vid floden Donau?',
        options: {
            a: 'Budapest',
            b: 'Madrid',
            c: 'Oslo',
            d: 'Lissabon',
        },
        correctAnswer: 'a',
    },

    // geography – hard
    {
        id: 26,
        category: 'geography',
        difficulty: 'hard',
        question:
            'Vilket land har kust mot både Kaspiska havet och Persiska viken?',
        options: {
            a: 'Iran',
            b: 'Irak',
            c: 'Turkmenistan',
            d: 'Azerbajdzjan',
        },
        correctAnswer: 'a',
    },
    {
        id: 27,
        category: 'geography',
        difficulty: 'hard',
        question: 'Vilket är världens högsta berg utanför Asien?',
        options: {
            a: 'Aconcagua',
            b: 'Kilimanjaro',
            c: 'Denali',
            d: 'Elbrus',
        },
        correctAnswer: 'a',
    },
    {
        id: 28,
        category: 'geography',
        difficulty: 'hard',
        question: 'Vilket land är helt omgivet av Sydafrika?',
        options: {
            a: 'Eswatini',
            b: 'Lesotho',
            c: 'Botswana',
            d: 'Namibia',
        },
        correctAnswer: 'b',
    },
    {
        id: 29,
        category: 'geography',
        difficulty: 'hard',
        question:
            'Vilken ö är världens största ö om Australien räknas som en kontinent?',
        options: {
            a: 'Borneo',
            b: 'Madagaskar',
            c: 'Grönland',
            d: 'Nya Guinea',
        },
        correctAnswer: 'c',
    },
    {
        id: 30,
        category: 'geography',
        difficulty: 'hard',
        question:
            'Vilket sund skiljer Europa från Afrika vid Spaniens sydspets?',
        options: {
            a: 'Bosporen',
            b: 'Gibraltarsund',
            c: 'Dardanellerna',
            d: 'Öresund',
        },
        correctAnswer: 'b',
    },

    // =========================
    // music – easy
    // =========================
    {
        id: 31,
        category: 'music',
        difficulty: 'easy',
        question: 'Vilket instrument har vanligtvis 88 tangenter?',
        options: {
            a: 'Gitarr',
            b: 'Piano',
            c: 'Fiol',
            d: 'Trumpet',
        },
        correctAnswer: 'b',
    },
    {
        id: 32,
        category: 'music',
        difficulty: 'easy',
        question:
            'Vilket land vann Eurovision Song Contest 1974 med gruppen ABBA?',
        options: {
            a: 'Sverige',
            b: 'Storbritannien',
            c: 'Norge',
            d: 'Danmark',
        },
        correctAnswer: 'a',
    },
    {
        id: 33,
        category: 'music',
        difficulty: 'easy',
        question: 'Vilken grupp framförde låten Dancing Queen?',
        options: {
            a: 'Queen',
            b: 'ABBA',
            c: 'Roxette',
            d: 'Bee Gees',
        },
        correctAnswer: 'b',
    },
    {
        id: 34,
        category: 'music',
        difficulty: 'easy',
        question: 'Vilket instrument spelar man med en stråke?',
        options: {
            a: 'Fiol',
            b: 'Piano',
            c: 'Trumpet',
            d: 'Flöjt',
        },
        correctAnswer: 'a',
    },
    {
        id: 35,
        category: 'music',
        difficulty: 'easy',
        question: 'Vilken svensk artist sjunger låten Avicii?',
        options: {
            a: 'Avicii var en svensk DJ och producent',
            b: 'Avicii var en svensk rockgrupp',
            c: 'Avicii var en svensk sångare',
            d: 'Avicii var en svensk rappare',
        },
        correctAnswer: 'a',
    },

    // music – medium
    {
        id: 36,
        category: 'music',
        difficulty: 'medium',
        question: 'Vem skrev den nionde symfonin, ofta kallad Ödessymfonin?',
        options: {
            a: 'Wolfgang Amadeus Mozart',
            b: 'Ludwig van Beethoven',
            c: 'Johann Sebastian Bach',
            d: 'Frédéric Chopin',
        },
        correctAnswer: 'b',
    },
    {
        id: 37,
        category: 'music',
        difficulty: 'medium',
        question: 'Vilket årtionde slog The Beatles igenom internationellt?',
        options: {
            a: '1940-talet',
            b: '1950-talet',
            c: '1960-talet',
            d: '1970-talet',
        },
        correctAnswer: 'c',
    },
    {
        id: 38,
        category: 'music',
        difficulty: 'medium',
        question: 'Vilket instrument förknippas starkast med Miles Davis?',
        options: {
            a: 'Trumpet',
            b: 'Saxofon',
            c: 'Piano',
            d: 'Kontrabas',
        },
        correctAnswer: 'a',
    },
    {
        id: 39,
        category: 'music',
        difficulty: 'medium',
        question:
            'Vilken svensk grupp hade en internationell hit med The Sign?',
        options: {
            a: 'Roxette',
            b: 'Ace of Base',
            c: 'Europe',
            d: 'The Cardigans',
        },
        correctAnswer: 'b',
    },
    {
        id: 40,
        category: 'music',
        difficulty: 'medium',
        question: 'Vilken artist gav ut albumet Thriller?',
        options: {
            a: 'Prince',
            b: 'Michael Jackson',
            c: 'David Bowie',
            d: 'Stevie Wonder',
        },
        correctAnswer: 'b',
    },

    // music – hard
    {
        id: 41,
        category: 'music',
        difficulty: 'hard',
        question: 'Vilken kompositör skrev operan Trollflöjten?',
        options: {
            a: 'Giuseppe Verdi',
            b: 'Richard Wagner',
            c: 'Wolfgang Amadeus Mozart',
            d: 'Giacomo Puccini',
        },
        correctAnswer: 'c',
    },
    {
        id: 42,
        category: 'music',
        difficulty: 'hard',
        question:
            'Vilket år släpptes Pink Floyds album The Dark Side of the Moon?',
        options: {
            a: '1971',
            b: '1973',
            c: '1975',
            d: '1977',
        },
        correctAnswer: 'b',
    },
    {
        id: 43,
        category: 'music',
        difficulty: 'hard',
        question:
            'Vilken jazzmusiker spelade saxofon på albumet A Love Supreme?',
        options: {
            a: 'John Coltrane',
            b: 'Charlie Parker',
            c: 'Miles Davis',
            d: 'Thelonious Monk',
        },
        correctAnswer: 'a',
    },
    {
        id: 44,
        category: 'music',
        difficulty: 'hard',
        question: 'Vilken svensk grupp släppte albumet The Visitors 1981?',
        options: {
            a: 'Roxette',
            b: 'Europe',
            c: 'ABBA',
            d: 'Ace of Base',
        },
        correctAnswer: 'c',
    },
    {
        id: 45,
        category: 'music',
        difficulty: 'hard',
        question: 'Vad kallas en komposition för nio musiker?',
        options: {
            a: 'Oktett',
            b: 'Nonett',
            c: 'Decett',
            d: 'Septett',
        },
        correctAnswer: 'b',
    },

    // =========================
    // movies – easy
    // =========================
    {
        id: 46,
        category: 'movies',
        difficulty: 'easy',
        question: 'Vilken film handlar om Jack och Rose på fartyget Titanic?',
        options: {
            a: 'Titanic',
            b: 'Avatar',
            c: 'Pearl Harbor',
            d: 'The Notebook',
        },
        correctAnswer: 'a',
    },
    {
        id: 47,
        category: 'movies',
        difficulty: 'easy',
        question: 'Vem spelar huvudrollen som Forrest Gump?',
        options: {
            a: 'Tom Hanks',
            b: 'Tom Cruise',
            c: 'Robin Williams',
            d: 'Matt Damon',
        },
        correctAnswer: 'a',
    },
    {
        id: 48,
        category: 'movies',
        difficulty: 'easy',
        question: 'Vilken filmserie handlar om trollkarlen Harry Potter?',
        options: {
            a: 'Sagan om ringen',
            b: 'Harry Potter',
            c: 'Narnia',
            d: 'Hunger Games',
        },
        correctAnswer: 'b',
    },
    {
        id: 49,
        category: 'movies',
        difficulty: 'easy',
        question: 'Vilken animerad film handlar om lejonet Simba?',
        options: {
            a: 'Lejonkungen',
            b: 'Bambi',
            c: 'Djungelboken',
            d: 'Aladdin',
        },
        correctAnswer: 'a',
    },
    {
        id: 50,
        category: 'movies',
        difficulty: 'easy',
        question: 'Vem spelar Iron Man i Marvels filmer?',
        options: {
            a: 'Chris Evans',
            b: 'Robert Downey Jr.',
            c: 'Chris Hemsworth',
            d: 'Mark Ruffalo',
        },
        correctAnswer: 'b',
    },

    // movies – medium
    {
        id: 51,
        category: 'movies',
        difficulty: 'medium',
        question: 'Vem regisserade Jurassic Park?',
        options: {
            a: 'James Cameron',
            b: 'Steven Spielberg',
            c: 'George Lucas',
            d: 'Christopher Nolan',
        },
        correctAnswer: 'b',
    },
    {
        id: 52,
        category: 'movies',
        difficulty: 'medium',
        question: 'Vilken film vann Oscar för bästa film 1995?',
        options: {
            a: 'Pulp Fiction',
            b: 'Forrest Gump',
            c: 'The Shawshank Redemption',
            d: 'Apollo 13',
        },
        correctAnswer: 'b',
    },
    {
        id: 53,
        category: 'movies',
        difficulty: 'medium',
        question:
            'Vilken skådespelare spelade huvudrollen i Gladiator från 2000?',
        options: {
            a: 'Russell Crowe',
            b: 'Joaquin Phoenix',
            c: 'Brad Pitt',
            d: 'Eric Bana',
        },
        correctAnswer: 'a',
    },
    {
        id: 54,
        category: 'movies',
        difficulty: 'medium',
        question: 'Vilken film från 1999 handlar om en hacker vid namn Neo?',
        options: {
            a: 'Fight Club',
            b: 'The Matrix',
            c: 'Minority Report',
            d: 'Dark City',
        },
        correctAnswer: 'b',
    },
    {
        id: 55,
        category: 'movies',
        difficulty: 'medium',
        question: 'Vilken regissör skapade Sagan om ringen-trilogin?',
        options: {
            a: 'Peter Jackson',
            b: 'Ridley Scott',
            c: 'James Cameron',
            d: 'Tim Burton',
        },
        correctAnswer: 'a',
    },

    // movies – hard
    {
        id: 56,
        category: 'movies',
        difficulty: 'hard',
        question: 'Vilken film vann den första Oscarstatyetten för bästa film?',
        options: {
            a: 'Ben-Hur',
            b: 'Wings',
            c: 'Sunrise',
            d: 'The Jazz Singer',
        },
        correctAnswer: 'b',
    },
    {
        id: 57,
        category: 'movies',
        difficulty: 'hard',
        question: 'Vem regisserade filmen Pulp Fiction?',
        options: {
            a: 'Martin Scorsese',
            b: 'Quentin Tarantino',
            c: 'Francis Ford Coppola',
            d: 'David Fincher',
        },
        correctAnswer: 'b',
    },
    {
        id: 58,
        category: 'movies',
        difficulty: 'hard',
        question:
            'Vilken skådespelare spelar huvudrollen som Travis Bickle i Taxi Driver?',
        options: {
            a: 'Al Pacino',
            b: 'Robert De Niro',
            c: 'Jack Nicholson',
            d: 'Dustin Hoffman',
        },
        correctAnswer: 'b',
    },
    {
        id: 59,
        category: 'movies',
        difficulty: 'hard',
        question:
            'Vilken film från 1968 regisserades av Stanley Kubrick och handlar om en mystisk monolit?',
        options: {
            a: 'A Clockwork Orange',
            b: '2001: A Space Odyssey',
            c: 'Solaris',
            d: 'The Shining',
        },
        correctAnswer: 'b',
    },
    {
        id: 60,
        category: 'movies',
        difficulty: 'hard',
        question:
            'Vilken skådespelare spelade Hannibal Lecter i När lammen tystnar?',
        options: {
            a: 'Anthony Hopkins',
            b: 'Gary Oldman',
            c: 'Jack Nicholson',
            d: 'Jeremy Irons',
        },
        correctAnswer: 'a',
    },

    // =========================
    // animals-nature – easy
    // =========================
    {
        id: 61,
        category: 'animals-nature',
        difficulty: 'easy',
        question: 'Vilket är världens största landlevande djur?',
        options: {
            a: 'Giraff',
            b: 'Afrikansk elefant',
            c: 'Flodhäst',
            d: 'Noshörning',
        },
        correctAnswer: 'b',
    },
    {
        id: 62,
        category: 'animals-nature',
        difficulty: 'easy',
        question: 'Vilket djur brukar kallas människans bästa vän?',
        options: {
            a: 'Katt',
            b: 'Hund',
            c: 'Häst',
            d: 'Kanin',
        },
        correctAnswer: 'b',
    },
    {
        id: 63,
        category: 'animals-nature',
        difficulty: 'easy',
        question: 'Vilket djur producerar honung?',
        options: {
            a: 'Geting',
            b: 'Humla',
            c: 'Honungsbi',
            d: 'Fjäril',
        },
        correctAnswer: 'c',
    },
    {
        id: 64,
        category: 'animals-nature',
        difficulty: 'easy',
        question: 'Vilket av dessa djur är ett däggdjur?',
        options: {
            a: 'Haj',
            b: 'Delfin',
            c: 'Krokodil',
            d: 'Örn',
        },
        correctAnswer: 'b',
    },
    {
        id: 65,
        category: 'animals-nature',
        difficulty: 'easy',
        question: 'Vilken gas behöver människor för att kunna andas?',
        options: {
            a: 'Kväve',
            b: 'Syre',
            c: 'Koldioxid',
            d: 'Helium',
        },
        correctAnswer: 'b',
    },

    // animals-nature – medium
    {
        id: 66,
        category: 'animals-nature',
        difficulty: 'medium',
        question: 'Vilket är världens största nu levande djur?',
        options: {
            a: 'Blåval',
            b: 'Späckhuggare',
            c: 'Elefant',
            d: 'Valhaj',
        },
        correctAnswer: 'a',
    },
    {
        id: 67,
        category: 'animals-nature',
        difficulty: 'medium',
        question:
            'Vilket organ använder fisken främst för att andas under vatten?',
        options: {
            a: 'Lungorna',
            b: 'Gälarna',
            c: 'Huden',
            d: 'Fenorna',
        },
        correctAnswer: 'b',
    },
    {
        id: 68,
        category: 'animals-nature',
        difficulty: 'medium',
        question: 'Vilket ämne tar växter upp från luften under fotosyntesen?',
        options: {
            a: 'Syre',
            b: 'Kväve',
            c: 'Koldioxid',
            d: 'Väte',
        },
        correctAnswer: 'c',
    },
    {
        id: 69,
        category: 'animals-nature',
        difficulty: 'medium',
        question:
            'Vilket djur är känt för att kunna ändra färg och röra sina ögon oberoende av varandra?',
        options: {
            a: 'Kameleont',
            b: 'Leguan',
            c: 'Gecko',
            d: 'Sköldpadda',
        },
        correctAnswer: 'a',
    },
    {
        id: 70,
        category: 'animals-nature',
        difficulty: 'medium',
        question: 'Vad kallas processen där en larv utvecklas till en fjäril?',
        options: {
            a: 'Fotosyntes',
            b: 'Metamorfos',
            c: 'Pollinering',
            d: 'Förökning',
        },
        correctAnswer: 'b',
    },

    // animals-nature – hard
    {
        id: 71,
        category: 'animals-nature',
        difficulty: 'hard',
        question: 'Vilket är det enda däggdjur som kan flyga aktivt?',
        options: {
            a: 'Flygekorren',
            b: 'Fladdermusen',
            c: 'Flyghunden',
            d: 'Kuskus',
        },
        correctAnswer: 'b',
    },
    {
        id: 72,
        category: 'animals-nature',
        difficulty: 'hard',
        question: 'Vilken del av cellen innehåller huvuddelen av cellens DNA?',
        options: {
            a: 'Ribosomen',
            b: 'Cellkärnan',
            c: 'Cellmembranet',
            d: 'Golgiapparaten',
        },
        correctAnswer: 'b',
    },
    {
        id: 73,
        category: 'animals-nature',
        difficulty: 'hard',
        question: 'Vilken grupp tillhör spindlar?',
        options: {
            a: 'Insekter',
            b: 'Kräftdjur',
            c: 'Spindeldjur',
            d: 'Mångfotingar',
        },
        correctAnswer: 'c',
    },
    {
        id: 74,
        category: 'animals-nature',
        difficulty: 'hard',
        question: 'Vilken typ av blodkärl leder blodet från hjärtat?',
        options: {
            a: 'Vener',
            b: 'Artärer',
            c: 'Kapillärer',
            d: 'Lymfkärl',
        },
        correctAnswer: 'b',
    },
    {
        id: 75,
        category: 'animals-nature',
        difficulty: 'hard',
        question:
            'Vilken process omvandlar ljusenergi till kemisk energi i växter?',
        options: {
            a: 'Cellandning',
            b: 'Fotosyntes',
            c: 'Fermentation',
            d: 'Osmos',
        },
        correctAnswer: 'b',
    },
];

export default questions;

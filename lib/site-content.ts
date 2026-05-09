import {
    Calculator,
    ClipboardCheck,
    Droplets,
    FileText,
    Hammer,
    Home,
    Ruler,
    ShieldCheck,
    Snowflake,
    ThermometerSun,
    Wrench,
} from "lucide-react";

export const serviceItems = [
    {
        title: "Jumtu montāža un remonts",
        description:
            "Jumta seguma montāža, remonts un apkope privātmājām, daudzdzīvokļu namiem un komercobjektiem.",
        details:
            "Strādājam ar metāldakstiņu, valcprofilu, trapecveida loksnēm, skārdu, māla un betona dakstiņiem, bezazbesta šīferi, šindeļiem un kausējamiem bitumena segumiem.",
        icon: Hammer,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        title: "Tāmēšana",
        description:
            "Detalizēts darbu, materiālu, transporta un papildmezglu aprēķins pirms līguma slēgšanas.",
        details:
            "Tāmē iekļaujam segumu, stiprinājumus, noteksistēmas, drošības elementus, apdares detaļas un iespējamos riskus, lai budžets būtu saprotams pirms darbu sākuma.",
        icon: Calculator,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/311005664_521400449994359_8064247804212030749_n-1-600x800.jpg",
    },
    {
        title: "Jumta risinājuma plānošana",
        description:
            "Individuāli jumta risinājumi, mezglu plānošana un materiālu izvēle atbilstoši ēkai.",
        details:
            "Palīdzam izvērtēt slīpumu, konstrukciju nestspēju, ventilāciju, siltinājuma slāņus un notekūdens novadīšanu, lai jumts kalpotu ilgi.",
        icon: Ruler,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/310536736_521400699994334_5860770553268751557_n-1-1067x800.jpg",
    },
    {
        title: "Jumtu inspekcija",
        description:
            "Esoša jumta stāvokļa novērtēšana ar ieteikumiem remontam, renovācijai vai siltināšanai.",
        details:
            "Pārbaudām segumu, skārda detaļas, savienojumus, mitruma pazīmes, noteksistēmas un ventilāciju. Pēc apsekošanas iesakām prioritātes.",
        icon: ClipboardCheck,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/311005664_521400449994359_8064247804212030749_n-1-600x800.jpg",
    },
    {
        title: "Sniega un ledus noņemšana",
        description:
            "Droša jumtu tīrīšana ziemā, sniega slodzes samazināšana un ledus risku novēršana.",
        details:
            "Īpaši svarīgi lielām plaknēm, daudzdzīvokļu namiem, ražošanas ēkām un ēkām ar aktīvu gājēju plūsmu gar fasādi.",
        icon: Snowflake,
        image: "https://www.isjumti.lv/wp-content/uploads/2025/01/5976776786199034863-1200x800.jpeg",
    },
    {
        title: "Noteku sistēmas",
        description:
            "Lietus ūdens noteku montāža, remonts un apkope, lai pasargātu fasādi, pamatus un jumta konstrukciju.",
        details:
            "Uzstādām renes, caurules, sniega barjeras un skārda pieslēgumus. Veicam arī sezonālu tīrīšanu un bojātu posmu nomaiņu.",
        icon: Droplets,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/450512551_1004194185048314_1571388777996338156_n-1-1200x800.jpg",
    },
    {
        title: "Ekovate, akmensvate un minerālvate",
        description:
            "Jumtu, bēniņu, sienu un pārsegumu siltināšana ar energoefektīviem materiāliem.",
        details:
            "Izvēlamies materiālu pēc konstrukcijas, mitruma režīma, ugunsdrošības prasībām un vēlamās siltumpretestības. Ekovate labi aizpilda sarežģītas vietas un samazina siltuma zudumus.",
        icon: ThermometerSun,
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/ekovate1-600x800.jpg",
    },
];

export const processSteps = [
    "Apsekojam objektu, fiksējam bojājumus un saprotam darba mērķi.",
    "Iesakām segumu, siltinājumu, ventilāciju un mezglu risinājumus.",
    "Sagatavojam tāmi ar materiāliem, darbu, loģistiku un riskiem.",
    "Izpildām darbus pa posmiem, uzturot kārtību objektā.",
    "Nododam objektu, izskaidrojam apkopi un garantijas nosacījumus.",
];

export const serviceProofPoints = [
    "Bezmaksas sākotnējā konsultācija",
    "Tāme pēc foto, rasējumiem vai apsekošanas",
    "Objekti privātmājām, daudzdzīvokļu namiem un komercēkām",
    "Materiālu izvēle pēc jumta slīpuma, konstrukcijas un budžeta",
];

export const materialNotes = [
    {
        title: "Metāla jumti",
        text: "Populārs risinājums Latvijas klimatam: izturīgs, salīdzinoši viegls un piemērots gan jaunbūvēm, gan renovācijai.",
    },
    {
        title: "Dakstiņi",
        text: "Māla un betona dakstiņi labi iederas ilgtermiņa projektos, kuros svarīga akustika, ugunsdrošība un klasiskas fasādes proporcijas.",
    },
    {
        title: "Bitumena segumi",
        text: "Piemēroti lēzeniem jumtiem, garāžām, saimniecības ēkām un daudzdzīvokļu namiem, ja mezgli tiek izbūvēti precīzi.",
    },
    {
        title: "Siltināšana",
        text: "2026. gadā arvien svarīgāka ir energoefektivitāte: pareizs biezums, gaisa necaurlaidība, ventilācija un mitruma kontrole.",
    },
];

export const qualityChecklist = [
    "Ventilācijas atstarpes un mitruma režīms",
    "Pareizs latojums, plēves un stiprinājumi",
    "Kores, satekas, skursteņu un sienu pieslēgumi",
    "Noteksistēmas jauda un ūdens novadīšanas virziens",
    "Sniega barjeras, laipas un drošības elementi",
    "Objekta sakopšana un atkritumu izvešana",
];

export const galleryProjects = [
    {
        title: "Privātmājas jumta renovācija",
        category: "Privātmājas",
        location: "Pierīga",
        work: "Metāla segums, skārda detaļas, noteksistēma",
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
    },
    {
        title: "Daudzdzīvokļu nama jumta darbi",
        category: "Daudzdzīvokļu nami",
        location: "Rīga",
        work: "Kausējamais bitumena segums un mezglu atjaunošana",
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/450512551_1004194185048314_1571388777996338156_n-1-1200x800.jpg",
    },
    {
        title: "Jumta konstrukcijas izbūve",
        category: "Privātmājas",
        location: "Jelgava",
        work: "Koka konstrukcija, latojums un seguma sagatavošana",
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/310536736_521400699994334_5860770553268751557_n-1-1067x800.jpg",
    },
    {
        title: "Siltināšanas darbi ar ekovati",
        category: "Siltināšana",
        location: "Zemgale",
        work: "Bēniņu un slīpo plakņu siltināšana",
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/ekovate1-600x800.jpg",
    },
    {
        title: "Jumta seguma maiņa",
        category: "Privātmājas",
        location: "Latvija",
        work: "Vecā seguma demontāža un jauna seguma montāža",
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/310536736_521400699994334_5860770553268751557_n-1-1067x800.jpg",
    },
    {
        title: "Komercobjekta jumta apkope",
        category: "Komercobjekti",
        location: "Latvija",
        work: "Inspekcija, remonts un ūdens novadīšanas pārbaude",
        image: "https://www.isjumti.lv/wp-content/uploads/2025/01/5976776786199034863-1200x800.jpeg",
    },
];

export const pricingFactors = [
    {
        title: "Jumta platība un ģeometrija",
        text: "Cena mainās pēc m², slīpuma, plakņu skaita, kores, sateku, lūku, skursteņu un jumta logu daudzuma.",
    },
    {
        title: "Seguma un komplektācijas izvēle",
        text: "Metāldakstiņš, valcprofils, dakstiņi, šīferis vai bitumena segums atšķiras pēc materiāla cenas, stiprinājumiem un montāžas laika.",
    },
    {
        title: "Konstrukciju stāvoklis",
        text: "Vecu latojumu, bojātu spāru, mitruma vai nepietiekamas ventilācijas novēršana var būt būtiska izmaksu daļa.",
    },
    {
        title: "Piekļuve un drošība",
        text: "Stalažas, pacēlājs, atkritumu izvešana, objekta attālums un ziemas apstākļi ietekmē gan cenu, gan termiņu.",
    },
];

export const pricingDeliverables = [
    "Darbu apjoms un secība",
    "Segums, stiprinājumi, plēves, latojums un skārda detaļas",
    "Noteksistēmas, sniega barjeras un drošības elementi",
    "Demontāža, transports, stalažas un atkritumu izvešana",
    "Atsevišķi norādīti papildu riski, ja tie redzami pirms darbu sākuma",
];

export const estimateChecklist = [
    "Objekta adrese un ēkas tips",
    "Aptuvenā jumta platība m²",
    "Esošā seguma foto",
    "Vēlamais seguma vai siltinājuma veids",
    "Informācija par noplūdēm, bojājumiem vai steidzamību",
];

export const blogPosts = [
    {
        slug: "noteku-sistemu-uzturesana",
        title: "Noteku sistēmu uzturēšana: kā nodrošināt efektīvu lietus ūdens novadīšanu",
        date: "2024-07-30",
        category: "Apkope",
        excerpt:
            "Regulāra noteku pārbaude pasargā fasādi, pamatus un jumta konstrukciju no lieka mitruma.",
        takeaways: [
            "Tīriet notekas pavasarī un rudenī.",
            "Pēc stipra vēja pārbaudiet savienojumus un stiprinājumus.",
            "Ja ūdens tek gar fasādi, remontu nevajag atlikt.",
        ],
        visualGuide: {
            eyebrow: "Ūdens ceļš",
            title: "Kā notekai jānovada lietus ūdens",
            description: "Mērķis ir vienkāršs: ūdens nedrīkst palikt pie jumta malas, fasādes vai pamatiem.",
            steps: [
                { label: "Jumta plakne", text: "Ūdens brīvi tek uz reni, nevis aiz seguma." },
                { label: "Rene", text: "Slīpums virza ūdeni uz notekcauruli." },
                { label: "Caurule", text: "Savienojumi ir stingri un nepil gar fasādi." },
                { label: "Novadīšana", text: "Ūdens aiziet prom no pamatiem." },
            ],
        },
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/450512551_1004194185048314_1571388777996338156_n-1-1200x800.jpg",
        sections: [
            {
                heading: "Kāpēc notekas ir svarīgas",
                body: "Noteku sistēma novada lietus ūdeni prom no jumta, fasādes un pamatiem. Ja renes ir aizsērējušas vai slīpums ir nepareizs, ūdens var tecēt gar apdari, bojāt cokolu un ziemā veidot ledu.",
            },
            {
                heading: "Apkope divreiz gadā",
                body: "Pavasarī un rudenī notekas jāiztīra no lapām, zariem, skujām un smiltīm. Pēc tīrīšanas pārbaudiet, vai ūdens brīvi aizplūst līdz lietusūdens kanalizācijai vai drošai novadīšanas vietai.",
            },
            {
                heading: "Kad jāiesaista meistars",
                body: "Ja renes ir deformētas, stiprinājumi kustas, savienojumi pil vai pie jumta malas veidojas ledus, labāk veikt profesionālu pārbaudi. Neliels remonts bieži ir lētāks nekā fasādes vai jumta konstrukcijas atjaunošana.",
            },
        ],
    },
    {
        slug: "ekovates-prieksrocibas",
        title: "Ekovates priekšrocības: videi draudzīga siltināšana jūsu mājām",
        date: "2024-07-30",
        category: "Siltināšana",
        excerpt:
            "Ekovate labi aizpilda sarežģītas vietas, palīdz samazināt siltuma zudumus un uzlabo skaņas izolāciju.",
        takeaways: [
            "Ekovate ir piemērota sarežģītiem bēniņiem un pārsegumiem.",
            "Siltinājumam jāstrādā kopā ar ventilāciju un tvaika kontroli.",
            "Pirms iestrādes jānovērtē mitruma riski konstrukcijā.",
        ],
        visualGuide: {
            eyebrow: "Siltinājuma slāņi",
            title: "Kas jāstrādā kopā ar ekovati",
            description: "Labs rezultāts nav tikai materiāla biezums. Svarīgi, lai konstrukcija elpo pareizajā virzienā.",
            steps: [
                { label: "Esošā konstrukcija", text: "Pārbauda mitrumu un bojātas vietas." },
                { label: "Gaisa blīvums", text: "Samazina spraugas, pa kurām zūd siltums." },
                { label: "Ekovate", text: "Vienmērīgi aizpilda sarežģītas zonas." },
                { label: "Ventilācija", text: "Palīdz izvadīt lieko mitrumu." },
            ],
        },
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/ekovate1-600x800.jpg",
        sections: [
            {
                heading: "Materiāls ar labu aizpildījumu",
                body: "Ekovate tiek iestrādāta ar iepūšanas metodi, tādēļ tā piepilda spraugas un neregulāras konstrukcijas vietas, kur plākšņu materiālus var būt grūtāk uzstādīt bez siltuma tiltiem.",
            },
            {
                heading: "Energoefektivitāte un komforts",
                body: "Pareizi iestrādāta siltumizolācija palīdz uzturēt vienmērīgāku temperatūru ziemā un vasarā. Latvijas klimatā svarīgi ir arī nodrošināt konstrukcijas ventilāciju un mitruma režīmu.",
            },
            {
                heading: "Drošība un skaņa",
                body: "Ekovatei pievieno ugunsdrošības un bioloģiskās aizsardzības piedevas. Tā vienlaikus uzlabo skaņas izolāciju, kas ir jūtams bēniņos, mansardos un pārsegumos.",
            },
        ],
    },
    {
        slug: "tamesanas-pamati",
        title: "Tāmēšanas pamati: kā plānot jumta remontu un renovāciju",
        date: "2024-07-30",
        category: "Tāmēšana",
        excerpt:
            "Precīza tāme sākas ar jumta stāvokļa novērtējumu, materiālu izvēli un skaidru darbu secību.",
        takeaways: [
            "Salīdziniet ne tikai gala cenu, bet arī iekļautās pozīcijas.",
            "Vecam jumtam atstājiet rezervi slēptiem bojājumiem.",
            "Foto, platība un adrese būtiski paātrina tāmes sagatavošanu.",
        ],
        visualGuide: {
            eyebrow: "Tāmes secība",
            title: "No pirmās informācijas līdz saprotamam piedāvājumam",
            description: "Jo konkrētāka sākuma informācija, jo mazāk pārsteigumu tāmes beigās.",
            steps: [
                { label: "Foto un adrese", text: "Redzams objekts, piekļuve un steidzamība." },
                { label: "Platība un stāvoklis", text: "Nosaka aptuveno apjomu un riskus." },
                { label: "Materiāli", text: "Salīdzina segumu, mezglus un komplektāciju." },
                { label: "Tāme", text: "Atsevišķi redzams darbs, materiāli un papildu riski." },
            ],
        },
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/310536736_521400699994334_5860770553268751557_n-1-1067x800.jpg",
        sections: [
            {
                heading: "Sāciet ar jumta stāvokli",
                body: "Pirms materiālu izvēles jānovērtē segums, latojums, spāres, skārda detaļas, notekas un ventilācija. Tas palīdz saprast, vai pietiek ar remontu vai vajadzīga pilna renovācija.",
            },
            {
                heading: "Salīdziniet pilnu komplektāciju",
                body: "Zemāka seguma cena ne vienmēr nozīmē lētāku projektu. Tāmē jāredz stiprinājumi, plēves, latojums, kores, satekas, notekas, drošības elementi, transports un atkritumu izvešana.",
            },
            {
                heading: "Atstājiet rezervi",
                body: "Veciem jumtiem slēpti bojājumi bieži atklājas pēc demontāžas. Saprātīga budžeta rezerve palīdz nepieņemt steidzamus un nekvalitatīvus lēmumus būvdarbu vidū.",
            },
        ],
    },
    {
        slug: "jumika-pakalpojumu-izmaksu-celvedis",
        title: "Jumiķa pakalpojumu izmaksu ceļvedis",
        date: "2024-07-25",
        category: "Izmaksas",
        excerpt:
            "Jumta cena veidojas no materiāliem, darba sarežģītības, drošības risinājumiem un objekta loģistikas.",
        takeaways: [
            "Vienas universālas m² cenas jumtam nav.",
            "Liela cenu starpība bieži slēpjas mezglos un komplektācijā.",
            "Pirms lēmuma prasiet tāmi ar skaidrām pozīcijām.",
        ],
        visualGuide: {
            eyebrow: "Cenas formula",
            title: "Kas kopā veido jumta budžetu",
            description: "Divi vienāda izmēra jumti var maksāt atšķirīgi, ja atšķiras mezgli, piekļuve vai konstrukciju stāvoklis.",
            steps: [
                { label: "Materiāli", text: "Segums, plēves, latojums, skārda detaļas." },
                { label: "Darbs", text: "Demontāža, montāža un konstrukciju remonts." },
                { label: "Drošība", text: "Stalažas, pacēlājs, sniega barjeras, laipas." },
                { label: "Loģistika", text: "Transports, atkritumi un objekta piekļuve." },
            ],
        },
        image: "https://www.isjumti.lv/wp-content/uploads/2024/07/449842267_1004194061714993_8696377875127438476_n-1200x800.jpg",
        sections: [
            {
                heading: "Kas veido jumta darbu cenu",
                body: "Galvenās pozīcijas ir segums, papildmateriāli, demontāža, konstrukciju remonts, montāžas darbs, noteksistēmas, drošības elementi, transports un atkritumu izvešana.",
            },
            {
                heading: "Kāpēc cena bez apskates ir aptuvena",
                body: "Divi vienāda izmēra jumti var izmaksāt atšķirīgi, ja vienam ir sarežģītas satekas, bojātas konstrukcijas vai grūta piekļuve. Tāpēc precīza tāme balstās objektā vai labā foto un rasējumu komplektā.",
            },
            {
                heading: "Kā saņemt salīdzināmu piedāvājumu",
                body: "Nosūtiet jumta m², atrašanās vietu, vēlamo segumu, foto un īsu problēmas aprakstu. Jo konkrētāka informācija, jo ātrāk var sagatavot skaidru piedāvājumu.",
            },
        ],
    },
];

export const trustItems = [
    { label: "Oficiāla tāme un līgums", icon: FileText },
    { label: "Garantija paveiktajiem darbiem", icon: ShieldCheck },
    { label: "Pieredze privātmājās un komercobjektos", icon: Home },
    { label: "Remonts, montāža un apkope vienā komandā", icon: Wrench },
];

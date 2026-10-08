import { isPublished } from "./publishing.js";

import autumnHairLossBlog from "../assets/blog/autumn-hair-loss.jpg";
import goldenScissorsBlog from "../assets/blog/girl-with-the-golden-scissors.jpg";
import ljubljanaInOctoberBlog from "../assets/blog/ljubljana-in-october.jpg";

const instagramUrl = "https://www.instagram.com/statuskay";
const tiktokUrl = "https://www.tiktok.com/@statuskay";

export const blogPosts = [

    {
        slug: {
            en: "autumn-hair-loss",
            sl: "jesensko-izpadanje-las"
        },

        category: "haircuts",

        publishAt: "2026-10-23",

        image: {
            src: autumnHairLossBlog,
            alt: {
                en: "Long brown hair seen from behind, with dry, sun-faded ends after summer",
                sl: "Dolgi rjavi lasje od zadaj, s suhimi, od sonca zbledelimi konicami po poletju"
            }
        },

        relatedSlug: {
            en: "how-to-speed-up-hair-growth",
            sl: "kako-pospesiti-rast-las"
        },

        date: {
            en: "October 23, 2026",
            sl: "23. oktober 2026"
        },

        title: {
            en: "Autumn Hair Loss: Why It Happens And What Helps",
            sl: "Jesensko Izpadanje Las: Zakaj Se Zgodi In Kaj Pomaga"
        },

        excerpt: {
            en: "More hair in your brush this autumn? Seasonal shedding is common and usually temporary. Here's why it happens and how to support your hair through it.",
            sl: "Več las na krtači to jesen? Sezonsko izpadanje las je pogosto in običajno začasno. Preberite, zakaj se zgodi in kako lasem pomagate čez to obdobje."
        },

        body: {

            en: [
                "Every autumn, the same worried question comes up in the salon chair: why am I suddenly losing so much hair? If you've been noticing more strands in your brush, on your pillow or in the shower drain, you're not imagining it — and in most cases, it's nothing to panic about.",
                "Hair grows in cycles. At any given moment, most of your hair is actively growing, while a smaller share is in a resting phase before it falls out naturally. Many people find that more hairs enter that resting phase over the summer, which means they shed a few months later — right around September and October. Losing somewhere between 50 and 100 hairs a day is considered normal, and seasonal shedding usually settles down on its own within a few weeks.",
                "Summer itself doesn't help either. Sun, salt water, chlorine and heat styling leave the lengths dry and brittle, so hair breaks more easily when you brush it. Part of what looks like hair loss in autumn is actually breakage — and that's the part you can do the most about.",
                "A few simple habits make a real difference. Brush gently, starting from the ends and working up, and avoid tight ponytails that pull at the roots. Turn the heat on your straightener or curling iron down a notch, and use a nourishing mask once a week. A short scalp massage while you wash your hair is a pleasant way to support circulation, and a balanced diet with enough protein and iron matters more for your hair than any single product.",
                "Autumn is also the perfect time for a trim. Taking off the dry, split ends left over from summer stops the breakage from travelling further up the strand, so your hair looks fuller and healthier straight away. If you're not sure how much to take off, we'll look at your hair together and suggest what makes sense.",
                "One important note: if the shedding lasts longer than two or three months, if you notice bald patches, or if it comes with other symptoms like fatigue, it's worth checking in with your doctor or a dermatologist. Seasonal shedding is common, but it shouldn't be the only explanation you consider."
            ],

            sl: [
                "Vsako jesen se v frizerskem stolu pojavi isto zaskrbljeno vprašanje: zakaj mi nenadoma izpada toliko las? Če opažate več las na krtači, na blazini ali v odtoku pri tušu, si tega ne domišljate — in v večini primerov ni razloga za paniko.",
                "Lasje rastejo v ciklih. Večina las je v vsakem trenutku v fazi rasti, manjši del pa v fazi mirovanja, preden naravno izpade. Pri veliko ljudeh gre čez poletje v fazo mirovanja več las kot sicer, zato izpadejo nekaj mesecev kasneje — ravno septembra in oktobra. Izguba približno 50 do 100 las na dan velja za normalno, sezonsko izpadanje pa se običajno umiri samo od sebe v nekaj tednih.",
                "Tudi poletje samo ne pomaga. Sonce, morska voda, klor in toplotno oblikovanje izsušijo dolžine, zato se lasje pri česanju lažje lomijo. Del tega, kar jeseni izgleda kot izpadanje, je v resnici lomljenje las — in prav tu lahko naredite največ.",
                "Nekaj preprostih navad naredi veliko razliko. Lase razčesujte nežno, od konic navzgor, in se izogibajte tesnim čopom, ki vlečejo pri koreninah. Temperaturo likalnika ali kodralnika znižajte za stopnjo in enkrat na teden uporabite hranilno masko. Kratka masaža lasišča med umivanjem je prijeten način za spodbujanje prekrvavitve, uravnotežena prehrana z dovolj beljakovin in železa pa je za lase pomembnejša od katerega koli izdelka.",
                "Jesen je tudi idealen čas za striženje konic. Ko odstranimo suhe, razcepljene konice, ki so ostale od poletja, se lomljenje ne širi naprej po dolžini, lasje pa so takoj videti polnejši in bolj zdravi. Če niste prepričani, koliko bi bilo dobro odstraniti, si bomo lase ogledali skupaj in predlagali, kar je smiselno.",
                "Pomembna opomba: če izpadanje traja dlje kot dva ali tri mesece, če opazite plešaste predele ali če ga spremljajo drugi znaki, kot je utrujenost, se je vredno posvetovati z zdravnikom ali dermatologom. Sezonsko izpadanje je pogosto, a ne bi smelo biti edina razlaga, ki jo upoštevate."
            ]

        },

        faq: {

            en: [
                {
                    q: "Is it normal to lose more hair in autumn?",
                    a: "Yes. Many people shed more hair in September and October, because more hairs enter the resting phase during summer and fall out a few months later. It's usually temporary and settles within a few weeks."
                },
                {
                    q: "How many hairs a day is normal to lose?",
                    a: "Losing roughly 50 to 100 hairs a day is considered normal. During seasonal shedding it can feel like more, especially after washing or brushing."
                },
                {
                    q: "Does a haircut help with autumn hair loss?",
                    a: "A haircut doesn't change how much hair falls out from the root, but trimming dry, split ends left from summer reduces breakage, so hair looks fuller and healthier."
                },
                {
                    q: "When should I see a doctor about hair loss?",
                    a: "If shedding lasts longer than two or three months, if you notice bald patches, or if it comes with other symptoms such as fatigue, it's worth seeing a doctor or dermatologist."
                }
            ],

            sl: [
                {
                    q: "Ali je normalno, da jeseni izpade več las?",
                    a: "Da. Pri veliko ljudeh septembra in oktobra izpade več las, ker gre čez poletje več las v fazo mirovanja in izpadejo nekaj mesecev kasneje. Običajno je to začasno in se umiri v nekaj tednih."
                },
                {
                    q: "Koliko las na dan je normalno, da izpade?",
                    a: "Izguba približno 50 do 100 las na dan velja za normalno. Med sezonskim izpadanjem se lahko zdi več, predvsem po umivanju ali česanju."
                },
                {
                    q: "Ali striženje pomaga pri jesenskem izpadanju las?",
                    a: "Striženje ne vpliva na to, koliko las izpade iz korenine, a z odstranitvijo suhih, razcepljenih konic po poletju zmanjšamo lomljenje, zato so lasje videti polnejši in bolj zdravi."
                },
                {
                    q: "Kdaj naj zaradi izpadanja las obiščem zdravnika?",
                    a: "Če izpadanje traja dlje kot dva ali tri mesece, če opazite plešaste predele ali če ga spremljajo drugi znaki, kot je utrujenost, se je vredno posvetovati z zdravnikom ali dermatologom."
                }
            ]

        }

    },

    {
        slug: {
            en: "girl-with-the-golden-scissors",
            sl: "deklica-z-zlatimi-skarjami"
        },

        category: "about",

        publishAt: "2026-10-16",

        // Shows a "Naroči se" / "Book Now" Fresha button after the text.
        bookingButton: true,

        image: {
            src: goldenScissorsBlog,
            alt: {
                en: "Hairdressing chair and mirror in a cruise ship salon, with a panoramic window overlooking the sea, palm trees and a city skyline",
                sl: "Frizerski stol in ogledalo v salonu na ladji za križarjenja, s panoramskim oknom s pogledom na morje, palme in mesto"
            }
        },

        relatedSlug: {
            en: "about-status-kay-salon",
            sl: "o-status-kay-salonu"
        },

        date: {
            en: "October 16, 2026",
            sl: "16. oktober 2026"
        },

        title: {
            en: "The Girl with the Golden Scissors: A Ljubljana Hairstylist's Journey Around the World",
            sl: "Deklica z zlatimi škarjami: zgodba frizerke iz Ljubljane, ki je s škarjami prepotovala svet"
        },

        excerpt: {
            en: "Fourteen years ago I left home with my scissors to work on cruise ships. Today, at my Ljubljana salon on Trg OF, every cut carries that story.",
            sl: "Pred 14 leti sem s škarjami odšla na ladje. Danes v Ljubljani, na Trgu OF, strižem drugače: mirno, natančno in z zgodbo za vsako frizuro."
        },

        body: {

            en: [
                "## A suitcase, a pair of scissors, and a goodbye",
                "About fourteen years ago, I packed a suitcase, tucked my scissors inside, and set off into the world. Not on holiday, but to work on cruise ships, where the day starts early, ends late, and the salon is a few square metres somewhere in the middle of the ocean.",
                "At twenty, all I could see was that I could travel and do what I love doing. A dream job!",
                "## How I became “the girl with the golden scissors”",
                "On a ship, names change quickly. Guests and crew called me Kaja, Kadža, Kaha, Kay, each in their own way, depending on language and accent. But one name stuck more than the others: the girl with the golden scissors.",
                "It was never really about the scissors. It was about people leaving my chair feeling different from how they sat down. When you meet people from every corner of the world every day, with different hair, habits, and expectations, you learn to listen fast. Not just to what a client asks for, but to what they don't quite say.",
                "## What life between ports teaches you",
                "I saw places I otherwise probably never would have. But behind every postcard view was everything you don't see: the challenges, the endless trainings, the flights, the goodbyes, the tiredness, and the days when home felt very far away.",
                "Those days shaped me as a stylist. I learned to work precisely even on rough seas. I learned that a good hairstyle isn't a fast one, it's a considered one. And I learned that a client's trust is something you earn again at every appointment. There's truly no room for mistakes out there and no second chances. If the guests aren't happy, you're not there for long.",
                "Along the way I also [trained as a barber](/en/services/barbering), long before men's grooming became a trend, including hot and cold towel shaves and certified facial care for men. All of it comes with me into every appointment today.",
                "## From the ocean to Trg OF",
                "After years at sea, I wanted something different: home. Not another new square, another city, another church. After so many years of a completely different kind of service than we're used to in Slovenia, I wanted a space where I could give my full attention to one person at a time, with the kind of service that still isn't the norm here.",
                "I know, it sounds strange: the whole wide world, and you choose Slovenia? Yes. And if you'd asked me before I left, I'd have said: never! Ljubljana felt too small to me, and the world out there felt huge and full of illusions. It's a little funny that only after travelling so much do you start to see how much we really have here, and how rarely we appreciate it.",
                "That's how [StatusKay](/en/about) began, a boutique hair salon in Ljubljana at Trg OF 13, in the courtyard of the city's first hotel building. It's small and personal. It's just me, you, and your hair. And Dejzi, who will probably greet you at the door.",
                "## Why “calm is the new luxury”",
                `Well, if you hop over to my socials on [Instagram](${instagramUrl}) or [TikTok](${tiktokUrl}) and see the views I had from my “office,” you'll understand where my calm comes from. So my philosophy is simple: calm is the new luxury. And a good haircut definitely brings calm, plus easier styling :) Here, an appointment isn't something to squeeze between two obligations. It's time to sit down, say what you want, and trust that every move of the scissors has a purpose.`,
                "Whether you're coming in for a haircut, colour, a fringe trim, or a men's shave, the approach is the same: I listen first, then I cut.",
                "## The scissors are silver now",
                "The name “the girl with the golden scissors” has stayed with me, even though today I'm mostly a woman who knows what she does and why she does it. My scissors have turned silver, but they'll always be golden, because of the people who sat in my chair and trusted me.",
                "If it matters to you how you feel when you walk out of a hair salon, I'd be glad to welcome you, whether you've been with me since the very beginning or you're coming in for the first time.",
                `You'll find snapshots from my life at sea on [Instagram](${instagramUrl}) and [TikTok](${tiktokUrl}).`
            ],

            sl: [
                "## Kovček, škarje in slovo",
                "Pred približno štirinajstimi leti sem spakirala kovček, vanj položila škarje in odšla v svet. Ne na počitnice, ampak na delo, na ladje za križarjenja, kjer se dan začne zgodaj, konča pozno in kjer je salon le nekaj kvadratnih metrov sredi oceana.",
                "Pri dvajsetih letih sem videla samo eno: da lahko potujem in delam to, kar delam. Sanjska služba!",
                "## Kako sem postala »deklica z zlatimi škarjami«",
                "Na ladji se imena hitro spremenijo. Gostje in posadka so me klicali Kaja, Kadža, Kaha, Kay, vsak po svoje, odvisno od jezika in naglasa. Eno ime pa se je prijelo bolj kot ostala: deklica z zlatimi škarjami.",
                "Ni šlo za škarje same. Šlo je za to, da so ljudje odšli iz mojega stola in se počutili drugače, kot ko so sedli vanj. Na ladji, kjer vsak dan srečaš ljudi z vseh koncev sveta, z različnimi lasmi, navadami in pričakovanji, se hitro naučiš poslušati. Ne samo, kaj si stranka želi, ampak tudi tisto, česar ne pove na glas.",
                "## Kaj te nauči življenje med pristanišči",
                "Videla sem kraje, ki jih sicer verjetno nikoli ne bi. A za vsako lepo razglednico je bilo tudi veliko tistega, česar se ne vidi: izzivi, nešteto izobraževanj, leti, slovesa, utrujenost in dnevi, ko je dom zelo daleč.",
                "Prav ti dnevi so me oblikovali kot frizerko. Naučila sem se delati natančno tudi takrat, ko je okoli mene razburkano morje. Naučila sem se, da dobra frizura ni hitra frizura, ampak premišljena. In naučila sem se, da je zaupanje stranke nekaj, kar si prisluži z vsakim obiskom znova. Tam res ni prostora za napake in ni drugih priložnosti. Če gostje niso zadovoljni, kar hitro nisi več tam.",
                "Med potjo sem pridobila tudi [brivsko znanje](/sl/storitve/moski-frizer), še preden je moška nega postala trend: britje s toplimi in hladnimi brisačami ter certificirano nego obraza za moške. Vse to danes nosim s sabo v vsak termin.",
                "## Iz oceana na Trg OF",
                "Po letih na morju sem si zaželela nečesa drugega: doma. Ne novega trga, drugega mesta in še ene cerkve. Po toliko letih popolnoma drugačne storitve, kot jo poznamo Slovenci, sem si zaželela prostora, kjer se lahko posvetim eni osebi naenkrat, z dobro storitvijo, ki pri nas še ni stalnica.",
                "Vem, to je kar čudno razumeti: širni svet, ti pa se odločiš za Slovenijo? Ja. In če bi me to vprašali, preden sem šla, bi rekla: jaz pa že nikoli! Ljubljana je bila zame premajhna, tujina pa velika in polna iluzij. Kar malo smešno je, da šele ko veliko prepotuješ, znaš videti, koliko stvari zares imamo, pa jih ne znamo ceniti.",
                "Tako je nastal [StatusKay](/sl/o-nas), butični frizerski salon v Ljubljani, na Trgu OF 13, na dvorišču stavbe prvega ljubljanskega hotela. Salon je majhen in oseben. Tu sem samo jaz, ti in tvoji lasje. In Dejzi, ki te bo verjetno pričakala pri vratih.",
                "## Zakaj »calm is the new luxury«",
                `No ja, če skočiš na moja omrežja, na [Instagram](${instagramUrl}) ali [TikTok](${tiktokUrl}), in pogledaš, kakšne razglede iz pisarne sem imela, boš razumela, kje je vir moje mirnosti. Zato je moja filozofija preprosta: mir je novo razkošje. In dobra frizura definitivno prinese mir, pa tudi lažje urejanje :) Pri meni termin ni nekaj, kar je treba odkljukati med dvema obveznostma. Je čas, ko se lahko usedeš, poveš, kaj želiš, in zaupaš, da ima vsak gib škarij svoj namen.`,
                "Ne glede na to, ali prideš na striženje, barvanje, urejanje frfruja ali na moško britje, je pristop enak: najprej poslušam, potem strižem.",
                "## Škarje so danes srebrne",
                "Ime »deklica z zlatimi škarjami« me spremlja še danes, čeprav sem danes predvsem ženska, ki ve, kaj zna, in zakaj to počne. Škarje so se sicer spremenile v srebrne, a zlate bodo vedno ostale, zaradi ljudi, ki so sedeli v mojem stolu in mi zaupali.",
                "Če ti ni vseeno, kako se počutiš, ko odideš iz frizerskega salona, te z veseljem sprejmem, pa naj bo to, da si z mano že od začetka, ali pa prihajaš prvič.",
                `Utrinke z ladje pa najdeš na mojem [Instagramu](${instagramUrl}) in [TikToku](${tiktokUrl}).`
            ]

        },

        faq: {

            en: [
                {
                    q: "Who is the hairstylist at STATUS KAY in Ljubljana?",
                    a: "STATUS KAY is run by Kaja, a hairstylist and barber who spent years working in salons on cruise ships before opening her own boutique salon in Ljubljana."
                },
                {
                    q: "Where is the STATUS KAY salon?",
                    a: "The salon is at Trg OF 13 in central Ljubljana, in the courtyard of the building that housed the city's first hotel, a short walk from the main train and bus stations."
                },
                {
                    q: "Does STATUS KAY offer men's shaves?",
                    a: "Yes. Alongside women's haircuts and colour, the salon offers men's grooming, including traditional shaves with hot and cold towels and facial care for men."
                },
                {
                    q: "How do I book an appointment at STATUS KAY?",
                    a: "Appointments are booked online through Fresha, where you can choose your service and a time that suits you."
                }
            ],

            sl: [
                {
                    q: "Kdo je frizerka v salonu STATUS KAY v Ljubljani?",
                    a: "Salon STATUS KAY vodi Kaja, frizerka in brivka, ki je več let delala v salonih na ladjah za križarjenja, preden je v Ljubljani odprla svoj butični salon."
                },
                {
                    q: "Kje se nahaja salon STATUS KAY?",
                    a: "Salon je na Trgu OF 13 v središču Ljubljane, na dvorišču stavbe prvega ljubljanskega hotela, le nekaj korakov od glavne železniške in avtobusne postaje."
                },
                {
                    q: "Ali STATUS KAY ponuja moško britje?",
                    a: "Da. Poleg ženskega striženja in barvanja salon ponuja tudi moško nego, vključno s klasičnim britjem s toplimi in hladnimi brisačami ter nego obraza za moške."
                },
                {
                    q: "Kako rezerviram termin v salonu STATUS KAY?",
                    a: "Termin rezerviraš prek spleta v aplikaciji Fresha, kjer izbereš storitev in čas, ki ti ustreza."
                }
            ]

        }

    },

    {
        slug: {
            en: "ljubljana-in-october",
            sl: "jesen-v-ljubljani"
        },

        category: "about",

        publishAt: "2026-10-09",

        // Shows a "Naroči se" / "Book Now" Fresha button after the text.
        bookingButton: true,

        image: {
            src: ljubljanaInOctoberBlog,
            alt: {
                en: "Illustration of a blonde woman in a light coat walking a Yorkshire terrier along a leafy park path in autumn",
                sl: "Ilustracija svetlolase ženske v svetlem plašču, ki se z jorkširskim terierjem sprehaja po jesenski poti v parku"
            }
        },

        relatedSlug: {
            en: "where-to-go-in-ljubljana-after-your-haircut",
            sl: "kam-v-ljubljani-po-frizuri"
        },

        date: {
            en: "October 9, 2026",
            sl: "9. oktober 2026"
        },

        title: {
            en: "Ljubljana in October: An Autumn Guide to a City That Slows Down",
            sl: "Jesen v Ljubljani: kako preživeti oktober v mestu, ki se upočasni"
        },

        excerpt: {
            en: "Ljubljana in October means golden Tivoli Park, roasted chestnuts, galleries and theatre. A calm autumn guide to the city – with time for yourself.",
            sl: "Jesen v Ljubljani je čas za Tivoli, kostanj, galerije in gledališče. Oktobrski vodič po mestu – in kako vanj vpleteš trenutek zase."
        },

        body: {

            en: [
                "October is when Ljubljana changes its rhythm. The summer crowds thin out, the mornings turn crisp, and fog sometimes lingers over the Ljubljanica until late morning. Chestnut sellers appear on street corners, and café life slowly moves from terraces to behind the glass. If there is ever a time to experience the city without rushing, this is it.",
                "From the salon on Trg OF, I notice this shift every year. People arrive calmer, with more time and more questions about what they want for the months ahead. So here are a few places and habits I love most when the city turns autumnal.",
                "## Tivoli and Rožnik in Gold",
                "The city park is at its best in October. The avenue along Jakopič Promenade turns gold and red, leaves gather along the paths, and the light falls low and soft. If you have a free morning, keep walking up to Rožnik hill. The climb is gentle, and on a cool, sunny day the view from the top is worth every step. It's a walk you measure not in distance, but in how quiet your head feels by the end.",
                "## Markets, Chestnuts and Open Kitchen Fridays",
                "In autumn, the Central Market designed by Plečnik offers what's easy to overlook in summer: apples, pumpkins, walnuts and, of course, chestnuts. A Saturday morning among the stalls is a small ritual that makes the city feel like home. On Fridays, Pogačar Square still fills with the smells of the Open Kitchen food market – this year's Ljubljana season closes with Fridays on 16, 23 and 30 October. After that, a paper cone of hot chestnuts on a riverside walk is a perfectly good autumn feast.",
                "## Galleries, Design and Culture",
                "As the days get shorter, life moves indoors. Center Rog and Cankarjev dom run a varied programme of exhibitions, design events and workshops, while the National Gallery and the Museum of Modern Art are reliable choices for a rainy afternoon. Autumn also opens the theatre and concert season, and the second half of this October has a few evenings worth writing down.",
                "The SNG Opera and Ballet opens its season with Prokofiev's Cinderella, a contemporary retelling about a young woman finding herself amid glamour and social pressure – on stage from 8 October. On 18 October, composer and cellist Peter Gregson plays Kino Šiška as part of Cellofest, his calm, cinematic music a perfect fit for an autumn evening. The same night, 18 October, the Cleveland Orchestra – one of the finest in the world – performs at Cankarjev dom. The Ljubljana City Theatre (MGL) premieres Ivan Cankar's Romantic Souls on 20 October, and on 29 October the Slovenian National Theatre Drama brings back its acclaimed production of The Doctor – this season on its temporary stage on Litostrojska Street. Programmes change quickly, so it pays to look ahead.",
                "## Coffee by the River and the View from the Castle",
                "When the afternoon cools down, nothing beats a warm cup at one of the riverside cafés, looking out over the Triple Bridge or the Cobblers' Bridge. This is where you see the city's autumn pulse best – slower, but no less alive. If you want to go higher, take the funicular or walk up to Ljubljana Castle. You can browse the exhibitions, stop for a glass of wine, or simply watch the fog lift over the rooftops. In October, Ljubljana from above is often at its most photogenic.",
                "## Autumn as a Fresh Start",
                "A change of season isn't only something that happens outside. For many people, October is the moment when hair needs a new rhythm after summer sun and sea – [a refreshed shape](/en/services/haircuts), [a softer colour tone](/en/services/toning), or simply clean ends that will carry you through winter. The salon is at Trg OF 13, in the courtyard of Ljubljana's first hotel building, just a few minutes' walk from the train station. If you're already planning an autumn day in the city, you can begin or end it with an hour that's yours alone – unhurried and uncrowded.",
                "Calm is the new luxury – and in Ljubljana's autumn, that's especially true."
            ],

            sl: [
                "Oktober je mesec, ko Ljubljana zadiha drugače. Poletni turisti se razredčijo, jutra postanejo hladnejša in megla se včasih zadrži nad Ljubljanico do poznega dopoldneva. Na vogalih se pojavijo prodajalci pečenega kostanja, kavarne pa iz zunanjih vrtov počasi preselijo življenje za steklo. Če kdaj, je to čas, ko se mesto da doživeti brez naglice.",
                "V salonu na Trgu OF to spremembo opazim vsako leto. Ljudje pridejo bolj umirjeni, z več časa in z več vprašanji o tem, kaj si želijo za prihajajoče mesece. Zato sem zbrala nekaj mest in navad, ki jih imam sama najraje, ko se Ljubljana obarva jesensko.",
                "## Tivoli in Rožnik v zlatih odtenkih",
                "Mestni park je oktobra najlepši. Drevored na Jakopičevem sprehajališču se obarva v zlato in rdeče, listje se nabira ob poteh, svetloba pa pada nizko in mehko. Če imaš prost dopoldan, nadaljuj pot na Rožnik. Vzpon ni zahteven, na vrhu pa te čaka razgled, ki na hladen, sončen dan poplača vsak korak. To je sprehod, ki ga ne meriš v korakih, ampak v tem, koliko se ti glava med hojo izprazni.",
                "## Tržnica, kostanj in petkova Odprta kuhna",
                "Plečnikova tržnica jeseni ponuja tisto, kar poleti zlahka spregledamo: jabolka, buče, orehe in seveda kostanj. Sobotni dopoldan med stojnicami je majhen ritual, ki mestu da občutek domačnosti. Ob petkih na Pogačarjevem trgu še diši po Odprti kuhni – letošnja sezona v Ljubljani se izteče s petki 16., 23. in 30. oktobra. Potem pa je kornet vročega kostanja na sprehodu ob reki povsem zadostna jesenska pojedina.",
                "## Galerije, oblikovanje in kultura",
                "Ko se dnevi skrajšajo, se življenje preseli v notranje prostore. Center Rog in Cankarjev dom imata pester program razstav, oblikovalskih dogodkov in delavnic, Narodna galerija in Moderna galerija pa sta zanesljiva izbira za deževno popoldne. Jesen je tudi začetek gledališke in koncertne sezone, in letos je v drugi polovici oktobra nekaj večerov, ki si jih je vredno zapisati.",
                "V Operi se oktobra začne nova sezona z baletom Pepelka na glasbo Prokofjeva, sodobno pravljico o mladem dekletu, ki med bleščavo in pritiski išče sebe – na sporedu je od 8. oktobra. V Kinu Šiška bo 18. oktobra na festivalu Cellofest nastopil Peter Gregson, čigar umirjena, skoraj filmska glasba je kot nalašč za jesenski večer. Istega dne, 18. oktobra, v Cankarjevem domu gostuje Clevelandski orkester, eden najboljših na svetu. MGL 20. oktobra premierno uprizori Cankarjeve Romantične duše, Drama pa 29. oktobra na spored vrača odmevno Zdravnico – letos na začasnem odru na Litostrojski cesti. Program se hitro spreminja, zato si ga je vredno ogledati vnaprej.",
                "## Kava ob Ljubljanici in pogled z gradu",
                "Ko se popoldan ohladi, ni lepšega kot topla skodelica v eni od kavarn ob reki, s pogledom na Tromostovje ali Čevljarski most. Tu se najbolje vidi, kako mesto jeseni utripa – počasneje, a nič manj živo. Če te vleče višje, se z vzpenjačo ali peš povzpni na Ljubljanski grad. Ogledaš si lahko razstave, se ustaviš ob kozarcu vina ali pa preprosto opazuješ, kako se megla dviguje nad strehami. Ljubljana od zgoraj je oktobra pogosto najbolj fotogenična.",
                "## Jesen kot čas za nov začetek",
                "Sprememba letnega časa ni samo sprememba v naravi. Za marsikoga je oktober trenutek, ko po poletju, soncu in morju lasje potrebujejo nov ritem – [osvežitev oblike](/sl/storitve/strizenje-las), [mehkejši ton barve](/sl/storitve/toniranje) ali preprosto urejen konec, ki zdrži do zime. Salon je na Trgu OF 13, v dvorišču prve ljubljanske hotelske stavbe, le nekaj minut od železniške postaje. Če že načrtuješ jesenski dan v mestu, ga lahko začneš ali zaključiš z uro, ki je namenjena samo tebi, brez hitenja in brez gneče.",
                "Calm is the new luxury – in jeseni v Ljubljani to velja še posebej."
            ]

        },

        faq: {

            en: [
                {
                    q: "What is there to do in Ljubljana in October?",
                    a: "October in Ljubljana is ideal for autumn walks in Tivoli Park and up Rožnik hill, browsing the Central Market, roasted chestnuts by the river, galleries such as the National Gallery and the Museum of Modern Art, a visit to Ljubljana Castle, and the start of the theatre and concert season."
                },
                {
                    q: "Where can I see autumn colours in Ljubljana?",
                    a: "Tivoli Park, especially the tree-lined Jakopič Promenade, and the walk up to Rožnik hill are the best places to see autumn colours right in the city. Ljubljana Castle also offers a wide view over the rooftops."
                },
                {
                    q: "Is there a hair salon near Ljubljana train station?",
                    a: "Yes. STATUS KAY is at Trg OF 13, in the courtyard of Ljubljana's first hotel building, just a few minutes' walk from the train and bus stations."
                },
                {
                    q: "How do I book an appointment at STATUS KAY?",
                    a: "Appointments are booked online through Fresha, where you can choose your service and a time that suits you."
                }
            ],

            sl: [
                {
                    q: "Kaj početi v Ljubljani oktobra?",
                    a: "Oktober v Ljubljani je kot nalašč za jesenske sprehode po Tivoliju in na Rožnik, obisk Plečnikove tržnice, pečen kostanj ob reki, galerije, kot sta Narodna in Moderna galerija, obisk Ljubljanskega gradu ter začetek gledališke in koncertne sezone."
                },
                {
                    q: "Kje v Ljubljani so najlepše jesenske barve?",
                    a: "Najlepše jesenske barve sredi mesta najdeš v parku Tivoli, posebej na drevoredu Jakopičevega sprehajališča, in na poti na Rožnik. Z Ljubljanskega gradu pa je lep razgled na jesenske strehe mesta."
                },
                {
                    q: "Ali je v bližini ljubljanske železniške postaje frizerski salon?",
                    a: "Da. STATUS KAY je na Trgu OF 13, v dvorišču prve ljubljanske hotelske stavbe, le nekaj minut hoje od železniške in avtobusne postaje."
                },
                {
                    q: "Kako rezerviram termin v salonu STATUS KAY?",
                    a: "Termin rezerviraš prek spleta v aplikaciji Fresha, kjer izbereš storitev in čas, ki ti ustreza."
                }
            ]

        }

    },

    {
        slug: {
            en: "hot-mama-summer-haircut-with-a-newborn",
            sl: "hot-mama-summer-frizura-z-dojenckom"
        },

        category: "about",

        date: {
            en: "July 5, 2026",
            sl: "5. julij 2026"
        },

        title: {
            en: "Hot Mama Summer: Getting A Haircut With A Newborn? Completely Normal",
            sl: "Hot Mama Summer: Frizura Z Dojenčkom? Popolnoma Normalno"
        },

        excerpt: {
            en: "If you have a newborn at home and you're wondering how a salon visit could possibly work right now — here's why it's easier than you think.",
            sl: "Če imate doma novorojenčka in se sprašujete, kako naj obisk salona sploh deluje trenutno — tukaj je razlog, zakaj je lažje, kot mislite."
        },

        body: {

            en: [
                "If you have a small baby at home and you're thinking about booking a haircut or a colour refresh, the same question usually comes up: what do I do with the baby during the appointment, and how do I manage feeding or naps? Our answer is simple — bring them along.",
                "A baby is not an interruption. It's part of real life, and our studio is used to it. Appointments at STATUS KAY are quiet, one-on-one sessions, so there's no busy waiting room or Saturday-morning rush to navigate — just you, your stylist, and however much company your baby needs.",
                "Newborns tend to settle surprisingly well in a salon chair. The steady hum of a hairdryer works like white noise, similar to the sounds they heard in the womb, and the black-and-white tones of the studio happen to suit exactly what a newborn's eyes are drawn to at this stage.",
                "Feeding mid-appointment is completely fine — take the time you need, no rush, no awkwardness. And if you'd rather have an extra pair of hands, your partner is welcome to come along and take the baby for a short walk nearby while you finish up.",
                "Hot Mama Summer isn't just a trend we're borrowing for a caption. It's a reminder that looking after yourself doesn't stop mattering the moment you become a mother — and that a haircut can still be simple, even with a baby in tow."
            ],

            sl: [
                "Če imate doma majhnega dojenčka in razmišljate o rezervaciji striženja ali osvežitve barve, se skoraj vedno pojavi isto vprašanje: kaj naj naredim z otrokom med terminom in kako uskladim hranjenje ali spanje? Naš odgovor je preprost — pripeljite ga s seboj.",
                "Dojenček ni motnja. Je del resničnega življenja, in naš studio je na to navajen. Termini pri STATUS KAY so mirni, individualni obiski — brez natrpane čakalnice ali sobotne gneče, samo vi, vaš frizer in toliko družbe, kolikor jo vaš malček potrebuje.",
                "Novorojenčki se v frizerskem stolu presenetljivo dobro umirijo. Enakomeren zvok fena deluje kot bel šum, podoben zvokom iz maternice, črno-beli toni studia pa ravno ustrezajo temu, kar v tej fazi pritegne dojenčkov pogled.",
                "Hranjenje med terminom ni nič nenavadnega — vzemite si čas, ki ga potrebujete, brez naglice in brez nelagodja. Če pa raje ohranite proste roke, je vaš partner vedno dobrodošel, da medtem z dojenčkom naredi krajši sprehod v bližini.",
                "Hot Mama Summer ni le trend, ki si ga izposojamo za objavo. Je opomnik, da skrb zase ne neha biti pomembna, ko postanete mama — in da je lahko striženje še vedno preprosto, tudi z dojenčkom v naročju."
            ]

        },

        faq: {

            en: [
                {
                    q: "Can I bring my newborn to a hair appointment in Ljubljana?",
                    a: "Yes. At STATUS KAY appointments are private, one-on-one sessions, so bringing your baby along is completely normal and welcomed."
                },
                {
                    q: "Will the noise from a hairdryer disturb my baby?",
                    a: "Usually not — the steady sound works like white noise and often helps babies settle, similar to sounds they heard in the womb."
                },
                {
                    q: "Can I breastfeed during my appointment?",
                    a: "Absolutely. Take whatever time you need — there's no rush and no need to feel awkward about it."
                },
                {
                    q: "Should I bring someone with me to help with the baby?",
                    a: "It's optional, but welcome. Many mums bring a partner who takes the baby for a short walk nearby while the appointment finishes."
                }
            ],

            sl: [
                {
                    q: "Ali lahko na frizerski termin v Ljubljani pripeljem novorojenčka?",
                    a: "Da. Termini pri STATUS KAY so zasebni, individualni obiski, zato je popolnoma normalno in dobrodošlo, da pripeljete dojenčka s seboj."
                },
                {
                    q: "Ali bo zvok fena motil mojega dojenčka?",
                    a: "Ponavadi ne — enakomeren zvok deluje kot bel šum in pogosto pomaga dojenčku, da se umiri, podobno zvokom iz maternice."
                },
                {
                    q: "Ali lahko med terminom dojim?",
                    a: "Seveda. Vzemite si toliko časa, kot ga potrebujete — brez naglice in brez občutka nelagodja."
                },
                {
                    q: "Ali naj s seboj pripeljem nekoga v pomoč z otrokom?",
                    a: "Ni obvezno, a je dobrodošlo. Veliko mamic pripelje partnerja, ki medtem z dojenčkom naredi krajši sprehod v bližini."
                }
            ]

        }

    },

    {
        slug: {
            en: "where-to-go-in-ljubljana-after-your-haircut",
            sl: "kam-v-ljubljani-po-frizuri"
        },

        category: "about",

        date: {
            en: "June 23, 2026",
            sl: "23. junij 2026"
        },

        title: {
            en: "Where To Go In Ljubljana This Summer After Your Haircut",
            sl: "Kam V Ljubljani To Poletje Po Frizuri?"
        },

        excerpt: {
            en: "A fresh cut changes more than your look — here's how to make the most of the rest of your day in Ljubljana.",
            sl: "Nova pričeska spremeni več kot le videz — tukaj je, kako izkoristiti preostanek dneva v Ljubljani."
        },

        body: {

            en: [
                "A fresh haircut changes more than your look — it tends to change your whole afternoon. Once you step out of the studio, Ljubljana's city centre is small enough that almost everywhere worth seeing is within a short walk.",
                "Tivoli Park is the easiest place to slow down: wide paths, plenty of shade, and enough space to just sit for a while and let your new style settle in.",
                "No visit is complete without ice cream in the old town. Wander through Prešeren Square, across the Triple Bridge, and along the Ljubljanica riverbank — the whole stretch is busiest, and most fun, in the summer evenings.",
                "For something calmer, a walk along the Ljubljanica after sunset is hard to beat — golden light, reflections on the water, and plenty of good angles if you want a photo of the new cut.",
                "If you have more time, the walk (or funicular ride) up to Ljubljana Castle rewards you with a view over the whole city — a good spot for a bit of quiet before heading back down.",
                "Summer in Ljubljana also means festival season — the Ljubljana Festival and the Ljubljana Jazz Festival both run through the warmer months, alongside plenty of smaller outdoor events around the city centre.",
                "Whether you end the day at Voyager Bar, TaBar, Georgie Bistro, or simply head home, the destination matters less than how you feel leaving the chair."
            ],

            sl: [
                "Nova pričeska spremeni več kot le videz — pogosto spremeni kar celo popoldne. Ko stopite iz studia, je center Ljubljane dovolj majhen, da je skoraj vse vredno ogleda oddaljeno le nekaj korakov.",
                "Tivoli je najlažji kraj za umiritev tempa: široke poti, veliko sence in dovolj prostora, da se za trenutek usedete in pustite, da se nova pričeska 'poleže'.",
                "Noben obisk ni popoln brez sladoleda v starem mestnem jedru. Sprehodite se čez Prešernov trg, preko Tromostovja in ob bregu Ljubljanice — ta del mesta je poleti zvečer najbolj živahen in zabaven.",
                "Za nekaj bolj umirjenega je težko preseči sprehod ob Ljubljanici po sončnem zahodu — zlata svetloba, odsevi na vodi in dovolj lepih kotov, če želite fotografijo nove pričeske.",
                "Če imate več časa, se sprehod (ali vožnja s vzpenjačo) do Ljubljanskega gradu obrestuje z razgledom na celo mesto — dober kraj za trenutek miru, preden se spustite nazaj.",
                "Poletje v Ljubljani pomeni tudi festivalsko sezono — Ljubljana Festival in Ljubljana Jazz Festival potekata skozi tople mesece, poleg številnih manjših dogodkov na prostem po centru mesta.",
                "Ne glede na to, ali dan zaključite v Voyager Baru, TaBaru, Georgie Bistroju ali preprosto odidete domov, cilj šteje manj kot občutek, s katerim zapustite frizerski stol."
            ]

        },

        faq: {

            en: [
                {
                    q: "What should I do in Ljubljana after getting my hair done?",
                    a: "The city centre is compact and walkable — popular options after a salon visit include Tivoli Park, ice cream in the old town, or an evening walk along the Ljubljanica river."
                },
                {
                    q: "Is Ljubljana Castle worth visiting on a short trip?",
                    a: "Yes — it's an easy walk or short funicular ride from the centre and gives you a view over the whole city, good for a quick stop between your appointment and dinner."
                },
                {
                    q: "What summer festivals happen in Ljubljana?",
                    a: "The Ljubljana Festival and the Ljubljana Jazz Festival both run through the warmer months, alongside smaller outdoor events around the city centre."
                },
                {
                    q: "Where is STATUS KAY located relative to the city centre?",
                    a: "The studio is in Ljubljana, the capital of Slovenia — across the street from the main train station and 100 m from the main bus station, within easy walking distance of Prešeren Square and the old town."
                }
            ],

            sl: [
                {
                    q: "Kaj lahko v Ljubljani počnem po urejanju las?",
                    a: "Center mesta je majhen in enostaven za peš raziskovanje — priljubljene možnosti po obisku salona so Tivoli, sladoled v starem mestnem jedru ali večerni sprehod ob Ljubljanici."
                },
                {
                    q: "Ali se splača obiskati Ljubljanski grad na kratkem izletu?",
                    a: "Da — do njega vodi enostaven sprehod ali kratka vožnja z vzpenjačo iz centra, ponuja pa razgled na celo mesto, kar je odlično za kratek postanek med terminom in večerjo."
                },
                {
                    q: "Kateri poletni festivali potekajo v Ljubljani?",
                    a: "Skozi tople mesece potekata Ljubljana Festival in Ljubljana Jazz Festival, poleg številnih manjših dogodkov na prostem po centru mesta."
                },
                {
                    q: "Kje se nahaja STATUS KAY glede na center mesta?",
                    a: "Studio je v Ljubljani, glavnem mestu Slovenije — nasproti glavne železniške postaje in 100 m od glavne avtobusne postaje, na enostavni peš razdalji od Prešernovega trga in starega mestnega jedra."
                }
            ]

        }

    },

    {
        slug: {
            en: "faq",
            sl: "pogosta-vprasanja"
        },

        category: "about",

        date: {
            en: "July 15, 2026",
            sl: "15. julij 2026"
        },

        title: {
            en: "Frequently Asked Questions",
            sl: "Pogosta vprašanja"
        },

        excerpt: {
            en: "Booking, cancellations, payment and what to expect at your first visit — answered in one place.",
            sl: "Rezervacije, odpovedi, plačilo in kaj pričakovati ob prvem obisku — zbrano na enem mestu."
        },

        body: {

            en: [
                "A few questions come up more than any other, so we've put the answers in one place. If you can't find what you're looking for here, just call or message us — we're happy to help."
            ],

            sl: [
                "Nekaj vprašanj se pojavlja pogosteje kot druga, zato smo odgovore zbrali na enem mestu. Če ne najdete tega, kar iščete, nas preprosto pokličite ali nam pišite — z veseljem pomagamo."
            ]

        },

        faq: {

            en: [
                {
                    q: "How do I book an appointment?",
                    a: "Easiest is online through our booking page — pick the service and time that suits you. You can also call or message us on Instagram."
                },
                {
                    q: "Can I cancel or reschedule my appointment?",
                    a: "Yes, just let us know at least 24 hours in advance so we can offer the slot to someone else."
                },
                {
                    q: "Do you accept card payment?",
                    a: "Yes, we accept both card and cash."
                },
                {
                    q: "Should I arrive early?",
                    a: "Right on time, or a couple of minutes late, is perfectly fine."
                },
                {
                    q: "Can I walk in without an appointment?",
                    a: "We're a small, one-on-one studio, so we recommend booking ahead. Walk-ins are welcome if we happen to have availability — feel free to call and ask."
                },
                {
                    q: "Do all colour services start with a consultation?",
                    a: "Yes, every colour appointment begins with a short consultation so the result is planned around your hair, not guessed at."
                },
                {
                    q: "Can I bring my child or baby with me?",
                    a: "Absolutely — our studio is quiet and one-on-one, which makes it easy to bring little ones along."
                },
                {
                    q: "Where can I park nearby?",
                    a: "Street parking on Miklošičeva, the Trdinova garage, and Tivolska cesta parking are all within a short walk — see our How To Get Here page for the full list, including bike, scooter and taxi options."
                },
                {
                    q: "Can I choose services different from what's on my gift voucher?",
                    a: "Of course — choose whatever you like and pay the difference for the rest."
                },
                {
                    q: "Where can I buy your gift voucher?",
                    a: "Right here at the salon — available for a haircut of your choice or a manicure of your choice. For bigger transformations or specific services that need a consultation, email us and we'll personalise a gift voucher for you."
                }
            ],

            sl: [
                {
                    q: "Kako rezerviram termin?",
                    a: "Najlažje je prek naše strani za rezervacije — izberite storitev in urnik, ki vam ustreza. Lahko nas tudi pokličete ali nam pišete na Instagramu."
                },
                {
                    q: "Ali lahko odpovem ali prestavim termin?",
                    a: "Da, sporočite nam vsaj 24 ur vnaprej, da lahko termin ponudimo komu drugemu."
                },
                {
                    q: "Ali sprejemate plačilo s kartico?",
                    a: "Da, sprejemamo tako kartico kot gotovino."
                },
                {
                    q: "Ali naj pridem prej?",
                    a: "Ob času ali kakšno minutko čez bo super."
                },
                {
                    q: "Ali lahko pridem brez termina?",
                    a: "Smo majhen, individualni studio, zato priporočamo rezervacijo vnaprej. Če imamo prosto mesto, so dobrodošli tudi obiski brez termina — pokličite in vprašajte."
                },
                {
                    q: "Ali se vsako barvanje začne s konzultacijo?",
                    a: "Da, vsak termin za barvanje se začne s kratko konzultacijo, da rezultat načrtujemo."
                },
                {
                    q: "Ali lahko pripeljem otroka ali dojenčka?",
                    a: "Seveda — naš studio je miren in individualen, zato je pripeljati malčka povsem enostavno."
                },
                {
                    q: "Kje lahko parkiram v bližini?",
                    a: "Cestno parkiranje na Miklošičevi, garaža Trdinova in parkirišče Tivolska cesta so vsi na kratki peš razdalji — celoten seznam, vključno s kolesi, skiroji in taksijem, najdete na strani Kako do nas."
                },
                {
                    q: "Ali lahko izberem storitve, ki so drugačne kot na darilnem bonu?",
                    a: "Seveda, izberite karkoli želite in ostalo doplačajte."
                },
                {
                    q: "Kje lahko kupim vaš darilni bon?",
                    a: "Pri nas v salonu — na voljo striženje po izbiri, manikura po izbiri. Za večje preobrazbe ali specifične storitve, ki potrebujejo posvet, nam pišite na mail in vam darilni bon personaliziramo."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-your-hair-smells-bad",
            sl: "zakaj-lasje-neprijetno-disijo"
        },

        category: "haircuts",

        date: {
            en: "April 20, 2026",
            sl: "20. april 2026"
        },

        title: {
            en: "Why Your Hair Smells Bad",
            sl: "Zakaj lasje neprijetno dišijo"
        },

        excerpt: {
            en: "Sebum, sweat, pollution, and poor-quality products are often to blame for unpleasant hair odor. Discover how a healthy scalp and the right technique can help your hair smell fresh again.",
            sl: "Sebum, znoj, onesnaženje in slabi izdelki so pogosto krivi za neprijeten vonj las. Odkrij, kako z zdravim lasiščem in pravo tehniko poskrbeti, da lasje spet dišijo sveže."
        },

        body: {

            en: [
                "Nothing kills your confidence faster than hair that doesn't smell fresh. You just did it, maybe even styled it, and yet something's still off. So what's going on?",

                "Unpleasant hair odor is usually caused by a combination of sebum, sweat, pollution, and poor-quality products. If you often use dry shampoo, skip washing, or layer on multiple products, bacteria can build up on the scalp. And that's exactly what causes the bad smell.",

                "The solution is simpler than you might think.",

                "It all starts with the scalp. Healthy, clean hair comes from a healthy scalp. A gentle cleansing treatment every few weeks helps remove buildup you can't even see.",

                "Products matter too. Cheap or heavy products can linger in the hair and lose their freshness quickly. Professional products, on the other hand, keep your hair looking good AND smelling fresh for longer, without weighing it down.",

                "And last but not least, there's technique. Simply not drying your hair completely can cause problems. Slightly damp roots are the perfect environment for odor to develop.",

                "At the end of the day, your hair should reflect your energy. Clean, fresh, and effortless.",

                "If you often deal with unpleasant hair odor (even after washing), it might be time for professional care. Proper cleansing, a tailored treatment, and expert styling can completely transform how your hair smells.",

                "✨ Ready for the feeling of completely fresh hair? Book your appointment today and feel the difference."
            ],

            sl: [
                "Nič ne uniči samozavesti hitreje kot lasje, ki ne dišijo sveže. Pravkar si jih uredila, mogoče celo oblikovala, pa vseeno nekaj ni v redu. Kaj se torej dogaja?",

                "Neprijeten vonj las običajno nastane zaradi kombinacije sebuma, potenja, onesnaženja in slabih izdelkov. Če pogosto uporabljaš suhi šampon, preskakuješ pranje ali nanašaš več slojev izdelkov, se lahko na lasišču naberejo bakterije. In prav te povzročajo neprijeten vonj.",

                "Rešitev je preprostejša, kot si misliš.",

                "Vse se začne pri lasišču. Zdravi, čisti lasje izhajajo iz zdravega lasišča. Nežen čistilni tretma vsakih nekaj tednov pomaga odstraniti nevidne ostanke.",

                "Pomembni so tudi izdelki. Ceneni ali pretežki izdelki se lahko zadržujejo na laseh in hitro izgubijo svežino. Profesionalni izdelki pa poskrbijo, da lasje dlje ostanejo lepi IN sveži, brez občutka obteženosti.",

                "In nenazadnje je tu še tehnika. Že to, da las ne posušiš popolnoma, lahko povzroči težave. Rahlo vlažne korenine so popolno okolje za razvoj neprijetnega vonja.",

                "Na koncu dneva bi morali tvoji lasje odražati tvojo energijo. Čisti, sveži in brez napora.",

                "Če se pogosto soočaš z neprijetnim vonjem las (tudi po pranju), je morda čas za profesionalno nego. Pravilno čiščenje, prilagojen tretma in strokovno oblikovanje lahko popolnoma spremenijo vonj tvojih las.",

                "✨ Si pripravljena na občutek popolnoma svežih las? Rezerviraj svoj termin še danes in občuti razliko."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why doesn't my hair smell fresh even right after washing?",
                    a: "It's often a combination of sebum, sweat, pollution, or product buildup on the scalp that regular washing doesn't fully remove."
                },

                {
                    q: "Can dry shampoo make hair odor worse?",
                    a: "Yes, overusing it can let bacteria build up on the scalp, which causes the unpleasant smell."
                },

                {
                    q: "What can I do if the odor keeps coming back despite regular washing?",
                    a: "We recommend a gentle scalp cleansing treatment every few weeks along with professional products that keep your scalp and hair clean and fresh for longer."
                }
            ],

            sl: [
                {
                    q: "Zakaj moji lasje ne dišijo sveže, čeprav sem jih pravkar oprala?",
                    a: "Vzrok je pogosto kombinacija sebuma, znoja, onesnaženja ali ostankov izdelkov na lasišču, ki jih navadno pranje ne odstrani povsem."
                },

                {
                    q: "Ali suhi šampon lahko poslabša vonj las?",
                    a: "Da, pri prepogosti uporabi se lahko na lasišču naberejo bakterije, ki povzročajo neprijeten vonj."
                },

                {
                    q: "Kaj lahko naredim, če se vonj pojavlja kljub rednemu pranju?",
                    a: "Priporočamo nežen čistilni tretma za lasišče vsakih nekaj tednov ter uporabo profesionalnih izdelkov, ki lasišče in lase pustijo čiste in sveže dlje časa."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-make-your-blowout-last-longer",
            sl: "kako-podaljsati-obstojnost-fen-frizure"
        },

        category: "haircuts",

        date: {
            en: "March 30, 2026",
            sl: "30. marec 2026"
        },

        title: {
            en: "How to Make Your Blowout Last Longer",
            sl: "Kako podaljšati obstojnost fen frizure"
        },

        excerpt: {
            en: "A good blowout should last three to five days if you take care of it the right way. Discover simple tricks for keeping your volume, freshness, and smoothness for longer.",
            sl: "Dobra fen frizura naj bi zdržala tri do pet dni, če zanjo pravilno skrbiš. Odkrij preproste trike, kako ohraniti volumen, svežino in gladkost čim dlje."
        },

        body: {

            en: [
                "You know that feeling when you leave the salon with hair that's smooth and full of volume? Then, just a few days later, it suddenly goes flat, staticky, or greasy. The truth is, a good blowout should last at least three to five days if you take care of it the right way.",

                "One of the biggest mistakes is touching your hair too much. It might feel natural to run your fingers through it, but doing so transfers oil from your hands and your style loses its shape faster. Sleep matters too. Switching to a silk or satin pillowcase, and wearing a loose braid or bun to bed, can go a long way toward keeping your look fresh and smooth.",

                "Dry shampoo is essential too, but most people use it too late. Instead of waiting for your hair to get oily, apply it on day two to prevent oil from building up in the first place. If you work out, protect your style by pinning your hair up loosely and using a sweatband to keep moisture away from your roots. After exercising, let your hair cool down before restyling it. And once volume starts to drop, a quick refresh with a round brush and a bit of heat can instantly bring your style back to life.",

                "What a lot of people don't realize is that lasting results don't come from products alone. Technique matters just as much. At Status Kay, we make sure your style is shaped to actually hold up, so it looks just as good days after your visit.",

                "If you're tired of your blowout lasting just one day, it might be time to experience the difference. Book your appointment while spots are still available.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Poznaš tisti občutek, ko zapustiš salon in so lasje gladki, polni volumna? Potem pa že čez nekaj dni nenadoma postanejo sploščeni, naelektreni ali mastni. Resnica je, da bi dobra fen frizura morala zdržati vsaj tri do pet dni, če zanjo skrbiš na pravi način.",

                "Ena največjih napak je, da se las preveč dotikaš. Morda se zdi naravno, da greš s prsti skozi lase, vendar s tem prenašaš maščobo z rok in frizura hitreje izgubi obliko. Pomemben dejavnik je tudi spanje. Menjava na svileno ali satenasto prevleko za vzglavnik ter ohlapna kita ali figo pred spanjem lahko močno pomagata ohraniti svež in gladek videz.",

                "Suhi šampon je prav tako ključen, vendar ga večina uporablja prepozno. Namesto da čakaš, da lasje postanejo mastni, ga nanesi že drugi dan, da preprečiš nabiranje maščobe. Če telovadiš, zaščiti frizuro tako, da lase rahlo spneš in uporabiš trak za potenje, ki prepreči vlago pri koreninah. Po vadbi pusti, da se lasje ohladijo, preden jih ponovno urejaš. Ko pa volumen začne padati, lahko hiter “refresh” z okroglo krtačo in malo toplote takoj povrne življenje tvoji frizuri.",

                "Kar veliko ljudi ne ve, je to, da dolgotrajen rezultat ne temelji samo na izdelkih. Temelji tudi na tehniki. V Status Kay poskrbimo, da je tvoja pričeska oblikovana tako, da dejansko zdrži, zato izgleda enako dobro še več dni po obisku.",

                "Če si naveličana, da tvoja fen frizura zdrži le en dan, je morda čas, da izkusiš razliko. Rezerviraj svoj termin, dokler so še na voljo prosti termini."
            ]

        },

        faq: {

            en: [
                {
                    q: "How long should a good blowout actually last?",
                    a: "With the right care, it should last three to five days without going flat, greasy, or staticky."
                },

                {
                    q: "When's the best time to apply dry shampoo?",
                    a: "Apply it on day two, before your hair gets oily, that way you prevent buildup at the roots."
                },

                {
                    q: "How do I protect my style if I'm working out?",
                    a: "Pin your hair up loosely and wear a sweatband, then let your hair cool down after exercising before restyling it."
                }
            ],

            sl: [
                {
                    q: "Kako dolgo naj dejansko zdrži dobra fen frizura?",
                    a: "Pri pravilni negi naj bi zdržala od tri do pet dni, brez da postane sploščena, mastna ali naelektrena."
                },

                {
                    q: "Kdaj je najboljši trenutek za nanos suhega šampona?",
                    a: "Nanesi ga že drugi dan, še preden postanejo lasje mastni, tako preprečiš nabiranje maščobe pri koreninah."
                },

                {
                    q: "Kako zaščitim frizuro, če grem telovadit?",
                    a: "Lase rahlo spni in uporabi trak za potenje, po vadbi pa počakaj, da se lasje ohladijo, preden jih ponovno urejaš."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-speed-up-hair-growth",
            sl: "kako-pospesiti-rast-las"
        },

        category: "haircuts",

        date: {
            en: "March 23, 2026",
            sl: "23. marec 2026"
        },

        title: {
            en: "How to Speed Up Hair Growth",
            sl: "Kako pospešiti rast las"
        },

        excerpt: {
            en: "Hair growth doesn't come from a miracle product, it comes from the right habits. Discover what actually helps your hair grow longer and stay stronger between salon visits.",
            sl: "Rast las ni odvisna od čudežnega izdelka, ampak od pravih navad. Odkrij, kaj resnično pomaga tvojim lasem rasti dlje in ostati močnejši med obiski salona."
        },

        body: {

            en: [
                "If you've been looking at your hair lately thinking \"why isn't this growing at all?\", you're not alone. A lot of our clients in Ljubljana come to us feeling like their hair is damaged, breaking, or simply not making progress. The truth is, hair growth doesn't depend on one \"miracle\" product, it depends on the right habits (and avoiding the wrong ones).",

                "Your hair is growing. On average, about 1–1.5 cm per month. The problem is breakage. Dry ends, heat, and over-processing cause hair to break before it ever reaches that length. That's why regular trims are essential. They help you hold onto length instead of losing it.",

                "Your scalp matters more than you think. Healthy hair starts at the roots. If the scalp is oily, congested, or neglected, growth slows down. Even a simple scalp massage (2–3 minutes a day) improves circulation and encourages stronger growth.",

                "And here's something most people overlook: what you do at home between salon visits matters just as much as what we do. The wrong shampoo, too much heat, or hairstyles that are too tight can damage hair long-term, even if it looks fine at first glance.",

                "Good news! With the right routine and a hairdresser who truly understands your hair, you can see a difference in just a few months. That's exactly our focus, not just looking good for one day, but healthy, strong hair in the long run.",

                "If you're tired of guessing what your hair needs, we'd love to figure it out together. Book your appointment and let's find a solution that actually works ✨",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Če v zadnjem času gledaš lase in razmišljaš »zakaj to sploh ne raste?«, potem nisi edina. Veliko naših strank v Ljubljani pride z občutkom, da so njihovi lasje poškodovani, se lomijo ali pa enostavno ne napredujejo. Resnica je, da rast las ni odvisna od enega “čudežnega” izdelka, ampak od pravih navad (in izogibanja napačnim).",

                "Tvoji lasje rastejo. V povprečju približno 1–1,5 cm na mesec. Problem je lomljenje. Suhi konci, toplota in prekomerna obdelava povzročijo, da se lasje zlomijo, še preden dosežejo dolžino. Zato so redna striženja ključna. Pomagajo ohraniti dolžino namesto da jo izgubljaš.",

                "Lasišče je pomembnejše, kot si misliš. Zdravi lasje se začnejo pri koreninah. Če je lasišče mastno, zamašeno ali zanemarjeno, se rast upočasni. Že preprosta masaža lasišča (2–3 minute na dan) izboljša prekrvavitev in spodbuja močnejšo rast.",

                "In še nekaj, kar večina ljudi spregleda: to, kar delaš doma med obiski salona, je enako pomembno kot to, kar naredimo mi. Napačen šampon, preveč toplote ali pretesne pričeske lahko dolgoročno poškodujejo lase, tudi če na prvi pogled izgledajo v redu.",

                "Dobra novica! S pravo rutino in frizerjem, ki res razume tvoje lase, lahko vidiš razliko že v nekaj mesecih. Prav to je naš fokus. Ne samo lep izgled za en dan, ampak dolgoročno zdravi in močni lasje.",

                "Če si naveličana ugibanja, kaj tvoji lasje potrebujejo, to z veseljem rešimo skupaj. Rezerviraj svoj termin in skupaj bomo našli rešitev, ki dejansko deluje ✨"
            ]

        },

        faq: {

            en: [
                {
                    q: "How fast does hair actually grow?",
                    a: "On average about 1–1.5 cm per month, the real obstacle isn't slow growth but breakage, which regular trims help prevent."
                },

                {
                    q: "Does scalp massage really help with hair growth?",
                    a: "Yes, just a few minutes of massage a day improves circulation in the scalp and encourages stronger growth."
                },

                {
                    q: "What can I do at home for healthier hair between salon visits?",
                    a: "Use a shampoo suited to your hair, limit heat styling, and avoid overly tight hairstyles, all of this affects hair health in the long run."
                }
            ],

            sl: [
                {
                    q: "Kako hitro dejansko rastejo lasje?",
                    a: "V povprečju približno 1–1,5 cm na mesec, glavna ovira pa ni počasna rast, temveč lomljenje konic, ki ga preprečimo z rednim striženjem."
                },

                {
                    q: "Ali masaža lasišča res pomaga pri rasti las?",
                    a: "Da, že nekaj minut masaže na dan izboljša prekrvavitev lasišča in spodbuja močnejšo rast las."
                },

                {
                    q: "Kaj lahko sama naredim doma za bolj zdrave lase med obiski salona?",
                    a: "Uporabljaj šampon, prilagojen svojim lasem, omeji uporabo toplote in izogibaj se pretesnim pričeskam, saj vse to dolgoročno vpliva na zdravje las."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-get-to-our-salon",
            sl: "kako-do-nasega-salona"
        },

        category: "about",

        date: {
            en: "March 9, 2026",
            sl: "9. marec 2026"
        },

        title: {
            en: "How to Get to Our Salon",
            sl: "Kako do našega salona"
        },

        excerpt: {
            en: "Status Kay is located right in the heart of Ljubljana, across the street from the main train station and 100 m from the main bus station. Discover how easy it is to reach us, wherever you're coming from.",
            sl: "Status Kay se nahaja v samem središču Ljubljane, nasproti glavne železniške postaje in 100 m od glavne avtobusne postaje. Odkrij, kako enostavno je priti do nas, ne glede na to, od kod prihajaš."
        },

        body: {

            en: [
                "When choosing a hairdresser, a convenient location matters almost as much as great results. The more accessible the salon, the easier it is to keep up with a fresh, polished, healthy look. That's exactly why Status Kay is located right in the heart of Ljubljana.",

                "You'll find us at Trg Osvobodilne fronte 13, across the street from Ljubljana's main train station and just 100 m from the main bus station. Whether you're coming from work, from home, or from another part of the city, getting to us is quick and easy.",

                "One of the biggest advantages of our location is excellent public transport connections. If you arrive in Ljubljana by train or bus, you're practically already here. Just a short walk separates you from the salon.",

                "For anyone using city transport, the Kolodvor stop is also nearby, served by LPP bus lines 2, 9, and 25. That means you can easily reach the salon from various parts of Ljubljana.",

                "Since we're located in the city center, many clients easily combine their visit with other errands. Some stop by on their lunch break, others before meeting friends, and many use their appointment as a nice moment for themselves in the middle of a busy day.",

                "Instead of rearranging your whole day around a salon visit, you can simply stop by, enjoy a relaxing service, and carry on with your day feeling confident and freshly styled.",

                "At Status Kay, we believe hair care should be simple, from how easily you find us to how easily you book your appointment.",

                "Book your appointment online, choose the time that suits you best, and we'll take care of the rest.",

                "Your next great hair day is closer than you think. ✨",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Ko izbirate frizerja, je priročna lokacija skoraj tako pomembna kot odlični rezultati. Bolj kot je salon dostopen, lažje je redno skrbeti za svež, urejen in zdrav videz las. Prav zato se Status Kay nahaja na odlični lokaciji v samem središču Ljubljane.",

                "Najdete nas na naslovu Trg Osvobodilne fronte 13, nasproti glavne železniške postaje Ljubljana in le 100 m od glavne avtobusne postaje. Ne glede na to, ali prihajate iz službe, od doma ali iz drugega dela mesta, je pot do nas hitra in enostavna.",

                "Ena največjih prednosti naše lokacije je odlična povezanost z javnim prometom. Če v Ljubljano prispete z vlakom ali avtobusom, ste skoraj že pri nas. Do salona vas loči le kratek sprehod.",

                "Za vse, ki uporabljate mestni promet, je v bližini tudi postaja Kolodvor, kjer ustavljajo avtobusi LPP na linijah 2, 9 in 25. To pomeni, da lahko do salona enostavno pridete iz različnih delov Ljubljane.",

                "Ker se nahajamo v centru mesta, številne stranke svoj obisk pri nas zlahka združijo z drugimi opravki. Nekateri se oglasijo med odmorom za kosilo, drugi pred srečanjem s prijatelji, mnogi pa svoj termin izkoristijo kot prijeten trenutek zase sredi napornega dne.",

                "Namesto da bi cel dan prilagajali obisku frizerja, se lahko preprosto oglasite pri nas, uživate v sproščujoči storitvi in nadaljujete dan z občutkom samozavesti in svežega videza.",

                "Pri Status Kay verjamemo, da mora biti skrb za lase preprosta. Od tega, kako nas najdete, do rezervacije termina.",

                "Rezervirajte svoj termin prek spleta, izberite čas, ki vam najbolj ustreza, mi pa bomo poskrbeli za vse ostalo.",

                "Vaš naslednji odličen dan za lase je bližje, kot si mislite. ✨"
            ]

        },

        faq: {

            en: [
                {
                    q: "Where exactly is Status Kay located?",
                    a: "You'll find us at Trg Osvobodilne fronte 13, across the street from Ljubljana's main train station and 100 m from the main bus station."
                },

                {
                    q: "How do I get to the salon by bus?",
                    a: "The Kolodvor stop is nearby, served by LPP lines 2, 9, and 25, and from there it's just a short walk to us."
                },

                {
                    q: "Can I easily fit a salon visit into my lunch break?",
                    a: "Yes, thanks to our central location, many clients stop by during their lunch break or between other errands."
                }
            ],

            sl: [
                {
                    q: "Kje točno se nahaja salon Status Kay?",
                    a: "Najdete nas na naslovu Trg Osvobodilne fronte 13, nasproti glavne železniške postaje v Ljubljani in 100 m od glavne avtobusne postaje."
                },

                {
                    q: "Kako pridem do salona z avtobusom?",
                    a: "V bližini je postaja Kolodvor, kjer ustavljajo linije LPP 2, 9 in 25, od tam pa je do nas le kratek sprehod."
                },

                {
                    q: "Ali je obisk salona mogoče enostavno vključiti v odmor za kosilo?",
                    a: "Da, prav zaradi lokacije v centru mesta številne stranke k nam pridejo med odmorom za kosilo ali med drugimi opravki."
                }
            ]

        }

    },

    {
        slug: {
            en: "spring-hairstyles-for-busy-working-women",
            sl: "pomladne-frizure-za-zaposlene-zenske"
        },

        category: "trends",

        date: {
            en: "March 2, 2026",
            sl: "2. marec 2026"
        },

        title: {
            en: "Spring Hairstyles for Busy Working Women",
            sl: "Pomladne frizure za zaposlene ženske"
        },

        excerpt: {
            en: "Simple, low-maintenance spring hairstyles and colors that look polished without extra time or stress. Discover this season's top trends for busy working women.",
            sl: "Enostavne, nizko vzdrževalne pomladne pričeske in barve, ki delujejo urejeno brez dodatnega časa in stresa. Odkrij letošnje najboljše trende za zaposlene ženske."
        },

        body: {

            en: [
                "Spring is the perfect time for a fresh start, and that goes for your hair too. But if your schedule is packed with work, social commitments, and everyday tasks, the last thing you want is a hairstyle that takes ages to style. The good news is that there are simple spring hairstyles that will have you looking polished and confident without any extra stress.",

                "This spring, the focus is on soft movement, a natural look, and styles that grow out gracefully. Layers that add volume without demanding much styling, soft face-framing pieces that freshen up your look, and natural color transitions that still look great weeks after your salon visit. These choices are ideal for women who want to look put-together while keeping their hair routine simple.",

                "Soft layering is one of the most popular choices this spring, since it highlights texture and shape while staying easy to maintain. Paired with a subtle balayage or a glossy toner, it creates a fresh, healthy look that doesn't demand frequent salon visits. For those who prefer shorter styles, a modern, slightly textured bob is a great choice, combining elegance with practicality.",

                "Low-maintenance color is another key trend this spring. Warm brown tones, soft blonde shades, and gently blended highlights are designed to fade naturally and grow out beautifully, meaning fewer touch-ups and more confidence between salon visits. Instead of drastic changes, more and more clients are opting for subtle enhancements that complement their natural look and lifestyle.",

                "Low-maintenance doesn't mean boring, it means thoughtful. The right hairstyle and color should support your pace of life, not make it harder. With a personalized approach and expert advice, you can achieve a fresh, modern, effortless spring look that fits perfectly into your everyday life.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Pomlad je popoln čas za svež začetek in to velja tudi za vaše lase. Če pa je vaš urnik poln dela, družabnih obveznosti in vsakodnevnih nalog, si verjetno ne želite pričeske, ki zahteva veliko časa za urejanje. Dobra novica je, da obstajajo enostavne pomladne pričeske, s katerimi boste videti urejeno in samozavestno brez dodatnega stresa.",

                "To pomlad so v ospredju mehko gibanje, naravni videz in pričeske, ki lepo rastejo. Plasti, ki dodajo volumen brez zahtevnega oblikovanja, nežni prameni ob obrazu, ki osvežijo videz, ter naravni barvni prehodi, ki izgledajo odlično tudi več tednov po obisku salona. Takšne izbire so idealne za ženske, ki želijo izgledati urejeno in hkrati ohraniti preprosto rutino nege las.",

                "Mehko plastenje je ena najbolj priljubljenih odločitev za pomlad, saj poudari teksturo in obliko pričeske, obenem pa ostane enostavno za vzdrževanje. V kombinaciji z nežnim balayageom ali sijajnim toniranjem ustvari svež in zdrav videz, ki ne zahteva pogostih obiskov salona. Za tiste, ki imajo raje krajše pričeske, je sodoben, rahlo teksturiran paž odlična izbira, saj združuje eleganco in praktičnost.",

                "Pomemben trend te pomladi so tudi nizko vzdrževalne barve. Topli rjavi toni, mehke blond nianse in nežno zabrisani prameni so zasnovani tako, da se naravno izpirajo in lepo rastejo, kar pomeni manj popravkov in več samozavesti med obiski salona. Namesto drastičnih sprememb se vse več strank odloča za subtilne izboljšave, ki dopolnjujejo njihov naravni videz in življenjski slog.",

                "Nizko vzdrževalna pričeska ne pomeni dolgočasno, ampak premišljeno. Prava frizura in barva morata podpirati vaš življenjski tempo, ne pa ga oteževati. S prilagojenim pristopom in strokovnim svetovanjem lahko dosežete svež, moderen in sproščen pomladni videz, ki se popolnoma prilega vašemu vsakdanu."
            ]

        },

        faq: {

            en: [
                {
                    q: "Which spring hairstyle works best if I don't have much time to style my hair?",
                    a: "Soft layering paired with a subtle balayage or toner is a great choice, it highlights shape while staying easy to maintain."
                },

                {
                    q: "Do spring hair colors need to be dramatic to look fresh?",
                    a: "Not at all, quite the opposite. Low-maintenance colors like warm brown tones or soft blonde shades fade naturally and grow out beautifully."
                },

                {
                    q: "Is a low-maintenance style suitable for a professional setting too?",
                    a: "Absolutely, it looks polished and thoughtful, never boring, and supports your everyday pace without extra styling time."
                }
            ],

            sl: [
                {
                    q: "Katera pomladna pričeska je najbolj primerna, če imam malo časa za urejanje?",
                    a: "Mehko plastenje v kombinaciji z nežnim balayageom ali toniranjem je odlična izbira, saj poudari obliko in ostane enostavno za vzdrževanje."
                },

                {
                    q: "Ali morajo biti pomladne barve las res drastične, da izgledajo sveže?",
                    a: "Ne, ravno nasprotno. Nizko vzdrževalne barve, kot so topli rjavi toni ali mehke blond nianse, se naravno izpirajo in lepo rastejo."
                },

                {
                    q: "Je nizko vzdrževalna pričeska primerna tudi za poslovno okolje?",
                    a: "Vsekakor, saj takšna pričeska deluje urejeno in premišljeno, ne pa dolgočasno, in podpira tvoj vsakdanji tempo brez dodatnega časa za urejanje."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-you-should-never-peel-polish-off-your-nails",
            sl: "zakaj-nikoli-ne-smes-puliti-laka-dol-iz-nohta"
        },

        category: "nails",

        date: {
            en: "February 23, 2026",
            sl: "23. februar 2026"
        },

        title: {
            en: "Why You Should Never Peel Polish Off Your Nails",
            sl: "Zakaj nikoli ne smeš puliti laka dol iz nohta"
        },

        excerpt: {
            en: "Peeling off gel polish might seem harmless, but it actually damages your natural nail and weakens it for weeks. Discover why proper polish removal matters so much.",
            sl: "Puljenje gel laka se zdi neškodljivo, a v resnici poškoduje naravni noht in ga oslabi za tedne. Odkrij, zakaj je pravilna odstranitev laka tako pomembna."
        },

        body: {

            en: [
                "Have you ever started peeling gel polish or long-lasting polish off your nails once it began lifting? It looks harmless, but you're actually doing a lot of damage to your natural nails.",

                "When you peel polish off, you're not just removing the color. You're tearing away the top layer of the natural nail along with it. That means nails become thinner, weaker, and more brittle.",

                "The result? Nails split and break more easily and look unhealthy, the exact opposite of the polished, put-together look you actually want.",

                "On top of that, peeling polish often leaves the nail surface uneven. The next coat of polish then grips worse, chips faster, and the overall result isn't as nice or long-lasting. That means more touch-ups, more cost, and more frustration.",

                "One more important thing: a damaged nail needs weeks, sometimes months, to fully recover. One minute of peeling can mean weeks of weakened nails.",

                "Proper polish removal is always gentle and professional. In the salon, we use the right technique and materials to protect your natural nails and keep them healthy. That way your nails stay strong, smooth, and ready for the next beautiful coat.",

                "If you want your nails to always look polished, elegant, and \"Instagram ready,\" the most important rule is simple: never peel your polish off, always remove it properly.",

                "If you're not sure how to remove polish from your nails, stop by our salon, we'll be happy to help.",

                "Your nails will thank you 💅",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Si že kdaj začela puliti gel lak ali trajni lak z nohtov, ko se je začel dvigovati? Videti je neškodljivo, a v resnici s tem delaš veliko škodo svojim naravnim nohtom.",

                "Ko lak pulimo dol, ne odstranimo samo barve. Z njim odtrgamo tudi zgornjo plast naravnega nohta. To pomeni, da nohti postanejo tanjši, šibkejši in bolj lomljivi.",

                "Posledica? Nohti se hitreje cepijo, lomijo in izgledajo nezdravo. Ravno nasprotno od tistega urejenega, estetskega videza, ki si ga želiš.",

                "Poleg tega puljenje laka pogosto povzroči neravno površino nohta. Naslednji nanos laka se zato slabše oprime, hitreje odstopi in celoten rezultat ni več tako lep in obstojen. To pomeni več popravkov, več stroškov in več frustracije.",

                "Še ena pomembna stvar: poškodovan noht potrebuje tedne ali celo mesece, da se popolnoma obnovi. Ena minuta puljenja lahko pomeni dolgotrajno oslabljene nohte.",

                "Pravilna odstranitev laka je vedno nežna in profesionalna. V salonu se uporablja ustrezna tehnika in materiali, ki zaščitijo tvoje naravne nohte in ohranijo njihovo zdravje. Tako nohti ostanejo močni, gladki in pripravljeni na naslednji čudovit nanos.",

                "Če želiš, da tvoji nohti vedno izgledajo urejeni, elegantni in “Instagram ready”, je najpomembnejše pravilo preprosto: laka nikoli ne pulimo – vedno ga odstranimo pravilno.",

                "Če ne veš kako odstraniti lak iz nohta, pa se oglasi v našem salonu, kjer ti bomo z veseljem pomagali.",

                "Tvoji nohti ti bodo hvaležni 💅"
            ]

        },

        faq: {

            en: [
                {
                    q: "Why is peeling gel polish off so damaging?",
                    a: "Because you tear away the top layer of the natural nail along with the polish, which makes nails thinner, weaker, and more brittle."
                },

                {
                    q: "How long does a damaged nail take to recover?",
                    a: "It can take weeks or even months, so it's much better to wait for proper removal than to peel it off yourself."
                },

                {
                    q: "What should I do if my polish starts lifting?",
                    a: "Stop by the salon and we'll remove it gently and professionally, keeping your nails healthy and ready for their next coat."
                }
            ],

            sl: [
                {
                    q: "Zakaj je puljenje gel laka tako škodljivo?",
                    a: "Ker z lakom odtrgaš tudi zgornjo plast naravnega nohta, zaradi česar nohti postanejo tanjši, šibkejši in bolj lomljivi."
                },

                {
                    q: "Koliko časa potrebuje poškodovan noht, da si opomore?",
                    a: "Lahko traja tedne ali celo mesece, zato je bolje počakati na pravilno odstranitev kot pa hitro potegniti lak."
                },

                {
                    q: "Kaj naj naredim, če se mi lak začne dvigovati?",
                    a: "Oglasi se v salonu, kjer ga bomo nežno in strokovno odstranili, tako da bodo tvoji nohti ostali zdravi in pripravljeni na naslednji nanos."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-keep-your-nails-strong-between-salon-visits",
            sl: "kako-ohraniti-mocne-nohte-med-obiski-salona"
        },

        category: "nails",

        date: {
            en: "February 16, 2026",
            sl: "16. februar 2026"
        },

        title: {
            en: "How to Keep Your Nails Strong Between Salon Visits",
            sl: "Kako ohraniti močne nohte med obiski salona"
        },

        excerpt: {
            en: "Beautiful nails matter beyond just your salon day. Discover simple daily habits that keep your nails strong, hydrated, and polished between appointments.",
            sl: "Lepi nohti niso pomembni le na dan obiska salona. Odkrij preproste vsakodnevne navade, ki ohranjajo tvoje nohte močne, hidrirane in urejene med termini."
        },

        body: {

            en: [
                "Beautiful, strong nails matter not just on the day you leave the salon, but in the weeks that follow too. For modern, style-conscious clients who want to always look polished and confident, proper nail care between visits is key to a long-lasting, flawless look.",

                "Hydration comes first. Just like hair and skin, nails need moisture to stay healthy and resilient. Applying cuticle oil daily helps prevent breakage and splitting, especially if you often wear gel polish or long-lasting manicures. We use professional O.P.I products, designed to nourish the natural nail while extending the life of your manicure.",

                "It's also important to pay attention to everyday habits. Opening packaging with your nails, frequently sanitizing your hands, or using your nails as tools can weaken their structure. It's a good idea to wear gloves while cleaning and to limit prolonged contact with water, as this helps nails stay strong.",

                "Proper at-home maintenance also plays a big role. Never peel off gel or polish yourself, doing so damages the natural surface of the nail. Professional removal at the salon keeps nails healthy and delivers better results in the long run.",

                "Diet also affects nail strength. A balanced diet rich in biotin, protein, and vitamins supports healthy nail growth and helps nails look better between salon visits.",

                "For the best results, regular professional care is essential. Quality products, expert technique, and a personalized approach ensure your nails stay strong, elegant, and well-groomed.",

                "Book your nail care appointment and secure a flawless, long-lasting look that complements your whole style.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Lepi in močni nohti niso pomembni samo na dan, ko zapustite salon, temveč tudi v tednih, ki sledijo. Za sodobne, estetsko ozaveščene stranke, ki želijo vedno delovati urejeno in samozavestno, je pravilna nega nohtov med obiski ključna za dolgotrajen in brezhiben videz.",

                "Najprej je ključna hidracija. Tako kot lasje in koža tudi nohti potrebujejo vlago, da ostanejo zdravi in odporni. Vsakodnevna uporaba olja za obnohtno kožico pomaga preprečevati lomljenje in cepljenje, še posebej, če pogosto nosite gel lak ali trajne manikure. Pri nas uporabljamo profesionalne izdelke znamke O.P.I, ki so zasnovani tako, da negujejo naravni noht in hkrati podaljšajo obstojnost vaše manikure.",

                "Pomembno je tudi, da ste pozorni na vsakodnevne navade. Odpiranje embalaže z nohti, pogosto razkuževanje rok ali uporaba nohtov kot orodja lahko oslabi njihovo strukturo. Priporočljivo je nošenje rokavic pri čiščenju in omejevanje dolgotrajnega stika z vodo, saj to pomaga ohranjati trdnost nohtov.",

                "Pravilno vzdrževanje doma ima prav tako veliko vlogo. Nikoli ne odstranjujte gela ali laka z luščenjem, saj s tem poškodujete naravno površino nohta. Strokovna odstranitev v salonu ohranja zdrave nohte in zagotavlja boljše dolgoročne rezultate.",

                "Na moč nohtov vpliva tudi prehrana. Uravnotežena prehrana, bogata z biotinom, beljakovinami in vitamini, podpira zdravo rast nohtov in pripomore k lepšemu videzu med obiski salona.",

                "Za najboljše rezultate pa je ključna redna profesionalna nega. Kakovostni izdelki, strokovna obdelava in individualen pristop pa poskrbijo, da so vaši nohti vedno močni, elegantni in urejeni.",

                "Rezervirajte svoj termin za nego nohtov in si zagotovite popoln, dolgotrajen videz, ki dopolni vaš celoten stil."
            ]

        },

        faq: {

            en: [
                {
                    q: "How often should I use cuticle oil?",
                    a: "Daily is best, regular hydration helps prevent breakage and splitting, especially if you often wear gel polish."
                },

                {
                    q: "Is it really harmful to peel off gel polish myself at home?",
                    a: "Yes, peeling damages the natural surface of the nail. We always recommend professional removal at the salon to keep nails healthy."
                },

                {
                    q: "Does diet really affect nail strength?",
                    a: "Yes, a balanced diet rich in biotin, protein, and vitamins supports healthy nail growth and shows between salon visits too."
                }
            ],

            sl: [
                {
                    q: "Kako pogosto naj uporabljam olje za obnohtno kožico?",
                    a: "Najbolje je vsak dan, saj redna hidracija preprečuje lomljenje in cepljenje, še posebej če pogosto nosiš gel lak."
                },

                {
                    q: "Ali je res škodljivo, če sama odstranim gel lak doma?",
                    a: "Da, luščenje poškoduje naravno površino nohta. Vedno priporočamo strokovno odstranitev v salonu, ki ohranja zdravje nohtov."
                },

                {
                    q: "Ali prehrana res vpliva na moč nohtov?",
                    a: "Da, uravnotežena prehrana, bogata z biotinom, beljakovinami in vitamini, podpira zdravo rast nohtov in se pozna tudi med obiski salona."
                }
            ]

        }

    },

    {
        slug: {
            en: "the-most-common-hair-care-mistakes",
            sl: "najpogostejse-napake-pri-negi-las"
        },

        category: "haircuts",

        date: {
            en: "February 9, 2026",
            sl: "9. februar 2026"
        },

        title: {
            en: "The Most Common Hair Care Mistakes",
            sl: "Najpogostejše napake pri negi las"
        },

        excerpt: {
            en: "From the wrong shampoo to overusing dry shampoo, discover the most common mistakes that damage your hair, and how we avoid them at Status Kay.",
            sl: "Od napačnega šampona do pretirane uporabe suhega šampona, odkrij najpogostejše napake, ki škodujejo tvojim lasem, in kako se jim v salonu Status Kay izognemo."
        },

        body: {

            en: [
                "As professional stylists, we keep seeing the same hair care mistakes over and over. They're usually the result of poor salon treatments, generic advice, or using products that simply don't suit the individual. Beautiful, healthy hair isn't the result of trends or quick fixes, it comes from understanding what your hair actually needs.",

                "Using the wrong shampoo",

                "Many salons still recommend one-size-fits-all shampoos without considering scalp condition or hair type. The result is dry ends, oily roots, and color that fades faster. At Status Kay, every recommendation is based on your scalp, your hair's structure, and your lifestyle.",

                "Heat styling without proper protection",

                "Heat damage is one of the most common causes of dull, brittle hair. Unfortunately, many salons don't pay enough attention to using heat correctly. For us, hair health always comes first. We use professional heat protection, controlled temperatures, and techniques that reduce stress on the hair.",

                "Brushing wet hair the wrong way",

                "Wet hair is extremely fragile. Rough brushing can cause breakage that no mask can fix afterward. We show our clients the right brushing techniques and recommend tools that protect the hair's structure in the long run.",

                "Overusing dry shampoo",

                "Dry shampoo can be helpful, but only in moderation. Overusing it can clog hair follicles and weaken hair at the root. Instead of masking the problem, at Status Kay we focus on restoring scalp balance through proper cleansing and targeted treatments.",

                "At Status Kay, we don't rush and we don't look for shortcuts. Every service is personalized, thoughtful, and focused on long-term results, not just short-lived shine.",

                "Ready to upgrade your hair care?",

                "Book one of our professional restorative treatments and feel what truly healthy, hassle-free hair care is like.",

                "Your hair deserves more than average care.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Kot profesionalni stilisti, vedno znova opažamo iste napake pri negi las. Te so pogosto posledica slabih salonskih tretmajev, splošnih nasvetov ali uporabe izdelkov, ki posamezniku preprosto ne ustrezajo. Lepi in zdravi lasje niso rezultat trendov ali hitrih rešitev, temveč razumevanja dejanskih potreb vaših las.",

                "Uporaba napačnega šampona",

                "Številni saloni še vedno priporočajo univerzalne šampone, ne da bi upoštevali stanje lasišča ali tip las. Posledica so suhe konice, mastni koreni in hitrejše bledenje barve. V salonu Status Kay vsako priporočilo temelji na vašem lasišču, strukturi las in vašem življenjskem slogu.",

                "Toplotno oblikovanje brez ustrezne zaščite",

                "Toplotne poškodbe so eden najpogostejših razlogov za puste in lomljive lase. Žal saloni ne posvečajo dovolj pozornosti pravilni uporabi toplote. Pri nas je zdravje las vedno na prvem mestu. Uporabljamo profesionalno toplotno zaščito, nadzorovane temperature in tehnike, ki zmanjšujejo obremenitev las.",

                "Nepravilno razčesavanje mokrih las",

                "Mokri lasje so izjemno občutljivi. Grobo razčesavanje lahko povzroči lomljenje, ki ga nobena maska ne more popraviti. Strankam pokažemo pravilne tehnike razčesavanja in priporočimo orodja, ki dolgoročno ščitijo strukturo las.",

                "Pretirana uporaba suhega šampona",

                "Suhi šampon je lahko koristen, vendar le v zmernih količinah. Prekomerna uporaba lahko zamaši lasne mešičke in oslabi lase pri korenu. Namesto prikrivanja težave se v Status Kay osredotočamo na vzpostavljanje ravnovesja lasišča s pravilnim čiščenjem in ciljno usmerjenimi tretmaji.",

                "V salonu Status Kay ne hitimo in ne iščemo bližnjic. Vsaka storitev je prilagojena, premišljena in usmerjena v dolgoročne rezultate, ne le v kratkotrajen sijaj.",

                "Ste pripravljeni nadgraditi svojo nego las?",

                "Rezervirajte enega izmed naših profesionalnih obnovitvenih tretmajev in občutite, kako izgleda resnično zdrava in brezskrbna nega las.",

                "Vaši lasje si zaslužijo več kot le povprečno nego."
            ]

        },

        faq: {

            en: [
                {
                    q: "How do I know if I'm using the right shampoo for my hair?",
                    a: "The right shampoo is always tailored to your scalp, hair structure, and lifestyle, which is why we prefer personal recommendations over one-size-fits-all products."
                },

                {
                    q: "Does dry shampoo actually damage hair?",
                    a: "Not in moderation, problems only start with overuse, which can clog hair follicles. We recommend focusing on scalp health rather than just masking the issue."
                },

                {
                    q: "What can I do at home to reduce heat damage?",
                    a: "Always use heat protection before drying or styling, and lower the temperature on your tools when you can. We're happy to recommend techniques and products suited to your hair."
                }
            ],

            sl: [
                {
                    q: "Kako vem, ali uporabljam pravi šampon za svoje lase?",
                    a: "Pravi šampon je vedno prilagojen tvojemu lasišču, strukturi las in življenjskemu slogu, zato ti pri izbiri raje pomagamo osebno, kot da bi priporočali univerzalne izdelke."
                },

                {
                    q: "Ali suhi šampon res škodi lasem?",
                    a: "Ne v zmernih količinah, težave nastanejo šele pri prepogosti uporabi, ki lahko zamaši lasne mešičke. Priporočamo, da se raje osredotočiš na zdravje lasišča kot na prikrivanje."
                },

                {
                    q: "Kaj lahko naredim doma, da zmanjšam toplotne poškodbe las?",
                    a: "Vedno uporabi toplotno zaščito pred sušenjem ali oblikovanjem in po možnosti zniža temperaturo naprave. Pri nas ti radi svetujemo tehnike in izdelke, prilagojene tvojim lasem."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-your-hair-affects-your-confidence",
            sl: "tvoji-lasje-vplivajo-na-samozavest"
        },

        category: "haircuts",

        date: {
            en: "January 26, 2026",
            sl: "26. januar 2026"
        },

        title: {
            en: "How Your Hair Affects Your Confidence",
            sl: "Tvoji lasje vplivajo na samozavest"
        },

        excerpt: {
            en: "A good hair day changes more than what you see in the mirror; it shapes how you walk, talk, and feel all day long. Discover why hair care is really an investment in yourself.",
            sl: "Dober dan za lase spremeni več kot le videz v ogledalu, vpliva na to, kako hodiš, govoriš in se počutiš skozi cel dan. Odkrij, zakaj je nega las pravzaprav investicija vase."
        },

        body: {

            en: [
                "Have you ever noticed how you carry yourself on a good hair day? Your shoulders sit a little straighter, you catch your reflection in a shop window without wincing, you walk into a room with confidence. And then there are the days when your hair is dry, shapeless, and lifeless.",

                "Hair is one of the first things people notice. It frames your face, highlights your features, and shapes how you see yourself. When you're not happy with your hairstyle, it shows quickly: less confidence in a meeting, less ease on a date, more second-guessing in front of the mirror.",

                "A lot of women tell themselves, \"It's not that important, it's just hair.\"",

                "But the truth is, when you don't feel good in your own skin, it spills over into everything else.",

                "On the other hand, when your hair is healthy, shiny, and suited to your lifestyle, something shifts. You don't need perfect makeup. You stop thinking about how to hide damaged ends. Confidence comes naturally.",

                "And this is exactly where the difference lies between a \"quick hairstyle\" and real hair care. A treatment isn't a splurge, it's an investment in a feeling you carry with you every single day.",

                "✨ If you want your hair to look healthy, strong, and full of life again, treat yourself to a professional treatment tailored exactly to your hair.",

                "📅 Book your appointment now and take the first step toward confidence.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Si že kdaj opazila, kako se držiš, ko imaš “dober hair day”? Ramena so bolj vzravnana, pogledaš se v izložbo brez nelagodja, samozavestno stopiš v prostor. In potem so dnevi, ko so lasje suhi, brez oblike in življenja.",

                "Lasje so ena prvih stvari, ki jih ljudje opazijo. Uokvirjajo obraz, poudarijo tvoje poteze in vplivajo na to, kako vidiš samo sebe. Ko nisi zadovoljna s svojo frizuro, se to hitro pozna: manj samozavesti na sestanku, manj sproščenosti na zmenku, več dvomov pred ogledalom.",

                "Veliko žensk si reče: “Saj ni tako pomembno, to so samo lasje.”",

                "Ampak resnica je, če se ne počutiš dobro v svoji koži, se to prenese na vse ostalo.",

                "Po drugi strani, ko so lasje zdravi, sijoči in prilagojeni tvojemu življenjskemu slogu, se nekaj premakne. Ne rabiš popolnega make-upa. Ne razmišljaš več, kako boš skrila poškodovane konice. Samozavest pride naravno.",

                "In ravno tu nastane razlika med “hitro frizuro” in pravo nego las. Tretma ni razvajanje, je investicija v občutek, ki ga nosiš s sabo vsak dan.",

                "✨ Če želiš, da tvoji lasje spet izgledajo zdravi, močni in polni življenja, si privošči profesionalni tretma, prilagojen točno tvojim lasem."
            ]

        },

        faq: {

            en: [
                {
                    q: "Can my hair really affect my confidence that much?",
                    a: "Hair is one of the first things people notice, so a good or bad hair day quickly shows in how we carry ourselves. When your hair is healthy and polished, confidence follows naturally."
                },

                {
                    q: "Is a professional treatment really worth it if my hair looks \"fine\" already?",
                    a: "Definitely. A treatment isn't a splurge, it's an investment in how you feel every day, not just on your salon day."
                },

                {
                    q: "How quickly will I notice a difference after a treatment?",
                    a: "The difference is usually visible and noticeable right away, your hair feels shinier, softer, and easier to manage."
                }
            ],

            sl: [
                {
                    q: "Kako lahko lasje res vplivajo na mojo samozavest?",
                    a: "Lasje so ena prvih stvari, ki jih ljudje opazijo, zato se dober ali slab hair day hitro pozna tudi v tem, kako se držimo in nastopamo. Ko so lasje zdravi in urejeni, samozavest pride sama od sebe."
                },

                {
                    q: "Je profesionalni tretma res vreden, če so moji lasje videti \"kar v redu\"?",
                    a: "Vsekakor. Tretma ni razvajanje, ampak investicija v to, kako se počutiš vsak dan, ne le na dan obiska salona."
                },

                {
                    q: "Kako hitro lahko opazim razliko po tretmaju?",
                    a: "Razlika je pogosto vidna in otipljiva takoj po tretmaju, saj lasje postanejo bolj sijoči, mehkejši in lažje vodljivi."
                }
            ]

        }

    },

    {
        slug: {
            en: "what-to-ask-your-stylist-before-they-start",
            sl: "kaj-vprasati-stilista-preden-zacne"
        },

        category: "about",

        date: {
            en: "January 19, 2026",
            sl: "19. januar 2026"
        },

        title: {
            en: "What to Ask Your Stylist Before They Start",
            sl: "Kaj vprašati stilista, preden začne"
        },

        excerpt: {
            en: "Before the scissors even come out, there are a few questions that reveal whether your stylist is really the right fit for you. Here's what to ask, and why it matters.",
            sl: "Preden škarje sploh pridejo v roke, obstaja nekaj vprašanj, ki razkrijejo, ali je tvoj stilist pravi zate. Odkrij, katera vprašanja postaviti in zakaj so pomembna."
        },

        body: {

            en: [
                "You're sitting in the chair. The cape around your neck. Your hair damp. That unmistakable salon smell in the air. And right before the scissors come out, a thought crosses your mind: I hope this person actually knows what they're doing.",

                "Most people ignore that feeling. They shouldn't.",

                "Before anyone even touches your hair, there are a few questions that will tell you everything you need to know.",

                "Start with this: \"What would you do if this were your hair?\"",

                "A true professional won't shrug and say \"whatever you want.\" They'll look at your face shape, your hair's texture, your lifestyle, and walk you through a plan that makes sense for your real life, not just for Instagram. If the answer feels rushed, vague, or like they're just copying a photo, that's a red flag.",

                "Next, ask: \"How will this look as it grows out?\"",

                "This is where experience shows. Professionals think ahead. They'll talk about upkeep, about how the style will behave a few weeks down the line. If they can't explain that, they're guessing.",

                "And ask: \"What would you not recommend for me?\"",

                "Someone who genuinely cares about your hair will know how to say no. Someone who says yes to everything is thinking about the appointment, not about you.",

                "And finally, listen to your gut. If you feel rushed, unheard, or confused, that feeling won't improve once the scissors start cutting.",

                "Your hair isn't a trial run. It's part of your confidence, your mood, your day.",

                "If you want a stylist who welcomes these questions and is happy to answer them, book your appointment. We talk first, your hair comes after.",

                "Learn more: Instagram | Book an Appointment | TikTok | Facebook"
            ],

            sl: [
                "Sediš na stolu. Ogrinjalo okoli vratu. Lasje mokri. V zraku tisti značilen salonski vonj. In tik preden škarje pridejo ven, se ti v glavi pojavi misel: Upam, da ta oseba res ve, kaj dela.",

                "Večina ljudi ta občutek ignorira. Ne bi ga smela.",

                "Preden se kdorkoli sploh dotakne tvojih las, obstaja nekaj vprašanj, ki ti povedo vse.",

                "Začni s tem: »Kaj bi naredili, če bi bili to vaši lasje?«",

                "Pravi profesionalec ne skomigne z rameni in ne reče »kakor želite«. Pogleda obliko obraza, strukturo las, tvoj življenjski slog in ti razloži načrt, ki ima smisel za tvoje resnično življenje, ne samo za Instagram. Če je odgovor hiter, površinski ali samo kopija fotografije, je to rdeča zastavica.",

                "Nato vprašaj: »Kako bo to izgledalo, ko bo zraslo?«",

                "Tukaj se pokaže izkušnja. Profesionalci razmišljajo naprej. Govorijo o vzdrževanju, o tem, kako se bo frizura obnašala čez nekaj tednov. Če tega ne znajo razložiti, ugibajo.",

                "Vprašaj še: »Česa mi ne bi priporočali?«",

                "Nekdo, ki mu je mar za tvoje lase, bo znal reči ne. Nekdo, ki reče da vsemu, razmišlja samo o terminu, ne o tebi.",

                "In na koncu, poslušaj svoj občutek. Če se počutiš pohitreno, preslišano ali zmedeno, se to ne izboljša, ko škarje že režejo.",

                "Tvoji lasje niso poskus. So del tvoje samozavesti, tvojega počutja, tvojega dneva.",

                "Če želiš frizerja, ki ta vprašanja pozdravlja in nanje z veseljem odgovarja, rezerviraj svoj termin. Najprej se pogovorimo, šele potem pridejo lasje na vrsto."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why should I ask my stylist what they'd do if it were their own hair?",
                    a: "Because the answer shows whether they're truly thinking about you and your everyday life, not just copying a trend. A real professional can explain why a choice is right for you specifically."
                },

                {
                    q: "What if I feel rushed during the consultation?",
                    a: "Trust that feeling. We always take time to talk before we ever pick up the scissors, because a great result starts with real understanding."
                },

                {
                    q: "Can I ask these questions even on my first visit to your salon?",
                    a: "Absolutely, we encourage it. We're always happy to talk through your wishes, expectations, and lifestyle before your hair ever comes into it."
                }
            ],

            sl: [
                {
                    q: "Zakaj naj stilista vprašam, kaj bi naredil, če bi bili to njegovi lasje?",
                    a: "Ker ta odgovor pokaže, ali stilist resnično razmišlja o tebi in tvojem vsakdanu ali le sledi trenutni fotografiji. Pravi profesionalec ti bo znal razložiti, zakaj določena izbira ustreza prav tebi."
                },

                {
                    q: "Kaj, če se med posvetom počutim prehitro obravnavano?",
                    a: "Zaupaj svojemu občutku. Pri nas si vedno vzamemo čas za pogovor, preden sploh primemo za škarje, saj dober rezultat vedno začne z razumevanjem."
                },

                {
                    q: "Ali lahko ta vprašanja postavim tudi ob prvem obisku vašega salona?",
                    a: "Seveda, prav k temu te spodbujamo. Veseli bomo pogovora o tvojih željah, pričakovanjih in življenjskem slogu, še preden se dotaknemo tvojih las."
                }
            ]

        }

    },

    {
        slug: {
            en: "restore-your-tired-hair",
            sl: "obnovi-utrujene-lase"
        },

        category: "haircuts",

        date: {
            en: "January 12, 2026",
            sl: "12. januar 2026"
        },

        title: {
            en: "Restore Your Tired Hair",
            sl: "Obnovi utrujene lase"
        },

        excerpt: {
            en: "A whole year of heat and hurry leaves its mark. Discover what a real reset for tired hair actually looks like, and why patience matters most.",
            sl: "Celo leto toplote in hitenja pusti sledi. Odkrij, kako izgleda pravi reset za utrujene lase in zakaj potrpljenje šteje največ."
        },

        body: {

            en: [
                "Your hair didn't turn dull, dry, and lifeless overnight.",

                "It's exhausted.",

                "A whole year of heat. A whole year of rushing. A whole year of \"it'll be fine.\"",

                "The flat iron cranked all the way up. The ponytail pulled tighter and tighter. Products bought because someone raved about them on Instagram, not because your hair actually needed them.",

                "And now it shows.",

                "January is the moment your hair gives up.",

                "Frizzy ends. Breakage when you comb it. No shine, no movement, just a tired look staring back at you from the mirror every morning.",

                "Now is the time for a reset.",

                "Not a drastic change. Not a shelf full of expensive new products.",

                "A real reset means stopping the damage first.",

                "Less heat. Less pulling. Less \"just one more pass.\" Hair only starts to heal once you stop attacking it every single day.",

                "Then you simplify your routine.",

                "If your shampoo dries you out and your mask just papers over the problem, you're stuck in a loop. A clean scalp, gentle cleansing, targeted care.",

                "Next, you remove the dead weight.",

                "Damaged ends can't be repaired. A small trim today saves you months of frustration tomorrow.",

                "And finally, patience.",

                "Beautiful hair happens quietly. Through consistency. Until one day you look in the mirror and think, \"Ah. There it is.\"",

                "If you want a real reset, don't guess. 👉 Book a restorative hair treatment and let your hair finally breathe. Your mirror will thank you."
            ],

            sl: [
                "Tvoji lasje niso kar čez noč postali pusti, suhi in brez življenja.",

                "Izčrpani so.",

                "Celo leto toplote. Celo leto hitenja. Celo leto “saj bo v redu”.",

                "Likalnik na maksimumu. Čop vedno bolj zategnjen. Izdelki kupljeni, ker jih je nekdo hvalil na Instagramu, ne zato, ker bi jih tvoji lasje res potrebovali.",

                "In zdaj se to vidi.",

                "Januar je trenutek, ko lasje obupajo.",

                "Krepasti konci. Lomljenje pri česanju. Nobenega sijaja, nobenega gibanja, le utrujen videz, ki te vsako jutro gleda iz ogledala.",

                "Zdaj je čas za reset.",

                "Ne za drastično spremembo. Ne za polico novih dragih produktov.",

                "Pravi reset pomeni, da najprej ustaviš škodo.",

                "Manj toplote. Manj vlečenja. Manj “še enkrat čez”. Lasje se začnejo obnavljati šele, ko jih ne napadaš več vsak dan.",

                "Potem poenostaviš rutino.",

                "Če te šampon izsuši in maska samo prekrije težavo, si ujeta v krogu. Čisto lasišče, nežno čiščenje, ciljna nega.",

                "Nato odstraniš mrtvo težo.",

                "Poškodovani konci se ne popravijo. Z majhnim striženjem danes si prihraniš mesece frustracij jutri.",

                "In na koncu potrpljenje.",

                "Lepi lasje nastajajo tiho. Z doslednostjo. Dokler se nekega dne ne pogledaš in si rečeš: “Aha. To je to.”",

                "Če želiš pravi reset, ne ugibaj. 👉 Rezerviraj obnovitveni tretma za lase in dovoli, da tvoji lasje končno zadihajo. Tvoje ogledalo ti bo hvaležno."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why does my hair look so exhausted after the holiday season?",
                    a: "A whole year of heat, rushing, and the wrong products builds up over time, so January often reveals your hair's real condition."
                },

                {
                    q: "Is a real hair reset drastic or gradual?",
                    a: "A real reset is gradual, it starts with less heat and pulling, then a simplified routine, a trim, and finally patience."
                },

                {
                    q: "Does trimming actually help repair damaged hair?",
                    a: "Yes, damaged ends can't be repaired, so a small trim today saves you months of frustration later."
                }
            ],

            sl: [
                {
                    q: "Zakaj so moji lasje po prazničnem obdobju videti tako izčrpani?",
                    a: "Celo leto toplote, hitenja in neustreznih izdelkov se sčasoma nabere, zato januar pogosto pokaže resnično stanje las."
                },

                {
                    q: "Ali je pravi reset las drastičen ali postopen proces?",
                    a: "Pravi reset je postopen, začne se z manj toplote in vlečenja, sledi poenostavljena rutina, nato striženje in na koncu potrpljenje."
                },

                {
                    q: "Ali striženje res pomaga pri obnovi poškodovanih las?",
                    a: "Da, poškodovanih konic ni mogoče popraviti, zato majhno striženje danes prihrani mesece frustracij pozneje."
                }
            ]

        }

    },

    {
        slug: {
            en: "new-year-new-hair",
            sl: "novo-leto-novi-lasje"
        },

        category: "haircuts",

        date: {
            en: "January 5, 2026",
            sl: "5. januar 2026"
        },

        title: {
            en: "New Year, New Hair",
            sl: "Novo leto, novi lasje"
        },

        excerpt: {
            en: "January is reset season. Discover why a new hairstyle is about more than just a new look, and how Status Kay approaches every transformation.",
            sl: "Januar je čas za reset. Odkrij, zakaj je nova frizura več kot le sprememba videza in kako v Status Kay pristopimo k vsaki preobrazbi."
        },

        body: {

            en: [
                "It's January. You're standing in front of the mirror looking at your hair, tired and dry. Like it's still stuck in last year. And the thought creeps into your head, even if you don't say it out loud yet.",

                "\"I need a change.\"",

                "Here's a truth most people won't tell you.",

                "Hair isn't just hair. It's the confidence you carry on your head. It's the way you walk into a room. It's that moment you catch your reflection in a shop window and don't look away.",

                "The new year is when people finally let themselves hit reset. Not because everything before was bad, but because you're ready for something better now.",

                "And no, this isn't about an impulsive haircut at nine at night. It's about intention. About choosing a look that suits your face, your lifestyle, and your energy. A refresh that feels natural, not forced.",

                "Maybe it means finally saying goodbye to damaged ends that have been crying for help for a while now.",

                "Maybe it means adding dimension and shine so your hair moves again.",

                "Or maybe it means finally trusting a stylist who actually listens to you instead of guessing.",

                "At Status Kay, every transformation starts with a conversation. What you love. What you don't. How much time you actually spend styling in the morning. How you want to feel when you leave the salon.",

                "New year, new hair doesn't mean becoming someone else.",

                "It means looking like the version of yourself who has things under control, even on the chaotic days.",

                "If your hair is still living in last year, this is your sign.",

                "Book your appointment now. January slots fill up fast, and your future self will thank you for it."
            ],

            sl: [
                "Januar je. Stojiš pred ogledalom in gledaš, kako so tvoji lasje utrujeni in suhi. Kot bi obtičali v prejšnjem letu. In misel se ti prikrade v glavo, tudi če je še ne izgovoriš naglas.",

                "»Potrebujem spremembo.«",

                "Resnica, ki ti je večina ne bo povedala, je ta.",

                "Lasje niso samo lasje. So samozavest, ki jo nosiš na glavi. So način, kako stopiš v prostor. So trenutek, ko ujameš svoj odsev v izložbi in se ne obrneš stran.",

                "Novo leto je čas, ko si ljudje končno dovolijo reset. Ne zato, ker je bilo prej vse slabo, ampak ker si zdaj pripravljena na boljše.",

                "In ne, ne gre za impulzivno striženje ob devetih zvečer. Gre za namen. Za izbiro videza, ki ustreza tvojemu obrazu, življenjskemu slogu in energiji. Osvežitev, ki deluje naravno, ne prisiljeno.",

                "Morda pomeni, da se posloviš od poškodovanih konic, ki že dolgo kličejo na pomoč.",

                "Morda dodaš dimenzijo in sijaj, da se lasje spet premikajo.",

                "Morda pa končno zaupaš stilistki, ki te posluša, namesto da ugiba.",

                "Pri Status Kay se vsaka preobrazba začne s pogovorom. Kaj ti je všeč. Česa ne maraš. Koliko časa zjutraj res porabiš za urejanje. Kako se želiš počutiti, ko zapustiš salon.",

                "Novo leto, novi lasje ne pomenijo, da postaneš nekdo drug.",

                "Pomenijo, da izgledaš kot verzija sebe, ki ima stvari pod kontrolo, tudi na kaotične dni.",

                "Če so tvoji lasje še vedno v lanskem letu, je to tvoj znak.",

                "Rezerviraj svoj termin zdaj. Januarski termini se hitro zapolnijo in tvoja prihodnja jaz ti bo zelo hvaležna."
            ]

        },

        faq: {

            en: [
                {
                    q: "Does \"new year, new hair\" mean I have to completely change my look?",
                    a: "Not necessarily, it's more about a refresh that suits your face and lifestyle than a drastic change."
                },

                {
                    q: "How does Status Kay approach a January transformation?",
                    a: "Every transformation starts with a conversation about what you love, how much time you spend styling, and how you want to feel afterward."
                },

                {
                    q: "Why should I book now if it's only January?",
                    a: "January slots fill up quickly, so it's best to secure your appointment ahead of time."
                }
            ],

            sl: [
                {
                    q: "Ali \"novo leto, nova frizura\" pomeni, da moram popolnoma spremeniti videz?",
                    a: "Ne nujno, gre bolj za osvežitev, ki ustreza tvojemu obrazu in življenjskemu slogu, kot pa za drastično spremembo."
                },

                {
                    q: "Kako pri Status Kay pristopite k januarski preobrazbi?",
                    a: "Vsaka preobrazba se začne s pogovorom o tem, kaj imaš rada, koliko časa porabiš za urejanje in kako se želiš počutiti po obisku."
                },

                {
                    q: "Zakaj naj termin rezerviram že zdaj, če je šele januar?",
                    a: "Januarski termini se hitro zapolnijo, zato je bolje, da si termin zagotoviš pravočasno."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-hair-color-fades-too-fast",
            sl: "zakaj-barva-za-lase-prehitro-zbledi"
        },

        category: "haircuts",

        date: {
            en: "December 29, 2025",
            sl: "29. december 2025"
        },

        title: {
            en: "Why Hair Color Fades Too Fast",
            sl: "Zakaj barva za lase prehitro zbledi"
        },

        excerpt: {
            en: "Color should last at least 6 to 8 weeks, but often fades sooner. Discover the most common reasons why, and how Status Kay makes sure your color stays put.",
            sl: "Barva bi morala zdržati vsaj 6 do 8 tednov, a pogosto zbledi prej. Odkrij najpogostejše razloge in kako v Status Kay poskrbimo, da barva obstane."
        },

        body: {

            en: [
                "You walk out of the salon feeling confident. The color is rich, glossy, and perfect.",

                "A few weeks pass, and suddenly your hair looks dull and washed out. Staring in the mirror, you think: \"Was the color really that good?\"",

                "Professional hair color should last 6 to 8 weeks, sometimes even longer, depending on the shade, the technique, and your at-home care. If your color fades significantly sooner, there's always one or more reasons behind it.",

                "The most common culprit is water and your washing habits. Hot water opens up the hair cuticle, letting the color slip right out. Washing too often, especially with harsh shampoos, speeds that process up even more. Many drugstore shampoos contain sulfates that rinse color out faster than you'd think.",

                "Then there's heat styling. Flat irons, curling irons, and hair dryers used without proper heat protection slowly \"cook\" the pigment right out of your hair. The color doesn't just fade, it loses depth and shine too.",

                "And there's something people don't talk about enough: the coloring service itself. Not all color jobs are equal. Rushing the application, using the wrong formulation, or skipping the toner can make color fade unevenly or too quickly. That's why customized coloring matters so much. Your hair's history, porosity, and undertones all have a major impact on how long the color lasts.",

                "At Status Kay, coloring is never generic. Every service starts with a consultation, so the color fits your lifestyle, not just a trend. You leave the salon with clear instructions on how to maintain your color and why it was done exactly the way it was.",

                "If your color washes out too fast, that's a sign.",

                "Your hair deserves more than guesswork.",

                "Book your appointment and we'll make sure your color lasts exactly as long as it should."
            ],

            sl: [
                "Iz salona stopiš samozavestna. Barva je bogata, sijajna in popolna.",

                "Mine nekaj tednov in nenadoma so tvoji lasje videti pusti in sprani. Medtem ko se gledaš v ogledalo, si misliš: »Je bila barva res tako dobra?«",

                "Profesionalna barva za lase bi morala zdržati od 6 do 8 tednov, včasih tudi dlje. Odvisno od odtenka, tehnike in nege doma. Če tvoja barva zbledi bistveno prej, je zadaj vedno en ali več razlogov.",

                "Najpogostejši krivec so voda in navade pri umivanju. Vroča voda odpre lasno povrhnjico, kar omogoči barvi, da spolzi ven. Prepogosto umivanje, še posebej z agresivnimi šamponi, ta proces še pospeši. Veliko drogerijskih šamponov vsebuje sulfate, ki barvo spirajo hitreje, kot si misliš.",

                "Tu še toplotno oblikovanje. Likalniki, kodralniki in sušilniki brez ustrezne toplotne zaščite, ki počasi “skuhajo” pigment iz las. Barva ne samo zbledi, ampak izgubi tudi globino in sijaj.",

                "In še nekaj, o čemer se premalo govori. Sama storitev barvanja. Vse barve niso enake. Prehitra aplikacija, napačna formulacija ali izpuščanje toniranja lahko povzročijo, da barva zbledi neenakomerno ali prehitro. Zato je prilagojeno barvanje tako pomembno. Zgodovina las, poroznost in podtoni močno vplivajo na obstojnost barve.",

                "V Status Kay barvanje nikoli ni generično. Vsaka storitev se začne s posvetom, da barva ustreza tvojemu življenjskemu slogu, ne samo trendom. Iz salona odideš z jasnimi navodili, kako barvo vzdrževati in zakaj je bila narejena točno tako.",

                "Če se ti barva prehitro spira, je to znak.",

                "Tvoji lasje si zaslužijo več kot ugibanje.",

                "Rezerviraj svoj termin in poskrbeli bomo, da bo tvoja barva obstojna, tako kot mora biti."
            ]

        },

        faq: {

            en: [
                {
                    q: "How long should professional hair color actually last?",
                    a: "Typically 6 to 8 weeks, sometimes longer, depending on the shade, technique, and your at-home care."
                },

                {
                    q: "Does hot water really affect how long color lasts?",
                    a: "Yes, hot water opens the hair cuticle and lets color rinse out faster, so we recommend washing with lukewarm water instead."
                },

                {
                    q: "Why does it matter that my coloring is customized to me?",
                    a: "Because your hair's history, porosity, and undertones affect how long color lasts, which is why every coloring service here starts with a consultation."
                }
            ],

            sl: [
                {
                    q: "Kako dolgo naj bi profesionalna barva za lase zdržala?",
                    a: "Praviloma od 6 do 8 tednov, včasih tudi dlje, odvisno od odtenka, tehnike in nege doma."
                },

                {
                    q: "Ali vroča voda res vpliva na obstojnost barve?",
                    a: "Da, vroča voda odpre lasno povrhnjico in barvi omogoči, da hitreje izpere, zato priporočamo umivanje z mlačno vodo."
                },

                {
                    q: "Zakaj je pomembno, da je barvanje prilagojeno meni osebno?",
                    a: "Ker zgodovina las, poroznost in podtoni vplivajo na to, kako dolgo barva zdrži, zato pri nas vsako barvanje začnemo s posvetom."
                }
            ]

        }

    },

    {
        slug: {
            en: "christmas-hair",
            sl: "bozicni-lasje"
        },

        category: "trends",

        date: {
            en: "December 22, 2025",
            sl: "22. december 2025"
        },

        title: {
            en: "Christmas Hair",
            sl: "Božični lasje"
        },

        excerpt: {
            en: "December brings dinners, photos, and festive energy. Discover which hairstyles are this year's go-to choice for your Christmas look.",
            sl: "December prinaša večerje, fotografije in praznično vzdušje. Odkrij, katere frizure so letos prava izbira za tvoj božični videz."
        },

        body: {

            en: [
                "December has its own scent. Cinnamon in the air. Cold hands wrapped around warm glasses. Long dinners where photos get taken whether you're ready or not.",

                "And in those moments, your hair matters.",

                "If you're heading to a Christmas dinner, a work celebration, or that one special evening you've waited all year for, your hairstyle needs to do one thing: look put together.",

                "Soft waves are a holiday classic for a reason. They catch the light, move when you laugh, and frame your face in the most flattering way. Polished, yet still soft to the touch. Perfect with dresses, blazers, or that sweater you save for special occasions.",

                "For a more refined look, a low ponytail or bun is always a safe bet. Clean lines and an elegant shape let your outfit and makeup take the spotlight, while creating an effortless yet luxurious look that works just as well at candlelit dinners as at more formal tables.",

                "If you want something a bit more elevated without going fully updo, half-up styles are the perfect choice. Hair pulled away from the face, volume exactly where it counts, and a soft silhouette that feels feminine and modern.",

                "The key to all of these styles is healthy, well-prepped hair. A professional blowout, treatment, or styling session makes a huge difference. The style lasts longer, holds better, and feels lighter.",

                "You leave our salon at ease, knowing everything is taken care of, free to enjoy your evening instead of constantly checking the mirror.",

                "Appointments quietly disappear, and then suddenly there are none left.",

                "If you want your hair to be one less thing to worry about this Christmas, now is the time.",

                "Book your appointment now, and go into the holidays worry-free ✨🎄"
            ],

            sl: [
                "December ima svoj vonj. Cimet v zraku. Mrzle roke ovite okoli toplih kozarcev. Dolge večerje, kjer se fotografije posnamejo, ne glede na to, ali si pripravljena ali ne.",

                "In v teh trenutkih so lasje pomembni.",

                "Če se odpravljaš na božične večerje, službena praznovanja ali poseben večer, katerega čakaš celo leto, mora frizura narediti eno stvar: izgledati urejeno.",

                "Mehki valovi so z razlogom praznična klasika. Ujamejo svetlobo, se premikajo, ko se smejiš, in na najbolj laskav način uokvirijo obraz. Urejeni, a še vedno mehki na dotik. Popolni ob oblekah, suknjičih ali puloverju, ki ga prihraniš za posebne priložnosti.",

                "Za bolj prefinjen videz sta idealni nizka figa ali čop, ki nikoli ne zgrešita. Čiste linije in elegantna oblika dovolita, da do izraza pridejo obleka in ličila, hkrati pa ustvarita lahkoten vendar luksuzen videz, ki deluje tako ob večerjah ob svečah kot pri bolj formalnih mizah.",

                "Če si želiš nekaj dvignjenega, brez popolne spete frizure, so polspeti slogi idealna izbira. Lasje stran od obraza, volumen tam, kjer šteje, in mehka silhueta, ki deluje ženstveno in sodobno.",

                "Ključ vseh teh pričesk so zdravi, dobro pripravljeni lasje. Profesionalen fen, nega ali styling naredijo ogromno razliko. Frizura zdrži dlje, se lepše obdrži in je lahkotnejša.",

                "Iz našega salona odideš mirna, ker veš, da je vse urejeno, in se lahko posvetiš večeru, namesto preverjanju ogledal.",

                "Termini tiho izginejo in nato jih nenadoma ni več.",

                "Če želiš, da so lasje za božič ena skrb manj na tvojem seznamu, je zdaj pravi čas.",

                "Rezerviraj svoj termin zdaj, in bodi brez skrbi ✨🎄"
            ]

        },

        faq: {

            en: [
                {
                    q: "What hairstyle works best for a Christmas dinner?",
                    a: "Soft waves are a beloved classic, since they frame the face beautifully and move gracefully all evening."
                },

                {
                    q: "What do you recommend for more elegant holiday occasions?",
                    a: "A low ponytail or bun gives a clean, refined look that lets your outfit and makeup take the spotlight."
                },

                {
                    q: "Why should I get a blowout or styling session before the holidays?",
                    a: "Professionally prepped hair lasts longer, holds better, and gives you peace of mind for the whole evening."
                }
            ],

            sl: [
                {
                    q: "Katera pričeska je najboljša za božično večerjo?",
                    a: "Mehki valovi so priljubljena klasika, saj urejeno uokvirijo obraz in se lepo premikajo skozi ves večer."
                },

                {
                    q: "Kaj priporočate za bolj elegantne praznične priložnosti?",
                    a: "Nizka figa ali čop dasta čist, prefinjen videz, ki pusti, da pride do izraza obleka in ličila."
                },

                {
                    q: "Zakaj naj pred prazniki obiščem salon za fen ali styling?",
                    a: "Profesionalno pripravljeni lasje zdržijo dlje, se lepše obdržijo in ti dajo mirno vest ves večer."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-care-for-your-hair-after-a-night-out",
            sl: "kako-negovati-lase-po-zabavi"
        },

        category: "haircuts",

        date: {
            en: "December 15, 2025",
            sl: "15. december 2025"
        },

        title: {
            en: "How to Care for Your Hair After a Night Out",
            sl: "Kako negovati lase po zabavi"
        },

        excerpt: {
            en: "Late nights, alcohol, and tight hairstyles all leave their mark on your hair. Here are five steps to get it back in shape.",
            sl: "Pozne noči, alkohol in tesne pričeske pustijo sledi na laseh. Tukaj je pet korakov, s katerimi jih spet spraviš v formo."
        },

        body: {

            en: [
                "You know that morning after a long night. Your makeup's half gone. Your head hurts. And your hair feels dry, rough, and lifeless.",

                "Late nights, alcohol, smoke, heat, cold, and tight party hairstyles all take their toll. The damage often doesn't show up right away, it builds up over time. And by the time you notice it, it's already done.",

                "How to properly care for your hair after a party or celebration.",

                "1. Gentle washing",

                "After a party, your scalp is full of sweat, styling products, and grime from the environment. Use a gentle shampoo, not a harsh clarifying one. Washing too aggressively strips natural oils and dries hair out further. Focus on the scalp, massage gently, and let the lather cleanse the rest of your hair.",

                "2. Deep hydration is a must",

                "Alcohol and lack of sleep dehydrate the body, and your hair shows it fast, turning dry, frizzy, and dull. A rich moisturizing mask is essential here. Look for ingredients like keratin, amino acids, and natural oils. Leave the mask on for at least 10 minutes so it actually has time to work.",

                "3. A few days without heat",

                "Your hair is already stressed, so give it a break. Let it air-dry whenever you can. If you do use heat, lower the temperature and always apply heat protection. Heat on already-dry hair is the fastest route to breakage.",

                "4. Handle it gently when styling",

                "Wet hair is the most fragile. Use a wide-tooth comb. Start at the ends and slowly work your way up. Avoid tight buns or ponytails for at least a few days to prevent extra tension and damage.",

                "5. Fix the damage you can't see yet",

                "Some of the damage happens inside the hair strand. Professional treatments restore moisture, strengthen the structure, and bring back a healthy look before breakage even starts to show.",

                "If your hair is dry and dull after the holidays, it's telling you it needs help.",

                "✨ Book a professional restorative and moisturizing treatment with us and give your hair the real reset it deserves.",

                "Your hair will thank you."
            ],

            sl: [
                "Poznaš tisto jutro po dolgi noči. Ličila so napol izginila. Glava boli. Lasje pa delujejo suhi, grobi in brez življenja.",

                "Pozne noči, alkohol, dim, toplota, mraz in tesne pričeske v času praznovanj naredijo svoje. Škoda se pogosto ne pokaže takoj, ampak se kopiči. In ko jo opaziš, je že nastala.",

                "Kako pravilno oblikovati lase po zabavi ali praznovanju.",

                "1. Nežno umivanje",

                "Po zabavi je lasišče polno pota, izdelkov za oblikovanje in nečistoč iz okolja. Uporabi nežen šampon, ne agresivnega čistilnega. Preveč močno čiščenje odstrani naravna olja in lase dodatno izsuši. Osredotoči se na lasišče, nežno masiraj in pusti, da pena očisti lasje.",

                "2. Globinska hidracija je obvezna",

                "Alkohol in pomanjkanje spanja izsušita telo, kar se hitro pozna tudi na laseh. Postanejo suhi, krepasti in brez sijaja. Bogata vlažilna maska je tukaj nujna. Išči sestavine, kot so keratin, aminokisline in naravna olja. Masko pusti delovati vsaj 10 minut, da ima učinek.",

                "3. Nekaj dni brez toplote",

                "Lasje so že pod stresom, zato jim privošči pavzo. Kadar je mogoče, jih pusti, da se posušijo naravno. Če uporabljaš toploto, znižaj temperaturo in vedno uporabi toplotno zaščito. Toplota na že izsušenih laseh je najhitrejša pot do lomljenja.",

                "4. Nežno ravnanje pri oblikovanju",

                "Mokri lasje so najbolj občutljivi. Uporabi glavnik s širokimi zobmi. Začni pri konicah in se počasi pomikaj navzgor. Izogibaj se tesnim čopom ali figam vsaj nekaj dni, s tem preprečiš dodatno napetost in poškodbe.",

                "5. Popravi škodo, ki je še ne vidiš",

                "Del poškodb se zgodi znotraj lasu. Profesionalni tretmaji obnovijo vlago, okrepijo strukturo in povrnejo zdrav videz, še preden se lomljenje začne kazati navzven.",

                "Če so tvoji lasje po praznikih suhi in brez sijaja, ti sporočajo, da potrebujejo pomoč.",

                "✨ Rezerviraj profesionalni obnovitveni in vlažilni tretma pri nas ter svojim lasem podari pravi reset.",

                "Tvoji lasje ti bodo hvaležni."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why doesn't hair damage from a night out show up right away?",
                    a: "Damage from alcohol, smoke, heat, and tight hairstyles builds up gradually, so you often only notice it the next day or later."
                },

                {
                    q: "What kind of mask should I use after a late night out?",
                    a: "Reach for a rich moisturizing mask with keratin, amino acids, or natural oils, and leave it on for at least 10 minutes."
                },

                {
                    q: "Should I blow-dry my hair right away after a party?",
                    a: "If you can, let it air-dry instead, since it's already stressed and extra heat only raises the risk of breakage."
                }
            ],

            sl: [
                {
                    q: "Zakaj se poškodbe las po zabavi ne pokažejo takoj?",
                    a: "Škoda zaradi alkohola, dima, toplote in tesnih pričesk se kopiči postopoma, zato jo pogosto opaziš šele naslednji dan ali kasneje."
                },

                {
                    q: "Katero masko naj uporabim po pozni noči zunaj?",
                    a: "Izberi bogato vlažilno masko s keratinom, aminokislinami ali naravnimi olji in jo pusti delovati vsaj 10 minut."
                },

                {
                    q: "Ali naj po zabavi lase takoj sušim s fenom?",
                    a: "Če je mogoče, jih raje pusti, da se posušijo naravno, saj so že obremenjeni, dodatna toplota pa poveča tveganje za lomljenje."
                }
            ]

        }

    },

    {
        slug: {
            en: "holiday-hairstyles-at-status-kay",
            sl: "praznicne-frizure-v-status-kay"
        },

        category: "trends",

        date: {
            en: "December 8, 2025",
            sl: "8. december 2025"
        },

        title: {
            en: "Holiday Hairstyles at Status Kay",
            sl: "Praznične frizure v STATUS KAY"
        },

        excerpt: {
            en: "December in Ljubljana brings festive energy and the urge to finally look your best. Discover this season's holiday trends and why Status Kay makes the difference.",
            sl: "December v Ljubljani prinaša praznično vzdušje in željo, da letos res izgledaš odlično. Odkrij trende za praznike in zakaj Status Kay naredi razliko."
        },

        body: {

            en: [
                "Ljubljana has its own special charm in winter.",

                "Cold air, warm lights, and the city buzzing with festive energy that fills your stomach with butterflies.",

                "And that's exactly when you think: \"This year, I really need to look good.\"",

                "The right hairstyle at year's end does exactly that.",

                "This season's trends are built for confidence. Silky blowouts that move like something out of a movie. Deep, rich browns that look striking under Christmas lights. Soft glam waves for dinners, elegant high buns for New Year's Eve, and precise fresh highlights that turn your entry into 2025 into a genuine fresh start.",

                "But… you don't get results like that just anywhere.",

                "Status Kay isn't a crowded salon where five different stylists pass you between the sink and the chair. Here, one stylist works with you, precise down to the last strand, devoted to her craft and her clients. Just a few steps from Ljubljana's main train station, she gives you the whole space, all her time, and her full attention.",

                "When you sit in her chair, you're not just the \"next\" client, you're the client she gives her full time and effort to.",

                "She creates your hairstyle based on your face, your personality, your hair's texture, and your own plans for the holidays…",

                "With her, you get a hairstyle that truly suits you, not just whatever's trending.",

                "High quality isn't about price. It's about the result.",

                "And clients keep coming back to Status Kay because they leave looking polished, confident, and ready to turn heads the moment they walk into any room.",

                "December fills up faster than the mulled wine stands. If you want a holiday hairstyle that turns heads, or a New Year's look that makes you unforgettable… now is the time.",

                "✨ Book your appointment at Status Kay and step into the holidays transformed."
            ],

            sl: [
                "Ljubljana ima pozimi svoj poseben čar.",

                "Mrzel zrak, tople lučke, mesto pa utripa s prazničnim vrvežem, ki napolni trebuh z metulji.",

                "In ravno takrat si rečeš: “Čas je, da letos res izgledam dobro.”",

                "Prava frizura ob koncu leta naredi točno to.",

                "Trendi za praznike so ustvarjeni za samozavest. Svilnate fen frizure, ki se premikajo kot prizor iz filma. Temne, bogate rjave, ki pod božičnimi lučkami delujejo mogočno. Mehki glam valovi za večerje, elegantni visoki čopi za silvestrovo in natančni novi prameni, ki vstop v 2025 spremenijo v svež začetek.",

                "Ampak… takšnega rezultata ne dobiš kjerkoli.",

                "Status Kay ni prenatrpani salon, kjer te pet različnih frizerjev premetava od umivalnika do stola. Tukaj dela ena frizerka, ki je natančna do zadnjega pramena, predana svoji umetnosti in svojim strankam. Le nekaj korakov od glavne železniške postaje v Ljubljani ti nameni celoten prostor, celoten čas in vso pozornost.",

                "Ko sedeš v njen stol, nisi le še ena “naslednja” stranka, pač pa stranka kateri posveti ves svoj čas in trud.",

                "Frizuro ustvari glede na tvoj obraz, osebnost, teksturo las, in po le tvojih načrtih za praznike…",

                "Pri njej dobiš frizuro, ki ti resnično paše, ne le tisto, ki je v trendu.",

                "Visok nivo ni vprašanje cene. Je vprašanje rezultata.",

                "In stranke prihajajo v Status Kay, ker od tam odhajajo urejene, samozavestne in videti tako, da ujamejo vsak pogled, ko stopiš v katerikoli prostor.",

                "December se polni hitreje kot stojnice s kuhanim vinom. Če hočeš praznično frizuro, ki obrača glave, ali silvestrsko pričesko, ki te naredi nepozabno… zdaj pravi čas.",

                "✨ Rezerviraj svoj termin pri Status Kay in vstopi v praznike preobražena."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why does Status Kay have just one stylist instead of several?",
                    a: "That way you get her full attention and precision down to the last strand, without being passed between different stylists."
                },

                {
                    q: "What holiday hairstyles are trending this year?",
                    a: "Popular choices include silky blowouts, deep rich browns, soft glam waves, elegant high buns, and precise fresh highlights."
                },

                {
                    q: "How early should I book for the holiday season?",
                    a: "December fills up fast, so we recommend booking as soon as possible to get the date you want."
                }
            ],

            sl: [
                {
                    q: "Zakaj je pri Status Kay le ena frizerka namesto več?",
                    a: "Tako dobiš njeno polno pozornost in natančnost do zadnjega pramena, brez preklapljanja med različnimi frizerji."
                },

                {
                    q: "Katere praznične frizure so letos v ospredju?",
                    a: "Priljubljeni so svilnati fen valovi, temne bogate rjave, mehki glam valovi, elegantni visoki čopi in natančni novi prameni."
                },

                {
                    q: "Kako zgodaj naj rezerviram termin za praznike?",
                    a: "December se hitro zapolni, zato priporočamo, da termin rezerviraš čim prej, da dobiš želeni datum."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-repair-hair-damaged-by-straightening",
            sl: "kako-popraviti-poskodovane-lase-zaradi-likanja"
        },

        category: "haircuts",

        date: {
            en: "November 24, 2025",
            sl: "24. november 2025"
        },

        title: {
            en: "How to Repair Hair Damaged by Straightening",
            sl: "Kako popraviti poškodovane lase zaradi likanja"
        },

        excerpt: {
            en: "Dry, brittle hair from too much flat-ironing? Learn how real repair works from the inside out, and what you can do at home.",
            sl: "Suhi, krhki lasje po prepogostem likanju? Spoznaj, kako prava obnova deluje od znotraj navzven in kaj lahko narediš doma."
        },

        body: {

            en: [
                "If your hair is dry, rough, or breaking just from combing it, you're most likely dealing with heat damage. Flat-ironing pulls moisture out of the hair, lifts the cuticle, and weakens the inner structure. Over time this leads to static, breakage, dull color, and split ends that just keep creeping further up the strand.",

                "The good news? Damaged hair can be repaired, but not with random DIY tricks that only cover up the surface without fixing the damage underneath.",

                "Real repair starts inside the hair strand, not just on the surface.",

                "In our salon we use professional restorative treatments designed to reconnect damaged bonds, restore moisture, and strengthen the cortex. Think of it as a structural rebuild for your hair, not just temporary shine. After just one treatment, your hair will be softer, stronger, and much easier to style without breakage.",

                "What you can do at home to maintain the results:",

                "Switch to a moisturizing, sulfate-free shampoo and conditioner. Every time you use heat tools, apply heat protection first. Lower the temperature on your flat iron whenever possible. Trim damaged ends regularly to stop split ends from traveling further up. If your hair feels dried out and wrecked after straightening, a professional restorative treatment is the fastest and safest way to bring it back to life. No risky at-home experiments, just healthier, softer, stronger hair after a single visit.",

                "Book your restorative treatment and let us rebuild your hair from the inside out."
            ],

            sl: [
                "Če so tvoji lasje suhi, hrapavi ali pa se lomijo že med česanjem, gre najverjetneje za toplotno poškodbo. Likanje iz las vleče vlago, dviguje povrhnjico in oslabi notranjo strukturo. Sčasoma to vodi do naelektrenosti, lomljenja, puste barve in razcepljenih konic, ki se kar ne nehajo širiti.",

                "Dobra novica? Poškodovani lasje se lahko obnovijo, vendar ne z naključnimi “naredi sam” triki, ki le prekrijejo površino in ne popravijo notranje škode.",

                "Prava obnova se začne v notranjosti lasu, ne samo na površini.",

                "V našem salonu uporabljamo profesionalne obnovitvene tretmaje, ki so zasnovani tako, da ponovno povežejo poškodovane vezi, povrnejo vlago in okrepijo korteks. Predstavljaj si ga kot konstrukcijsko obnovo tvojih las in ne le začasen sijaj. Že po enem tretmaju bodo lasje mehkejši, močnejši in mnogo lažji za oblikovanje brez lomljenja.",

                "Kaj lahko narediš doma, da ohraniš rezultate:",

                "Zamenjaj šampon in balzam za vlažilno, brezsulfatno različico. Vsakič, ko uporabljaš toplotne pripomočke, nanesi zaščito pred vročino. Kadar je mogoče, znižaj temperaturo likalnika. Redno strizi poškodovane konice, da preprečiš nadaljnje cepljenje. Če se tvoji lasje po likanju zdijo izsušeni in uničeni, je profesionalni obnovitveni tretma najhitrejši in najvarnejši način, da jih povrneš k življenju. Brez tveganih domačih poskusov. Le zdravi, mehkejši in močnejši lasje že po prvem obisku.",

                "Rezerviraj svoj obnovitveni tretma in dovoli, da tvoje lase obnovimo od znotraj navzven."
            ]

        },

        faq: {

            en: [
                {
                    q: "How do I know if my hair has heat damage?",
                    a: "Signs include dryness, roughness, breakage when combing, and split ends that keep traveling further up the strand."
                },

                {
                    q: "Can at-home products fix heat damage?",
                    a: "At-home products can cover the surface, but real repair happens inside the hair strand, which is why we recommend a professional restorative treatment."
                },

                {
                    q: "How can I prevent further damage from straightening at home?",
                    a: "Always apply heat protection before using a flat iron, lower the temperature when you can, and trim damaged ends regularly."
                }
            ],

            sl: [
                {
                    q: "Kako vem, ali imam toplotno poškodovane lase?",
                    a: "Znaki so suhost, hrapavost, lomljenje pri česanju in razcepljene konice, ki se kar naprej širijo navzgor po pramenu."
                },

                {
                    q: "Ali domači izdelki lahko popravijo toplotno poškodbo?",
                    a: "Domači izdelki lahko prekrijejo površino, a prava obnova poteka v notranjosti lasu, zato priporočamo profesionalni obnovitveni tretma."
                },

                {
                    q: "Kako lahko doma preprečim nadaljnjo škodo od likanja?",
                    a: "Vedno nanesi toplotno zaščito pred uporabo likalnika, po možnosti znižaj temperaturo in redno strizi poškodovane konice."
                }
            ]

        }

    },

    {
        slug: {
            en: "winter-hair-care-tips",
            sl: "nasveti-za-zimske-lase"
        },

        category: "haircuts",

        date: {
            en: "November 3, 2025",
            sl: "3. november 2025"
        },

        title: {
            en: "Winter Hair Care Tips",
            sl: "Nasveti za zimske lase ❄️"
        },

        excerpt: {
            en: "Cold air and dry heat can be brutal on your hair. Here are a few simple winter tricks to keep it smooth, shiny, and protected.",
            sl: "Mraz in suh zrak sta lahko brutalna za lase. Tukaj je nekaj preprostih zimskih trikov, s katerimi ostanejo gladki, sijoči in zaščiteni."
        },

        body: {

            en: [
                "In winter, when the air turns cold and sharp… does it feel like your hair suddenly has a mind of its own? Yes, welcome to winter. The season of cozy sweaters, hot chocolate, and curling up by the fire.",

                "But don't panic, we've got you covered. Here are a few simple but powerful winter hair tricks that will keep your strands smooth, shiny, and completely unbothered by the cold.",

                "1. Hydration starts in the shower",

                "Hot water feels heavenly in winter, but sadly it dries your hair out badly. Try lukewarm water instead, and swap your usual shampoo for a moisturizing or sulfate-free formula. Finish with a rich conditioner for shiny hair.",

                "2. Oil is your new best friend",

                "A few drops of argan or coconut oil massaged into the ends will prevent split ends and breakage. Apply it in the evening before bed, and you'll wake up to softer, more manageable hair that finally listens to you.",

                "3. Beat static like a pro",

                "Cold air outside plus dry air inside causes frizz and static. Keep a leave-in conditioner or an anti-static spray in your bag.",

                "Extra tip: gently rub a dryer sheet over your hair to tame flyaways in seconds (it really works!).",

                "Stay warm, stay glowing, and remember… winter hair care isn't about perfection, it's about protection."
            ],

            sl: [
                "Pozimi, ko zrak postane hladen in oster… dobiš občutek, kot da imajo tvoji lasje svojo glavo? Ja, dobrodošla v zimi. Letni čas toplih puloverjev, vroče čokolade in posedanja ob ognju.",

                "Ampak brez panike, poskrbeli smo zate. Tukaj je nekaj preprostih, a močnih zimskih trikov za lase, s katerimi bodo tvoji prameni ostali gladki, sijoči in popolnoma neobremenjeni s hladom.",

                "1. Vlaženje se začne pod tušem",

                "Vroča voda je pozimi božanska, a žal lase močno izuši. Poskusi z mlačno vodo in svoj običajni šampon zamenjaj za vlažilno ali brezsulfatno formulo. Na koncu pa dodaj še bogat balzam za sijoče lase.",

                "2. Olje je tvoj novi najboljši prijatelj",

                "Nekaj kapljic arganovega ali kokosovega olja, vmasiranih v konice, bo preprečilo cepljenje in lomljenje las. Nanesi ga zvečer pred spanjem in zjutraj se boš zbudila z mehkejšimi, bolj ubogljivimi lasmi, ki te bodo končno poslušali.",

                "3. Premagaj statiko kot profesionalka",

                "Hladen zrak zunaj + suh zrak znotraj povzročita kodre in naelektrene lase. V torbici imej balzam brez izpiranja ali sprej proti naelektrenosti.",

                "Dodaten trik: nežno podrgni sušilni robček po laseh, da v nekaj sekundah ukrotiš štrleče dlačice (res deluje!).",

                "Ostani na toplem, ostani sijoča in ne pozabi… nega las pozimi ni popolnost, ampak zaščita."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why does my hair get so staticky in winter?",
                    a: "The mix of cold air outside and dry heated air indoors dries hair out, so keep a leave-in conditioner or anti-static spray in your bag."
                },

                {
                    q: "Is hot water in the shower really bad for hair in winter?",
                    a: "Yes, as nice as it feels, it dries hair out further, so try lukewarm water with a moisturizing shampoo instead."
                },

                {
                    q: "How can I protect my hair under a winter hat?",
                    a: "Choose a hat with a silk lining, or wrap your hair in a silk scarf first, that prevents friction and breakage."
                }
            ],

            sl: [
                {
                    q: "Zakaj moje lase pozimi postanejo statične in naelektrene?",
                    a: "Kombinacija hladnega zraka zunaj in suhega zraka v ogrevanih prostorih izsuši lase, zato v torbici vedno imej balzam brez izpiranja ali sprej proti naelektrenosti."
                },

                {
                    q: "Ali je vroča voda pod tušem res slaba za lase pozimi?",
                    a: "Da, čeprav je prijetna, lase dodatno izsuši, zato poskusi z mlačno vodo in vlažilnim šamponom."
                },

                {
                    q: "Kako lahko zaščitim lase pod zimsko kapo?",
                    a: "Izberi kapo s svilnato podlogo ali lase pred tem ovij v svileno ruto, tako preprečiš trenje in lomljenje."
                }
            ]

        }

    },

    {
        slug: {
            en: "blondorplex",
            sl: "blondorplex"
        },

        category: "haircuts",

        date: {
            en: "October 27, 2025",
            sl: "27. oktober 2025"
        },

        title: {
            en: "BlondorPlex",
            sl: "BlondorPlex"
        },

        excerpt: {
            en: "Wella BlondorPlex is a new generation of bleaching protection that shields your hair during the process and delivers a clean, healthy-looking blonde.",
            sl: "Wella BlondorPlex je nova generacija zaščite pri beljenju, ki lase varuje med procesom in poskrbi za čist, zdrav videz blond barve."
        },

        body: {

            en: [
                "If you've ever gone blonde, you know it's about more than just the color. Bleaching can leave hair dry, brittle, and craving extra care.",

                "At Status Kay salon, we've brought in a new generation of protection that changes everything: Wella BlondorPlex.",

                "This treatment works on a molecular level, rebuilding the internal bonds in your hair during the bleaching process itself. Think of it as an invisible safety net for your hair: while the Blondor formula lifts pigment up to 7 levels, BlondorPlex reduces breakage by as much as 97%.",

                "And here's the secret: BlondorPlex contains anti-yellow molecules that prevent warm tones from creeping in and keep your blonde clean and shiny. Whether you want a full lightening, a soft balayage, or a perfect platinum look, this system helps you achieve your dream blonde.",

                "After coloring, we seal everything in with WellaPlex No. 2, which further strengthens and smooths the hair, leaving it silky, strong, and visibly healthier from the very first touch. You'll see and feel the difference, and trust us, you'll leave the salon thrilled.",

                "✨ Healthy blonde is the new blonde.",

                "Book your next bleaching appointment at Status Kay and experience the difference BlondorPlex makes for yourself.",

                "💛 Your hair will thank you 👱🏼‍♀️"
            ],

            sl: [
                "Če si že kdaj šla v blond, potem veš, da to ni samo barva. Beljenje lahko pusti lase suhe, lomljive in v želji po dodatni negi.",

                "V Status Kay salonu smo prinesli novo generacijo zaščite, ki vse spremeni: Wella BlondorPlex.",

                "Ta tretma deluje na molekularni ravni, kjer med samim beljenjem obnavlja notranje vezi v laseh. Predstavljaj si ga kot nevidno varnostno mrežo za tvoje lase: medtem ko Blondor formula dvigne pigment do 7 nivojev, BlondorPlex poskrbi za kar 97 % manj lomljenja.",

                "In tukaj je skrivnost: BlondorPlex vsebuje anti-rumene molekule, ki preprečujejo pojav toplih tonov in ohranjajo čist, sijoč blond odtenek. Ne glede na to, ali si želiš celotno posvetlitev, mehko balayage tehniko ali popoln platinast videz, ta sistem omogoča, da dosežeš svojo sanjsko blond barvo.",

                "Po barvanju vse zapečatimo z WellaPlex No. 2, ki dodatno okrepi in zgladi lase, da postanejo svilnati, močni in vidno bolj zdravi že po prvem dotiku. Videla in čutila boš razliko. In verjemi, da boš iz salona odšla navdušena.",

                "✨ Zdrava blond je nova blond.",

                "Rezerviraj svoj naslednji termin za beljenje v Status Kay in sama izkusi razliko, ki jo prinaša BlondorPlex.",

                "💛 Tvoji lasje ti bodo hvaležni 👱🏼‍♀️"
            ]

        },

        faq: {

            en: [
                {
                    q: "What exactly does \"97% less breakage\" with BlondorPlex mean?",
                    a: "It means BlondorPlex significantly reduces hair damage during the bleaching process itself compared to bleaching without protection, so your hair stays much stronger."
                },

                {
                    q: "Does BlondorPlex stop blonde hair from turning yellow?",
                    a: "Yes, the anti-yellow molecules in the formula prevent warm tones from creeping in and keep your blonde clean and cool-toned."
                },

                {
                    q: "Is BlondorPlex suitable for balayage too?",
                    a: "Absolutely, we use it for full lightening as well as soft balayage or a platinum look."
                }
            ],

            sl: [
                {
                    q: "Kaj natančno pomeni \"97 % manj lomljenja\" pri BlondorPlex?",
                    a: "To pomeni, da BlondorPlex med samim beljenjem bistveno zmanjša poškodbe las v primerjavi z beljenjem brez zaščite, tako da lasje ostanejo bolj čvrsti."
                },

                {
                    q: "Ali BlondorPlex prepreči, da bi blond barva postala rumenkasta?",
                    a: "Da, anti-rumene molekule v formuli preprečujejo pojav toplih tonov in ohranjajo čist, hladen blond odtenek."
                },

                {
                    q: "Ali je BlondorPlex primeren tudi za balayage tehniko?",
                    a: "Vsekakor, uporabimo ga tako pri celotni posvetlitvi kot pri mehki balayage tehniki ali platinastem videzu."
                }
            ]

        }

    },

    {
        slug: {
            en: "wellaplex",
            sl: "wellaplex"
        },

        category: "haircuts",

        date: {
            en: "October 20, 2025",
            sl: "20. oktober 2025"
        },

        title: {
            en: "Wellaplex",
            sl: "Wellaplex"
        },

        excerpt: {
            en: "Meet WELLAPLEX, Wella's professional treatment that rebuilds your hair's inner bonds during coloring, keeping it healthy and shiny.",
            sl: "Spoznaj WELLAPLEX, profesionalno nego znamke Wella, ki med barvanjem obnovi notranje vezi v laseh in jih ohrani zdrave ter sijoče."
        },

        body: {

            en: [
                "Have you ever scrolled past those silky blonde waves on Instagram and thought, \"How do they lighten their hair that much and still make it look healthy?\"",

                "Here's the secret: WELLAPLEX.",

                "If you've ever colored, lightened, or highlighted your hair, you already know what usually follows: dry ends, split hair, and a straw-like texture that no conditioner seems to fix. That happens because coloring and bleaching literally break the internal bonds in your hair that give it strength.",

                "WELLAPLEX works from the inside out. It's a professional treatment from Wella that reconnects those broken bonds during the coloring process. Think of it as building steel reinforcements into your hair, keeping it flexible, shiny, and healthy, even after lightening.",

                "How it works:",

                "Step 1: Your stylist mixes WELLAPLEX No. 1 into the color or lightener. While the color develops, WELLAPLEX rebuilds the internal bonds.",

                "Step 2: After rinsing, WELLAPLEX No. 2 is applied to stabilize and strengthen the hair's structure, leaving it softer and stronger after just one treatment.",

                "Step 3: At home, you continue with the No. 3 Hair Stabilizer, which maintains the effect between salon visits.",

                "Clients notice the difference right away: hair feels softer to the touch, looks shinier, and breaks less.",

                "If your hair is worn out from heat styling, coloring, or bleaching, it's time to bring it back to life.",

                "Ready to see what WELLAPLEX can do for your hair?",

                "Book your appointment at StatusKay Salon and ask about the WELLAPLEX treatment.",

                "Your hair will thank you💫"
            ],

            sl: [
                "Si že kdaj pogledala tiste svilnate blond valovite lase na Instagramu in pomislila: “Kako jim uspe lase tako posvetliti, pa še vedno izgledajo zdravi?”",

                "Tukaj je skrivnost: WELLAPLEX.",

                "Če si si kdaj barvala, posvetlila ali naredila pramene, potem že veš, kaj običajno sledi: suhe konice, razcepljeni lasje in slamnata tekstura, ki je noben balzam ne reši. To se zgodi zato, ker barvanje in beljenje dobesedno pretrgata notranje vezi v laseh, ki jim dajejo moč.",

                "WELLAPLEX deluje od znotraj navzven. Gre za profesionalno nego znamke Wella, ki med barvanjem ponovno poveže pretrgane vezi v laseh. Predstavljaj si, kot da bi v lase vgradila jeklene ojačitve, ki tvoje lase ohranja prožne, sijoče in zdrave, tudi po posvetljevanju.",

                "Kako deluje:",

                "Korak 1: Tvoj stilist zmeša WELLAPLEX No. 1 z barvo ali svetlilcem. Medtem ko barva deluje, WELLAPLEX obnavlja notranje vezi.",

                "Korak 2: Po izpiranju sledi WELLAPLEX No. 2, ki stabilizira in okrepi strukturo las, da so že po prvem tretmaju bolj mehki in močni.",

                "Korak 3: Doma nadaljuješ z No. 3 Hair Stabilizerjem, ki ohranja učinek med posameznimi obiski salona.",

                "Stranke tako opazijo razliko: lasje so mehkejši na otip, bolj sijoči in se manj lomijo.",

                "Če so tvoji lasje utrujeni od toplotnega oblikovanja, barvanja ali beljenja, potem je čas, da jim vrneš življenje.",

                "Si pripravljena, da vidiš, kaj WELLAPLEX naredi za tvoje lase?",

                "Rezerviraj svoj termin v StatusKay Salonu in povprašaj za WELLAPLEX tretma.",

                "Tvoji lasje ti bodo hvaležni💫"
            ]

        },

        faq: {

            en: [
                {
                    q: "Does WELLAPLEX make hair color last longer?",
                    a: "WELLAPLEX mainly protects and strengthens the hair's internal structure during coloring, which in turn helps your color look better and hold up longer too."
                },

                {
                    q: "Is WELLAPLEX suitable for already damaged hair?",
                    a: "Yes, hair that's worn out from coloring, bleaching, or heat styling actually benefits from the treatment the most."
                },

                {
                    q: "Can I get the WELLAPLEX treatment with any coloring appointment?",
                    a: "Of course, just mention WELLAPLEX when booking and your stylist will build it into your coloring process."
                }
            ],

            sl: [
                {
                    q: "Ali WELLAPLEX podaljša trajanje barve?",
                    a: "WELLAPLEX v prvi vrsti ščiti in krepi notranjo strukturo las med barvanjem, kar posredno pripomore tudi k lepšemu in bolj obstojnemu videzu barve."
                },

                {
                    q: "Ali je WELLAPLEX primeren za že poškodovane lase?",
                    a: "Da, ravno lasje, ki so utrujeni od barvanja, beljenja ali toplotnega oblikovanja, imajo od tretmaja največ koristi."
                },

                {
                    q: "Ali WELLAPLEX tretma lahko dobim ob vsakem barvanju?",
                    a: "Seveda, dovolj je, da ob rezervaciji termina povprašaš za WELLAPLEX in ga stilistka vključi v tvoj barvalni postopek."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-revive-damaged-curls",
            sl: "kako-ponovno-oziviti-poskodovane-kodre"
        },

        category: "haircuts",

        date: {
            en: "October 13, 2025",
            sl: "13. oktober 2025"
        },

        title: {
            en: "How to Revive Damaged Curls",
            sl: "Kako ponovno oživiti poškodovane kodre"
        },

        excerpt: {
            en: "Dry, frizzy curls with no life left in them? Here are five simple steps to bring back their softness, shine, and shape.",
            sl: "Suhi, krepasti kodri brez življenja? Preberi pet preprostih korakov, s katerimi jim povrneš mehkobo, sijaj in obliko."
        },

        body: {

            en: [
                "If your curls have been feeling more \"eh\" than \"wow\" lately — dry, frizzy, or just lacking real life — don't worry. Curly hair gets damaged quickly (from heat, coloring, dry brushing, or washing too often), but with a little proper care you can bring it back to life without any trouble.",

                "Here are a few tips that will help 👇",

                "1. Be gentle when washing",

                "Swap your usual shampoo for a cleansing conditioner or a low-lather shampoo. Co-washing (washing with conditioner) gently cleans the hair without stripping its natural oils. Think of it as washing your hair with moisture. Your curls will instantly feel softer, smoother, and better defined.",

                "2. Deep conditioning is a must",

                "Curly hair loves hydration. Once a week, use a nourishing conditioner or a deep hair mask. Apply it from mid-length to ends and let it work for a few minutes. Your curls will thank you with a softer texture and natural volume.",

                "3. Add a leave-in conditioner",

                "A good leave-in conditioner or moisture-restoring spray locks water into the hair and helps repair damaged strands. Use it on damp hair before styling. Your curls will be stronger, shinier, and easier to style.",

                "4. Protect and style smart",

                "Swap your rough towel for a microfiber one. Sleep on a silk pillowcase. If you blow-dry your hair, always use a diffuser and heat protection. A gentle routine gives you happy curls.",

                "5. Be consistent",

                "Healthy curls don't happen overnight. Stick to your routine, trim the ends every 6–8 weeks, and use products made specifically for curly hair. Over time the shine will return and your natural curl pattern will shine again.",

                "✨ Your curls aren't ruined, they're just waiting for you to give them the right care so they can shine again."
            ],

            sl: [
                "Če tvoji kodri v zadnjem času delujejo bolj “eh” kot “wow”, so suhi, krepasti ali brez pravega življenja, ne skrbi. Kodrasti lasje se hitro poškodujejo (zaradi toplote, barvanja, suhega česanja ali prepogostega umivanja), ampak z malo prave nege jih lahko brez težav oživiš.",

                "Nekaj nasvetov, ki ti bojo pomagali 👇",

                "1. Nežno pri umivanju",

                "Zamenjaj svoj običajni šampon za čistilni balzam ali šampon z malo pene. Co-washing (umivanje z balzamom) nežno očisti lase, ne da bi odstranil njihova naravna olja. Pomisli, kot da lase umivaš z vlago. Tvoji kodri bodo takoj mehkejši, bolj gladki in lepo oblikovani.",

                "2. Globinska nega je obvezna",

                "Kodrasti lasje obožujejo hidracijo. Enkrat na teden uporabi hranilen balzam ali globinsko masko za lase. Nanesi jo od sredine do konic in pusti delovati nekaj minut. Kodri ti bodo hvaležni z mehko teksturo in naravnim volumnom.",

                "3. Dodaj leave-in balzam",

                "Dober leave-in balzam ali pršilo za obnovo vlage ohrani vodo v laseh in pomaga popraviti poškodovane pramene. Uporabi ga na vlažnih laseh pred oblikovanjem. Tvoji kodri bodo močnejši, sijoči in lažji za oblikovanje.",

                "4. Zaščiti in stiliraj pametno",

                "Namesto grobe brisače uporabi mikrovlakneno brisačo. Spi na svileni prevleki za blazino. Če sušiš lase s sušilcem, vedno uporabi difuzor in toplotno zaščito. Nežna rutina ti prinese srečne kodre.",

                "5. Bodi dosledna",

                "Zdravi kodri ne nastanejo čez noč. Drži se svoje rutine, konice postriži vsakih 6–8 tednov in uporabljaj izdelke, ki so narejeni posebej za kodraste lase. Sčasoma bo sijaj vrnil in tvoj naravni vzorec kodrov bo spet zasijal.",

                "✨ Tvoji kodri niso uničeni, samo čakajo, da jim ponudiš pravo nego, da znova zasijejo."
            ]

        },

        faq: {

            en: [
                {
                    q: "How often should I use a deep conditioning mask for curly hair?",
                    a: "Once a week is ideal, apply it from mid-length to ends and leave it on for a few minutes for softer texture and more volume."
                },

                {
                    q: "Can I blow-dry my curls without damaging them?",
                    a: "Yes, just use a diffuser and always apply heat protection first, that keeps your curl pattern intact without extra damage."
                },

                {
                    q: "How often should I trim my ends to keep curls healthy?",
                    a: "We recommend a trim once your ends feel dry and start tangling more — that prevents split ends from spreading and keeps your natural curl pattern looking its best."
                }
            ],

            sl: [
                {
                    q: "Kako pogosto naj uporabljam globinsko masko za kodraste lase?",
                    a: "Enkrat na teden je idealno, nanesi jo od sredine do konic in pusti delovati nekaj minut za mehkejšo teksturo in več volumna."
                },

                {
                    q: "Ali lahko kodre posušim s sušilnikom, ne da bi jih poškodovala?",
                    a: "Da, uporabi difuzor in vedno nanesi toplotno zaščito, tako ohraniš obliko kodrov brez dodatne škode."
                },

                {
                    q: "Kako pogosto naj strižem konice, da kodri ostanejo zdravi?",
                    a: "Priporočamo striženje, ko konice postanejo suhe in se zapletajo, tako preprečiš širjenje razcepljenih konic in ohraniš naravni vzorec kodrov."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-you-should-use-nail-oil-every-day",
            sl: "zakaj-uporabljati-olje-za-nohte-vsak-dan"
        },

        category: "nails",

        date: {
            en: "October 6, 2025",
            sl: "6. oktober 2025"
        },

        title: {
            en: "Why You Should Use Nail Oil Every Day",
            sl: "Zakaj uporabljati olje za nohte vsak dan?"
        },

        excerpt: {
            en: "Discover why nail oil is the small but powerful secret to softer, shinier nails and gentler hands.",
            sl: "Odkrij, zakaj je olje za nohte majhna, a močna skrivnost za mehkejše, bolj sijoče nohte in nežnejše roke."
        },

        body: {

            en: [
                "Just like your skin needs cream, your nails crave care too. And nail oil is exactly that small secret that makes a huge difference.",

                "Think about it: every day we wash our hands, use disinfectants and cleaning products, type, do the dishes… all of it dries out the cuticles and weakens the nail.",

                "The result is brittle nails, cracked cuticles, and that feeling that your hands always look \"unkempt\".",

                "Nail oil works like a vitamin shot for your fingers.",

                "It contains natural oils and nutrients that penetrate deep into the nail plate and strengthen it from within.",

                "After just a few days of regular use, you'll notice the difference: nails become more flexible and shiny, cuticles softer, and your hands simply look lovelier.",

                "One quick tip: apply the oil every evening before bed. That way your hands will transform overnight into something gentle and silky-soft.",

                "Your hands tell your story, so make it a gentle, well-cared-for, radiant one.",

                "Don't wait for your nails to crack again. You can buy the oil right here at our salon (no need to wait for delivery!). And while you're at it, treat yourself to a professional manicure that will take your hands to a whole new level.",

                "Book your appointment today and discover just how magically soft your hands can become."
            ],

            sl: [
                "Tako kot koža potrebuje kremo, tudi tvoji nohti hrepenijo po negi. In ravno olje za nohte je tista majhna skrivnost, ki naredi ogromno razliko.",

                "Pomisli, vsakodnevno si umivamo roke, uporabljamo razkužila, čistila, tipkamo, peremo… vse to izsušuje kožico in oslabi noht.",

                "Rezultat so lomljivi nohti, razpokane obnohtne kožice in občutek, da so roke vedno “neurejene”.",

                "Olje za nohte deluje kot vitaminski napitek za tvoje prste.",

                "Vsebuje naravna olja in hranila, ki prodrejo globoko v nohtno ploščo in jo okrepijo od znotraj.",

                "Že po nekaj dneh redne uporabe boš opazila razliko, nohti postanejo bolj prožni in sijoči, kožica mehkejša, roke pa preprosto lepše.",

                "Še kratek nasvet: olje nanesi vsak večer pred spanjem. Tako se bodo tvoje roke čez noč spremenile v nežne in svilnato mehke.",

                "Tvoje roke povedo tvojo zgodbo, zato naj bo ta zgodba nežna, negovana in sijoča.",

                "Ne čakaj, da nohti spet popokajo. Olje lahko kupiš kar pri nas v salonu (ne rabiš čakati dostave!). Medtem pa si privošči še profesionalno nego rok, ki bo tvoje roke ponesla na čisto nov nivo.",

                "Rezerviraj svoj termin še danes in odkrij, kako čarobno mehke lahko postanejo tvoje roke."
            ]

        },

        faq: {

            en: [
                {
                    q: "When's the best time to apply nail oil?",
                    a: "Every evening before bed is ideal, so it can deeply nourish your nail plate and cuticles overnight."
                },

                {
                    q: "Does nail oil actually help with brittle nails?",
                    a: "Yes, regular use strengthens the nail plate from within, and you'll notice less brittleness and more flexibility within just a few days."
                },

                {
                    q: "Where can I buy the nail oil you recommend?",
                    a: "You can buy it right here at our salon, no need to wait for delivery, and you can pair it with a professional manicure while you're at it."
                }
            ],

            sl: [
                {
                    q: "Kdaj je najboljši čas za nanašanje olja za nohte?",
                    a: "Najbolje je, da olje nanašaš vsak večer pred spanjem, tako lahko čez noč globinsko neguje nohtno ploščo in obnohtno kožico."
                },

                {
                    q: "Ali olje za nohte res pomaga pri lomljivih nohtih?",
                    a: "Da, redna uporaba krepi nohtno ploščo od znotraj in že po nekaj dneh opaziš, da so nohti manj lomljivi in bolj prožni."
                },

                {
                    q: "Kje lahko kupim olje za nohte, ki ga priporočate?",
                    a: "Olje lahko kupiš kar pri nas v salonu, brez čakanja na dostavo, ob tem pa si lahko privoščiš tudi profesionalno nego rok."
                }
            ]

        }

    },

    {
        slug: {
            en: "what-is-formaldehyde",
            sl: "kaj-je-formaldehid"
        },

        category: "nails",

        date: {
            en: "September 29, 2025",
            sl: "29. september 2025"
        },

        title: {
            en: "What Is Formaldehyde?",
            sl: "Kaj je formaldehid"
        },

        excerpt: {
            en: "Formaldehyde is a common but dangerous ingredient in nail products. Find out what it can cause and how our salon offers a safer alternative.",
            sl: "Formaldehid je pogosta, a nevarna sestavina v izdelkih za nohte. Odkrij, kaj povzroča in kako v našem salonu poskrbimo za varno alternativo."
        },

        body: {

            en: [
                "Have you ever wondered what's actually hiding in the products we put on our nails? One of the most notorious ingredients is formaldehyde.",

                "Sounds like something out of a biology lab… and that's not far from the truth.",

                "Formaldehyde is commonly used as a nail hardener, since it strengthens the surface and reduces breakage. When this chemical comes into contact with your nails (and your body), it can cause dry, brittle, splitting nails, itchy skin around them, and even allergic reactions.",

                "Some people even report pain in the nail bed or redness that just won't go away.",

                "And here's the warning: with long-term exposure (especially in salons with poor ventilation), formaldehyde can irritate the airways and eyes.",

                "But that's not all.",

                "Formaldehyde is classified as a potential carcinogen. And that's not something you want anywhere near your body, let alone regularly on your nails.",

                "Luckily, there are alternatives.",

                "At Status Kay salon, we swear by formaldehyde-free products like OPI Nail Envy, which strengthens nails without toxic chemicals. Your nails shouldn't have to suffer to look beautiful.",

                "So next time you want polished, well-groomed nails, choose care that respects your body.",

                "Because health is the new beauty."
            ],

            sl: [
                "Si že kdaj pomislila, kaj se skriva v izdelkih, ki jih nanašamo na svoje nohte? Ena najbolj zloglasnih sestavin je formaldehid.",

                "Zveni kot nekaj iz laboratorija za biologijo… in to ni daleč od resnice.",

                "Formaldehid se pogosto uporablja kot ojačevalec za nohte, saj utrdi površino in zmanjša lomljenje. Ko pride ta kemikalija v stik s tvojimi nohti (in tvojim telesom), lahko povzroči suhe, lomljive, razcepljene nohte, srbečo kožo okoli njih in celo alergijske reakcije.",

                "Nekateri celo poročajo o bolečinah v nohtni postelji ali rdečici, ki kar ne izgine.",

                "In pozor! Pri dolgotrajni izpostavljenosti (sploh pri salonih z neustreznim prezračevanjem) lahko formaldehid draži dihala in oči.",

                "A to še ni vse.",

                "Formaldehid je razvrščen kot potencialno rakotvoren. In to ni nekaj, kar si želiš imeti v bližini svojega telesa, kaj šele redno na svojih nohtih.",

                "Na srečo obstajajo alternative.",

                "V salonu Status Kay prisegamo na izdelke brez formaldehida, kot je OPI Nail Envy, ki krepi nohte brez strupenih kemikalij. Tvoji nohti ne rabijo trpeti zato, da so lepi.",

                "Zato naslednjič, ko si boš želela urejene nohte, izberi nego, ki spoštuje tvoje telo.",

                "Ker zdravje je nova lepota."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why is formaldehyde in nail products a problem?",
                    a: "It can cause dry, brittle nails, itchy skin, and allergic reactions, and with long-term exposure it can also irritate the airways and eyes."
                },

                {
                    q: "Is formaldehyde in nail products really a health risk?",
                    a: "Yes, it's classified as a potential carcinogen, so it's best avoided entirely in nail care."
                },

                {
                    q: "What products do you use instead of ones with formaldehyde?",
                    a: "At Status Kay we use formaldehyde-free products like OPI Nail Envy, which strengthens nails without toxic chemicals."
                }
            ],

            sl: [
                {
                    q: "Zakaj je formaldehid v izdelkih za nohte problematičen?",
                    a: "Lahko povzroči suhe, lomljive nohte, srbečo kožo in alergijske reakcije, pri dolgotrajni izpostavljenosti pa draži tudi dihala in oči."
                },

                {
                    q: "Ali je formaldehid v izdelkih za nohte res nevaren za zdravje?",
                    a: "Da, razvrščen je kot potencialno rakotvoren, zato ga je najbolje popolnoma izločiti iz nege nohtov."
                },

                {
                    q: "Katere izdelke uporabljate namesto tistih s formaldehidom?",
                    a: "V salonu Status Kay uporabljamo izdelke brez formaldehida, kot je OPI Nail Envy, ki krepi nohte brez strupenih kemikalij."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-its-good-to-let-your-nails-breathe",
            sl: "zakaj-je-dobro-pustiti-nohte-da-dihajo"
        },

        category: "nails",

        date: {
            en: "September 22, 2025",
            sl: "22. september 2025"
        },

        title: {
            en: "Why It's Good to Let Your Nails Breathe",
            sl: "Zakaj je dobro pustiti nohte, da dihajo"
        },

        excerpt: {
            en: "Gel and acrylic make your nails look beautiful, but they also suffocate them. Find out why it's important to let your nails breathe from time to time, and how to help them along the way.",
            sl: "Gel in akril naredita nohte lepe, a jih tudi dušita. Odkrij, zakaj je pomembno občasno pustiti nohte, da dihajo, in kako jim pri tem pomagati."
        },

        body: {

            en: [
                "Every woman knows how tempting it is to always have perfectly done nails. Gel polish, acrylic, and gel make hands look gorgeous, but what's actually happening underneath all those layers? We're suffocating our nails. And even though they seem strong at first glance, they're often actually weakened, brittle, and lacking shine.",

                "Letting your nails breathe means giving them the chance to regenerate. Without a constant layer of artificial material, the natural nail can finally \"recover\" and regain a healthy look. This is especially important if your nails often peel, break, or feel like they're always thin and weak.",

                "And this is where the solution comes in: OPI Repair Mode Bond Building Nail Serum. It's the world's first bond-building serum formula that works within the nail's own structure. Their patented Ulti-Plex Technology repairs up to 99% of keratin and strengthens nails up to 4x in just six days.",

                "The result? Smooth, shiny, and resilient nails, without hiding them under a layer of gel.",

                "So why should you let your nails breathe?",

                "✨ Because they deserve a break from the chemicals.",

                "✨ Because strong natural nails mean less breakage and less pain.",

                "✨ Because with products like Repair Mode, we can give them real care, not just cover up the damage.",

                "Next time you're thinking about another gel manicure, consider giving your nails a few days of freedom instead. You'll soon notice the difference, breathing nails end up healthier and shinier."
            ],

            sl: [
                "Vsaka ženska ve, kako mamljivo je imeti vedno popolno urejene nohte. Gelish, akril in gel naredijo roke čudovite, a kaj se dogaja pod vso to plastjo? Nohte dušimo. In čeprav se na prvi pogled zdijo močni, so v resnici pogosto oslabljeni, lomljivi in brez sijaja.",

                "Pustiti nohte, da dihajo, pomeni dati jim priložnost, da se regenerirajo. Brez stalnega nanosa umetnih materialov lahko naravna plast končno \"okreva\" in si povrne zdrav videz. To je še posebej pomembno, če se vam pogosto luščijo, lomijo ali imate občutek, da so vedno tanki in šibki.",

                "In tukaj pride rešitev: OPI Repair Mode Bond Building Nail Serum. Gre za prvo bond-building serumsko formulo na svetu, ki deluje znotraj same strukture nohta. Njihova patentirana Ulti-Plex Technology popravi kar 99% keratina in v samo šestih dneh 4x bolj okrepi nohte.",

                "Rezultat? Gladki, sijoči in odporni nohti, brez da bi jih skrili pod gelom.",

                "Zakaj bi torej morali pustiti nohte, da dihajo?",

                "✨ Ker si zaslužijo pavzo od kemikalij.",

                "✨ Ker močni naravni nohti pomenijo manj lomljenja in bolečin.",

                "✨ Ker jim lahko z izdelki, kot je Repair Mode, omogočimo pravo nego, ne le prekrivanje napak.",

                "Ko naslednjič razmišljate o ponovnem nanosu gela, razmislite, kaj če bi jim namesto tega privoščili nekaj dni svobode? Nohte, ki dihajo, boste kmalu opazili tudi vi, saj bodo bolj zdravi in sijoči."
            ]

        },

        faq: {

            en: [
                {
                    q: "Why should I let my nails breathe from time to time?",
                    a: "Because constant gel or acrylic application weakens the natural nail - a break gives it the chance to regenerate and become healthier."
                },

                {
                    q: "What is OPI Repair Mode Bond Building Nail Serum?",
                    a: "It's a serum that works within the nail's structure, strengthening nails up to 4x and repairing keratin in just six days."
                },

                {
                    q: "How often should I give my nails a break from gel or acrylic?",
                    a: "Even a few days without artificial product makes a difference - try building breaks into your routine between applications for healthier nails."
                }
            ],

            sl: [
                {
                    q: "Zakaj bi morala pustiti nohte, da občasno dihajo?",
                    a: "Ker stalen nanos gela ali akrila oslabi naravni nohet - premor mu da priložnost, da se regenerira in postane bolj zdrav."
                },

                {
                    q: "Kaj je OPI Repair Mode Bond Building Nail Serum?",
                    a: "To je serum, ki deluje znotraj strukture nohta in v samo šestih dneh do 4-krat okrepi nohte ter popravi keratin."
                },

                {
                    q: "Kako pogosto naj dam nohtom premor od gela ali akrila?",
                    a: "Že nekaj dni brez umetnega nanosa naredi razliko - poskusi jih vključiti med posamezne nanose za zdravje nohtov."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-choose-the-right-hair-mask",
            sl: "kako-izbrati-masko-za-lase"
        },

        category: "haircuts",

        date: {
            en: "September 15, 2025",
            sl: "15. september 2025"
        },

        title: {
            en: "How to Choose the Right Hair Mask",
            sl: "Kako izbrati masko za lase"
        },

        excerpt: {
            en: "Not every hair mask is created equal. Find out which one is right for your hair type, whether it's dry, oily, damaged, or colored.",
            sl: "Ni vsaka maska za lase enaka. Odkrij, katera je prava za tvoj tip las, naj bodo suhi, mastni, poškodovani ali barvani."
        },

        body: {

            en: [
                "Your hair deserves more than just a quick shampoo. It deserves real care. And sometimes that care comes in the form of a rich, nourishing hair mask. But not every mask is made for every hair type. Choosing the right one can mean the difference between silky, shiny strands and heavy, greasy hair.",

                "For dry hair: If your hair is rough, brittle, or dry, it needs deep hydration. Look for masks rich in natural oils (like argan or coconut) and ingredients such as shea butter. These restore moisture and bring back shine.",

                "For oily hair: Yes, oily hair needs masks too, just the right kind. Avoid heavy, oily products. Instead, choose lightweight formulas with clay or tea tree extract, which regulate sebum production without weighing hair down.",

                "For damaged hair: Heat styling, bleaching, or constantly pulling your hair into a ponytail can weaken and break it. Protein-rich masks (with keratin, collagen, or silk amino acids) help rebuild and strengthen hair from the inside out.",

                "For colored hair: If you've invested in highlights, balayage, or a bold new shade, protect it. Look for masks labeled \"safe for colored hair\" that contain UV filters and nourishing oils. These lock in color and prevent fading and dryness.",

                "💡 Tip: Apply the mask once a week, leave it on for 5–15 minutes, and always finish with a cool water rinse.",

                "Your perfect mask exists, and once you find it, your hair will thank you with shine, strength, and bounce.",

                "✨ Not sure which mask is right for you? Book an appointment with our stylists. We'll analyze your hair and choose the perfect treatment so you leave with hair that feels like magic."
            ],

            sl: [
                "Vaši lasje si zaslužijo več kot le hitro umivanje s šamponom. Zaslužijo si pravo nego. In včasih ta nega pride v obliki bogate, hranilne maske za lase. A ni vsaka maska narejena za vsak tip las. Izbira prave lahko pomeni razliko med svilnatimi, sijočimi prameni in težkimi, mastnimi lasmi.",

                "Za suhe lase: Če so vaši lasje hrapavi, lomljivi ali suhi, potrebujejo globinsko hidracijo. Poiščite maske, bogate z naravnimi olji (kot sta arganovo ali kokosovo) in sestavinami, kot je karitejevo maslo. Te obnovijo vlago in vrnejo sijaj.",

                "Za mastne lase: Da, tudi mastni lasje potrebujejo maske, le prave. Izogibajte se težkim, oljnim izdelkom. Namesto tega izberite lahke formule z glino ali izvlečkom čajevca, ki uravnavajo izločanje sebuma, ne da bi lase obtežili.",

                "Za poškodovane lase: Toplotno oblikovanje, beljenje ali neprestano spenjanje v čop lahko lase oslabi in polomi. Beljakovinsko bogate maske (s keratinom, kolagenom ali aminokislinami svile) pomagajo ponovno zgraditi in okrepiti lase od znotraj navzven.",

                "Za barvane lase: Če ste investirali v pramene, balayage ali drzen nov odtenek, ga zaščitite. Poiščite maske z oznako \"varna za barvane lase\", ki vsebujejo UV-filtre in hranilna olja. Te zaklenejo barvo ter preprečijo bledenje in izsuševanje.",

                "💡 Nasvet: Masko nanesite enkrat na teden, pustite delovati 5–15 minut in vedno zaključite z izpiranjem s hladno vodo.",

                "Vaša popolna maska obstaja in ko jo najdete, vam bodo lasje hvaležni s sijajem, močjo in prožnostjo.",

                "✨ Niste prepričani, katera maska je prava za vas? Rezervirajte termin pri naših stilistih. Analizirali bomo vaše lase in izbrali popolno nego, da boste odšli z lasmi, ki se počutijo kot čarovnija."
            ]

        },

        faq: {

            en: [
                {
                    q: "Which mask should I choose if I have dry hair?",
                    a: "Look for masks rich in natural oils like argan or coconut, and with shea butter - they restore moisture and bring back shine."
                },

                {
                    q: "Does oily hair even need a mask?",
                    a: "Yes, just choose lightweight formulas with clay or tea tree extract, which regulate sebum without weighing hair down."
                },

                {
                    q: "How often should I apply a hair mask?",
                    a: "Apply it once a week, leave it on for 5 to 15 minutes, and finish with a cool water rinse."
                }
            ],

            sl: [
                {
                    q: "Katero masko naj izberem, če imam suhe lase?",
                    a: "Poišči maske, bogate z naravnimi olji, kot sta arganovo ali kokosovo, in s karitejevim maslom - ti obnovijo vlago in vrnejo sijaj."
                },

                {
                    q: "Ali mastni lasje sploh potrebujejo masko?",
                    a: "Da, izberi le lahke formule z glino ali izvlečkom čajevca, ki uravnavajo izločanje sebuma, ne da bi lase obtežile."
                },

                {
                    q: "Kako pogosto naj nanašam masko za lase?",
                    a: "Masko nanesi enkrat na teden, pusti delovati 5 do 15 minut in zaključi z izpiranjem s hladno vodo."
                }
            ]

        }

    },

    {
        slug: {
            en: "blow-drying-with-ibiza-brushes",
            sl: "feniranje-s-krtacami-ibiza"
        },

        category: "haircuts",

        date: {
            en: "September 1, 2025",
            sl: "1. september 2025"
        },

        title: {
            en: "Blow-Drying With Ibiza Brushes",
            sl: "Feniranje s krtačami Ibiza"
        },

        excerpt: {
            en: "Discover why professionals swear by Ibiza brushes and how they can help you get a salon-fresh look with your at-home blow-dry.",
            sl: "Odkrij, zakaj profesionalci prisegajo na krtače Ibiza in kako ti lahko pomagajo do salonskega videza pri domačem feniranju."
        },

        body: {

            en: [
                "If you've ever tried smoothing your hair at home with a round brush and a blow dryer, you know the right brush works wonders. There's a reason professionals swear by Ibiza bristle brushes.",

                "Blonde brushes are made for blonde, fine, processed, and damaged hair. They're softer and gentler on the hair, yet strong enough to create volume and shape without breakage.",

                "Black brushes, on the other hand, are made for strong, thick hair. They give you a perfectly smooth finish, and hair that looks salon-fresh. If you choose a brush color that matches your hair, you barely notice how much hair is actually caught in the bristles.",

                "When blow-drying with Ibiza brushes, you don't need as much heat. The natural bristles smooth hair mechanically, which means less damaged ends and a healthier, shinier look overall.",

                "To help you see the difference more clearly, hop over to our social media and check out this short video,",

                "If you want your everyday blow-dry to look like it came straight from the salon, give Ibiza brushes a try.",

                "A small trick that makes a big difference."
            ],

            sl: [
                "Če si kdaj poskusila doma zgladiti lase s krtačo in fenom, potem veš, da prava krtača naredi čudeže. Obstaja razlog, zakaj profesionalci prisegajo na Ibiza ščetine.",

                "Blond krtače so ustvarjene za blond, tanke, procesirane in poškodovane lase. So mehkejše, nežne do las in hkrati dovolj močne, da ustvarijo volumen in obliko brez lomljenja.",

                "Črne krtače pa so narejene za močne in goste lase. Z njimi dosežeš popolno glajenje, lasje pa so videti kot iz salona. Če si izbereš barvo, ki se ujema s tvojimi lasmi, se niti ne opazi toliko, koliko las je dejansko ujetih na krtači.",

                "Pri feniranju z Ibiza krtačami ne potrebuješ toliko toplote. Naravne ščetine lase mehansko zgladijo, kar pomeni manj poškodovanih konic in bolj zdrav ter sijoč videz.",

                "Da boš lažje videla razliko, skoči na naša socialna omrežja in si poglej tale kratek video,",

                "Če si želiš, da bo tvoje vsakdanje feniranje izgledalo kot iz salona, poskusi z Ibiza krtačami.",

                "Mali trik, ki naredi veliko razliko."
            ]

        },

        faq: {

            en: [
                {
                    q: "What's the difference between blonde and black Ibiza brushes?",
                    a: "Blonde brushes are softer and made for fine, processed, or damaged hair, while black brushes suit thicker, stronger hair and give a perfectly smooth finish."
                },

                {
                    q: "Why do professionals swear by Ibiza brushes?",
                    a: "The natural bristles smooth hair mechanically, so you need less heat, which means less damaged ends and a healthier look overall."
                },

                {
                    q: "Can I get a salon-fresh look at home with an Ibiza brush?",
                    a: "Absolutely - with the right brush and a blow dryer, you can recreate the same smooth, shiny look you'd get in our salon."
                }
            ],

            sl: [
                {
                    q: "Kakšna je razlika med blond in črnimi Ibiza krtačami?",
                    a: "Blond krtače so mehkejše in narejene za tanke, procesirane ali poškodovane lase, črne pa za močnejše in gostejše lase, kjer zagotovijo popolno glajenje."
                },

                {
                    q: "Zakaj profesionalci prisegajo na Ibiza krtače?",
                    a: "Naravne ščetine lase zgladijo mehansko, zato je potrebne manj toplote, kar pomeni manj poškodovanih konic in bolj zdrav videz."
                },

                {
                    q: "Ali lahko z Ibiza krtačo doma dosežem salonski videz?",
                    a: "Vsekakor - s pravo krtačo in fenom lahko doma ustvariš enako gladek in sijoč videz, kot ga dobiš pri nas v salonu."
                }
            ]

        }

    },

    {
        slug: {
            en: "the-basics-of-heat-styling",
            sl: "osnove-toplotnega-oblikovanja"
        },

        category: "haircuts",

        date: {
            en: "August 25, 2025",
            sl: "25. avgust 2025"
        },

        title: {
            en: "The Basics of Heat Styling",
            sl: "Osnove toplotnega oblikovanja"
        },

        excerpt: {
            en: "Heat styling can work wonders for your hairstyle, but also cause damage if you don't know how to use it properly. Here are the basics for a great look without the damage.",
            sl: "Toplotno oblikovanje lahko naredi čudeže za tvojo pričesko, a tudi škodo, če ne veš, kako ga uporabljati pravilno. Tukaj so osnove za lep videz brez poškodb."
        },

        body: {

            en: [
                "The big event. You check yourself in the mirror. Your hair is still slightly damp. You grab the blow dryer like a sword, smooth every unruly section with a straightener, then create soft, perfect curls with a curling iron.",

                "And your hair looks divine. But to the touch, it feels like straw.",

                "That's the hidden damage of heat styling. Every time your hair sizzles under 200°C, it loses moisture, protein, and shine. Little by little, but quickly, it leads to dry, damaged hair.",

                "So how do you keep the look without ruining your hair?",

                "1: Never style without protection. Using heat on unprotected hair is like sunbathing without sunscreen. Before any hot tool touches your hair, apply a heat protectant spray or serum. Look for ingredients like dimethicone or hydrolyzed silk. These create a protective layer that prevents damage from within.",

                "2: Lower the temperature. Most people crank their tools all the way up. That's the biggest mistake. If you have fine or colored hair, stay under 180°C. If your hair is thicker, you can go a bit higher, but never above 210°C.",

                "3: Don't straighten wet hair. Straightening wet hair causes heat damage. Always let your hair air-dry to at least 80%, or use a microfiber towel before blow-drying.",

                "4: Use quality tools. Ceramic plates, ionic technology, and adjustable temperature settings. That's what really makes the difference, and your hair will thank you for it.",

                "✨ Want a salon-fresh look without the damage? Book your appointment before your next heat-styling session. Let's keep your hair strong, not scorched."
            ],

            sl: [
                "Velik dogodek. Pogledaš se v ogledalo, nato pa s kodralnikom ustvariš mehke, popolne kodre.",

                "In lasje izgledajo božansko. Ampak na otip so kot slama.",

                "To je skrita škoda toplotnega oblikovanja. Vsakič, ko tvoji lasje zacvrčijo pod 200°C, izgubljajo vlago, proteine in sijaj. Malo po malo, a hitro pride do suhih in uničenih las.",

                "Kako ohraniti videz, brez da uničiš lase?",

                "1: Nikoli ne oblikuj brez zaščite. Uporaba toplote brez zaščite za lase je kot sončenje brez kreme. Preden katerakoli vroča naprava pride v stik z lasmi, uporabi termično zaščitno pršilo ali serum. Poišči sestavine kot so dimetikon ali hidrolizirana svila. Te ustvarijo zaščitni sloj, ki prepreči uničenje od znotraj.",

                "2: Zmanjšaj temperaturo. Večina ljudi ima naprave na maksimum. To je največja napaka. Če imaš tanke ali barvane lase, ostani pod 180°C. Če imaš debelejše lase, lahko greš malce višje, a nikoli čez 210°C.",

                "3: Ne likaj mokrih las. Likanje mokrih las povzroči toplotno škodo. Vedno pusti, da se lasje posušijo vsaj 80% ali uporabi mikrovlakensko brisačo pred feniranjem.",

                "4: Uporabi kakovostne naprave. Keramične plošče, ionska tehnologija in nastavljiva temperatura. To je tisto, kar naredi resnično razliko, in tvoji lasje ti bodo hvaležni.",

                "✨ Želiš salonski videz brez poškodb? Rezerviraj svoj termin že pred naslednjim toplotnim oblikovanjem. Ohranimo tvoje lase močne in ne zažgane."
            ]

        },

        faq: {

            en: [
                {
                    q: "How can I prevent damage from heat styling?",
                    a: "Always apply a heat protectant spray or serum before exposing your hair to a blow dryer, straightener, or curling iron."
                },

                {
                    q: "What temperature is safe for my hair?",
                    a: "For fine or colored hair, stay under 180°C; for thicker hair, you can go a bit higher, but never above 210°C."
                },

                {
                    q: "Is it really damaging to straighten wet hair?",
                    a: "Yes, straightening wet hair causes serious heat damage - always let it air-dry to at least 80%, or use a microfiber towel first."
                }
            ],

            sl: [
                {
                    q: "Kako lahko preprečim poškodbe las zaradi toplotnega oblikovanja?",
                    a: "Vedno uporabi termično zaščitno pršilo ali serum, preden lase izpostaviš feniranju, likanju ali kodranju."
                },

                {
                    q: "Kakšna temperatura je varna za moje lase?",
                    a: "Za tanke ali barvane lase ostani pod 180°C, za debelejše lase pa lahko greš malce više, a nikoli čez 210°C."
                },

                {
                    q: "Ali je res škodljivo likati mokre lase?",
                    a: "Da, likanje mokrih las povzroči resno toplotno škodo - vedno počakaj, da se posušijo vsaj 80%, ali uporabi mikrovlakensko brisačo."
                }
            ]

        }

    },

    {
        slug: {
            en: "5-tricks-for-healthy-shiny-hair",
            sl: "5-trikov-za-zdrave-in-sijoce-lase"
        },

        category: "haircuts",

        date: {
            en: "August 18, 2025",
            sl: "18. avgust 2025"
        },

        title: {
            en: "5 Tricks for Healthy, Shiny Hair",
            sl: "5 trikov za zdrave in sijoče lase"
        },

        excerpt: {
            en: "Tired of dry, damaged hair? Here are 5 simple tricks your stylist recommends for healthy, shiny hair.",
            sl: "Dolgčas s suhimi in poškodovanimi lasmi? Tukaj je 5 preprostih trikov, ki jih tvoj stilist priporoča za zdrave in sijoče lase."
        },

        body: {

            en: [
                "There's nothing cute about dull, lifeless hair. Split ends? Dry strands? That weird straw-like texture at the tips? No thanks. You deserve hair that turns heads and shines.",

                "Here are 5 quick tricks your stylist wishes you'd follow (and your hair will thank you for them):",

                "Silky pillowcases: Regular cotton tugs at your hair while you sleep and causes tangles. Switch to satin or silk and wake up with smoother, less static hair. Your skin will thank you too.",

                "Cold rinse for instant shine: Yes, it sounds awful. But an icy blast at the end of your shower seals the hair cuticle, locks in moisture, and adds that glossy effect. Try it for a week and you'll see the difference.",

                "Don't wash too often: Washing daily strips away your hair's natural oils. 2–3 times a week is the sweet spot for most people. In between? Dry shampoo and a good bun.",

                "Be gentle with your ends: The ends are the oldest part of your hair, don't torture them. Apply conditioner only from mid-length down. And after washing, blot with a towel instead of rubbing.",

                "Heat protection. Always and every time: Curling, straightening, or blow-drying without protection is a slow burn for your hair. Use a good heat protectant spray or serum.",

                "Want a personalized hair care plan? Book a consultation with our stylist at StatusKay and let's bring your shine back together. 💇‍♀️"
            ],

            sl: [
                "Nič ni prikupnega na pustih, brezživljenjskih laseh. Razcepljene konice? Suhi prameni? Tista čudna slamnata tekstura na konicah? Ne, hvala. Zaslužiš si lase, ki obračajo poglede in se svetijo.",

                "Tukaj je 5 hitrih trikov, ki si jih tvoj stilist želi, da bi jih upoštevala (in tvoji lasje ti bodo hvaležni):",

                "Svilnate prevleke za blazino: Navadni bombaž med spanjem vleče lase in povzroča vozle. Zamenjaj z satenom ali svilo in se zbudi z bolj gladkimi in manj naelektrenimi lasmi. Tudi tvoja koža ti bo hvaležna.",

                "Hladno izpiranje za takojšen sijaj: Ja, sliši se grozno. Ampak ledeni curek na koncu tuširanja zapre lasno povrhnjico, zadrži vlago in doda tisti laskav efekt. Poskusi za teden dni in videla boš razliko.",

                "Ne umivaj jih prepogosto: Vsakodnevno pranje izpere naravna olja. 2–3x na teden je popolna mera za večino. Vmes? Suhi šampon in dobra figica.",

                "Nežno s konicami: Konice so najstarejši del tvojih las, ne muči jih. Balzam nanašaj samo od sredine dol. In po pranju popivnaj z brisačo.",

                "Termična zaščita. Vedno in vsakič: Če kodraš, ravnaš ali sušiš brez zaščite, je to počasno žganje las. Uporabi dober likalnik las ali pa zaščito.",

                "Si želiš personaliziran plan za nego las? Rezerviraj posvet pri naši stilistki v StatusKay in skupaj bomo vrnili tvoj sijaj. 💇‍♀️"
            ]

        },

        faq: {

            en: [
                {
                    q: "How often should I wash my hair for the healthiest look?",
                    a: "Two to three times a week is ideal for most people - washing more often strips away the natural oils that protect and nourish your hair."
                },

                {
                    q: "Does a cold rinse really make a difference for shine?",
                    a: "Yes, an icy blast at the end of your shower seals the hair cuticle and locks in moisture, giving you an instant glossy effect."
                },

                {
                    q: "Why is heat protection important before drying or styling my hair?",
                    a: "Without protection, heat slowly dries out and damages your hair, so always use a protectant spray or serum before blow-drying, straightening, or curling."
                }
            ],

            sl: [
                {
                    q: "Kako pogosto naj si umivam lase za najbolj zdrav videz?",
                    a: "2 do 3-krat na teden je idealno za večino - pogostejše umivanje izpere naravna olja, ki lase ščitijo in hranijo."
                },

                {
                    q: "Ali hladno izpiranje res naredi razliko pri sijaju las?",
                    a: "Da, ledeni curek ob koncu tuširanja zapre lasno povrhnjico in zadrži vlago, kar da takojšen sijaj."
                },

                {
                    q: "Zakaj je pomembna termična zaščita pred sušenjem ali oblikovanjem las?",
                    a: "Brez zaščite toplota las počasi izsuši in poškoduje, zato pred vsakim feniranjem, ravnanjem ali kodranjem uporabi zaščitni sprej ali serum."
                }
            ]

        }

    },

    {
        slug: {
            en: "simple-hairstyles-for-busy-professionals",
            sl: "preproste-priceske-za-zaposlene-profesionalce"
        },

        category: "trends",

        date: {
            en: "August 4, 2025",
            sl: "4. avgust 2025"
        },

        title: {
            en: "Simple Hairstyles for Busy Professionals",
            sl: "Preproste pričeske za zaposlene profesionalce"
        },

        excerpt: {
            en: "Chaotic mornings don't mean you have to sacrifice a polished look. Here are 5 quick hairstyles for busy professionals that take less than a minute to do.",
            sl: "Jutranji kaos ne pomeni, da moraš žrtvovati urejen videz. Tukaj je 5 hitrih frizur za zaposlene profesionalke, ki jih narediš v manj kot minuti."
        },

        body: {

            en: [
                "We know how it is. Mornings are chaos. You're drinking coffee, digging through your closet, already running a Zoom meeting in your head, and that's exactly when your hair decides to look bad.",

                "Looking put-together doesn't mean hours in front of the mirror. These 5 hairstyles are so easy you can do them in the back of a taxi.",

                "The 60-Second Sleek Ponytail",

                "Bold. Clean. Looks like you have everything under control, even if you're secretly falling apart inside. Smooth your hair back with a bit of oil or pomade and wrap a strand around the elastic for a polished finish. Quick and easy, and you're ready for your meeting.",

                "The Messy Low Bun (a.k.a. Organized Chaos)",

                "The trick? Deliberately undone. Pin your hair into a low bun and let a few strands fall softly around your face. Add dry shampoo for volume and texture. You'll look like you're straight out of Paris, done in under two minutes.",

                "The Luxury Blow-Dry",

                "A time-saving trick: wash your hair the night before, then wake up to natural waves. Run a round brush through the ends, spritz with hairspray, and it'll look like you spent 45 minutes on it, when really it was just five.",

                "The Side Part That Speaks For You",

                "Part your hair dramatically to the side, pin the heavier section back behind your ear with a clip, and walk out like the boss you are.",

                "The Half-Up Combo",

                "Pin the top section up for elegance and let the bottom half fall softly. Perfect for days when you've got a meeting and an after-work glass of wine. A polished look that works on curly, straight, or wavy hair.",

                "Your time is too precious to waste on a bad hair day. Leave that to us. 😉"
            ],

            sl: [
                "Vemo, kako je. Jutra so kaotična. Piješ kavo, prekopavaš omaro, v glavi že vodiš Zoom sestanek in ravno takrat frizura slabo izgleda.",

                "Videti urejeno ne pomeni več ur pred ogledalom. Teh 5 frizur je tako enostavnih, da jih lahko urediš kar v taksiju.",

                "60-sekundski gladki čop",

                "Drzno. Čisto. Izgleda kot da imaš vse pod kontrolo, tudi če vse okoli tebe danes deluje na off. Lase zgladi nazaj, z malo olja ali pomade in ovij pramen okoli elastike za finiš. Tik tak in pripravljena si na sestanek.",

                "Razmršena nizka figa (a.k.a. Organiziran kaos)",

                "Finta? Namerno neurejeno. Lase spni v nizko figo, naj ti nekaj pramenov mehko pade ob obraz. Za volumen in teksturo dodaj suhi šampon. Videti boš kot iz Pariza, narejeno pa v dveh minutah.",

                "Luksuzni fen",

                "Trik za prihranek časa: umij lase zvečer, zjutraj pa se zbudi z naravnimi valovi. Pofenaj konice, poškropi s sprejem (lakom) in videti bo, kot da si se urejala 45 minut, v resnici pa samo pet.",

                "Preča, ki govori namesto tebe",

                "Lase razdeli dramatično na stran, težji del s sponko pripni za uho in odkorakaj ven kot šefica.",

                "Polspeta kombinacija",

                "Spni zgornji del za eleganco in pusti spodnji del, da mehko pade. Idealno za tiste dni, ko imaš sestanek in after-work vino. Urejen videz, ki deluje na kodraste, ravne ali valovite lase.",

                "Tvoj čas je predragocen, da bi ga zapravljala z \"bad hair day\". Pusti to nam. 😉"
            ]

        },

        faq: {

            en: [
                {
                    q: "What's the fastest hairstyle for busy mornings?",
                    a: "The 60-second sleek ponytail is your quickest option - smooth your hair back with a bit of oil or pomade and wrap it around the elastic."
                },

                {
                    q: "Which hairstyle works for every hair type - curly, straight, and wavy?",
                    a: "The half-up combo is a universal choice, since the top section adds elegance while the bottom falls softly no matter your hair's texture."
                },

                {
                    q: "How can I make my hair look more polished without extra time in front of the mirror?",
                    a: "Dry shampoo is your best friend - it adds volume and texture in seconds, like in the messy low bun look."
                }
            ],

            sl: [
                {
                    q: "Katera frizura je najhitrejša za jutra, ko primanjkuje časa?",
                    a: "60-sekundni gladki čop je najhitrejša izbira - z malo olja ali pomade lase zgladiš nazaj in jih ovij okoli elastike."
                },

                {
                    q: "Katera frizura deluje na vse tipe las - kodraste, ravne in valovite?",
                    a: "Polspeta kombinacija je univerzalna izbira, saj zgornji del daje eleganco, spodnji pa mehko pade ne glede na strukturo las."
                },

                {
                    q: "Kako lahko frizuro naredim bolj urejeno brez dodatnega časa pred ogledalom?",
                    a: "Suhi šampon je tvoj najboljši prijatelj - doda volumen in teksturo v sekundah, na primer pri razmršeni nizki figi."
                }
            ]

        }

    },

    {
        slug: {
            en: "cutting-your-hair-by-the-moon",
            sl: "strizenje-glede-na-luno"
        },

        category: "haircuts",

        date: {
            en: "July 28, 2025",
            sl: "28. julij 2025"
        },

        title: {
            en: "Cutting Your Hair by the Moon",
            sl: "Striženje glede na luno"
        },

        excerpt: {
            en: "The moon isn't just a pretty nightlight, it may influence how your hair grows and shines. Find out the best time for a haircut according to the moon's phases.",
            sl: "Luna ni le lepa nočna lučka, ampak vpliva na rast in sijaj las. Odkrij, kdaj je najboljši čas za striženje glede na lunine faze."
        },

        body: {

            en: [
                "The moon isn't just a pretty nightlight; it's a cosmic metronome for your hair. Cut it at the right time, and you can trick it into growing, shining, even boosting your confidence.",

                "Think of the waxing moon as nature's green light. From the barely visible crescent to the full sphere, all of Earth's bodies of water (oceans, tides, you, and me) are gently being pulled upward. Get a haircut during this time and your hair catches that upward ride. Legend says hair grows faster and stronger. Model Gisele Bündchen reportedly swears by the crescent phase for exactly this reason.",

                "Flip it around if you want your precise bob to stay precise. Book during the waning phase instead. Grandmothers say the shrinking moon slows down regrowth and buys you a few extra weeks before your next salon chair.",

                "The Tibetan lunar calendar records a personal \"hair prophecy\" for every single day of the month.",

                "Day 3 – \"Wealth increases.\" Negotiating a raise? Add some bangs and get cosmically richer. Day 4 – \"Shine increases.\" Ideal for highlights; legend says your inner shine gets a boost. Day 10 – \"Reaching power.\" Interviews, big speeches, or a promotion in the works – that's the right time for a haircut. (For fewer worries, skip day 7: it's marked with complications.)",

                "Catching the right moment is sweet, catching it under the right constellation is even sweeter. When the moon drifts lazily through Leo, volume and confidence explode. Under meticulous Virgo, trims heal split ends and leave the scalp feeling freshly detoxed.",

                "These windows only open for a few days each cycle. Miss them, and you're waiting for next month.",

                "Open the Status Kay online calendar and book your lunar appointment before it slips away. The full moon moves faster than you'd think. Your hair + moonlight + a sharp pair of scissors? A trio made for Instagram."
            ],

            sl: [
                "Luna ni samo lepa nočna lučka; je kozmični metronom za lase. Če se ob pravem času pristrižeš, prelisičiš rast, sijaj, celo samozavest.",

                "Pomisli na rastočo luno kot na zeleno luč narave. Od komaj vidnega srpa do polne krogle so vsa vodna telesa Zemlje (oceani, plime, ti in jaz) v nežnem »pull-up« gibu. Postriži se v tem času in tvoji lasje ujamejo vožnjo navzgor. Legenda pravi, da lasje rastejo hitreje in so močnejši. Manekenka Gisele Bündchen pa prisega na fazo srpa prav zato.",

                "Obrni kovanec, če želiš, da tvoj natančni bob ostane natančen. Rezerviraj med padajočo fazo. Babice pravijo, da krčenje lune upočasni ponovno rast in ti kupi še nekaj tednov brez frizerskega stola.",

                "Tibetanski lunin koledar vsak dan v mesecu zapisuje osebno »prerokbo za lase«.",

                "3. dan – »Poveča se bogastvo.« Pogajaš se za povišico? Dodaj frufru in se kozmično obogati. 4. dan – »Poveča se sijaj.« Idealno za pramene; legenda pravi, da se takrat ojača tvoj notranji reflektor. 10. dan – »Doseganje moči.« Seje, veliki govori ali napredovanje – takrat je pravi čas za striženje. (Za manj skrbi preskoči 7. dan: označen je z zapleti.)",

                "Ujeti pravi trenutek je sladko, ujeti ga v pravi konstelaciji pa še slajše. Ko se Luna lenobno vali skozi Leva, volumen in samozavest eksplodirata. V pedantni Devici pristrižki zacelijo razcepljene konice in pustijo lasišče razstrupljeno sveže.",

                "Ta okna se odprejo le nekaj dni v vsakem ciklu, če jih zamudiš, čakaš nov mesec.",

                "Odpri spletni koledar Status Kay in zabookiraj svoj lunarni termin, preden izpuhti. Polna luna gre hitreje kot si misliš. Tvoji lasje + mesečina + oster par škarij? Trojček, rojen za Instagram objave."
            ]

        },

        faq: {

            en: [
                {
                    q: "When should I get a haircut if I want my hair to grow faster?",
                    a: "Legend says the best time is during the waxing moon, when hair is said to grow faster and stronger."
                },

                {
                    q: "When should I book if I want my hairstyle to hold its shape longer?",
                    a: "Book during the waning moon - it's said to slow regrowth, which helps your fresh cut last longer."
                },

                {
                    q: "Where can I book an appointment based on the moon's phases?",
                    a: "Just open our Status Kay online calendar and pick a time that matches the lunar phase you're after."
                }
            ],

            sl: [
                {
                    q: "Kdaj naj se ostrižem, če želim, da lasje rastejo hitreje?",
                    a: "Po legendi je najboljši čas med rastočo luno, ko naj bi lasje rasli hitreje in postali močnejši."
                },

                {
                    q: "Kdaj naj rezerviram termin, če želim, da moja frizura obdrži obliko dlje časa?",
                    a: "Rezerviraj med padajočo luno - pravijo, da takrat lasje počasneje rastejo, kar podaljša videz sveže postrižene frizure."
                },

                {
                    q: "Kje lahko rezerviram termin glede na lunine faze?",
                    a: "Preprosto odpri naš spletni koledar Status Kay in izberi termin, ki se ujema z lunino fazo, ki te zanima."
                }
            ]

        }

    },

    {
        slug: {
            en: "hairstyling-before-the-machines",
            sl: "strizenje-pred-stroji"
        },

        category: "haircuts",

        date: {
            en: "July 21, 2025",
            sl: "21. julij 2025"
        },

        title: {
            en: "Hairstyling Before the Machines",
            sl: "Striženje pred stroji"
        },

        excerpt: {
            en: "Before blow dryers and straighteners, hair care was a ritual passed down from hand to hand. A look back at a time when beauty was about presence, not speed.",
            sl: "Preden so prišli fen in likalniki, je bila nega las obred, ki se je prenašal iz roke v roko. Pogled nazaj na čas, ko je bila lepota o prisotnosti, ne o hitrosti."
        },

        body: {

            en: [
                "Before the buzz of blow dryers and the rhythmic clicking of hair straighteners. Before \"smoothing serums,\" hydraulic chairs, and automatic shampoo basins existed, there were hands. Strong, gentle, skillful hands that twisted, wove, brushed, and braided hair with an artistry that's almost extinct today.",

                "You'd step into a salon, or maybe just into an aunt's kitchen or porch. You'd quickly catch the scent of a scorched rosemary sprig or cocoa butter. Maybe hot oil bubbling on the stove. And the tools? A wide-toothed comb, a small glass bowl of oil, and a well-worn thin towel.",

                "God, it took forever...",

                "Hair care wasn't something rushed. It was a ritual. You could spend an entire afternoon between the knees of an aunt, grandmother, or older sister. Your scalp tender under their tugging, your heart wrapped in the safety of their stories. No scrolling on your phone, no TV humming in the background. Just the rhythm of conversation, the movement of fingers, and the slow, deliberate transformation of tangled roots into clean sections and braids, woven tight enough to last a whole week.",

                "Some of these women didn't even need a mirror. They knew your scalp by feel and memory alone.",

                "They weren't just styling hair, they were reading it. They could sense its thickness, its breakage, its softness. They knew if you weren't eating well, if you were stressed, or if you needed rest. Your scalp was speaking long before that became a trend.",

                "The end result was flawless. From sculpted updos to perfectly symmetrical braids. Every strand had its place. That time wasn't about perfection. It was about presence. Today, when everything is automated and fast, there's power in slowing down. In remembering that beauty was once passed from hand to hand, not through machines, but through generations.",

                "Maybe it's time we bring some of that back."
            ],

            sl: [
                "Preden se je slišalo brnenje fenov in ritmično klikanje likalnikov za lase. Preden so obstajali \"gladilni serumi\", hidravlični stoli in samodejne umivalne školjke za lase, so bile tukaj roke. Močne, nežne in spretne roke, ki so sukale, prepletale, krtačile in spletale lase z umetnostjo, ki je danes skoraj že izumrla.",

                "Stopil si v salon ali pa samo v kuhinjo ali verando kake tete. Hitro si zavohal kakšno zažgano rožmarinovo vejico ali kakavovo maslo. Morda vroče olje, ki je brbotalo na štedilniku. In orodja? Glavnik z redkimi zobmi, steklena posodica z oljem, in načeta tanka brisača.",

                "Bog, kako dolgo je trajalo...",

                "Nega las ni bila nekaj, kar bi se opravilo na hitro. Bil je obred. Celo popoldne si lahko preživel med koleni tete, babice ali starejše sestre. Tvoje lasišče je bilo občutljivo pod njihovim vlečenjem, srce pa zavito v varnost njihovih zgodb. Brez brskanja po telefonu, brez televizije v ozadju. Samo ritem pogovora, gibanje prstov in počasna premišljena preobrazba razkuštranih korenin v čiste predele in kite, tesno spletene, da so zdržale cel teden.",

                "Nekatere od teh žensk niso potrebovale ogledala. Že po občutku in spominu so prepoznale tvoje lasišče.",

                "Niso samo oblikovale pričesk, ampak tudi brale tvoje lase. Občutile so debelino, lomljenje in mehkobo. Vedele so, če ne ješ dobro, si pod stresom ali če potrebuješ počitek. Lasišče je govorilo še preden je postalo modno.",

                "Končni rezultat je bil brezhiben. Od izklesanih spetih pričesk do popolnoma simetričnih kit. Vsak pramen je imel svoj prostor. Tisti čas ni bil o popolnosti. Bil je o prisotnosti. Danes, ko je vse avtomatizirano in hitro, je moč v počasnosti. V spomin, da se je lepota nekoč prenašala iz roke v roko in ne prek strojev, temveč skozi generacije.",

                "Morda je čas, da nekaj tega prinesemo nazaj."
            ]

        },

        faq: {

            en: [
                {
                    q: "How did people care for their hair before blow dryers and straighteners existed?",
                    a: "Hair care was done entirely by hand, with a comb, oil, and patience - often during family conversations that lasted all day."
                },

                {
                    q: "Why was hair care once a ritual rather than a quick task?",
                    a: "Because it involved time, touch, and stories passed down from hand to hand, not just styling."
                },

                {
                    q: "What can we learn from this for today's hair care?",
                    a: "To take time for ourselves - slow, attentive care still matters, no matter how many modern tools we have."
                }
            ],

            sl: [
                {
                    q: "Kako so nekoč negovali lase, preden so obstajali fen in likalniki?",
                    a: "Nega je potekala ročno, z glavnikom, oljem in potrpežljivostjo - pogosto med družinskimi pogovori, ki so trajali cel dan."
                },

                {
                    q: "Zakaj je bila nega las nekoč obred in ne le hitro opravilo?",
                    a: "Ker je vključevala čas, dotik in zgodbe, ki so se prenašale iz roke v roko, ne le oblikovanje pričeske."
                },

                {
                    q: "Kaj se lahko od tega naučimo za današnjo nego las?",
                    a: "Da si vzamemo čas zase - počasna, pozorna nega je še vedno pomembna, ne glede na to, koliko modernih pripomočkov imamo na voljo."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-we-dont-cut-your-cuticles",
            sl: "zakaj-obnohtne-kozice-ne-rezemo"
        },

        category: "nails",

        date: {
            en: "July 14, 2025",
            sl: "14. julij 2025"
        },

        title: {
            en: "Why We Don't Cut Your Cuticles",
            sl: "Zakaj obnohtne kožice ne režemo"
        },

        excerpt: {
            en: "The cuticle isn't the enemy of your nails, it's their protection. Find out why cutting it is a bad idea and what we do instead in our salon.",
            sl: "Obnohtna kožica ni sovražnik tvojih nohtov, ampak njihova zaščita. Odkrij, zakaj je striženje kožice slaba ideja in kaj namesto tega delamo v našem salonu."
        },

        body: {

            en: [
                "Let's talk about that little piece of skin everyone has an opinion about… the cuticle. Have you ever sat in a salon and thought, \"Shouldn't that be cut off?\" It looks dry, maybe a bit ragged, and TikTok is full of videos where people cut it away without mercy.",

                "Cutting the cuticle is one of the fastest ways to ruin your nails.",

                "The cuticle acts like a bodyguard for your nail. This thin layer of skin seals the space between your nail and your skin, keeping out bacteria, fungus, and other grime.",

                "If you cut it away, that protection disappears. The nail bed becomes exposed, which can lead to inflammation, itching, or even infection.",

                "We know you want a flawless, runway-perfect look. That's exactly why in our salon we gently push the cuticle back and only remove the dead skin around the nail. The result? An elegant, polished manicure, without the risk of infection.",

                "What's more... when the cuticle is cared for properly, your nails grow back stronger, healthier, and shinier.",

                "This isn't just about one manicure. It's about building a foundation for nails that grow strong and stay beautiful, with less peeling, no annoying cuticle snags, and polish that lasts longer.",

                "You'll leave the salon with nails that don't just look good but feel great too. At home, treat them to a little gentle care. Use a nourishing cuticle oil every day, especially after washing your hands.",

                "Trust us, your future self (and your nails) will thank you.",

                "So no, we don't cut cuticles, we protect them. Because real beauty isn't rushed. It's done right. 💅"
            ],

            sl: [
                "Pogovorimo se o tistem koščku kože, o katerem ima vsak svoje mnenje… obnohtna kožica. Si že kdaj sedela v salonu in pomislila: \"A tega ne bi morali odrezati?\" Izgleda suho, morda malce razmršeno, in TikTok je poln videov, kjer jo brez milosti režejo.",

                "Striženje obnohtne kožice je ena najhitrejših poti do uničenih nohtov.",

                "Obnohtna kožica je kot telesni stražar tvojega nohta. Tanek sloj kože zapira prostor med tvojim nohtom in kožo ter preprečuje vstop bakterijam, glivicam in ostali umazaniji.",

                "Če jo odrežeš, ta zaščita izgine. Nohtno ležišče postane izpostavljeno, kar lahko povzroči vnetja, srbečice ali celo okužbe.",

                "Vemo da si želiš popoln in brezhiben videz, kot s modne piste. Prav zato v našem salonu obnohtno kožico nežno potisnemo nazaj in odstranimo le odmrlo kožo okoli nohta. Rezultat? Eleganten in urejen videz manikure, brez nevarnosti okužbe.",

                "Poleg tega pa... ko z obnohtno kožico ravnaš pravilno, tvoji nohti rastejo močnejši, bolj zdravi in sijoči.",

                "Tu ne gre le za eno manikuro. Gre za osnovo nohtov, da bodo rasli močno in ostali lepi. Z manj luščenja, da ne boš imela nadležnih zatikanj kožice, lak pa bo dlje časa obstojen.",

                "Iz salona boš odšla z nohti, ki ne le da izgledajo dobro, ampak se tudi odlično počutijo. Doma jim privošči malo nežne nege. Uporabljaj hranilno olje za obnohtno kožico vsak dan, še posebej po umivanju rok.",

                "Verjemi, tvoja prihodnja jaz (in tvoji nohti) ti bodo hvaležni.",

                "Torej ne, obnohtne kožice ne režemo, ampak ščitimo. Ker prava lepota ni hitra. Je pravilna. 💅"
            ]

        },

        faq: {

            en: [
                {
                    q: "Why shouldn't cuticles be cut?",
                    a: "The cuticle protects the nail bed from bacteria and fungus, so cutting it increases the risk of inflammation and infection."
                },

                {
                    q: "What do you do at the salon instead of cutting the cuticle?",
                    a: "We gently push the cuticle back and remove only the dead skin, giving you a polished look without the infection risk."
                },

                {
                    q: "How can I take care of my cuticles at home?",
                    a: "Massage in a nourishing cuticle oil every day, especially after washing your hands - it helps keep your nails healthy and strong."
                }
            ],

            sl: [
                {
                    q: "Zakaj obnohtne kožice ne smemo rezati?",
                    a: "Kožica ščiti nohtno ležišče pred bakterijami in glivicami, zato njeno rezanje poveča tveganje za vnetja in okužbe."
                },

                {
                    q: "Kaj v salonu naredite namesto rezanja kožice?",
                    a: "Kožico nežno potisnemo nazaj in odstranimo le odmrlo kožo, kar da urejen videz brez tveganja za okužbo."
                },

                {
                    q: "Kako lahko doma poskrbim za obnohtno kožico?",
                    a: "Vsak dan, še posebej po umivanju rok, vtiraj hranilno olje za obnohtno kožico - to pomaga ohranjati nohte zdrave in močne."
                }
            ]

        }

    },

    {
        slug: {
            en: "dry-shampoo-done-right",
            sl: "suhi-sampon"
        },

        category: "haircuts",

        date: {
            en: "June 30, 2025",
            sl: "30. junij 2025"
        },

        title: {
            en: "Dry Shampoo Done Right",
            sl: "Suhi šampon"
        },

        excerpt: {
            en: "Dry shampoo can be pure magic, but only if you use it the right way. Here's the right (and wrong) way to get volume without the grey roots.",
            sl: "Suhi šampon zna biti čista čarovnija, a le, če ga uporabiš pravilno. Razkrivamo pravi in napačen način, da dobiš volumen brez sivih narastkov."
        },

        body: {

            en: [
                "Dry shampoo is NOT meant to make your hair look like you lost a fight with a bag of flour.",

                "We've all been there. Panic before work, half a can of dry shampoo sprayed all over your head, and the result: grey roots, stiff strands, and that \"yeah, I tried\" vibe.",

                "When used correctly, dry shampoo is pure magic. We're talking volume, no greasy shine, and even a freshly-washed look… without actually stepping into the shower.",

                "Let's look at how to use it properly… and yes, there is a right way and a wrong way.",

                "How to (not) use it:",

                "Hold the can about 20 cm away, roughly an arm's length.",

                "Target only where it's needed. That's usually the crown area, maybe the back of your head if you've had your hair tied up. Don't drench your whole head, unless you're going for a baroque, powdered-wig look.",

                "Leave it for a minute or two and let it absorb the oil. Only then massage it in, like you would in the shower. If you're feeling bold, flip your head upside down for extra volume.",

                "Comb it through or blow it out with a dryer. That's the magic trick that adds movement and leaves no stiffness or white residue.",

                "Pro tip: Use it in the evening, before bed, before your hair even gets greasy. It's like prevention for your scalp.",

                "Dry shampoo isn't just for lazy days. It's for smart people who know they only have 7 minutes to go from \"just rolled out of bed\" to \"wait, were you just at the hairdresser?\""
            ],

            sl: [
                "Suhi šampon NI mišljen, da ti naredi frizuro, kot da si se stepla z vrečo moke in zgubila.",

                "Vse smo že bile tam. Panika pred službo, pol pločevinke šampona po glavi, rezultat pa: sivi narastki, trdi prameni in tisti \"ja, trudila sem se\" vibe.",

                "Ko ga uporabiš pravilno, je suhi šampon čista čarovnija. Govorimo o volumnu, brez mastnega sijaja, in tudi sveže umiti videz… brez da si dejansko stopila pod tuš.",

                "Poglejva, kako se to pravilno uporablja… in ja, obstaja pravi in napačen način.",

                "Kako ga (ne)uporabiti:",

                "Pločevinko drži približno 20 cm stran, približno na dolžino roke.",

                "Ciljaj samo tja, kjer je treba. Navadno je to temeni del, mogoče zadnji del glave, če si imela speto frizuro. Ne zalivaj cele glave, razen če ciljaš na baročno pudrasto frizuro.",

                "Pusti minuto ali dve in počakaj, da vpije olje. Šele potem ga vmasiraj, kot da si pod tušem. Če si drzna, obrni glavo navzdol za dodaten volumen.",

                "Počesaj ali pihni s fenom. To je tisti čarobni trik, ki doda gibanje in ne pusti trdote ali belih madežev.",

                "Pro tip: Uporabi ga zvečer, preden greš spat in se lasje sploh zmastijo. Je kot preventiva za tvoje lasišče.",

                "Suhi šampon ni samo za lene dneve. Je za pametne, ki vedo, da imajo samo 7 minut, da gredo iz \"ravno sem vstala\" v \"a si bila pravkar pri frizerju?\""
            ]

        },

        faq: {

            en: [
                {
                    q: "How do I apply dry shampoo correctly so I don't get grey roots?",
                    a: "Hold the can about 20cm from your scalp, spray only at the roots, wait a minute or two, then massage it in well and comb through."
                },

                {
                    q: "Where on my head should I apply dry shampoo?",
                    a: "Focus mainly on the crown and the back of your head if your hair is tied up - you don't need to drench your whole head."
                },

                {
                    q: "Can I use dry shampoo in the evening instead of just the morning?",
                    a: "Absolutely, applying it before bed works as prevention and keeps your hair from getting greasy overnight."
                }
            ],

            sl: [
                {
                    q: "Kako pravilno nanesem suhi šampon, da ne dobim sivih narastkov?",
                    a: "Pločevinko drži približno 20 cm stran od lasišča, špricaj le na koren, počakaj minuto ali dve, nato pa dobro vmasiraj in počeši."
                },

                {
                    q: "Kam na glavo naj nanesem suhi šampon?",
                    a: "Ciljaj predvsem na temeni del in zadnji del glave, če imaš speto frizuro - celotne glave ni treba zalivati."
                },

                {
                    q: "Ali lahko suhi šampon uporabim zvečer, ne le zjutraj?",
                    a: "Vsekakor, nanos zvečer pred spanjem deluje preventivno in prepreči, da bi se lasje čez noč zamastili."
                }
            ]

        }

    },

    {
        slug: {
            en: "hair-care-through-the-seasons",
            sl: "negovanje-las-v-razlicnih-sezonah"
        },

        category: "haircuts",

        date: {
            en: "June 23, 2025",
            sl: "23. junij 2025"
        },

        title: {
            en: "Hair Care Through the Seasons",
            sl: "Negovanje las v različnih sezonah"
        },

        excerpt: {
            en: "Your hair feels the seasons changing before you do. Find out what it needs in summer, autumn, winter, and spring to stay healthy and shiny all year round.",
            sl: "Tvoji lasje čutijo menjavo letnih časov prej kot ti. Odkrij, kaj potrebujejo poleti, jeseni, pozimi in spomladi, da ostanejo zdravi in sijoči skozi vse leto."
        },

        body: {

            en: [
                "Your hair knows what season it is before you do. It feels the dry summer heat, the cold winter wind sneaking in through your scarf. The sticky spring humidity that messes up your hairstyle, and the autumn wind smelling of pumpkin and cinnamon that makes you buy five candles and call it \"self-care.\"",

                "But we still treat it the same. Same products, same routine… all the same, as if your hair lives in a shelter while the seasons change outside.",

                "Brittle, dry, flat and dull. Unruly and stubborn. Like it's trying to tell you something, and you're still ignoring it. Because every season demands something different from your hair. More moisture, less heat, proper UV protection, and most likely a color refresh too.",

                "But most people don't notice any of this… until their hair gives them away. Dry ends snap like twigs. Color fades faster than your summer tan. The scalp flakes as if it's letting go of emotions… or is simply suffocated under all the product buildup.",

                "And honey… your hair isn't being dramatic. It's just desperately calling for help.",

                "So what should you do?",

                "In summer, protect your color. Use UV sprays, lightweight masks, and put the straightener away.",

                "In autumn, detox your scalp. Cleanse, hydrate, and start preparing for the cold.",

                "Winter is like a war. Deep-condition, drench it in oils and rich creams… everything you've got. Static and breakage lurk in every room with a radiator.",

                "In spring, send split ends packing. Wake up the volume and bring movement back. It's time for balance and bloom.",

                "Small changes for a big impact.",

                "And if you don't know where to start, come in for a seasonal hair check. It takes just 15 minutes, during which we look at your hair, scalp, and overall condition. We'll tell you exactly what your hair is missing.",

                "Think of it like swapping your wardrobe for the new season. Only this time, it's for your hair."
            ],

            sl: [
                "Tvoji lasje vedo, kateri letni čas je, še preden ti to dojameš. Čutijo suho poletno vročino, mrzel zimski veter, ki se ti prikrade skozi šal. Pomladna lepljiva vlaga, ki ti zmeša frizuro in jesenski veter z vonjem po buči in cimetu, ki te prisili, da kupiš pet sveč in to poimenuješ \"self-care\".",

                "Ampak še vedno jih obravnavamo enako. Enaki izdelki, rutina… vse enako, kot da tvoji lasje živijo v zaklonišču, medtem ko se zunaj spreminjajo letni časi.",

                "Skrhani, suhi, ploščati in brez sijaja. Neposlušni in s svojo voljo. Kot, da ti hočejo nekaj povedat, pa jih še vedno ignoriraš. Ker vsak letni čas od tvojih las zahteva nekaj drugega. Več vlage, manj toplote, pravo UV zaščito in najverjetneje tudi osvežitev barve.",

                "A večina tega sploh ne opazi… dokler te lasje ne izdajo. Suhe konice pokajo kot vejice. Barva zbledi hitreje kot tvoj poletni ten. Lasišče se lušči, kot da spušča čustva… ali pa je zadušeno od vsega naloženega produkta.",

                "In draga… tvoji lasje niso dramatični. Samo obupano kličejo po pomoči.",

                "Kaj narediti?",

                "Poleti zaščiti svojo barvo. Uporabi UV spreje, lahke maske in odstrani likalnike.",

                "Jeseni razstrupi lasišče. Očisti, navlaži in začni se pripravljati na mraz.",

                "Zima je kot vojna. Globinsko neguj, utopi jih v oljih, bogatih kremah… vse kar imaš. Elektrika in lomljenje prežita v vsaki sobi z radiatorjem.",

                "Pomladi pošlji razcepljene konice stran. Zbudi volumen in prinesi gibanje nazaj. Čas je za ravnovesje in razcvet.",

                "Majhne spremembe za velik učinek.",

                "In če ne veš, kje začeti, pridi na sezonski pregled las. Vzelo ti bo 15 minut, kjer pogledamo tvoje lase, lasišče in energijo. Povemo vse, kar tvojim lasjem manjka.",

                "Pomislila boš, da je to kot menjava garderobe za novo sezono. Ampak za tvoje lase."
            ]

        },

        faq: {

            en: [
                {
                    q: "How should I adjust my hair care routine in summer?",
                    a: "In summer, the priority is protecting your color and hair from the sun - use a UV spray, lightweight masks, and give your straightener a break."
                },

                {
                    q: "What is a seasonal hair check and how long does it take?",
                    a: "It takes about 15 minutes, and during it we assess the condition of your hair and scalp and tell you exactly what they need for the current season."
                },

                {
                    q: "Why does hair break and get staticky more in winter?",
                    a: "Dry air, radiators, and cold weather strip moisture from your hair, so winter calls for deep conditioning with rich oils and creams."
                }
            ],

            sl: [
                {
                    q: "Kako naj prilagodim nego las poleti?",
                    a: "Poleti je najpomembnejša zaščita barve in las pred soncem - uporabljaj UV-zaščitni pršilo, lahke maske in daj počitek likalniku."
                },

                {
                    q: "Kaj je sezonski pregled las in koliko časa traja?",
                    a: "Sezonski pregled traja približno 15 minut, med njim pa pogledamo stanje tvojih las in lasišča ter ti povemo, kaj jim primanjkuje glede na letni čas."
                },

                {
                    q: "Zakaj lasje pozimi bolj lomijo in se elektrijo?",
                    a: "Suh zrak, radiatorji in mraz lasem odvzamejo vlago, zato pozimi potrebujejo globinsko nego z bogatimi olji in kremami."
                }
            ]

        }

    },

    {
        slug: {
            en: "first-time-visiting-us",
            sl: "prvic-pri-nas"
        },

        category: "about",

        date: {
            en: "June 16, 2025",
            sl: "16. junij 2025"
        },

        title: {
            en: "First Time Visiting Us?",
            sl: "Prvič pri nas?"
        },

        excerpt: {
            en: "Your first salon visit doesn't have to be scary. At Status Kay, we make sure you get a warm welcome, a relaxed chat, and care tailored just for you.",
            sl: "Prvi obisk salona ne rabi biti strašljiv. Pri Status Kay poskrbimo za topel sprejem, prijeten pogovor in nego, prilagojeno prav tebi."
        },

        body: {

            en: [
                "Walking into a new salon for the first time can feel like stepping into the unknown. But at Status Kay, we make sure you feel right at home.",

                "The moment you step through the door, you're greeted by the clean, fresh scent of shampoo, and a calm quiet that lets you take a deep breath and unwind.",

                "First, we offer you a cup of warm tea or freshly brewed coffee. While you enjoy your drink, you can chat with your stylist, who really listens and helps you figure out the look you want. This isn't just about a haircut; it's therapy, and a moment just for you.",

                "We know first-visit jitters are real. You might be worried: \"What if I don't like it, how will they cut my hair? What if my nails aren't perfect?\"",

                "That's why we take the time to talk things through and walk you through every step.",

                "We speak English, so tourists and visitors from abroad are more than welcome. Booking is simple: you can do it online, over the phone, or just walk in.",

                "Come by, and let your first salon visit be not something scary, but the start of something new."
            ],

            sl: [
                "Vstopiti v nov salon prvič je lahko kot vstopiti v neznano. Vendar pri Status Kay poskrbimo, da se počutiš kot doma.",

                "Takoj, ko prestopiš prag, te objame čist in svež vonj šampona, tišina pa ti omogoča miren kotiček, kjer lahko globoko zadihaš in se sprostiš.",

                "Najprej ti ponudimo skodelico toplega čaja ali sveže skuhane kave. Medtem ko uživaš v pijači, se lahko pogovoriš s svojim stilistom, ki te resnično posluša in ti pomaga ugotoviti, kakšen videz si želiš. Tukaj ne gre samo za striženje; to je terapija in trenutek samo zate.",

                "Vemo, da je nervoza ob prvem obisku prava stvar. Morda te skrbi: \"Kaj, če mi ne bo všeč, kako me bodo postrigli? Kaj, če nohti ne bodo popolni?\"",

                "Zato si vzamemo čas za pogovor, kjer te pospremimo skozi vsak korak.",

                "Govorimo angleško, zato so turisti in tujci pri nas več kot dobrodošli. Rezervacija je preprosta: lahko jo opraviš preko spleta, po telefonu ali pa kar tako prideš.",

                "Pridi, naj tvoj prvi obisk salona ne bo strašljiv, ampak začetek nečesa novega."
            ]

        },

        faq: {

            en: [
                {
                    q: "What can I expect on my first visit to Status Kay?",
                    a: "On your first visit you'll get a warm welcome, a cup of tea or coffee, and a relaxed chat with your stylist to help figure out the look that's really right for you."
                },

                {
                    q: "Do you speak English at the salon?",
                    a: "Yes, we speak English fluently, so tourists and visitors from abroad are always welcome."
                },

                {
                    q: "How do I book an appointment?",
                    a: "You can book online, over the phone, or simply walk in."
                }
            ],

            sl: [
                {
                    q: "Kaj naj pričakujem ob prvem obisku salona Status Kay?",
                    a: "Ob prvem obisku te pričaka topel sprejem, skodelica čaja ali kave in sproščen pogovor s stilistko, ki ti pomaga izbrati videz, ki ti resnično ustreza."
                },

                {
                    q: "Ali v salonu govorite angleško?",
                    a: "Da, tekoče govorimo angleško, zato so turisti in tujci pri nas vedno dobrodošli."
                },

                {
                    q: "Kako lahko rezerviram termin?",
                    a: "Termin lahko rezerviraš preko spleta, po telefonu ali pa preprosto prideš mimo salona."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-regular-haircuts-are-essential",
            sl: "zakaj-je-redno-strizenje-nujno"
        },

        category: "haircuts",

        date: {
            en: "June 9, 2025",
            sl: "9. junij 2025"
        },

        title: {
            en: "Why Regular Haircuts Are Essential",
            sl: "Zakaj je redno striženje nujno"
        },

        excerpt: {
            en: "Longer hair isn't always healthier hair — discover why a trim every 6 to 8 weeks is the secret to shiny, strong hair.",
            sl: "Daljši lasje niso vedno bolj zdravi lasje — odkrijte, zakaj je redno striženje na 6 do 8 tednov skrivnost sijočih in močnih las."
        },

        body: {

            en: [
                "You know that moment when your hair looks fine from a distance... but up close? A jungle of split ends, dry tips, and knots just waiting to snap.",

                "Here's a truth nobody wants to hear: longer hair ≠ healthier hair. The longer you put off a haircut, the worse it gets. And no, your \"miracle\" €60 oil won't fix that.",

                "So, what should you do?",

                "Get regular trims, every 6 to 8 weeks. It's not about cutting length, it's about removing whatever is stopping you from having full, bouncy, shiny hair that doesn't snap every time you brush it.",

                "Split ends travel up the hair shaft. One becomes two, two becomes four... and that healthy length you always wanted is gone.",

                "Dead ends aren't just unattractive, they also throw the whole style out of shape.",

                "Flat, lifeless hair? That's not really hair anymore. That's hay, dying a slow death.",

                "A trim is like an exfoliant for your hair. You remove the old, lifeless parts so the rest can truly thrive. It's the secret ingredient behind growth, shine, and strength.",

                "And yes, it's also a RITUAL. A moment just for you, and a refresh for your style.",

                "When you sit in that chair, you're not just getting a trim. You're getting energy, confidence, and above all, a new version of yourself.",

                "At Status Kay, we don't just \"cut hair.\" We shape, we create, we bring it back to life.",

                "You don't just leave with healthy hair, you leave with the kind of energy that makes people say: \"Wait... did you change something?\"",

                "So don't wait until your ends are screaming for help. Book your appointment now. Your future hair, and your mirror, will thank you.",

                "📅 Spots fill up fast, so don't wait too long."
            ],

            sl: [
                "Poznaš trenutek, ko lasje od daleč izgledajo čisto v redu… ampak od blizu? Džungla razcepljenih konic, suhih koncev in vozlov, ki komaj čakajo, da se zlomijo.",

                "Obstaja resnica, ki je nihče noče slišati: daljši lasje ≠ bolj zdravi lasje. Dlje kot odlašaš s striženjem, slabše bo. In ne, tvoje \"čudežno\" olje za 60€ tega ne bo rešilo.",

                "Torej, kaj narediti?",

                "Redno striženje, ko vidiš, da se konice cepijo, se bolj zapletajo in postanejo suhe. Ne gre za krajšanje dolžine, gre za odstranjevanje tistega, kar ti preprečuje imeti goste, prožne in sijoče lase, ki se ne lomijo vsakič, ko jih počešeš.",

                "Razcepljene konice potujejo po dolžini las navzgor. Ena postane dve, dve štiri... in tiste zdrave dolžine, ki si jo vedno želela, ni več.",

                "Mrtvi konci niso samo grdi, ampak tudi zmešajo frizuro do neobvladljivosti.",

                "Ploščati in dolgočasni lasje? To niso več lasje. To je seno, ki umira na počasnem ognju.",

                "Striženje je kot piling za lase. Odstraniš stare, brezživljenjske dele, da lahko ostali resnično zaživijo. To je skrivna sestavina rasti, sijaja in moči.",

                "In ja, je tudi RITUAL. To je trenutek samo zate in osvežitev tvojega stila.",

                "Ko sedeš na stol, ne dobiš le striženja. Dobiš energijo, samozavest, predvsem pa novo verzijo sebe.",

                "V Status Kay ne \"strižemo\". Pri nas oblikujemo, ustvarjamo in oživimo.",

                "Ne odideš le z zdravimi lasmi, ampak z energijo, zaradi katere ti ljudje rečejo: \"Ej… si kaj spremenila?\"",

                "Zato ne čakaj, da tvoji konci začnejo kričati na pomoč. Rezerviraj si termin zdaj. Tvoji prihodnji lasje in ogledalo ti bodo hvaležni.",

                "📅 Mesta se hitro polnijo, zato ne čakaj predolgo."
            ]

        },

        faq: {

            en: [
                {
                    q: "Does getting regular trims actually speed up hair growth?",
                    a: "Trimming doesn't speed up growth from the root, but removing split ends stops breakage, so your hair holds onto its length and ends up looking like it's growing faster."
                },

                {
                    q: "How often should I come in for a trim?",
                    a: "We recommend every 6 to 8 weeks, since that's about when split ends start traveling up the hair shaft."
                },

                {
                    q: "Do I need to lose a lot of length if I come in for a regular trim?",
                    a: "No, it's just about removing damaged ends, not a drastic cut — that way you keep your length while keeping your hair looking healthy."
                }
            ],

            sl: [
                {
                    q: "Ali redno striženje res pospeši rast las?",
                    a: "Striženje samo po sebi ne pospeši rasti iz korenin, a z odstranjevanjem razcepljenih konic prepreči lomljenje, zato lasje ohranijo dolžino in izgledajo, kot da rastejo hitreje."
                },

                {
                    q: "Kako pogosto naj pridem na striženje konic?",
                    a: "Priporočamo obisk vsakih 6 do 8 tednov, saj se v tem času razcepljene konice že začnejo širiti po dolžini las."
                },

                {
                    q: "Ali moram skrajšati veliko dolžine, če pridem na redno striženje?",
                    a: "Ne, gre le za odstranitev poškodovanih konic, ne za drastično krajšanje — tako ohraniš dolžino, hkrati pa poskrbiš za zdrav videz las."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-maintain-salon-perfect-hair-at-home",
            sl: "kako-doma-ohraniti-popolne-lase"
        },

        category: "haircuts",

        date: {
            en: "June 2, 2025",
            sl: "2. junij 2025"
        },

        title: {
            en: "How to Maintain Salon-Perfect Hair at Home",
            sl: "Kako doma ohraniti popolne lase"
        },

        excerpt: {
            en: "How do you keep that salon-fresh look at home? Here are simple but effective tips for hair care between salon visits.",
            sl: "Kako ohraniti salonski videz las tudi doma? Prinašamo vam preproste, a učinkovite nasvete za nego med obiski salona."
        },

        body: {

            en: [
                "You know that feeling when you leave the salon and your hair bounces like it has its own soundtrack. Every strand falling exactly where it should. Every curl defying gravity. You feel unstoppable. And two days later? Flat and puffy.",

                "Here are a few tips to help that salon-fresh look actually last.",

                "1. Start in the shower",

                "Great results start with washing. Use a quality shampoo and conditioner suited to your hair type. In our salon, we swear by the Wella brand — its rich formula nourishes hair and protects color and shine. For those wanting better growth and a healthier scalp, we recommend Watermans.",

                "💡 Tip: Finish by rinsing your hair with cold water. It closes the cuticles and adds shine.",

                "2. Give the straightener a rest",

                "We know, you're in a hurry and the straightener is calling your name. But be careful — too much heat kills that salon magic. If you do need to style, always use heat protection.",

                "3. Sleep like royalty",

                "Cotton pillowcases damage your hair while you sleep. Use a silk one instead. Hair breaks less and doesn't get nearly as staticky as it does on cotton.",

                "4. Stock up between visits",

                "Use what your stylist uses. Ask us about our favorite products and we'll recommend the best ones for you.",

                "You deserve to feel like you stepped out of a hair commercial every single day, not just after a salon visit.",

                "✨ Want personal recommendations or a mini treatment? 👉 Book your next appointment or stop by for a chat."
            ],

            sl: [
                "Poznaš občutek, ko zapustiš salon in tvoji lasje poskakujejo, kot bi imeli svojo lastno glasbo. Vsak pramen, narejen točno tam, kjer mora biti. Vsak kodrček kljubuje gravitaciji. Počutiš se nepremagljivo. In čez dva dni? Ploščati in napihnjeni.",

                "Spodaj najdeš nekaj nasvetov za popoln salonski videz, ki traja.",

                "1. Začni pod tušem",

                "Rezultati se začnejo že pri pranju. Uporabi kvaliteten šampon in balzam, ki ustreza tvojemu tipu las. V našem salonu prisegamo na znamko Wella. Ta ima bogato formulo, ki nahrani lase in ščiti barvo ter sijaj. Za tiste, ki hočejo boljšo rast in zdravo lasišče, pa predlagamo Watermans.",

                "💡 Namig: Na koncu lase speri s hladno vodo. To zapre pore in doda sijaj.",

                "2. Pusti likalnik pri miru",

                "Vemo, mudi se ti in likalnik te kliče. Ampak pazi, preveč toplote ubije salonsko čarovnijo. Če že moraš oblikovati, vedno uporabi toplotno zaščito.",

                "3. Spi kot kraljica",

                "Bombažne prevleke uničijo tvoje lase med spanjem. Raje uporabi svileno. Lasje se ne lomijo in naelektrijo tako grdo kot pri bombažni prevleki.",

                "4. Zaloga med obiski",

                "Uporabljaj to, kar uporablja tvoja frizerka. Vprašaj nas po najljubših izdelkih in mi ti bomo predlagali najboljšega zate.",

                "Zaslužiš si, da se vsak dan počutiš kot v oglasu za lase, ne le po obisku salona.",

                "✨ Želiš osebna priporočila ali mini tretma? 👉 Rezerviraj naslednji termin ali nas obišči za pogovor."
            ]

        },

        faq: {

            en: [
                {
                    q: "What shampoo should I use at home to make my salon look last longer?",
                    a: "We recommend a quality shampoo and conditioner suited to your hair type — in the salon we swear by Wella for color and shine care, and Watermans for growth and a healthy scalp."
                },

                {
                    q: "Is it really bad to use a straightener often?",
                    a: "Too much heat gradually weakens your hair and shortens how long your color lasts, so we recommend styling with heat as little as possible and always using heat protection when you do."
                },

                {
                    q: "Why should I switch from a cotton to a silk pillowcase?",
                    a: "A silk pillowcase reduces friction while you sleep, so your hair breaks less and gets less staticky than it would on cotton, helping that salon look last longer."
                }
            ],

            sl: [
                {
                    q: "Kateri šampon naj uporabljam doma za dolgotrajen salonski videz?",
                    a: "Priporočamo kakovosten šampon in balzam, prilagojen tvojemu tipu las — v salonu prisegamo na Wello za nego barve in sijaja ter Watermans za rast in zdravo lasišče."
                },

                {
                    q: "Ali je res narobe pogosto uporabljati likalnik za lase?",
                    a: "Prevelika količina toplote sčasoma oslabi lase in skrajša življenjsko dobo barve, zato priporočamo čim manj oblikovanja s toploto in vedno uporabo toplotne zaščite, kadar je to res potrebno."
                },

                {
                    q: "Zakaj naj bi zamenjala bombažno prevleko za blazino s svileno?",
                    a: "Svilena prevleka zmanjša trenje med spanjem, zato se lasje manj lomijo in naelektrijo kot na bombažni prevleki, kar pomaga ohranjati salonski videz dlje časa."
                }
            ]

        }

    },

    {
        slug: {
            en: "balayage-or-highlights",
            sl: "balayage-ali-pramena"
        },

        category: "haircuts",

        date: {
            en: "May 26, 2025",
            sl: "26. maj 2025"
        },

        title: {
            en: "Balayage or Highlights?",
            sl: "Balayage ali prameni?"
        },

        excerpt: {
            en: "Balayage or highlights — the eternal dilemma. We break down the difference and help you choose the technique that best suits your skin tone and lifestyle.",
            sl: "Balayage ali prameni — večna dilema. Pomagamo vam razčistiti razliko in izbrati tehniko, ki najbolj ustreza vaši polti in življenjskemu slogu."
        },

        body: {

            en: [
                "You're standing in front of the mirror again. Fiddling with your ends. The regrowth is peeking through. That summer blonde from two seasons ago is basically ancient history.",

                "You're scrolling Instagram, liking sun-kissed selfies, and BAM — up pops a gorgeous woman with glowing blonde hair. You look at your reflection, and the eternal dilemma hits again... balayage or highlights?",

                "This isn't just a hairstyle. It's that feeling when you catch yourself in the elevator mirror. It's how you walk into dinner. It's the moment your confidence enters the room before you've said a word.",

                "So, let's break it down.",

                "Balayage is slow, hand-painted magic. No harsh lines. Just a stylist painting light exactly where the sun would naturally kiss your hair. The color melts into your hair, making sure you always get noticed. And even as it grows out, it still looks beautiful.",

                "How does it feel? Like walking barefoot through golden hour at sunset. Like the glow you bring home after a month in Greece. If you're someone who loves luxury but isn't a fan of constant salon visits, balayage is your match.",

                "Highlights bring the heat. Precision. Clean, sharp lines. From root to tip. Want dimension? Brightness? That salon-fresh look that turns an ordinary Tuesday into your main character moment? Highlights deliver, every single time.",

                "Like the sound of heels cutting through silence in a fancy hall. Every step says you've arrived. These aren't background highlights. They stop people in their tracks before anyone even says \"hi.\"",

                "Still can't decide?",

                "Don't guess. Come to Status Kay, where we'll show you real examples, walk you through your options, and help you choose the technique that matches your skin tone, energy, and lifestyle.",

                "📅 Appointments are limited, so book yours as soon as possible!",

                "Because hair isn't just hair. Let us style it the way you deserve."
            ],

            sl: [
                "Spet stojiš pred ogledalom. Cufaš konice. Narastek kuka ven. Tista poletna blond izpred dveh sezon je skoraj že pokojna.",

                "Scrollaš po Instagramu, lajkaš sončne selfije, in BAM, pojavi se lepotica s sijočimi blond lasmi. Pogledaš v svoj odsev, in znova se pojavi večna dilema… balayage ali prameni?",

                "To ni samo frizura. To je občutek, ko se ujameš v ogledalu dvigala. Je način, kako prideš na večerjo. To je trenutek, ko tvoja samozavest vstopi v prostor, še preden karkoli rečeš.",

                "Torej, razčistimo.",

                "Balayage je počasna, ročno naslikana čarovnija. Brez ostrih linij. Le frizer, ki barva svetlobo na mesta, kjer bi te sonce naravno poljubilo. Barva se stopi z lasmi, kar te naredi vedno opaženo. Ko lasje zrastejo, so še vedno videti čudovito.",

                "Občutek? Kot bosa hoja skozi zlato uro sončnega zahoda. Kot sijaj, ki ga dobiš po mesecu dni v Grčiji. Če si ženska, ki obožuje luksuz, a ne mara stalnih obiskov salona, potem je balayage tvoja izbira.",

                "Prameni ti prinesejo vročino. Natančnost. Čiste in ostre linije. Od korena do konic. Želiš dimenzijo ali svetlost? Tisto salonsko svežino, ki navaden torek spremeni v tvoj trenutek glavne vloge? Prameni to dostavijo vsakič.",

                "Kot zvok pet, ki režejo tišino v prestižni dvorani. Vsak korak pove, da si tukaj. To niso prameni za v ozadje. Ti ustavijo pogled, še preden kdo reče \"živjo\".",

                "Še vedno ne veš?",

                "Ne ugibaj. Pridi v Status Kay, kjer ti bomo pokazali prave primere, te popeljali skozi možnosti in ti pomagali izbrati tehniko, ki ustreza tvoji polti, energiji ter načinu življenja.",

                "📅 Število terminov je omejeno, zato si čim prej rezerviraj svojega!",

                "Ker lasje niso samo lasje. Pusti, da jih uredimo, kot si zaslužiš."
            ]

        },

        faq: {

            en: [
                {
                    q: "What's the main difference between balayage and highlights?",
                    a: "Balayage is a hand-painted technique with no harsh lines that grows out beautifully, while highlights create more precise, striking contrast from root to tip."
                },

                {
                    q: "Which technique needs fewer salon visits?",
                    a: "Balayage, since the color grows out naturally and softly, meaning touch-up visits are less frequent than with classic highlights."
                },

                {
                    q: "How do I decide which technique is right for me?",
                    a: "Come in for a consultation at Status Kay — we'll show you real examples of both and help you pick the one that best matches your skin tone, energy, and lifestyle."
                }
            ],

            sl: [
                {
                    q: "Kakšna je glavna razlika med balayage in pramenom?",
                    a: "Balayage je ročno slikana tehnika brez ostrih linij, ki lepo zraste, prameni pa dajo bolj natančne, izrazite kontraste od korenin do konic."
                },

                {
                    q: "Katera tehnika zahteva manj obiskov salona?",
                    a: "Balayage, saj barva zraste naravno in mehko, zato so vmesni obiski redkejši kot pri klasičnih pramenih."
                },

                {
                    q: "Kako se odločim, katera tehnika je prava zame?",
                    a: "Pridi na posvet v Status Kay — pokažemo ti primere obeh tehnik in ti glede na polt, energijo in življenjski slog pomagamo izbrati tisto, ki ti najbolj pristaja."
                }
            ]

        }

    },

    {
        slug: {
            en: "how-to-choose-the-perfect-hair-color",
            sl: "kako-izbrati-popolno-barvo-las"
        },

        category: "haircuts",

        date: {
            en: "May 19, 2025",
            sl: "19. maj 2025"
        },

        title: {
            en: "How to Choose the Perfect Hair Color",
            sl: "Kako izbrati popolno barvo las"
        },

        excerpt: {
            en: "Not every shade is made for every skin tone — discover how to find the hair color that's made just for you.",
            sl: "Vsak odtenek ni ustvarjen za vsako polt — odkrijte, kako poiskati barvo las, ki bo poudarila prav vaš videz."
        },

        body: {

            en: [
                "We all know that friend who went blonde and ended up looking slightly green under the bathroom lights. Or the brunette who suddenly looked like she hadn't slept in a week.",

                "Not every shade is made for every beauty. When you find the one that's made for your skin, magic happens. Eyes light up. Skin glows. And your selfies come out perfect 📸🔥",

                "So... how do you find the right shade?",

                "The first step is figuring out your skin undertone. Trust us, this can change the whole game. Look at the veins on your wrist: if they look greenish, you have a warm undertone, which means rich, earthy shades will make you glow. If your veins look more blue or purple, you're on the cool side. And if you see a bit of both, you have a neutral undertone, which means you've got more options than most, but you just need to choose them wisely.",

                "If you really want to see how different you'd look in another color, upload a photo of yourself to ChatGPT and ask it to suggest the best color palette for you — that way you'll quickly see whether the shade you want would actually suit you.",

                "The second step is intention. If your skin has an olive or golden undertone, honey blonde, caramel, rich chocolate, and copper red will suit you beautifully. Not only do they look stunning, they also bring out your eyes and make it look like you're always standing in perfect light. If you have porcelain or slightly pink-toned skin, then ashy blonde, deep espresso, and wine red are your secret weapons. And if you're somewhere in between? You've got the freedom to choose — you can pull off both.",

                "The key is balance. Not too warm. Not too cool.",

                "Color is chemistry. One wrong formula and you walk out of the salon with straw-like texture. At Status Kay, we don't guess. We tailor everything to your skin, your eyes, and your lifestyle. We're not here to make you look good for just one day. We're here to make you look professional all month long. ✨",

                "Enough guessing. It's time to start glowing."
            ],

            sl: [
                "Vsi poznamo prijateljico, ki je šla na blond, pod lučmi v kopalnici pa postala rahlo zelena. Ali pa rjavolasko, ki je nenadoma videti, kot da ni spala že en teden.",

                "Ni vsak odtenek ustvarjen za vsako lepotico. Ko izbereš tistega, ki je rojen za tvojo kožo, se zgodi čarovnija. Oči zažarijo. Koža zasije. In tvoji selfiji izgledajo popolno 📸🔥",

                "Torej... kako najti pravi odtenek?",

                "Prvi korak je, da ugotoviš svoj podton kože. Verjemi, to lahko obrne celotno igro. Poglej žile na zapestju: če so videti zelenkaste, imaš topel podton. To pomeni, da ti pristajajo bogati, zemeljski odtenki, s katerimi boš žarela. Če so tvoje žile bolj modrikaste ali vijolične, si na hladni strani. In če vidiš oboje, imaš nevtralen podton. To pomeni, da imaš več možnosti kot večina, a jih moraš pravilno izbrati.",

                "Če se zares želiš videti, kako drugačna si s drugo barvo, naloži svojo sliko v ChatGPT in naj ti predlaga najboljšo barvno paleto zate — tako boš hitro videla, ali ti bo željena barva pristajala.",

                "Drugi korak je namen. Če je tvoja koža olivnega ali zlatega podtona, potem ti bolj pristajajo medene blond, karamela, bogata čokoladna in bakreno rdeča. Ne le da izgledajo čudovito, ampak izpostavijo tvoje oči in ustvarijo občutek, kot da te vedno osvetljuje popolna luč. Če imaš porcelanasto ali rahlo rožnato polt, potem so pepelnato blond, temna espresso in vinsko rdeča tvoje skrivno orožje. In če si med nevtralnimi? Imaš svobodo izbire, kar pomeni, da lahko nosiš oboje.",

                "Ključ je v ravnovesju. Ne pretoplo. Ne prehladno.",

                "Barva je kemija. Ena napačna formula in iz salona odkorakaš s slamnato teksturo. Pri Status Kay ne ugibamo. Prilagodimo se tvoji koži, očem in stilu življenja. Nismo tukaj, da izgledaš lepo le en dan. Tukaj smo, da izgledaš profesionalno ves mesec. ✨",

                "Dovolj je bilo ugibanja. Čas je, da začneš žareti."
            ]

        },

        faq: {

            en: [
                {
                    q: "How do I figure out if I have a warm or cool skin undertone?",
                    a: "The easiest way is to check the veins on your wrist — greenish veins mean a warm undertone, while blue or purple veins mean a cool one. If you see a bit of both, you likely have a neutral undertone."
                },

                {
                    q: "What if I think I have a neutral undertone?",
                    a: "Great news — that means you can pull off a wider range of shades, both warm and cool. We'll help you pick the ones that flatter you most."
                },

                {
                    q: "What happens if I choose the wrong color for my undertone?",
                    a: "The color can clash with your skin or end up looking dull or overdone. That's why we always tailor your color to your skin, eyes, and style so the result always suits you."
                }
            ],

            sl: [
                {
                    q: "Kako ugotovim, ali imam topel ali hladen podton kože?",
                    a: "Najlažje preveriš tako, da pogledaš žile na zapestju — zelenkaste žile pomenijo topel podton, modrikaste ali vijolične pa hladen. Če vidiš oboje, imaš verjetno nevtralen podton."
                },

                {
                    q: "Kaj pa če se mi zdi, da imam nevtralen podton?",
                    a: "Odlična novica — to pomeni, da lahko nosiš širši nabor odtenkov, od toplih do hladnih. V salonu ti pomagamo izbrati tiste, ki bodo najbolj poudarili tvoj videz."
                },

                {
                    q: "Kaj se zgodi, če izberem napačno barvo za svoj podton?",
                    a: "Barva lahko deluje neskladno s poltjo ali izgleda dolgočasno oziroma preveč izrazito. Zato pri nas barvo vedno prilagodimo tvoji koži, očem in slogu, da rezultat vedno pristaja."
                }
            ]

        }

    },

    {
        slug: {
            en: "why-toning-is-the-secret-to-long-lasting-color",
            sl: "toniranje"
        },

        category: "haircuts",

        date: {
            en: "May 12, 2025",
            sl: "12. maj 2025"
        },

        title: {
            en: "Why Toning Is the Secret to Long-Lasting Color",
            sl: "Toniranje"
        },

        excerpt: {
            en: "Why isn't color alone enough? Discover how toning gives your color back its depth, shine, and staying power.",
            sl: "Zakaj barva sama ne zadostuje? Odkrijte, kako toniranje vaši barvi vrne globino, sijaj in obstojnost."
        },

        body: {

            en: [
                "You know that feeling: you leave the salon with freshly colored hair, shiny, vibrant, and perfect. A few weeks pass and it all starts to fade. Blonde turns yellow, brown loses its life, and that fresh shade suddenly looks tired.",

                "Most people overlook one key thing: color alone isn't enough for a long-lasting, professional result. You also need a toner.",

                "Toning takes your color to the next level. It doesn't change the color, it perfects it. After coloring or lightening, hair naturally picks up warm tones — yellow, orange, and copper undertones. Toner corrects these unwanted tones and restores balance, depth, and shine to your color.",

                "Want your blonde to glow in cooler, ashier, almost icy tones? Want to add more depth to a dark color, or simply soften the regrowth?",

                "Toning makes all of that possible, without needing a new color. It refines the texture, boosts the shine, and gives that finished, polished look.",

                "At Status Kay, we don't take toning lightly. We tailor it to each client based on tone, style, and coloring history. We use a variety of techniques, such as ombre toning (for a smooth blend from darker to lighter shades) and root shadowing, which creates a natural transition with no harsh lines.",

                "Why does this matter?",

                "Properly toned hair looks better for longer, fades more gracefully, and holds its look for weeks after your salon visit. Most importantly, it protects your hair from unnecessary repeat coloring.",

                "If your color is looking tired, or you simply want more shine, chances are you don't need a new color — just a toning session.",

                "Whether it's refreshing your highlights, your regrowth, or you're after a deeper, richer color, Status Kay makes sure your hair comes back to life.",

                "📍 Find us in Ljubljana, just steps from the main train station."
            ],

            sl: [
                "Verjamem, da poznaš ta občutek: Zapustiš salon z novo pobarvano frizuro, lasje so sijoči, živi ter popolni. Hitro mine nekaj tednov in vse skupaj zbledi. Blond začne rumeneti, rjava postane brez življenja in svež odtenek kar naenkrat izgleda utrujeno.",

                "Večina spregleda ključno stvar: za obstojno in profesionalno barvo ni dovolj le barva. Potreben je toner.",

                "Toniranje dvigne barvanje na višji nivo. Ne spremeni barve, ampak jo izpopolni. Po barvanju ali posvetlitvi lasje naravno absorbirajo tople tone – rumenkaste, oranžne in bakrene. Toner te neželene podtone izravna in barvi vrne ravnovesje, globino in sijaj.",

                "Bi rada, da tvoja blond zasije v hladnejših, pepelnih, skoraj ledenih tonih? Bi temni barvi dodala več globine ali pa samo zmehčala narastek?",

                "Toniranje ti omogoča vse to, brez potrebe po novem barvanju. Polepša teksturo, poveča sijaj in doda videz popolnosti.",

                "V salonu Status Kay toniranja ne jemljemo zlahka. Vsakemu se prilagodimo glede na ton, stil in zgodovino barvanja. Uporabljamo razne tehnike, kot sta ombre toniranje (za prelivanje iz temnejših v svetlejše odtenke) in senčenje narastka, ki poskrbi za naraven prehod brez ostrih linij.",

                "Zakaj je to pomembno?",

                "Lasje, ki so pravilno tonirani, izgledajo bolje dlje časa, lepše bledijo in ohranijo videz tudi tedne po obisku salona. Predvsem pa zaščitijo tvoje lase pred nepotrebnimi ponovnimi barvanji.",

                "Če tvoja barva izgleda utrujeno ali pa si samo želiš več sijaja, potem verjetno ne potrebuješ nove barve, ampak samo toniranje.",

                "Naj gre za osvežitev pramenov, narastka ali željo po globlji in bogatejši barvi, Status Kay poskrbi, da tvoji lasje znova zaživijo.",

                "📍 Najdeš nas v Ljubljani, le korak od glavne železniške postaje."
            ]

        },

        faq: {

            en: [
                {
                    q: "Can I get toning done without a new color?",
                    a: "Yes, toning is a standalone service that refreshes your existing color, neutralizes unwanted yellow or copper undertones, and adds shine without a full recoloring."
                },

                {
                    q: "How often should I get my hair toned?",
                    a: "It depends on your color and hair type, but most clients refresh their toner every 4 to 6 weeks to keep the color vibrant and even."
                },

                {
                    q: "What if my color just looks dull, not brassy?",
                    a: "Dull or tired-looking color can also be revived with toning — the toner adds depth and shine even when there's no undertone to correct."
                }
            ],

            sl: [
                {
                    q: "Ali lahko toniranje naredim brez novega barvanja?",
                    a: "Da, toniranje je samostojna storitev, ki osveži obstoječo barvo, odstrani neželene rumene ali bakrene podtone in doda sijaj brez ponovnega barvanja."
                },

                {
                    q: "Kako pogosto naj tonirem lase?",
                    a: "Odvisno od tipa barve in tvojih las, a večina strank toner osveži vsakih 4 do 6 tednov, da barva ostane živa in enakomerna."
                },

                {
                    q: "Kaj pa če imam le zbledelo barvo, ne rumenih tonov?",
                    a: "Tudi zbledela ali dolgočasna barva se s toniranjem preprosto poživi — toner doda globino in sijaj, tudi če ne gre za nevtralizacijo podtonov."
                }
            ]

        }

    },

    {
        slug: {
            en: "two-step-hair-coloring",
            sl: "dvostopenjsko-barvanje"
        },

        category: "haircuts",

        date: {
            en: "May 5, 2025",
            sl: "5. maj 2025"
        },

        title: {
            en: "Two-Step Hair Coloring",
            sl: "Dvostopenjsko barvanje"
        },

        excerpt: {
            en: "How do you achieve the perfect blonde, pastel, or silver hair color? Meet two-step coloring — the most reliable technique for bright, striking shades.",
            sl: "Kako doseči popolno blond, pastelno ali srebrno barvo las? Spoznajte dvostopenjsko barvanje — najbolj zanesljivo tehniko za svetle in izrazite odtenke."
        },

        body: {

            en: [
                "Have you ever wondered how people achieve that perfect blonde, soft pastel, or elegant silver hair color? It's not magic. It's a specific technique called two-step coloring — the only reliable way to achieve bright, striking colors that turn heads.",

                "Two-step coloring happens in two key phases. The first phase is lightening, where bleach is used to remove the natural pigment from the hair. This creates a neutral base, which is essential for light or pastel shades to develop properly and really shine.",

                "The second step is toning, where the chosen shade is applied — whether that's cool platinum, soft ash, pink, or any other pastel or bolder color. The toner completes the look, adding depth and shine.",

                "This method is ideal for anyone wanting a bigger change, especially if you have darker or previously colored hair. If you're after light, vivid shades or a high-fashion blonde, two-step coloring is the safest and most precise way to get there.",

                "Of course, this style also requires some upkeep. We recommend regularly touching up the regrowth every 4 to 5 weeks, so the color stays even with no visible harsh lines. Occasionally refreshing the toner will help keep the vibrancy and color consistency along the full length of the hair. With the right care products and professional support, your hair can stay shiny, healthy, and long-lasting.",

                "Two-step coloring requires knowledge and experience. In our salon, we take the time to tailor every process to your hair type and desired result. We use top-quality products that protect and nourish the hair while delivering a professional, beautiful outcome. Our stylists specialize in this technique and will guide you safely through the entire process.",

                "If you're ready for a real transformation and want a color that makes you feel confident and one of a kind, this is the service you're looking for.",

                "Right now, we're offering a free consultation with every two-step coloring service. It's the perfect opportunity to treat your hair to something special and finally live the look you've been dreaming of."
            ],

            sl: [
                "Ste se kdaj vprašali, kako ljudje dosežejo popolno blond, nežno pastelno ali elegantno srebrno barvo las? Ne gre za čarovnijo. Gre za posebno tehniko, imenovano dvostopenjsko barvanje. To je edini zanesljiv način za doseganje svetlih in izrazitih barv, ki pritegnejo poglede.",

                "Dvostopenjsko barvanje poteka v dveh ključnih fazah. Prva faza je posvetlitev, kjer se s pomočjo beljenja odstrani naravni pigment z las. To ustvari nevtralno podlago, ki je nujna, da se svetli ali pastelni odtenki lahko pravilno razvijejo in zasijejo.",

                "Drugi korak je toniranje, kjer se nanese izbran odtenek. Naj bo to hladna platinasta, nežna sivkasta, rožnata ali katerakoli druga pastelna oziroma drznejša barva. Toner zaključi celoten videz z dodano globino in sijajem.",

                "Ta metoda je primerna za tiste, ki si želijo večje spremembe. Še posebej, če imate temnejše ali že pobarvane lase. Če ciljate na svetle, intenzivne odtenke ali visoko modno blond barvo, je dvostopenjsko barvanje najbolj varen in natančen način za doseganje teh rezultatov.",

                "Seveda pa ta frizura zahteva tudi nekaj nege. Priporočamo redno barvanje narastka na 4 do 5 tednov, saj bo tako barva ostala enakomerna in brez vidnih ostrih prehodov. Občasno osveževanje tonerja bo pripomoglo k ohranjanju živahnosti in barvne enotnosti po celotni dolžini las. S pravimi izdelki za nego in strokovno podporo lahko vaši lasje ostanejo sijoči, zdravi in dolgo obstojni.",

                "Dvostopenjsko barvanje zahteva znanje in izkušnje. V našem salonu si za vsak postopek vzamemo čas in ga prilagodimo vašemu tipu las ter želenemu rezultatu. Uporabljamo vrhunske izdelke, ki ščitijo in negujejo lase, hkrati pa zagotavljajo profesionalen in čudovit rezultat. Naši stilisti so specializirani za to tehniko in vas varno vodijo skozi celoten proces.",

                "Če ste pripravljeni na pravo preobrazbo in si želite barve, ob kateri se boste počutili samozavestni in edinstveni, je to storitev, ki jo iščete.",

                "Trenutno ob vsakem dvostopenjskem barvanju podarjamo brezplačen posvet. To je popolna priložnost, da svojim lasem privoščite nekaj posebnega in zaživite v videzu, o katerem sanjate."
            ]

        },

        faq: {

            en: [
                {
                    q: "Is two-step coloring more damaging to hair than regular coloring?",
                    a: "Since it involves a lightening step, it's a bit more intensive, so we use top-quality protective and nourishing products to keep any damage to a minimum."
                },

                {
                    q: "How often do I need to come in for touch-ups?",
                    a: "For an even look, we recommend refreshing the regrowth every 4 to 5 weeks, while the toner can be refreshed in between as needed."
                },

                {
                    q: "Is this technique suitable if I have dark or previously colored hair?",
                    a: "Yes, two-step coloring is actually the safest way to achieve light shades on darker or previously colored hair."
                }
            ],

            sl: [
                {
                    q: "Ali je dvostopenjsko barvanje bolj škodljivo za lase kot klasično barvanje?",
                    a: "Ker vključuje posvetlitev, je za lase nekoliko bolj zahtevno, zato uporabljamo vrhunske izdelke za zaščito in nego, ki poškodbe zmanjšajo na minimum."
                },

                {
                    q: "Kako pogosto moram priti na vzdrževanje barve?",
                    a: "Za enakomeren videz priporočamo osvežitev narastka na približno 4 do 5 tednov, medtem ko lahko toner po potrebi osvežite vmes."
                },

                {
                    q: "Ali je ta tehnika primerna, če imam temne ali že barvane lase?",
                    a: "Da, dvostopenjsko barvanje je pravzaprav najbolj varen način za doseganje svetlih odtenkov prav pri temnejših ali predhodno barvanih laseh."
                }
            ]

        }

    },

    {
        slug: {
            en: "all-about-highlights",
            sl: "prameni"
        },

        category: "haircuts",

        date: {
            en: "April 28, 2025",
            sl: "28. april 2025"
        },

        title: {
            en: "All About Highlights",
            sl: "Prameni"
        },

        excerpt: {
            en: "Properly done highlights can transform your look without a full color change — discover why they're so popular and how we do them at Status Kay.",
            sl: "Pravilno narejeni prameni vas lahko spremenijo brez popolne barvne preobrazbe — odkrijte, zakaj so tako priljubljeni in kako jih naredimo v Status Kay."
        },

        body: {

            en: [
                "Want a fresh, brighter look without a full color transformation? Or... have bad highlights ever ruined your day? (Ouch, we know the feeling.)",

                "The good news: properly done highlights transform your hair and your mood, coming together for the perfect makeover.",

                "What are highlights?",

                "Think of them as captured rays of sunlight... just in your hair. They add light, depth, and an effortless feel.",

                "Highlights are perfect if you want to: ✅ Add a natural glow to your color ✅ Smartly and elegantly cover the first grey hairs ✅ Change up your look without demanding upkeep",

                "First time? Bad experience before? No worries.",

                "Highlights are completely customizable — soft or bold, subtle or striking. The key to getting it right? Technique. One wrong move and you'll end up looking like a zebra. No, thank you.",

                "In our salon, we hand-select the shades and placement so your hair shines with a perfectly natural glow. No stripes, no harsh lines.",

                "Why choose our salon?",

                "We don't just \"slap on foil and wait.\" We shape your highlights to perfectly complement your skin tone, natural color, and personal style. ✅ The best products for shiny, soft hair ✅ Experienced hands that know the difference between \"okay\" and \"perfect\" ✅ A personalized, luxury experience",

                "Ready to shine?",

                "Your most beautiful highlights are just one visit away. ✨ Book your appointment today and discover how natural, gorgeous highlights can transform your entire look.",

                "Your hair deserves the best. And we're here to make it happen.",

                "Follow us: Instagram | TikTok | Facebook"
            ],

            sl: [
                "Si želiš svež in svetlejši videz brez popolne barvne preobrazbe? Ali pa... so te kdaj uničili slabi prameni? (Auč, vemo, kako je.)",

                "Dobra novica: Pravilno narejeni prameni spremenijo tvoje lase in počutje ter skupaj oblikujejo popolno preobrazbo.",

                "Kaj so prameni?",

                "Predstavljaj si jih kot ujete sončne žarke... samo v tvojih laseh. Dodajo svetlobo, globino in lahkoten občutek.",

                "Prameni so popolni, če želiš: ✅ Dodati naraven sijaj svoji barvi ✅ Pametno in elegantno prikriti prve sive lase ✅ Spremeniti videz brez zahtevnega vzdrževanja",

                "Prvič? Slabe izkušnje? Brez skrbi.",

                "Prameni so popolnoma prilagodljivi, nežni ali izraziti, lahkotni ali drzni. Ključ do uspeha? Tehnika. Ena napačna poteza in izgledala boš kot zebra. Ne, hvala.",

                "V našem salonu ročno izberemo odtenke in postavitev, da tvoji lasje zasijejo v popolnem naravnem sijaju. Brez črt ali ostrih prehodov.",

                "Zakaj ravno naš salon?",

                "Pri nas ne \"nalepimo folije in čakamo\". Pramene oblikujemo tako, da popolnoma dopolnijo tvoj ton kože, naravno barvo in osebni stil. ✅ Najboljši izdelki za sijoče, mehke lase ✅ Izkušene roke, ki poznajo razliko med \"v redu\" in \"popolno\" ✅ Personalizirana, luksuzna izkušnja",

                "Si pripravljena zasijati?",

                "Tvoji najlepši prameni so le en obisk stran. ✨ Rezerviraj svoj termin še danes in odkrij, kako ti lahko naravni, čudoviti prameni spremenijo celoten videz.",

                "Tvoji lasje si zaslužijo najboljše. Mi pa smo tukaj, da to omogočimo.",

                "Sledi nam: Instagram | TikTok | Facebook"
            ]

        },

        faq: {

            en: [
                {
                    q: "How long do highlights last before they need a refresh?",
                    a: "Well-done highlights typically last 8 to 12 weeks, depending on how fast your hair grows and the technique used. We recommend a toning session in between to keep them looking fresh."
                },

                {
                    q: "Do highlights damage your hair?",
                    a: "When done professionally with quality products, the damage is minimal. We always tailor the process to your hair type to keep it healthy and shiny."
                },

                {
                    q: "Are highlights a good option if I already have some grey hair?",
                    a: "Yes, highlights are a great way to blend in the first grey hairs, creating a natural, soft transition with no harsh lines."
                }
            ],

            sl: [
                {
                    q: "Kako dolgo pramen zdržijo, preden jih je treba osvežiti?",
                    a: "Pravilno narejeni prameni v povprečju zdržijo od 8 do 12 tednov, odvisno od hitrosti rasti las in izbrane tehnike. Za ohranjanje svežega videza vmes priporočamo toniranje."
                },

                {
                    q: "Ali prameni poškodujejo lase?",
                    a: "Pri strokovni izvedbi in uporabi kakovostnih izdelkov je poškodba minimalna. V našem salonu vedno prilagodimo postopek tvojemu tipu las, da ostanejo zdravi in sijoči."
                },

                {
                    q: "Ali so prameni primerni, če imam že sive lase?",
                    a: "Da, prameni so odlična izbira za prikrivanje prvih sivih las, saj ustvarijo naraven, mehak prehod brez ostrih linij."
                }
            ]

        }

    },

    {
        slug: {
            en: "spring-hair-trends-2025",
            sl: "pomladni-trendi-2025"
        },

        category: "trends",

        date: {
            en: "April 14, 2025",
            sl: "14. april 2025"
        },

        title: {
            en: "Spring Hair Trends 2025",
            sl: "Pomladni trendi 2025"
        },

        excerpt: {
            en: "From the Power Bob to the Surfer Curtain — discover the spring 2025 hair trends and find the style that best reflects your personality.",
            sl: "Od Power Boba do surferske zavese — odkrijte pomladne frizerske trende 2025 in poiščite pričesko, ki najbolje odseva vašo osebnost."
        },

        body: {

            en: [
                "Spring 2025 brings something fresh to the world of hairstyling. Inspiration from past decades has been reimagined with modern techniques, so this year's trends really do offer something for everyone. Let's take a look at the standout styles currently shaping the trends.",

                "Power Bob",

                "The Power Bob is taking over salons this year. Its precise geometric cut and sharp finishing line give off a strong sense of confidence. Chin-length hair creates a balanced look that suits a wide range of face shapes, especially for those with straight or slightly wavy hair.",

                "Hush Cut",

                "If you're dreaming of a hairstyle that's soft yet refined, the Hush Cut is the perfect choice. It's created by layering long and medium-length hair with soft face-framing strands, often finished off with light, airy bangs. It adapts beautifully to different hair types and face shapes.",

                "Rounded Bob",

                "The Rounded Bob brings classic elegance with a modern twist. Soft lines create a polished yet effortless look. It's the perfect style for women who want to look put-together, no matter the occasion.",

                "Milkmaid Braids",

                "A nostalgic trend in a new outfit. This braided style involves two braids that wrap gently around the crown of the head, creating a romantic, practical look that's perfect for spring outings and festivals.",

                "Surfer Curtain Haircut",

                "The Surfer Curtain haircut brings soft layers that gently fall and frame the face beautifully, creating a relaxed, California-inspired look. It's the perfect choice for anyone who wants a modern yet laid-back style.",

                "Find your next hairstyle",

                "A new haircut isn't just a change in appearance — it's a reflection of your personality, energy, and confidence. Whether you're drawn to the precision of the Power Bob or the effortless ease of the surfer style, now is the perfect moment to discover a fresh new look.",

                "Talk to our expert stylist, and together we'll choose a style that perfectly suits your features and lifestyle.",

                "✂️ Visit us at Status Kay",

                "For us, it's not just about hairstyles — it's about a style experience, created in the heart of Ljubljana, right next to the train station.",

                "✨ Walk-ins welcome. 🌍 Expats and tourists warmly welcomed too. 📍 Easy to find, hard to forget.",

                "Follow us on Instagram, TikTok, and Facebook.",

                "Your new look is waiting for you. Come in and experience an incredible transformation."
            ],

            sl: [
                "Pomlad 2025 prinaša v svet frizerstva nekaj novega. Navdih iz preteklih desetletij je preoblikovan z modernimi tehnikami, zato letošnji trendi ponujajo nekaj za vsakogar. Poglejmo si najbolj izstopajoče pričeske, ki trenutno krojijo modne smernice.",

                "Power Bob (Močni paž)",

                "Power Bob letos preplavlja frizerske salone. Natančen geometrijski rez in elegantna končna linija dajeta močan vtis samozavesti. Dolžina do brade ustvarja uravnotežen videz, ki pristaja širokemu spektru obrazov, še posebej pa ljudem z ravnimi ali rahlo valovitimi lasmi.",

                "Hush Cut (Nežen rez)",

                "Če sanjate o pričeski, ki je nežna in hkrati prefinjena, potem je Hush Cut idealna izbira. Gre za plastenje dolgih in srednje dolgih las z nežnimi prameni, ki uokvirjajo obraz. Pogosto je dopolnjen s lahkimi zračnimi frufruji. Odlično se prilagodi različnim tipom las in oblikam obraza.",

                "Zaobljen paž (Rounded Bob)",

                "Zaobljen paž prinaša klasično eleganco s sodobnim pridihom. Mehke linije poskrbijo za uglajen, a lahkoten videz. Frizura je popolna za ženske, ki želijo izgledati urejeno ne glede na priložnost.",

                "Spete kitke (Milkmaid Braids)",

                "Nostalgičen trend v novi preobleki. Pri tej speti pričeski gre za dve kitki, ki se nežno ovijeta okoli vrha glave, s katerima ustvarita romantičen in praktičen videz in je kot nalašč za spomladanske izlete in festivale.",

                "Surferska zavesa (Surfer Curtain Haircut)",

                "Surfer Curtain pričeska prinaša sloje, ki nežno padejo in obdajajo obraz, pri čemer lepo uokvirijo obraz ter ustvarijo sproščen kalifornijski videz. Popolna izbira za vse, ki si želijo moderen, a ležeren stil.",

                "Najdi svojo naslednjo pričesko",

                "Nova frizura ni le sprememba videza, ampak odsev tvoje osebnosti, energije in samozavesti. Naj te očara natančnost Power Boba ali sproščenost surferske frizure. Zdaj je popoln trenutek za odkrivanje svežega videza.",

                "Posvetuj se z našim strokovnim frizerjem in skupaj izberimo stil, ki se popolnoma prilega tvojim potezam in življenjskemu slogu.",

                "✂️ Obišči nas v Status Kay",

                "Pri nas ne gre le za frizure, gre za doživetje stila, ustvarjenega v središču Ljubljane, tik ob železniški postaji.",

                "✨ Sprejemamo tudi brez naročanja. 🌍 Prisrčno dobrodošli tudi ekspati in turisti. 📍 Enostavno nas je najti, vendar težko pozabiti.",

                "Sledi nam na Instagramu, TikToku in Facebooku.",

                "Tvoj novi videz te že čaka. Pridi in doživi izjemno preobrazbo."
            ]

        },

        faq: {

            en: [
                {
                    q: "Which spring haircut works best for straight hair?",
                    a: "The Power Bob is especially flattering for straight or slightly wavy hair, since its precise geometric line highlights its natural texture."
                },

                {
                    q: "Do I need an appointment, or do you accept walk-ins?",
                    a: "We welcome walk-ins, though booking ahead is recommended so we can guarantee your preferred time."
                },

                {
                    q: "How do I choose the right spring style for me?",
                    a: "The best way is to consult with our stylist — together we'll pick a style that best suits your face shape, hair type, and lifestyle."
                }
            ],

            sl: [
                {
                    q: "Katera pomladna pričeska je najbolj primerna za ravne lase?",
                    a: "Power Bob se še posebej lepo poda ravnim ali rahlo valovitim lasem, saj njegova natančna geometrijska linija poudari njihovo naravno teksturo."
                },

                {
                    q: "Ali je za obisk salona potrebna rezervacija ali sprejemate tudi brez naročanja?",
                    a: "Sprejemamo tudi stranke brez predhodnega naročila, priporočamo pa rezervacijo termina, da vam lahko zagotovimo želeni čas obiska."
                },

                {
                    q: "Kako izbrati pravo pomladno pričesko zase?",
                    a: "Najbolje je, da se posvetujete z našim frizerjem – skupaj bomo izbrali stil, ki se najbolje prilega vaši obliki obraza, tipu las in življenjskemu slogu."
                }
            ]

        }

    },

    {
        slug: {
            en: "meet-daisy",
            sl: "spoznajte-daisy"
        },

        category: "about",

        date: {
            en: "February 16, 2025",
            sl: "16. februar 2025"
        },

        title: {
            en: "Meet Daisy 👑🐶",
            sl: "Spoznajte Daisy👑🐶"
        },

        excerpt: {
            en: "Meet Daisy, our three-year-old Yorkie and the salon's unofficial boss, adding an extra dose of warmth and comfort to every visit.",
            sl: "Spoznajte Daisy, našo triletno Yorkico in neuradno šefico salona, ki ob vsakem obisku poskrbi za dodatno dozo topline in sproščenosti."
        },

        body: {

            en: [
                "If you've ever visited our salon, chances are you didn't just hear the snip of scissors and hum of hairdryers — you also met the biggest personality in the smallest body. Meet Daisy, our three-year-old Yorkie, unofficial head of the salon, stress-reliever, and master of getting attention.",

                "A bold little diva.",

                "Your personal lap warmer 🥰 One of her many talents is turning your salon visit into a VIP hug. Whether you're getting a new haircut or the perfect gel manicure, don't be surprised if Daisy climbs into your lap, curls into a little ball, and claims you as her personal human for the next hour. She has a sixth sense for nervous clients — especially kids who might be scared of their first haircut. The moment she settles into their lap, the fear turns into giggles and the whole experience becomes wonderfully relaxing.",

                "The salon's favorite supervisor. Daisy takes her job seriously. She oversees every haircut, keeps a close eye on nail colors, and occasionally barks at passersby who don't stop to acknowledge her royal status. When she's not busy seeking attention, she has two favorite spots: the window, so she can judge the people walking by, and the cutting station, where she sneaks in her beauty naps between clients.",

                "If she's feeling especially playful, she might even weigh in on your hair color choice (or at least pretend to pick it). Kaja likes to joke that Daisy is better dressed than the rest of us... and honestly, who could argue?",

                "A day in the life of Daisy 🐕✨ While Kaja is busy creating gorgeous hairstyles and pampering nails, Daisy runs on her own schedule: greeting clients and persistently demanding belly rubs, keeping a watchful eye on haircuts or drifting off into a beauty nap while you're being styled, begging for treats and playing with her favorite toys (balls and sticks), and following Kaja everywhere while keeping up her royal attention-seeking duties. If she really likes you, she'll sit in your lap for the entire appointment — which, in this salon, is basically the highest honor there is!",

                "Want to meet Daisy? You don't need a special occasion to meet Daisy — she's always here, ready to win your heart. Just book an appointment for a haircut or manicure, and you just might get lucky enough to become her favorite client of the day. (Tip: we always have treats on hand to boost your chances. 😉)",

                "So next time you visit Status Kay, get ready for the sweetest, most playful welcome in Ljubljana.",

                "Daisy is waiting for you... and for your attention. 💖🐾"
            ],

            sl: [
                "Če ste kdaj obiskali naš salon, ste verjetno zaslišali ne le šumenje škarij in sušilnikov, ampak tudi srečali največjo osebnost v najmanjšem telesu. Spoznajte Daisy, našo triletno Yorkico, neformalno šefico salona, zdravilko stresa in mojstrico iskanja pozornosti.",

                "Drzna mala diva.",

                "Vaš osebni grelček za zmrznjene ljudi 🥰 Ena izmed njenih številnih talentov je, da vaš obisk salona spremeni v VIP objem. Ne glede na to ali si privoščite novo pričesko ali popolno gel manikuro. Naj vas ne preseneti, če se Daisy preseli v vaše naročje, kjer se zvije v majhno kepico in vas za naslednjo uro pridobi kot svojega osebnega človeka. Ima šesti čut za nervozne stranke – še posebej za otroke, ki se morda bojijo svojega prvega striženja. Takoj, ko se namesti v njihovo naročje, se strah spremeni v smeh in doživetje postane izjemno sproščujoče.",

                "Najljubša nadzornica salona. Daisy svojo službo jemlje resno. Nadzira striženje las, pazljivo spremlja barve nohtov in občasno laja na mimoidoče, ki se ne ustavijo, da bi ji priznali kraljevski status. Ko ni zasedena z iskanjem pozornosti, ima dve najljubši točki: ✅ Okno – da lahko oceni mimoidoče. ✅ Prostor za striženje – kjer si privošči svoje lepotne dremeže med obiskom strank.",

                "Če je še posebej razigrana, se lahko celo vključi pri izbiri vaše barve las (ali se vsaj pretvarja, da jo izbere). Kaja se včasih pošali, da je Daisy bolje oblečena kot mi vsi... in resnično, kdo bi ji lahko rekel drugače?",

                "En dan iz Daisyjinega življenja 🐕✨ Medtem ko Kaja ustvarja čarobne pričeske in neguje nohte, ima Daisy svoj lasten urnik: Pozdravlja stranke in vztrajno zahteva božanje. Budno nadzira striženja ali pa se med vašim urejanjem zaziblje v lepotni spanec. Zelo rada prosi za priboljške in se igra s svojimi najljubšimi igračami (žogice in palice). Kaji sledi povsod, zraven pa nadaljuje svoje kraljevske dolžnosti v iskanju pozornosti. Če vas ima resnično rada, bo med celotnim terminom sedela v vašem naročju – kar je v tem salonu skoraj največja čast!",

                "Želite spoznati Daisy? Ne potrebujete posebnega dneva za srečanje z Daisy – vedno je tukaj pripravljena osvojiti vaše srce. Samo rezervirajte termin za pričesko ali manikuro in morda boste imeli srečo, da boste postali njena najljubša stranka dneva. (Nasvet: vedno imamo priboljške, s katerimi povečamo vaše možnosti. 😉)",

                "Torej, naslednjič, ko boste obiskali Status Kay, bodite pripravljeni na najslajši in najbolj razigran sprejem v Ljubljani.",

                "Daisy vas čaka... in si želi vaše pozornosti. 💖🐾"
            ]

        },

        faq: {

            en: [
                {
                    q: "Is Daisy always at the salon?",
                    a: "Yes, Daisy is almost always here and loves greeting every guest — you might even get lucky and become her favorite client of the day!"
                },

                {
                    q: "Is Daisy good with kids who are nervous about haircuts?",
                    a: "Very much so! Daisy has a special sense for nervous little clients — the moment she curls up in their lap, the nerves melt away and the visit becomes much more relaxed."
                },

                {
                    q: "Do I need to book a special appointment just to meet Daisy?",
                    a: "Not at all — simply book any service (a haircut or manicure) and Daisy will be happy to greet you."
                }
            ],

            sl: [
                {
                    q: "Ali je Daisy vedno prisotna v salonu?",
                    a: "Da, Daisy je skoraj vedno tukaj in z veseljem pozdravi vsako stranko – morda boste imeli srečo in postali njena najljubša stranka dneva!"
                },

                {
                    q: "Ali je Daisy prijazna do otrok, ki jih je strah striženja?",
                    a: "Zelo! Daisy ima poseben čut za nervozne male stranke – takoj ko se ji stisnejo v naročje, strah hitro izgine in obisk postane veliko bolj sproščen."
                },

                {
                    q: "Ali si moram za srečanje z Daisy rezervirati poseben termin?",
                    a: "Ne, posebnega termina ne potrebujete – dovolj je, da rezervirate katerokoli storitev (pričesko ali manikuro) in Daisy vas bo z veseljem pozdravila."
                }
            ]

        }

    },

    {
        slug: {
            en: "tourists-and-expats-welcome",
            sl: "turisti-in-tujci-dobrodosli"
        },

        category: "about",

        date: {
            en: "November 1, 2023",
            sl: "1. november 2023"
        },

        title: {
            en: "Tourists and Expats Welcome",
            sl: "Turisti in tujci, dobrodošli"
        },

        excerpt: {
            en: "Tourists and expats, welcome! At STATUS KAY, fluent English means you'll always feel understood and at ease.",
            sl: "Turisti in tujci, dobrodošli! V salonu STATUS KAY se boste zaradi tekočega znanja angleščine počutili sproščeno in razumljeno."
        },

        body: {

            en: [
                "Finding a hairdresser who truly understands you and your wishes can be a challenge — that's exactly why you're so welcome at STATUS KAY. With years of experience abroad and fluent English, language will never be a barrier here. So sit back, relax, and enjoy your treatment.",

                "You can book your treatment online:",

                "Or message us on WhatsApp: +386 41 510 780"
            ],

            sl: [
                "Ker je lahko težko najti frizerja, ki resnično razume vas in vaše želje, ste v salonu STATUS KAY še posebej dobrodošli. Z večletnimi izkušnjami iz tujine in tekočim znanjem angleščine jezik pri nas ne bo ovira. Zato se lahko udobno namestite, sprostite in uživate v svojem tretmaju.",

                "Termin lahko rezervirate kar preko spleta:",

                "Ali pa nam pišete na WhatsApp: +386 41 510 780"
            ]

        },

        faq: {

            en: [
                {
                    q: "Does the salon staff speak English?",
                    a: "Yes! With years of experience abroad, we speak fluent English, so language will never be a barrier here."
                },

                {
                    q: "How can I book if I'm a tourist or expat?",
                    a: "You can book online, or simply message us on WhatsApp at +386 41 510 780."
                },

                {
                    q: "Is the salon welcoming to first-time visitors to Ljubljana?",
                    a: "Absolutely! We're happy to welcome you and make sure you feel relaxed, understood, and at ease during your visit."
                }
            ],

            sl: [
                {
                    q: "Ali osebje v salonu govori angleško?",
                    a: "Da! Imamo večletne izkušnje iz tujine in tekoče govorimo angleško, zato jezik pri nas nikoli ne bo ovira."
                },

                {
                    q: "Kako lahko rezerviram termin, če sem turist ali tujec?",
                    a: "Termin lahko rezervirate kar preko spletne rezervacije ali pa nam pišete na WhatsApp na številko +386 41 510 780."
                },

                {
                    q: "Ali je salon prijazen do tujcev, ki prvič obiščejo Ljubljano?",
                    a: "Vsekakor! Rade volje vas sprejmemo in poskrbimo, da se boste ob obisku počutili sproščeno, razumljeno in dobrodošlo."
                }
            ]

        }

    },

    {
        slug: {
            en: "haircut-styles",
            sl: "strizenje"
        },

        category: "haircuts",

        date: {
            en: "November 1, 2023",
            sl: "1. november 2023"
        },

        title: {
            en: "Haircut Styles for Every Look",
            sl: "Striženje"
        },

        excerpt: {
            en: "From the classic bob to the fade for men — explore popular haircut styles and find the one that brings out your best look.",
            sl: "Od klasičnega paža do fade tehnike za moške — spoznajte priljubljene stile striženja in poiščite tistega, ki najbolj poudari vaš videz."
        },

        body: {

            en: [
                "You can choose between a range of cutting styles. The most flattering haircut for you depends on your hair type, face shape, personal style, and how much upkeep you're willing to do. When you come in for a haircut, feel free to bring a few photos of styles you like, or simply leave it in our hands.",

                "Some popular women's haircut styles:",

                "Classic bob: Hair is cut to a uniform length, at chin or shoulder height. Variations can be playful or more polished, with graduation that gives the style a fuller shape. Long layered bob (lob): A great option for anyone who wants medium-length hair with added texture and movement. Pixie cut: Hair is cut short, close to the head and above the ears. This style needs very little upkeep and can be styled in many different ways. It's known for its elegant, sharp look. Layers: Layers are cut into the hair to create depth and texture. This style is versatile and can be adapted to different hair lengths and face shapes. Face-framing layers suit every face shape beautifully, as they gently frame the face.",

                "Long layers: This cutting style adds movement and volume to long hair, helping create a softer look for the face.",

                "Shag/wolf cut: This style has a signature choppy, multi-layered, textured look. It's a popular choice for a relaxed, rock-and-roll vibe.",

                "Blunt cut: This means a straight cut, mostly for medium and long hair, cut in a clean, straight line with no layers, creating an elegant, polished look. It's recommended for anyone who wants their hair to look longer and healthier.",

                "Some popular men's haircut styles: Fade: Hair is kept short on the sides and back, gradually blending from the skin into longer hair on top. Pompadour: A classic men's style with faded sides and a voluminous, styled top. Barber treatments: These cover a range of services barbers offer for grooming and maintaining hair, beard, and overall appearance. These services can vary quite a bit and often include facial care, mustache and beard shaping — everything from a quick clipper trim to a luxury treatment with hot and cold towels, facial care, and a straight-razor shave for a perfectly smooth finish."
            ],

            sl: [
                "Izbirate lahko med različnimi načini striženja oz. stili. Najprimernejša pričeska za vas je odvisna od vašega tipa las, oblike obraza, osebnega stila in želje po vzdrževanju. Ob prihodu na striženje, lahko, če želite, prinesite s seboj nekaj slik pričesk, ki so vam všeč ali se prepustite našim rokam.",

                "Nekaj priljubljenih stilov striženja za ženske:",

                "Paž - klasični bob: Lasje so postriženi na enotno dolžino, v višini brade ali v višini ramen. Različice so lahko bolj igrive ali bolj stroge, z graduacijo, ki napravi bolj polno obliko pričeske. Stopničast paž - večplastni dolgi bob (lob): Je uporabna možnost za vse, ki želijo srednje dolge lase z dodano teksturo in gibanjem. Pixie striženje: Lasje so postriženi kratko, blizu glave in nad ušesi. Pričeska zahteva malo vzdrževanja. Oblikovati jo je mogoče na različne načine. Znana je po elegantnem in ostrem videzu. Stopničke: Plasti las so postrižene tako, da se ustvarita globina in tekstura. Ta slog je vsestranski in ga je mogoče prilagoditi različnim dolžinam las in oblikam obraza. Sprednje stopničke pa pristajajo vsakemu tipu obraza, ker ga lepo objamejo.",

                "Daljše stopničke: Tak način striženja doda gibanje in volumen dolgim lasem. Z njimi lahko ustvarite mehak videz obraza.",

                "Shag/Wolf's cut striženje: Pričeska ima značilen raztrgan, večplasten in teksturiran videz. Je priljubljena izbira za ležeren, rokenrol videz.",

                "Topo striženje: Pomeni ravno striženje predvsem srednje in dolgih las, ki so postriženi v ravni liniji brez plasti, kar ustvarja eleganten in poliran videz. Priporočljivo je za vse, ki želijo imeti daljše in bolj zdrave lase.",

                "Nekaj priljubljenih stilov striženja za moške: Fade striženje: Lasje so kratki ob straneh in zadaj, postopoma se iz »kože« prehajajo v daljše lase na vrhu. Pompadour: Pompadour je klasična moška pričeska s fade stranmi in voluminoznim, oblikovanim vrhom. Brivski tretmaji: Nanaša se na različne storitve in postopke, ki jih ponujajo brivci za urejanje in vzdrževanje las, brade in splošnega videza osebe. Te storitve se lahko zelo razlikujejo in pogosto vključujejo nego obraza, oblikovanje brkov in brade. Od hitrega britja z mašinico ali lux tretmaja, ki vključuje tople in hladne brisače, nego obraza in britje z odprto britvico, za popolnoma gladek videz obraza."
            ]

        },

        faq: {

            en: [
                {
                    q: "Which haircut requires the least maintenance?",
                    a: "The pixie cut is a great low-maintenance choice — it holds its shape well even without frequent styling."
                },

                {
                    q: "What is the fade, and who is it good for?",
                    a: "The fade is a popular men's technique where the hair gradually blends from the skin on the sides and back into longer hair on top. It suits anyone looking for a neat, modern look."
                },

                {
                    q: "Can I bring reference photos to my appointment?",
                    a: "Absolutely! Feel free to bring inspiration photos, or simply leave the choice entirely in our hands."
                }
            ],

            sl: [
                {
                    q: "Katera pričeska zahteva najmanj vzdrževanja?",
                    a: "Pixie striženje je odlična izbira za tiste, ki želijo pričesko z minimalnim vzdrževanjem, saj obdrži svoj videz tudi brez pogostega oblikovanja."
                },

                {
                    q: "Kaj je fade tehnika in za koga je primerna?",
                    a: "Fade je priljubljena moška tehnika, pri kateri lasje ob straneh in zadaj postopoma prehajajo iz kože v daljše lase na vrhu. Primerna je za vse, ki želijo urejen, sodoben videz."
                },

                {
                    q: "Ali lahko na termin prinesem slike želene pričeske?",
                    a: "Seveda! Z veseljem si ogledamo navdih, ki ste ga prinesli s seboj, lahko pa se popolnoma prepustite tudi našim rokam in izkušnjam."
                }
            ]

        }

    },

    {
        slug: {
            en: "hair-coloring-techniques",
            sl: "tehnike-barvanja"
        },

        category: "haircuts",

        date: {
            en: "November 1, 2023",
            sl: "1. november 2023"
        },

        title: {
            en: "Hair Coloring Techniques Explained",
            sl: "Tehnike barvanja"
        },

        excerpt: {
            en: "From highlights to two-step coloring — get to know the most popular hair coloring techniques and find the one that suits your hair best.",
            sl: "Od pramenov do dvostopenjskega barvanja — spoznajte najpogostejše tehnike barvanja las in izberite tisto, ki najbolj ustreza vašim lasem."
        },

        body: {

            en: [
                "Hair coloring techniques include a range of methods and processes used to change or enhance hair color. Each one produces its own unique effect and result. Coloring works beautifully for both women and men.",

                "The most popular hair coloring techniques:",

                "Highlights: Highlights are either a lighter or slightly darker shade than your current hair color, and you can choose to have them done on half or all of your head. They can create a natural, sun-kissed look or a bolder contrast, depending on the color and technique used. They're a great choice for lightening your existing color or covering the first few grey hairs.",

                "Recommended time between appointments: 3 months.",

                "Balayage: This is a freehand \"hair painting\" technique that creates a gradual, natural transition between darker and lighter shades. It's known for being flattering, low-maintenance, and delivering that coveted sun-kissed look. Highlights are painted starting near the roots and gradually widening, with the ends fully covered in color. If the shade is one or two tones lighter than the natural color, the result looks the most natural. Even a year later, the grow-out from color to natural hair still looks lovely. Recommended time between appointments: every 6 months, or once a year. Two-step coloring: To achieve very light or pastel shades, two steps are used: hair is first lightened to a lighter base, then the desired color is applied with a gloss. This is most often used to achieve the lightest shades — white, grey, or platinum. If the hair has been colored before, a color correction is usually needed first. At following appointments, we continue by coloring the regrowth and toning the full length of the hair. Recommended time between appointments: 4-5 weeks. Toning: Toning is a process that neutralizes unwanted undertones left in the hair after lightening/bleaching or coloring. It removes brassy or yellow tones, or achieves a darker shade that gradually washes out of the hair. We use a variety of techniques, which vary in length and, as a result, in price. Toning techniques: Ombre. This involves a dramatic transition from a darker color at the roots to a lighter color at the ends, with a distinct gradient effect. Root shadow: This technique blends a darker regrowth with the highlights, softly melting into the blonde. Color Melt: This technique seamlessly \"melts\" several hair colors together, creating a harmonious, smooth transition between shades. It can be used for a variety of color combinations. Recommended time between appointments: 4-5 weeks. About the techniques above: The right technique depends on your desired look, hair type, any previous coloring, and how much upkeep you're willing to do between salon visits. Before starting the service, we'll work with you to choose the most suitable coloring technique and, with it, the color result you're after. The consultation takes 15 minutes, is free, and comes with no obligation to book the service."
            ],

            sl: [
                "Tehnike barvanja las vključujejo različne metode in postopke, ki se uporabljajo za spreminjanje ali izboljšanje barve las. Vsaka od njih ima edinstvene učinke in rezultate. Barvanje je primerno tako za ženske kot tudi za moške.",

                "Najpogostejše tehnike barvanja las:",

                "Pramena: Pramena so ali svetlejša ali odtenek temnejša barva las od sedanje, lahko izbirate med pol ali celo glavo. Z njimi se ali ustvari naraven videz las in kot da so obsijani s soncem ali manj drznen kontrast, odvisno od izbrane barve in njihove izvedbe. So prava izbira za posvetlitev obstoječe barve ali prvih »sivčkov«.",

                "Priporočljiv razmik med posameznimi izvedbami: 3 meseci.",

                "Balayage: Je tehnika prostoročnega »slikanja na las«, ki ustvarja postopen, naraven prehod med temnejšimi in svetlejšimi odtenki las. Znana je po svoji privlačnosti, enostavnosti vzdrževanja in končnem učinku: izgledu obsijanosti las s soncem. Pri narastku se naredijo pramena, ki se postopoma širijo, konice las pa so popolnoma prekrite z barvo. Če je ta svetlejša za odtenek ali dva od obstoječe barve las, je izgled las najbolj naraven. Tudi po letu dni je prehod iz barvanih las na naravne še vedno zelo lep. Priporočljiv razmik med posameznimi izvedbami: vsakih 6 mesecev oz. enkrat na leto. Dvoprocesno barvanje: Za doseganje zelo svetlih ali pastelnih odtenkov las se uporabljata dva koraka: najprej se lasje pobelijo na svetlejši odtenek in po tem sledi nanos želene barve s prelivom. Ta se najpogosteje uporablja, za doseganje najsvetlejših odtenkov, bele, sive oz. platinaste barve. Če so bili lasje predhodno barvani, je potrebna korekcija barve. Pri naslednjih srečanjih pa nadaljujemo z barvanjem narastka, pri čemer toniramo celotno dolžino las. Priporočljiv razmik terminov med posameznimi izvedbami: 4-5 tednov Toniranje: Toniranje je postopek za nevtralizacijo neželenih podtonov v laseh, ki ostanejo po posvetljevanju/beljenju ali barvanju las. Odpravi medeninast ali rumen odtenek las. Oz. se doseže temnejša niansa, katera se spere iz las. Uporabimo različne tehnike izvedbe, ki so različno dolge in posledično tudi cenovno različne. Tehnike toniranja: Ombre. Vključuje dramatičen prehod od temnejše barve pri koreninah las do svetlejše barve pri njihovih konicah. Značilen zanj je jasen gradientni učinek. Root shadow: Tehnika »zlije« temnejši narastek s prameni, in se mehko prelije v blond barvo. Color Melt: Tehnika brezhibno »zlije« več barv las ter ustvari harmoničen in gladek prehod med odtenki. Uporablja se lahko za različne barvne kombinacije. Priporočljiv razmik terminov med posameznimi izvedbami: 4-5 tednov K prej predstavljenim tehnikam: Izbira tehnike je odvisna od želenega videza stranke, njenega tipa las, morebitnega predhodnega barvanja in želje k vzdrževanju do naslednjega obiska salona. Pred izvedbo storitve bomo skupaj z vami izbrali najprimernejšo tehniko barvanja in s tem tudi želeni izgled barve las. Posvet traja 15min, je brezplačen in brez obveze, če se za storitev ne odločite."
            ]

        },

        faq: {

            en: [
                {
                    q: "Which coloring technique gives the most natural look?",
                    a: "Balayage is one of the most natural-looking techniques, since it creates a soft transition between darker and lighter tones, similar to a sun-kissed effect."
                },

                {
                    q: "How often do I need touch-ups?",
                    a: "It depends on the technique — highlights need refreshing about every 3 months, balayage every 6 months to a year, and two-step coloring or toning every 4-5 weeks."
                },

                {
                    q: "Is a consultation required before coloring, and does it cost anything?",
                    a: "A consultation isn't required, but we highly recommend it. It takes about 15 minutes, is free, and comes with no obligation, even if you decide not to book the service."
                }
            ],

            sl: [
                {
                    q: "Katera tehnika barvanja je najbolj naravnega videza?",
                    a: "Balayage velja za eno najbolj naravnih tehnik, saj ustvarja mehak prehod med temnejšimi in svetlejšimi odtenki, podoben učinku sonca na laseh."
                },

                {
                    q: "Kako pogosto moram na popravljanje barve?",
                    a: "Odvisno od tehnike – prameni potrebujejo osvežitev na približno 3 mesece, balayage na 6 mesecev do enkrat letno, dvoprocesno barvanje in toniranje pa na 4-5 tednov."
                },

                {
                    q: "Ali je posvet pred barvanjem obvezen in ali je plačljiv?",
                    a: "Posvet ni obvezen, a ga toplo priporočamo. Traja približno 15 minut, je brezplačen in brez obveze, tudi če se na koncu ne odločite za storitev."
                }
            ]

        }

    },

    {
        slug: {
            en: "about-status-kay-salon",
            sl: "o-status-kay-salonu"
        },

        category: "about",

        date: {
            en: "November 1, 2023",
            sl: "1. november 2023"
        },

        title: {
            en: "About STATUS KAY Salon",
            sl: "O STATUS KAY salonu"
        },

        excerpt: {
            en: "Discover STATUS KAY, a modern and welcoming salon in the heart of Ljubljana, where expert care comes with a warm welcome.",
            sl: "Spoznajte moderen in prijeten salon STATUS KAY v središču Ljubljane, kjer vas poleg strokovne nege pričakuje tudi topel sprejem."
        },

        body: {

            en: [
                "Welcome to a modern and inviting salon where you'll feel right at home.",

                "Younger and older guests alike, ladies and gentlemen who want a change or simply want to maintain their current look — if you're looking to step away from the rush of the workday and treat yourself to some pampering in a pleasant salon, you can take advantage of our \"1 for 2\" option, letting you get your hair and nails done in a single visit. The salon is easy to reach yet tucked away from curious eyes on the street.",

                "We pride ourselves on precision, professional expertise kept sharp through regular training, genuine care for our clients' comfort, and little thoughtful touches along the way.",

                "We offer a full range of services: a complete menu of hairstyles from classic to trendy, barbering services, complete nail care, and quality hair brushes and hair care products available for purchase. With expert advice included, we do our best to match your expectations to the actual result of your chosen service.",

                "For styling, we use modern, high-quality tools (hair dryers, straighteners, curling irons, and more) that help preserve the health of your hair. We value quality materials, which is why we only dry hair with natural bristle brushes — they give hair an extra special shine. We also use quality cosmetics: Wella Professionals for hair color and the world-renowned O.P.I. brand for nails.",

                "Let your visit to our salon become a short escape in your day, welcomed by our friendly little dog Daisy in a warm space — she has a way of making both adults and kids wish their visit could last just a bit longer."
            ],

            sl: [
                "Vabimo vas v sodoben in prijeten salon, v katerem se boste prijetno počutili.",

                "Mlajši in odrasli, gospe in gospodje, ki si želite spremembe ali pa ohranitev sedanjega videza, če se želite na kratko umakniti iz vrveža delovnega dne in se prepustiti negi v prijetnem salonu, ker boste lahko izkoristili čas za »1 za 2«, ko lahko ob enem obisku uredite pričesko in tudi nego nohtov. Lokacija salona je lahko dostopna, ravno prav umaknjena od radovednih pogledov ulice.",

                "Odlikujejo nas natančnost, strokovna usposobljenost z rednimi izobraževanji, skrb za prijetno počutje strank v salonu ter drobne pozornosti.",

                "Ponujamo vam celovito ponudbo storitev: celovito ponudbo pričesk: od klasičnih do trendovskih stilov, brivske storitve, celostno urejanje nohtov, možnost nakupa kvalitetnih krtač za lase in izdelkov za nego las. Z dodanim svetovanjem skušamo čimbolj prilagoditi vaša pričakovanja dejanski izvedbi željene storitve.",

                "Pri urejanju pričesk uporabljamo sodobne in kvalitetne pripomočke (npr. sušilniki za lase, likalniki, kodralniki, …). Z njimi ohranjamo kvaliteto las. Cenimo kvalitetne materiale, zato pri sušenju uporabljamo le krtače iz naravnih ščetin. Zaradi njih lasje dobijo še poseben lesk. Uporabljamo tudi kakovostno kozmetiko: za lase barve Wella Professionals in za nohte svetovno znano znamko O.P.I.",

                "Naj obisk našega salona postane za vas kratka sprostitev v vašem dnevu, ko vas v prijetnem prostoru pozdravi tudi prijazna psička Daisy, zaradi katere je odraslim in tudi najmlajšim obisk pri nas prekratek."
            ]

        },

        faq: {

            en: [
                {
                    q: "Where is STATUS KAY salon located, and is parking available?",
                    a: "The salon is located in the heart of Ljubljana, easy to reach yet nicely tucked away from the street. Free parking is available right next to the salon — just let us know when you book."
                },

                {
                    q: "How do I book an appointment?",
                    a: "You can book by calling us at 041 510 780 or through our online booking app, available on our website."
                },

                {
                    q: "What does the \"1 for 2\" option mean?",
                    a: "It lets you get your hair styled and your nails done in a single visit, saving you time. It's perfect if you want a quick escape from your busy day."
                }
            ],

            sl: [
                {
                    q: "Kje se nahaja salon STATUS KAY in ali je na voljo parkiranje?",
                    a: "Salon se nahaja v središču Ljubljane, na lahko dostopni, a mirni lokaciji. Tik ob salonu je na voljo tudi brezplačno parkirno mesto – le opozorite nas nanj ob rezervaciji termina."
                },

                {
                    q: "Kako lahko rezerviram termin?",
                    a: "Obisk lahko najavite po telefonu na 041 510 780 ali preko spletne aplikacije za rezervacije, ki je dostopna na naši spletni strani."
                },

                {
                    q: "Kaj pomeni ponudba »1 za 2«?",
                    a: "Gre za priložnost, da ob enem obisku uredite tako pričesko kot nego nohtov in tako prihranite čas. Idealno za tiste, ki si želijo kratek oddih od vsakdana."
                }
            ]

        }

    }

];

export function getPostBySlug(lang, slug) {

    return blogPosts.find((post) => post.slug[lang] === slug && isPublished(post));

}

// Only posts whose publishAt date has arrived (see publishing.js).
export function getPublishedPosts() {

    return blogPosts.filter(isPublished);

}

export function buildBlogPostPath(lang, blogBasePath, post) {

    return `/${lang}/${blogBasePath}/${post.slug[lang]}`;

}

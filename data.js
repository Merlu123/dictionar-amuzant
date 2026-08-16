const DICT = [
  {
    word:"Sisific", aliases:["sisif","sisyphus","munca sisifica","efort sisific"],
    phon:"/si-SI-fic/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Apare oriunde cineva vrea să spună „muncă fără sfârșit și fără sens”.",
    story:"Sisif a fost un rege al Corintului atât de viclean încât a reușit de două ori să păcălească moartea. Zeii, sătui de aroganța lui, i-au dat o pedeapsă pe măsură: să împingă un bolovan uriaș până în vârful unui munte. Numai că, de fiecare dată când ajungea sus, piatra se rostogolea înapoi la vale. Așa că <strong>„sisific”</strong> descrie orice efort care se repetă la nesfârșit, fără să ducă niciodată undeva — genul de task de la job pe care-l faci luni și-l refaci vineri."
  },
  {
    word:"Kafkian", aliases:["kafka","kafkiana"],
    phon:"/kaf-ki-AN/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    why:"Se folosește pentru birocrația care nu are nicio logică.",
    story:"Franz Kafka a scris despre oameni prinși în sisteme absurde: un funcționar arestat fără să afle de ce (Procesul), un om transformat peste noapte în insectă și tratat ca atare de familia lui fără mari explicații (Metamorfoza). <strong>„Kafkian”</strong> a ajuns să descrie orice situație în care logica normală nu se aplică — de obicei o instituție, un formular sau o birocrație care te plimbă de la un ghișeu la altul fără niciun sens aparent."
  },
  {
    word:"Cassandră", aliases:["cassandra","complexul cassandrei"],
    phon:"/ca-SAN-dră/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Folosit pentru cineva care avertizează, dar nu-l crede nimeni.",
    story:"Cassandra a primit de la zeul Apollo darul profeției — putea vedea viitorul cu exactitate. Problema a apărut când l-a refuzat pe Apollo romantic, iar el, jignit, a adăugat o clauză crudă: nimeni n-avea s-o creadă vreodată. Așa că a prezis căderea Troiei, exact așa cum s-a întâmplat, și toată lumea a ignorat-o. Azi numim <strong>„cassandră”</strong> pe oricine avertizează corect despre un dezastru, dar e ignorat până e prea târziu."
  },
  {
    word:"Călcâiul lui Ahile", aliases:["ahile","achilles heel","punctul slab"],
    phon:"/ah-I-le/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Expresie pentru „singurul punct vulnerabil” al cuiva altfel de neatins.",
    story:"Mama lui Ahile l-a scufundat, nou-născut, în râul Styx ca să-l facă invulnerabil. Singura problemă: l-a ținut de călcâi, iar acolo apa n-a ajuns. Ahile a devenit cel mai mare războinic al Troiei — până când o săgeată l-a lovit exact în acel punct. De atunci, <strong>„călcâiul lui Ahile”</strong> descrie slăbiciunea ascunsă a cuiva sau a ceva care, în rest, pare aproape perfect."
  },
  {
    word:"Victorie pirică", aliases:["pyrrhic","pirica","victoria pirica"],
    phon:"/pi-RI-că/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    why:"Pentru orice câștig care te costă mai mult decât dacă ai fi pierdut.",
    story:"Regele Pyrrhus al Epirului a învins armata romană la Ausculum, dar cu pierderi atât de mari încât a exclamat, se spune, că încă o victorie ca asta l-ar lăsa fără armată. Din păcate pentru el, expresia i-a rămas numele legat pe vecie de eșecuri deghizate în succese: <strong>„victorie pirică”</strong> e orice câștig la care costurile depășesc beneficiul — genul de ceartă pe care „o câștigi”, dar rămâi fără prieteni."
  },
  {
    word:"Machiavelic", aliases:["machiavelli","machiavelica"],
    phon:"/ma-kia-ve-LIC/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    why:"Descrie pe cineva dispus să facă orice pentru a-și atinge scopul.",
    story:"Niccolò Machiavelli a scris în secolul XVI „Principele”, un ghid pentru conducători despre cum să obții și să păstrezi puterea — inclusiv prin minciună, manipulare sau cruzime, dacă rezultatul o cere. Ironic, cartea era mai degrabă o analiză rece a realității politice decât un manual de răutate, dar numele lui a rămas sinonim cu <strong>„machiavelic”</strong>: cineva care crede că scopul scuză mijloacele, oricât de murdare ar fi ele."
  },
  {
    word:"Donquijotesc", aliases:["quijotesc","don quijote","donchisotesc"],
    phon:"/don-ki-ho-TESC/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    why:"Pentru gesturi idealiste, nobile, dar complet nepractice.",
    story:"Don Quijote, eroul lui Cervantes, a citit atât de multe romane cavalerești încât și-a pierdut contactul cu realitatea și a plecat să lupte cu... mori de vânt, convins că erau uriași răi. <strong>„Donquijotesc”</strong> descrie orice luptă nobilă, plină de idealuri, dar sortită eșecului pentru că adversarul e, de fapt, imaginar sau disproporționat — gen „lupta donquijotescă” a cuiva împotriva birocrației."
  },
  {
    word:"Orwellian", aliases:["orwell","1984","big brother"],
    phon:"/or-VE-li-an/", tag:"lit", tagLabel:"adjectiv literar",
    book:null,
    why:"Se folosește pentru supraveghere și manipulare a limbajului de către putere.",
    story:"George Orwell a imaginat în „1984” o societate condusă de un regim care urmărește fiecare mișcare a cetățenilor și rescrie constant limba și istoria ca să controleze gândirea oamenilor. <strong>„Orwellian”</strong> a devenit eticheta pentru orice situație din realitate care seamănă cu asta: supraveghere excesivă, propagandă sau folosirea unor cuvinte frumoase („restructurare”) pentru lucruri urâte."
  },
  {
    word:"Lapsus freudian", aliases:["freudian slip","freudian","lapsus"],
    phon:"/LAP-sus froy-di-AN/", tag:"ist", tagLabel:"termen psihologic",
    book:null,
    why:"Pentru scăpările verbale care „trădează” ce gândim cu adevărat.",
    story:"Sigmund Freud credea că nimic din ce spunem nu e complet întâmplător — nici măcar greșelile. Când cineva spune un cuvânt greșit, dar acesta dezvăluie un gând ascuns sau o dorință reprimată, i se spune <strong>„lapsus freudian”</strong>. Exemplul clasic, glumit la nesfârșit: cineva care voia să spună „te rog, treci” și a zis „te rog, iubito” — evident, către persoana greșită."
  },
  {
    word:"Cutia Pandorei", aliases:["pandora"],
    phon:"/pan-DO-rei/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru orice decizie mică ce declanșează o avalanșă de probleme.",
    story:"Zeii i-au dat Pandorei, prima femeie din mitologia greacă, un vas sigilat cu instrucțiuni clare: să nu-l deschidă niciodată. Curiozitatea a învins, iar din vas au ieșit toate relele lumii — boală, suferință, invidie — rămânând înăuntru doar speranța. <strong>„A deschide cutia Pandorei”</strong> înseamnă azi să faci un gest aparent minor care declanșează o serie de consecințe pe care nu le mai poți controla."
  },
  {
    word:"Nodul gordian", aliases:["gordian knot","gordian"],
    phon:"/GOR-di-an/", tag:"ist", tagLabel:"referință istorică",
    book:null,
    why:"Pentru soluții radicale la probleme aparent imposibile.",
    story:"O legendă spunea că oricine reușea să dezlege un nod extrem de complicat legat de regele Gordius avea să conducă Asia. Mulți au încercat cu răbdare, fără succes — până a venit Alexandru cel Mare, care pur și simplu l-a tăiat cu sabia. <strong>„A tăia nodul gordian”</strong> înseamnă a rezolva o problemă complicată printr-o soluție radicală și directă, în loc să te chinui cu metode complicate."
  },
  {
    word:"Calul troian", aliases:["trojan horse", "troian"],
    phon:"/tro-I-an/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru orice pericol ascuns într-un dar aparent inofensiv.",
    story:"După zece ani de asediu eșuat al Troiei, grecii au construit un cal uriaș de lemn, l-au umplut cu soldați și l-au lăsat „în dar” la porțile cetății. Troienii, crezând că grecii au renunțat, au tras calul înăuntru drept trofeu — iar noaptea, soldații ascunși au deschis porțile cetății. De aici expresia <strong>„cal troian”</strong>, folosită azi și pentru viruși informatici care se deghizează în programe inofensive."
  },
  {
    word:"Icar", aliases:["icarus", "aripile lui icar"],
    phon:"/I-car/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru ambiția care se prăbușește exact din cauza succesului ei.",
    story:"Tatăl lui Icar, Dedal, a construit pentru amândoi aripi din pene lipite cu ceară, ca să evadeze dintr-o insulă. Sfatul lui a fost simplu: nici prea sus, nici prea jos. Icar, entuziasmat de zbor, a ignorat avertismentul, s-a apropiat prea mult de soare, iar ceara s-a topit. <strong>„A zbura prea aproape de soare ca Icar”</strong> descrie eșecul cauzat exact de excesul de încredere sau ambiție."
  },
  {
    word:"Atingerea lui Midas", aliases:["midas", "regele midas"],
    phon:"/MI-das/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru cineva la care „totul se transformă în succes”.",
    story:"Regele Midas a primit de la zeul Dionysos o dorință: tot ce atingea să se transforme în aur. Entuziasmat inițial, a realizat rapid problema când și mâncarea, și fiica lui s-au transformat în metal la atingere. <strong>„Atingerea lui Midas”</strong> se folosește azi mai ales pozitiv — pentru cineva ale cărui afaceri sau proiecte par să reușească mereu — dar originea ei e, de fapt, un avertisment despre lăcomie."
  },
  {
    word:"Prometeic", aliases:["prometeu","prometheus","focul lui prometeu"],
    phon:"/pro-me-TE-ic/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru descoperiri care schimbă lumea, dar au un preț mare.",
    story:"Prometeu a furat focul de la zei și l-a dat oamenilor, oferindu-le căldură, unelte și tehnologie — dar Zeus l-a pedepsit legându-l de o stâncă, unde un vultur îi mânca ficatul zi de zi, la nesfârșit. <strong>„Prometeic”</strong> descrie orice realizare uriașă, adesea științifică, care aduce progres enorm, dar și un cost sau un risc pe măsură — de la energia nucleară la inteligența artificială."
  },
  {
    word:"Narcisist", aliases:["narcis","narcissus"],
    phon:"/nar-ci-SIST/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru cineva îndrăgostit iremediabil de propria imagine.",
    story:"Narcis era un tânăr atât de frumos încât respingea pe oricine se îndrăgostea de el. Ca pedeapsă, s-a îndrăgostit la rândul lui de propria reflecție într-un lac, incapabil să se desprindă de ea, până a murit privindu-se. De aici <strong>„narcisist”</strong> — cineva absorbit excesiv de propria imagine și admirație de sine, adesea în detrimentul celor din jur."
  },
  {
    word:"Utopie", aliases:["utopic","thomas more"],
    phon:"/u-to-PI-e/", tag:"lit", tagLabel:"termen literar",
    book:null,
    why:"Pentru o societate „perfectă” care nu poate exista în realitate.",
    story:"Thomas More a scris în 1516 despre o insulă imaginară numită Utopia, o societate organizată perfect, fără sărăcie sau conflicte — numele venind chiar din greacă, „locul care nu există”. Astăzi <strong>„utopie”</strong> descrie orice idee sau plan ideal, dar nerealist, iar opusul ei, <strong>distopia</strong>, descrie o societate ideală doar la prima vedere, de fapt profund opresivă (gândește-te la „1984”)."
  },
  {
    word:"Complexul lui Oedip", aliases:["oedip","oedipal"],
    phon:"/E-dip/", tag:"myth", tagLabel:"termen psihologic",
    book:null,
    why:"Termen freudian folosit — și abuzat — în discuții despre familie.",
    story:"Oedip, personaj din mitologia greacă, și-a ucis fără să știe tatăl și s-a căsătorit fără să știe cu mama lui, împlinind o profeție de care încercase disperat să scape. Freud a împrumutat povestea pentru a numi o etapă ipotetică de dezvoltare psihologică în care copilul mic ar avea atașament intens față de părintele de sex opus. Termenul e controversat azi în psihologie, dar rămâne extrem de folosit cultural, adesea glumeț și exagerat."
  },
  {
    word:"Muză", aliases:["muse","muzele"],
    phon:"/MU-ză/", tag:"myth", tagLabel:"mit grecesc",
    book:null,
    why:"Pentru sursa de inspirație a unui artist.",
    story:"În mitologia greacă, cele nouă Muze erau fiicele lui Zeus, fiecare responsabilă cu o formă de artă sau știință — poezie, muzică, astronomie, istorie. Artiștii antici le invocau la începutul operelor, cerându-le inspirație. Astăzi <strong>„muză”</strong> desemnează orice persoană sau lucru care inspiră creativitatea cuiva — un pictor își poate numi partenerul „muza” lui, fără nicio legătură reală cu Olimpul."
  }
];

// Fiecare carte are un id unic, un titlu si o coperta (poza adaugata manual de tine).
// "cover" poate fi fie un link catre o imagine online, fie o imagine codificata base64 -- la fel ca la logo.
// Ca sa legi un cuvant de o carte, pui id-ul cartii in campul "book" al cuvantului (in loc de null).
const BOOKS = [
  {
    id:"exemplu-carte",
    title:"Numele Cartii Tale",
    cover:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='340'><rect width='240' height='340' fill='%23241A17'/><text x='120' y='175' font-family='sans-serif' font-size='16' fill='%23E8D6C9' text-anchor='middle'>coperta ta aici</text></svg>"
  }
];

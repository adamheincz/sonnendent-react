
export const OPENING_HOURS = [
    {
        location: "Zsira",
        hours: [
            "8:00 - 13:00",
            "13:00 - 21:00",
            "8:00 - 13:00",
            "8:00 - 13:00",
            "13:00 - 21:00",
            "-",
            "-"
        ]

    },
    {
        location: "Kőszegszerdahely",
        hours: [
            "13:00 - 21:00",
            "8:00 - 13:00",
            "13:00 - 21:00",
            "13:00 - 21:00",
            "8:00 - 13:00",
            "-",
            "-"
        ]
    }
]

export const SELLING_POINTS = [
    {
        title: "Este is jöhet!",
        description: "Rugalmas rendelési idők - Kora reggeltől késő estig jöhet hozzánk. Nem kell szabadságot kivennie. Munka után is ellátogathat rendelésünkre.",
        icon: "nightlight"
    },
    {
        title: "Akár azonnali időpont",
        description: "Sürgős akut probléma - mint például fogfájás vagy törés - esetén telefonos egyeztetés után akár azonnal indulhat rendelőnkbe.",
        icon: "today"
    },
    {
        title: "Nem húzzuk ki, megmentjük!",
        description: "Amennyiben a fog gyökere nem mozog, jó eséllyel lehet rá építeni. Nem is gondolná, mi mindent meg lehet menteni!",
        icon: "shield"
    },
]

export const TREATMENTS = [
    {
        id: 1,
        title: "Korona és híd pótlás",
        description: "A fogorvos által lecsiszolt fogra lenyomat alapján a fogtechnikus által készített beragasztott, nem kivehető pótlások.",
        content: {
            advantages: [
                "Rögzített, nem kivehető",
                "Gyorsan (kb 1 hét alatt) elkészíthető",
                "Esztétikus",
                "Gazdaságos",
                "Viselése a saját fogakhoz hasonló érzés"
            ],
            useCases: [
                ""
            ],
            example: {
                paragraphs: [
                    "A korona egy meglévő fogra készített burkolat, amire vagy a fog koronai részének nagy mértékű megrongálódása/hiánya, vagy hídpótlás készítése miatt van szükség.",
                    "A híd a foghiányok rögzített pótlásának módja a szomszédos fogakra való (koronával) rögzítés által."
                ],
                image: {
                    url: "",
                    description: "A képen két lecsiszolt fog, és az azokra készített 2 koronából, valamint egy hiányzó fog pótlására szolgáló 1 hídtagból álló összesen 2+1= 3 tagú híd látható."
                }
            }
        }
    },
    {
        id: 2,
        title: "Kompozit helyreállítás",
        description: "A fogorvos által lecsiszolt fogra lenyomat alapján a fogtechnikus által készített beragasztott, nem kivehető pótlások.",
        content: {
            advantages: [
                "Rögzített, nem kivehető",
                "Gyorsan (kb 1 hét alatt) elkészíthető",
                "Esztétikus",
                "Gazdaságos",
                "Viselése a saját fogakhoz hasonló érzés"
            ],
            useCases: [
                ""
            ],
            example: {
                paragraphs: [
                    "A korona egy meglévő fogra készített burkolat, amire vagy a fog koronai részének nagy mértékű megrongálódása/hiánya, vagy hídpótlás készítése miatt van szükség.",
                    "A híd a foghiányok rögzített pótlásának módja a szomszédos fogakra való (koronával) rögzítés által."
                ],
                image: {
                    url: "",
                    description: "A képen két lecsiszolt fog, és az azokra készített 2 koronából, valamint egy hiányzó fog pótlására szolgáló 1 hídtagból álló összesen 2+1= 3 tagú híd látható."
                }
            }
        }
    },
    {
        id: 3,
        title: "Gyökérkezelés",
        description: "A fog nem látható része az íny által takart, az állcsontban ülő foggyökér. Ennek középső részén található egy üregrendszer, melyben a fog élő részeit ellátó erek és idegek találhatóak. A gyökérkezelés ennek az üregrendszernek a kitakarítása, kitágítása, kifertőtlenítése. Ezt követi az üregrendszer gyökértömő anyaggal ellátása, ami a gyökértömés.",
        content: {
        advantages: [
            "Ezzel a kezeléssel elkerülhető a fogeltávolítás",
            "A saját gyökér megmentése gazdaságosabb, mint egy műgyökér(implantátum) beültetése",
            "A hosszú távú sikerarány magas",
            "Akár pár nap alatt befejezhető kezelés, amelyet követően a fogra rögtön készíthető pótlás.",
        ],
        useCases: [
            "Fogszuvasodás miatt befertőződött gyökércsatornájú fogak kezelés",
            "Gyenge, kevés koronai foganyaggal rendelkező fogak gyökércsapos megerősítése miatti kezelés",
            "Kedvezőtlen tengelyállású fogak esztétikai helyreállítása esetén, mikor a fogszabályozó kezelést a beteg nem vállalja"
        ],
        example: {
            paragraphs: [
                ""
            ],
            image: {
                url: "",
                description: "A képen egy három gyökércsatornájú fog röntgenképe látható. A gyökerekben a fehér területként ábrázolódik gyökértömés."
            }
        }
    }
    }
]
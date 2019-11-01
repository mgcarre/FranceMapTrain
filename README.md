# FranceMapTrain
Generation d'un fichier Json ou Geojson contenant les informations des différentes lignes ferroviaires.

# Pour générer le fichier
* Installer les dépendances (Prérequis : TypeScript installé en global)
* Télécharger les fichiers sur le portail Open Data SNCF
* Lancer le script de génération `npm run build` et `npm run start`
* Plus de détails : https://www.data.gouv.fr/fr/datasets/donnees-reseau-ferroviaire-national-concatenees/

# Extraits des fichiers générés :
Format JSON :
```json
{
    "codeLigne": 778300,
    "idGaia": "79e02ae8-e28c-11e8-92ff-01b064e0362d",
    "nomLigne": "Raccordement de Mâcon-Sud",
    "pkDebut": 0,
    "pkFin": 2.523,
    "statut": "Exploitée",
    "troncon": 1,
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [
                4.781020921385869,
                46.280075935698
            ],
            [
                4.781587234803454,
                46.27921515802329
            ],
            [
                4.782352524514249,
                46.27832693660524
            ],
            [
                4.784789565877738,
                46.27608119013421
            ],
            [
                4.785777958497852,
                46.275214882569344
            ],
            [
                4.786284509193679,
                46.27462352402572
            ],
            [
                4.786718594653107,
                46.27396037371429
            ],
            [
                4.787320853164906,
                46.27200621203959
            ],
            [
                4.787814789682325,
                46.26995651180088
            ],
            [
                4.788470763129229,
                46.26750316635411
            ],
            [
                4.79001647154954,
                46.26430635395936
            ],
            [
                4.790479099455595,
                46.263318332841344
            ],
            [
                4.790666489425266,
                46.2620044951105
            ],
            [
                4.790702265598462,
                46.26104792652777
            ],
            [
                4.790346666160826,
                46.25991184934807
            ]
        ]
    },
    "cantonnements": [
        {
            "detail": "Transmission voie-machine 300",
            "from": 0,
            "to": 0.38
        },
        {
            "detail": "Transmission voie-machine 300",
            "from": 0.38,
            "to": 2.523
        }
    ],
    "electrifications": [
        {
            "detail": "1500 volts continu",
            "from": 1.509,
            "to": 2.523
        },
        {
            "detail": "25000 volts alternatif",
            "from": 0,
            "to": 1.509
        }
    ],
    "equipeeKVB": [
        {
            "detail": "Ligne équipée de KVB",
            "from": 0,
            "to": 2.523
        }
    ],
    "ligneEquipeeRadio": {
        "detail": "GSMR (Global System for Mobile Raywails)",
        "from": 0,
        "to": 2.523
    },
    "regimeExploitation": [
        {
            "detail": "Voie banalisée",
            "from": 0,
            "to": 2.523
        }
    ],
    "typeLigne": [
        {
            "detail": "Raccordement",
            "from": 0,
            "to": 2.523
        }
    ],
    "vitesses": [
        {
            "detail": 270,
            "from": 0,
            "to": 0.666
        },
        {
            "detail": 160,
            "from": 0.666,
            "to": 2.523
        }
    ]
}
```
Format GeoJSON :
```json
{
    "id": "79e02ae8-e28c-11e8-92ff-01b064e0362d",
    "properties": {
        "codeLigne": 778300,
        "idGaia": "79e02ae8-e28c-11e8-92ff-01b064e0362d",
        "nomLigne": "Raccordement de Mâcon-Sud",
        "pkDebut": 0,
        "pkFin": 2.523,
        "statut": "Exploitée",
        "troncon": 1,
        "cantonnements": [
            {
                "detail": "Transmission voie-machine 300",
                "from": 0,
                "to": 0.38
            },
            {
                "detail": "Transmission voie-machine 300",
                "from": 0.38,
                "to": 2.523
            }
        ],
        "electrifications": [
            {
                "detail": "1500 volts continu",
                "from": 1.509,
                "to": 2.523
            },
            {
                "detail": "25000 volts alternatif",
                "from": 0,
                "to": 1.509
            }
        ],
        "equipeeKVB": [
            {
                "detail": "Ligne équipée de KVB",
                "from": 0,
                "to": 2.523
            }
        ],
        "ligneEquipeeRadio": {
            "detail": "GSMR (Global System for Mobile Raywails)",
            "from": 0,
            "to": 2.523
        },
        "regimeExploitation": [
            {
                "detail": "Voie banalisée",
                "from": 0,
                "to": 2.523
            }
        ],
        "typeLigne": [
            {
                "detail": "Raccordement",
                "from": 0,
                "to": 2.523
            }
        ],
        "vitesses": [
            {
                "detail": 270,
                "from": 0,
                "to": 0.666
            },
            {
                "detail": 160,
                "from": 0.666,
                "to": 2.523
            }
        ]
    },
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [
                4.781020921385869,
                46.280075935698
            ],
            [
                4.781587234803454,
                46.27921515802329
            ],
            [
                4.782352524514249,
                46.27832693660524
            ],
            [
                4.784789565877738,
                46.27608119013421
            ],
            [
                4.785777958497852,
                46.275214882569344
            ],
            [
                4.786284509193679,
                46.27462352402572
            ],
            [
                4.786718594653107,
                46.27396037371429
            ],
            [
                4.787320853164906,
                46.27200621203959
            ],
            [
                4.787814789682325,
                46.26995651180088
            ],
            [
                4.788470763129229,
                46.26750316635411
            ],
            [
                4.79001647154954,
                46.26430635395936
            ],
            [
                4.790479099455595,
                46.263318332841344
            ],
            [
                4.790666489425266,
                46.2620044951105
            ],
            [
                4.790702265598462,
                46.26104792652777
            ],
            [
                4.790346666160826,
                46.25991184934807
            ]
        ]
    }
}
```
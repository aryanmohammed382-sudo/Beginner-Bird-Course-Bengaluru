// Bengaluru bird course species index.
// Taxonomy is a working field-guide index; species-level media are resolved live from Wikimedia Commons.
// The regional species pool follows the Bangalore bird checklist used during course research.
const SPECIES = [
  {
    "id": 1,
    "common": "House Crow",
    "scientific": "Corvus splendens"
  },
  {
    "id": 2,
    "common": "Common Myna",
    "scientific": "Acridotheres tristis"
  },
  {
    "id": 3,
    "common": "Rose-ringed Parakeet",
    "scientific": "Psittacula krameri"
  },
  {
    "id": 4,
    "common": "Red-vented Bulbul",
    "scientific": "Pycnonotus cafer"
  },
  {
    "id": 5,
    "common": "White-cheeked Barbet",
    "scientific": "Psilopogon viridis"
  },
  {
    "id": 6,
    "common": "Asian Koel",
    "scientific": "Eudynamys scolopaceus"
  },
  {
    "id": 7,
    "common": "Oriental Magpie-Robin",
    "scientific": "Copsychus saularis"
  },
  {
    "id": 8,
    "common": "Purple-rumped Sunbird",
    "scientific": "Leptocoma zeylonica"
  },
  {
    "id": 9,
    "common": "Ashy Prinia",
    "scientific": "Prinia socialis"
  },
  {
    "id": 10,
    "common": "Indian Pond Heron",
    "scientific": "Ardeola grayii"
  },
  {
    "id": 11,
    "common": "White-throated Kingfisher",
    "scientific": "Halcyon smyrnensis"
  },
  {
    "id": 12,
    "common": "Black Kite",
    "scientific": "Milvus migrans"
  },
  {
    "id": 13,
    "common": "Brahminy Kite",
    "scientific": "Haliastur indus"
  },
  {
    "id": 14,
    "common": "Greater Coucal",
    "scientific": "Centropus sinensis"
  },
  {
    "id": 15,
    "common": "Indian Peafowl",
    "scientific": "Pavo cristatus"
  },
  {
    "id": 16,
    "common": "Spotted Dove",
    "scientific": "Spilopelia chinensis"
  },
  {
    "id": 17,
    "common": "Indian Robin",
    "scientific": "Copsychus fulicatus"
  },
  {
    "id": 18,
    "common": "Jungle Babbler",
    "scientific": "Argya striata"
  },
  {
    "id": 19,
    "common": "Large Grey Babbler",
    "scientific": "Argya malcolmi"
  },
  {
    "id": 20,
    "common": "Yellow-billed Babbler",
    "scientific": "Turdoides affinis"
  },
  {
    "id": 21,
    "common": "Common Babbler",
    "scientific": "Argya caudata"
  },
  {
    "id": 22,
    "common": "Yellow-eyed Babbler",
    "scientific": "Chrysomma sinense"
  },
  {
    "id": 23,
    "common": "Tawny-bellied Babbler",
    "scientific": "Dumetia hyperythra"
  },
  {
    "id": 24,
    "common": "Puff-throated Babbler",
    "scientific": "Pellorneum ruficeps"
  },
  {
    "id": 25,
    "common": "Indian Scimitar-Babbler",
    "scientific": "Pomatorhinus horsfieldii"
  },
  {
    "id": 26,
    "common": "Brown-headed Barbet",
    "scientific": "Psilopogon zeylanicus"
  },
  {
    "id": 27,
    "common": "Coppersmith Barbet",
    "scientific": "Psilopogon haemacephalus"
  },
  {
    "id": 28,
    "common": "Malabar Barbet",
    "scientific": "Psilopogon malabaricus"
  },
  {
    "id": 29,
    "common": "Asian Green Bee-eater",
    "scientific": "Merops orientalis"
  },
  {
    "id": 30,
    "common": "Blue-tailed Bee-eater",
    "scientific": "Merops philippinus"
  },
  {
    "id": 31,
    "common": "Chestnut-headed Bee-eater",
    "scientific": "Merops leschenaulti"
  },
  {
    "id": 32,
    "common": "European Bee-eater",
    "scientific": "Merops apiaster"
  },
  {
    "id": 33,
    "common": "Blue-bearded Bee-eater",
    "scientific": "Nyctyornis athertoni"
  },
  {
    "id": 34,
    "common": "Cinnamon Bittern",
    "scientific": "Ixobrychus cinnamomeus"
  },
  {
    "id": 35,
    "common": "Yellow Bittern",
    "scientific": "Ixobrychus sinensis"
  },
  {
    "id": 36,
    "common": "Black Bittern",
    "scientific": "Ixobrychus flavicollis"
  },
  {
    "id": 37,
    "common": "Red-whiskered Bulbul",
    "scientific": "Pycnonotus jocosus"
  },
  {
    "id": 38,
    "common": "White-browed Bulbul",
    "scientific": "Pycnonotus luteolus"
  },
  {
    "id": 39,
    "common": "Yellow-browed Bulbul",
    "scientific": "Acritillas indica"
  },
  {
    "id": 40,
    "common": "Yellow-throated Bulbul",
    "scientific": "Pycnonotus xantholaemus"
  },
  {
    "id": 41,
    "common": "Flame-throated Bulbul",
    "scientific": "Rubigula gularis"
  },
  {
    "id": 42,
    "common": "Grey-headed Bulbul",
    "scientific": "Brachypodius priocephalus"
  },
  {
    "id": 43,
    "common": "Indian Cormorant",
    "scientific": "Microcarbo fuscicollis"
  },
  {
    "id": 44,
    "common": "Great Cormorant",
    "scientific": "Phalacrocorax carbo"
  },
  {
    "id": 45,
    "common": "Little Cormorant",
    "scientific": "Microcarbo niger"
  },
  {
    "id": 46,
    "common": "Oriental Darter",
    "scientific": "Anhinga melanogaster"
  },
  {
    "id": 47,
    "common": "Indian Cuckoo",
    "scientific": "Cuculus micropterus"
  },
  {
    "id": 48,
    "common": "Common Hawk-Cuckoo",
    "scientific": "Hierococcyx varius"
  },
  {
    "id": 49,
    "common": "Large Hawk-Cuckoo",
    "scientific": "Hierococcyx sparverioides"
  },
  {
    "id": 50,
    "common": "Pied Cuckoo",
    "scientific": "Clamator jacobinus"
  },
  {
    "id": 51,
    "common": "Banded Bay Cuckoo",
    "scientific": "Cacomantis sonneratii"
  },
  {
    "id": 52,
    "common": "Grey-bellied Cuckoo",
    "scientific": "Cacomantis passerinus"
  },
  {
    "id": 53,
    "common": "Chestnut-winged Cuckoo",
    "scientific": "Clamator coromandus"
  },
  {
    "id": 54,
    "common": "Sirkeer Malkoha",
    "scientific": "Taccocua leschenaultii"
  },
  {
    "id": 55,
    "common": "Blue-faced Malkoha",
    "scientific": "Phaenicophaeus viridirostris"
  },
  {
    "id": 56,
    "common": "Lesser Coucal",
    "scientific": "Centropus bengalensis"
  },
  {
    "id": 57,
    "common": "Asian Emerald Dove",
    "scientific": "Chalcophaps indica"
  },
  {
    "id": 58,
    "common": "Laughing Dove",
    "scientific": "Spilopelia senegalensis"
  },
  {
    "id": 59,
    "common": "Eurasian Collared-Dove",
    "scientific": "Streptopelia decaocto"
  },
  {
    "id": 60,
    "common": "Oriental Turtle-Dove",
    "scientific": "Streptopelia orientalis"
  },
  {
    "id": 61,
    "common": "Rock Pigeon",
    "scientific": "Columba livia"
  },
  {
    "id": 62,
    "common": "Yellow-footed Green-Pigeon",
    "scientific": "Treron phoenicopterus"
  },
  {
    "id": 63,
    "common": "Orange-breasted Green-Pigeon",
    "scientific": "Treron bicinctus"
  },
  {
    "id": 64,
    "common": "Green Imperial-Pigeon",
    "scientific": "Ducula aenea"
  },
  {
    "id": 65,
    "common": "Mountain Imperial-Pigeon",
    "scientific": "Ducula badia"
  },
  {
    "id": 66,
    "common": "Malabar Imperial-Pigeon",
    "scientific": "Ducula cuprea"
  },
  {
    "id": 67,
    "common": "Nilgiri Wood-Pigeon",
    "scientific": "Columba elphinstonii"
  },
  {
    "id": 68,
    "common": "Red Collared-Dove",
    "scientific": "Streptopelia tranquebarica"
  },
  {
    "id": 69,
    "common": "Northern Pintail",
    "scientific": "Anas acuta"
  },
  {
    "id": 70,
    "common": "Eurasian Wigeon",
    "scientific": "Mareca penelope"
  },
  {
    "id": 71,
    "common": "Northern Shoveler",
    "scientific": "Spatula clypeata"
  },
  {
    "id": 72,
    "common": "Bar-headed Goose",
    "scientific": "Anser indicus"
  },
  {
    "id": 73,
    "common": "Garganey",
    "scientific": "Spatula querquedula"
  },
  {
    "id": 74,
    "common": "Cotton Pygmy-Goose",
    "scientific": "Nettapus coromandelianus"
  },
  {
    "id": 75,
    "common": "Little Grebe",
    "scientific": "Tachybaptus ruficollis"
  },
  {
    "id": 76,
    "common": "Common Pochard",
    "scientific": "Aythya ferina"
  },
  {
    "id": 77,
    "common": "Common Teal",
    "scientific": "Anas crecca"
  },
  {
    "id": 78,
    "common": "Indian Spot-billed Duck",
    "scientific": "Anas poecilorhyncha"
  },
  {
    "id": 79,
    "common": "Gadwall",
    "scientific": "Mareca strepera"
  },
  {
    "id": 80,
    "common": "Lesser Whistling-Duck",
    "scientific": "Dendrocygna javanica"
  },
  {
    "id": 81,
    "common": "Spot-billed Pelican",
    "scientific": "Pelecanus philippensis"
  },
  {
    "id": 82,
    "common": "Great Egret",
    "scientific": "Ardea alba"
  },
  {
    "id": 83,
    "common": "Intermediate Egret",
    "scientific": "Ardea intermedia"
  },
  {
    "id": 84,
    "common": "Little Egret",
    "scientific": "Egretta garzetta"
  },
  {
    "id": 85,
    "common": "Cattle Egret",
    "scientific": "Bubulcus ibis"
  },
  {
    "id": 86,
    "common": "Grey Heron",
    "scientific": "Ardea cinerea"
  },
  {
    "id": 87,
    "common": "Purple Heron",
    "scientific": "Ardea purpurea"
  },
  {
    "id": 88,
    "common": "Striated Heron",
    "scientific": "Butorides striata"
  },
  {
    "id": 89,
    "common": "Black-crowned Night Heron",
    "scientific": "Nycticorax nycticorax"
  },
  {
    "id": 90,
    "common": "Red-naped Ibis",
    "scientific": "Pseudibis papillosa"
  },
  {
    "id": 91,
    "common": "Black-headed Ibis",
    "scientific": "Threskiornis melanocephalus"
  },
  {
    "id": 92,
    "common": "Glossy Ibis",
    "scientific": "Plegadis falcinellus"
  },
  {
    "id": 93,
    "common": "Eurasian Spoonbill",
    "scientific": "Platalea leucorodia"
  },
  {
    "id": 94,
    "common": "Taiga Flycatcher",
    "scientific": "Ficedula albicilla"
  },
  {
    "id": 95,
    "common": "Red-breasted Flycatcher",
    "scientific": "Ficedula parva"
  },
  {
    "id": 96,
    "common": "Rusty-tailed Flycatcher",
    "scientific": "Ficedula ruficauda"
  },
  {
    "id": 97,
    "common": "Black-and-orange Flycatcher",
    "scientific": "Ficedula nigrorufa"
  },
  {
    "id": 98,
    "common": "Nilgiri Flycatcher",
    "scientific": "Eumyias albicaudatus"
  },
  {
    "id": 99,
    "common": "Grey-headed Canary-Flycatcher",
    "scientific": "Culicicapa ceylonensis"
  },
  {
    "id": 100,
    "common": "Verditer Flycatcher",
    "scientific": "Eumyias thalassinus"
  },
  {
    "id": 101,
    "common": "White-bellied Blue Flycatcher",
    "scientific": "Cyornis pallipes"
  },
  {
    "id": 102,
    "common": "Brown-breasted Flycatcher",
    "scientific": "Muscicapa muttui"
  },
  {
    "id": 103,
    "common": "Asian Brown Flycatcher",
    "scientific": "Muscicapa dauurica"
  },
  {
    "id": 104,
    "common": "Black-naped Monarch",
    "scientific": "Hypothymis azurea"
  },
  {
    "id": 105,
    "common": "Spot-breasted Fantail",
    "scientific": "Rhipidura albogularis"
  },
  {
    "id": 106,
    "common": "Tickell's Blue Flycatcher",
    "scientific": "Cyornis tickelliae"
  },
  {
    "id": 107,
    "common": "Indian Paradise-Flycatcher",
    "scientific": "Terpsiphone paradisi"
  },
  {
    "id": 108,
    "common": "Common Kingfisher",
    "scientific": "Alcedo atthis"
  },
  {
    "id": 109,
    "common": "Stork-billed Kingfisher",
    "scientific": "Pelargopsis capensis"
  },
  {
    "id": 110,
    "common": "Pied Kingfisher",
    "scientific": "Ceryle rudis"
  },
  {
    "id": 111,
    "common": "Black-capped Kingfisher",
    "scientific": "Todiramphus pileatus"
  },
  {
    "id": 112,
    "common": "Blue-eared Kingfisher",
    "scientific": "Alcedo meninting"
  },
  {
    "id": 113,
    "common": "Oriental Dwarf Kingfisher",
    "scientific": "Ceyx erithacus"
  },
  {
    "id": 114,
    "common": "Jerdon's Bushlark",
    "scientific": "Mirafra affinis"
  },
  {
    "id": 115,
    "common": "Malabar Lark",
    "scientific": "Galerida malabarica"
  },
  {
    "id": 116,
    "common": "Oriental Skylark",
    "scientific": "Alauda gulgula"
  },
  {
    "id": 117,
    "common": "Indian Bushlark",
    "scientific": "Mirafra erythroptera"
  },
  {
    "id": 118,
    "common": "Singing Bushlark",
    "scientific": "Mirafra cantillans"
  },
  {
    "id": 119,
    "common": "Ashy-crowned Sparrow-Lark",
    "scientific": "Eremopterix griseus"
  },
  {
    "id": 120,
    "common": "Tawny Lark",
    "scientific": "Galerida deva"
  },
  {
    "id": 121,
    "common": "White-bellied Minivet",
    "scientific": "Pericrocotus erythropygius"
  },
  {
    "id": 122,
    "common": "Brown-rumped Minivet",
    "scientific": "Pericrocotus cantonensis"
  },
  {
    "id": 123,
    "common": "Ashy Minivet",
    "scientific": "Pericrocotus divaricatus"
  },
  {
    "id": 124,
    "common": "Orange Minivet",
    "scientific": "Pericrocotus flammeus"
  },
  {
    "id": 125,
    "common": "Small Minivet",
    "scientific": "Pericrocotus cinnamomeus"
  },
  {
    "id": 126,
    "common": "Rosy Starling",
    "scientific": "Pastor roseus"
  },
  {
    "id": 127,
    "common": "European Starling",
    "scientific": "Sturnus vulgaris"
  },
  {
    "id": 128,
    "common": "Malabar Starling",
    "scientific": "Sturnia blythii"
  },
  {
    "id": 129,
    "common": "Chestnut-tailed Starling",
    "scientific": "Sturnia malabarica"
  },
  {
    "id": 130,
    "common": "Common Hill Myna",
    "scientific": "Gracula religiosa"
  },
  {
    "id": 131,
    "common": "Jungle Myna",
    "scientific": "Acridotheres fuscus"
  },
  {
    "id": 132,
    "common": "Brahminy Starling",
    "scientific": "Sturnia pagodarum"
  },
  {
    "id": 133,
    "common": "Southern Hill Myna",
    "scientific": "Gracula indica"
  },
  {
    "id": 134,
    "common": "Savanna Nightjar",
    "scientific": "Caprimulgus affinis"
  },
  {
    "id": 135,
    "common": "Jungle Nightjar",
    "scientific": "Caprimulgus indicus"
  },
  {
    "id": 136,
    "common": "Jerdon's Nightjar",
    "scientific": "Caprimulgus atripennis"
  },
  {
    "id": 137,
    "common": "Indian Nightjar",
    "scientific": "Caprimulgus asiaticus"
  },
  {
    "id": 138,
    "common": "Sri Lanka Frogmouth",
    "scientific": "Batrachostomus moniliger"
  },
  {
    "id": 139,
    "common": "Black-hooded Oriole",
    "scientific": "Oriolus xanthornus"
  },
  {
    "id": 140,
    "common": "Indian Golden Oriole",
    "scientific": "Oriolus kundoo"
  },
  {
    "id": 141,
    "common": "Eurasian Golden Oriole",
    "scientific": "Oriolus oriolus"
  },
  {
    "id": 142,
    "common": "Black-naped Oriole",
    "scientific": "Oriolus chinensis"
  },
  {
    "id": 143,
    "common": "Indian Scops-Owl",
    "scientific": "Otus bakkamoena"
  },
  {
    "id": 144,
    "common": "Oriental Scops-Owl",
    "scientific": "Otus sunia"
  },
  {
    "id": 145,
    "common": "Mottled Wood-Owl",
    "scientific": "Strix ocellata"
  },
  {
    "id": 146,
    "common": "Asian Barn Owl",
    "scientific": "Tyto javanica"
  },
  {
    "id": 147,
    "common": "Jungle Owlet",
    "scientific": "Glaucidium radiatum"
  },
  {
    "id": 148,
    "common": "Spotted Owlet",
    "scientific": "Athene brama"
  },
  {
    "id": 149,
    "common": "Brown Fish-Owl",
    "scientific": "Ketupa zeylonensis"
  },
  {
    "id": 150,
    "common": "Brown Wood-Owl",
    "scientific": "Strix leptogrammica"
  },
  {
    "id": 151,
    "common": "Rock Eagle-Owl",
    "scientific": "Bubo bengalensis"
  },
  {
    "id": 152,
    "common": "Spot-bellied Eagle-Owl",
    "scientific": "Ketupa nipalensis"
  },
  {
    "id": 153,
    "common": "Grey Junglefowl",
    "scientific": "Gallus sonneratii"
  },
  {
    "id": 154,
    "common": "Red Spurfowl",
    "scientific": "Galloperdix spadicea"
  },
  {
    "id": 155,
    "common": "Alexandrine Parakeet",
    "scientific": "Psittacula eupatria"
  },
  {
    "id": 156,
    "common": "Plum-headed Parakeet",
    "scientific": "Psittacula cyanocephala"
  },
  {
    "id": 157,
    "common": "Malabar Parakeet",
    "scientific": "Psittacula columboides"
  },
  {
    "id": 158,
    "common": "Vernal Hanging-Parrot",
    "scientific": "Loriculus vernalis"
  },
  {
    "id": 159,
    "common": "Tawny Pipit",
    "scientific": "Anthus campestris"
  },
  {
    "id": 160,
    "common": "Olive-backed Pipit",
    "scientific": "Anthus hodgsoni"
  },
  {
    "id": 161,
    "common": "Tree Pipit",
    "scientific": "Anthus trivialis"
  },
  {
    "id": 162,
    "common": "Nilgiri Pipit",
    "scientific": "Anthus nilghiriensis"
  },
  {
    "id": 163,
    "common": "Paddyfield Pipit",
    "scientific": "Anthus rufulus"
  },
  {
    "id": 164,
    "common": "Richard's Pipit",
    "scientific": "Anthus richardi"
  },
  {
    "id": 165,
    "common": "Blyth's Pipit",
    "scientific": "Anthus godlewskii"
  },
  {
    "id": 166,
    "common": "Blue Rock-Thrush",
    "scientific": "Monticola solitarius"
  },
  {
    "id": 167,
    "common": "Malabar Whistling-Thrush",
    "scientific": "Myophonus horsfieldii"
  },
  {
    "id": 168,
    "common": "Indian Blue Robin",
    "scientific": "Larvivora brunnea"
  },
  {
    "id": 169,
    "common": "Nilgiri Sholakili",
    "scientific": "Sholicola major"
  },
  {
    "id": 170,
    "common": "Common Stonechat",
    "scientific": "Saxicola torquatus"
  },
  {
    "id": 171,
    "common": "White-rumped Shama",
    "scientific": "Kittacincla malabarica"
  },
  {
    "id": 172,
    "common": "Pied Bushchat",
    "scientific": "Saxicola caprata"
  },
  {
    "id": 173,
    "common": "Blue-capped Rock-Thrush",
    "scientific": "Monticola cinclorhyncha"
  },
  {
    "id": 174,
    "common": "Orange-headed Thrush",
    "scientific": "Geokichla citrina"
  },
  {
    "id": 175,
    "common": "Pied Thrush",
    "scientific": "Geokichla wardii"
  },
  {
    "id": 176,
    "common": "Indian Blackbird",
    "scientific": "Turdus simillimus"
  },
  {
    "id": 177,
    "common": "Indian Thick-knee",
    "scientific": "Burhinus indicus"
  },
  {
    "id": 178,
    "common": "Pin-tailed Snipe",
    "scientific": "Gallinago stenura"
  },
  {
    "id": 179,
    "common": "Common Snipe",
    "scientific": "Gallinago gallinago"
  },
  {
    "id": 180,
    "common": "Common Greenshank",
    "scientific": "Tringa nebularia"
  },
  {
    "id": 181,
    "common": "Wood Sandpiper",
    "scientific": "Tringa glareola"
  },
  {
    "id": 182,
    "common": "Green Sandpiper",
    "scientific": "Tringa ochropus"
  },
  {
    "id": 183,
    "common": "Little Stint",
    "scientific": "Calidris minuta"
  },
  {
    "id": 184,
    "common": "Temminck's Stint",
    "scientific": "Calidris temminckii"
  },
  {
    "id": 185,
    "common": "Little Ringed Plover",
    "scientific": "Charadrius dubius"
  },
  {
    "id": 186,
    "common": "Black-winged Stilt",
    "scientific": "Himantopus himantopus"
  },
  {
    "id": 187,
    "common": "Pied Avocet",
    "scientific": "Recurvirostra avosetta"
  },
  {
    "id": 188,
    "common": "Black-tailed Godwit",
    "scientific": "Limosa limosa"
  },
  {
    "id": 189,
    "common": "Bronze-winged Jacana",
    "scientific": "Metopidius indicus"
  },
  {
    "id": 190,
    "common": "Pheasant-tailed Jacana",
    "scientific": "Hydrophasianus chirurgus"
  },
  {
    "id": 191,
    "common": "Common Sandpiper",
    "scientific": "Actitis hypoleucos"
  },
  {
    "id": 192,
    "common": "Eurasian Curlew",
    "scientific": "Numenius arquata"
  },
  {
    "id": 193,
    "common": "Red-wattled Lapwing",
    "scientific": "Vanellus indicus"
  },
  {
    "id": 194,
    "common": "Yellow-wattled Lapwing",
    "scientific": "Vanellus malabaricus"
  },
  {
    "id": 195,
    "common": "River Tern",
    "scientific": "Sterna aurantia"
  },
  {
    "id": 196,
    "common": "Gull-billed Tern",
    "scientific": "Gelochelidon nilotica"
  },
  {
    "id": 197,
    "common": "Whiskered Tern",
    "scientific": "Chlidonias hybrida"
  },
  {
    "id": 198,
    "common": "Caspian Tern",
    "scientific": "Hydroprogne caspia"
  },
  {
    "id": 199,
    "common": "Indian Courser",
    "scientific": "Cursorius coromandelicus"
  },
  {
    "id": 200,
    "common": "Greater Painted-Snipe",
    "scientific": "Rostratula benghalensis"
  }
];
export default SPECIES;

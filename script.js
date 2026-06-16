// ===== US CITIES WITH COORDINATES (500+) =====
const US_CITIES = [
    // ── FLORIDA (comprehensive) ──
    { city: "Miami", state: "FL", lat: 25.7617, lon: -80.1918 },
    { city: "Miami Beach", state: "FL", lat: 25.7907, lon: -80.1300 },
    { city: "Miami Gardens", state: "FL", lat: 25.9420, lon: -80.2456 },
    { city: "Jacksonville", state: "FL", lat: 30.3322, lon: -81.6557 },
    { city: "Tampa", state: "FL", lat: 27.9506, lon: -82.4572 },
    { city: "Orlando", state: "FL", lat: 28.5383, lon: -81.3792 },
    { city: "St. Petersburg", state: "FL", lat: 27.7731, lon: -82.6400 },
    { city: "Hialeah", state: "FL", lat: 25.8576, lon: -80.2781 },
    { city: "Tallahassee", state: "FL", lat: 30.4383, lon: -84.2807 },
    { city: "Fort Lauderdale", state: "FL", lat: 26.1224, lon: -80.1373 },
    { city: "Cape Coral", state: "FL", lat: 26.5629, lon: -81.9495 },
    { city: "Pembroke Pines", state: "FL", lat: 26.0070, lon: -80.2962 },
    { city: "Hollywood", state: "FL", lat: 26.0112, lon: -80.1495 },
    { city: "Miramar", state: "FL", lat: 25.9871, lon: -80.2326 },
    { city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { city: "Coral Springs", state: "FL", lat: 26.2712, lon: -80.2706 },
    { city: "Clearwater", state: "FL", lat: 27.9659, lon: -82.8001 },
    { city: "Palm Bay", state: "FL", lat: 28.0345, lon: -80.5887 },
    { city: "Pompano Beach", state: "FL", lat: 26.2379, lon: -80.1248 },
    { city: "West Palm Beach", state: "FL", lat: 26.7153, lon: -80.0534 },
    { city: "Fort Myers", state: "FL", lat: 26.6406, lon: -81.8723 },
    { city: "Lakeland", state: "FL", lat: 28.0395, lon: -81.9498 },
    { city: "Kissimmee", state: "FL", lat: 28.2920, lon: -81.4076 },
    { city: "Ocala", state: "FL", lat: 29.1872, lon: -82.1401 },
    { city: "Port St. Lucie", state: "FL", lat: 27.2939, lon: -80.3503 },
    { city: "Daytona Beach", state: "FL", lat: 29.2108, lon: -81.0228 },
    { city: "Doral", state: "FL", lat: 25.8196, lon: -80.3511 },
    { city: "Deltona", state: "FL", lat: 28.9005, lon: -81.2637 },
    { city: "Homestead", state: "FL", lat: 25.4687, lon: -80.4776 },
    { city: "Pensacola", state: "FL", lat: 30.4213, lon: -87.2169 },
    { city: "Panama City Beach", state: "FL", lat: 30.1766, lon: -85.8055 },
    { city: "Panama City", state: "FL", lat: 30.1588, lon: -85.6602 },
    { city: "Destin", state: "FL", lat: 30.3935, lon: -86.4958 },
    { city: "Fort Walton Beach", state: "FL", lat: 30.4082, lon: -86.6197 },
    { city: "Niceville", state: "FL", lat: 30.5160, lon: -86.4769 },
    { city: "Navarre", state: "FL", lat: 30.4013, lon: -86.8629 },
    { city: "Gulf Breeze", state: "FL", lat: 30.3574, lon: -87.1634 },
    { city: "Crestview", state: "FL", lat: 30.7460, lon: -86.5710 },
    { city: "Milton", state: "FL", lat: 30.6335, lon: -87.0391 },
    { city: "Pace", state: "FL", lat: 30.5977, lon: -87.1612 },
    { city: "Naples", state: "FL", lat: 26.1420, lon: -81.7948 },
    { city: "Bonita Springs", state: "FL", lat: 26.3398, lon: -81.7787 },
    { city: "Marco Island", state: "FL", lat: 25.9412, lon: -81.7187 },
    { city: "Estero", state: "FL", lat: 26.4387, lon: -81.8067 },
    { city: "Sarasota", state: "FL", lat: 27.3364, lon: -82.5307 },
    { city: "Bradenton", state: "FL", lat: 27.4989, lon: -82.5748 },
    { city: "Venice", state: "FL", lat: 27.0998, lon: -82.4543 },
    { city: "Punta Gorda", state: "FL", lat: 26.9298, lon: -82.0451 },
    { city: "Port Charlotte", state: "FL", lat: 26.9762, lon: -82.0908 },
    { city: "North Port", state: "FL", lat: 27.0442, lon: -82.2359 },
    { city: "Englewood", state: "FL", lat: 26.9623, lon: -82.3526 },
    { city: "Boca Raton", state: "FL", lat: 26.3683, lon: -80.1289 },
    { city: "Delray Beach", state: "FL", lat: 26.4615, lon: -80.0728 },
    { city: "Boynton Beach", state: "FL", lat: 26.5317, lon: -80.0906 },
    { city: "Lake Worth Beach", state: "FL", lat: 26.6151, lon: -80.0728 },
    { city: "Palm Beach", state: "FL", lat: 26.7056, lon: -80.0364 },
    { city: "Palm Beach Gardens", state: "FL", lat: 26.8237, lon: -80.1339 },
    { city: "Jupiter", state: "FL", lat: 26.9342, lon: -80.0942 },
    { city: "Stuart", state: "FL", lat: 27.1975, lon: -80.2522 },
    { city: "Fort Pierce", state: "FL", lat: 27.4467, lon: -80.3256 },
    { city: "Vero Beach", state: "FL", lat: 27.6386, lon: -80.3973 },
    { city: "Sebastian", state: "FL", lat: 27.8161, lon: -80.4773 },
    { city: "Melbourne", state: "FL", lat: 28.0836, lon: -80.6081 },
    { city: "Titusville", state: "FL", lat: 28.6122, lon: -80.8075 },
    { city: "Cocoa Beach", state: "FL", lat: 28.3200, lon: -80.6081 },
    { city: "Cocoa", state: "FL", lat: 28.3861, lon: -80.7420 },
    { city: "New Smyrna Beach", state: "FL", lat: 29.0258, lon: -80.9270 },
    { city: "Ormond Beach", state: "FL", lat: 29.2861, lon: -81.0559 },
    { city: "Palm Coast", state: "FL", lat: 29.5847, lon: -81.2078 },
    { city: "St. Augustine", state: "FL", lat: 29.8947, lon: -81.3145 },
    { city: "Ponte Vedra Beach", state: "FL", lat: 30.2394, lon: -81.3853 },
    { city: "Fernandina Beach", state: "FL", lat: 30.6696, lon: -81.4626 },
    { city: "Orange Park", state: "FL", lat: 30.1657, lon: -81.7065 },
    { city: "Green Cove Springs", state: "FL", lat: 29.9919, lon: -81.6790 },
    { city: "Lake City", state: "FL", lat: 30.1897, lon: -82.6390 },
    { city: "Live Oak", state: "FL", lat: 30.2949, lon: -82.9840 },
    { city: "Palatka", state: "FL", lat: 29.6486, lon: -81.6376 },
    { city: "DeLand", state: "FL", lat: 29.0286, lon: -81.3029 },
    { city: "Sanford", state: "FL", lat: 28.8006, lon: -81.2731 },
    { city: "Winter Park", state: "FL", lat: 28.5997, lon: -81.3392 },
    { city: "Altamonte Springs", state: "FL", lat: 28.6611, lon: -81.3656 },
    { city: "Apopka", state: "FL", lat: 28.6936, lon: -81.5322 },
    { city: "Oviedo", state: "FL", lat: 28.6700, lon: -81.2084 },
    { city: "Lake Mary", state: "FL", lat: 28.7581, lon: -81.3179 },
    { city: "Longwood", state: "FL", lat: 28.7031, lon: -81.3484 },
    { city: "Casselberry", state: "FL", lat: 28.6636, lon: -81.3273 },
    { city: "Clermont", state: "FL", lat: 28.5494, lon: -81.7729 },
    { city: "Leesburg", state: "FL", lat: 28.8147, lon: -81.8782 },
    { city: "The Villages", state: "FL", lat: 28.9005, lon: -81.9779 },
    { city: "Mount Dora", state: "FL", lat: 28.8022, lon: -81.6440 },
    { city: "Tavares", state: "FL", lat: 28.8011, lon: -81.7248 },
    { city: "Eustis", state: "FL", lat: 28.8531, lon: -81.6851 },
    { city: "Crystal River", state: "FL", lat: 28.9028, lon: -82.5929 },
    { city: "Inverness", state: "FL", lat: 28.8358, lon: -82.3340 },
    { city: "Spring Hill", state: "FL", lat: 28.4737, lon: -82.5238 },
    { city: "Brooksville", state: "FL", lat: 28.5553, lon: -82.3887 },
    { city: "New Port Richey", state: "FL", lat: 28.2442, lon: -82.7193 },
    { city: "Dade City", state: "FL", lat: 28.3644, lon: -82.1957 },
    { city: "Zephyrhills", state: "FL", lat: 28.2342, lon: -82.1807 },
    { city: "Plant City", state: "FL", lat: 27.9978, lon: -82.1148 },
    { city: "Winter Haven", state: "FL", lat: 28.0222, lon: -81.7329 },
    { city: "Haines City", state: "FL", lat: 28.1136, lon: -81.6215 },
    { city: "Bartow", state: "FL", lat: 27.8978, lon: -81.8434 },
    { city: "Lake Wales", state: "FL", lat: 27.9011, lon: -81.5887 },
    { city: "Sebring", state: "FL", lat: 27.4956, lon: -81.4409 },
    { city: "Avon Park", state: "FL", lat: 27.5959, lon: -81.5059 },
    { city: "Wauchula", state: "FL", lat: 27.5467, lon: -81.8143 },
    { city: "Arcadia", state: "FL", lat: 27.2153, lon: -81.8568 },
    { city: "Okeechobee", state: "FL", lat: 27.2406, lon: -80.8298 },
    { city: "Belle Glade", state: "FL", lat: 26.6901, lon: -80.6687 },
    { city: "Immokalee", state: "FL", lat: 26.4187, lon: -81.4179 },
    { city: "Sunrise", state: "FL", lat: 26.1667, lon: -80.2996 },
    { city: "Plantation", state: "FL", lat: 26.1276, lon: -80.2331 },
    { city: "Davie", state: "FL", lat: 26.0626, lon: -80.2331 },
    { city: "Deerfield Beach", state: "FL", lat: 26.3184, lon: -80.0998 },
    { city: "Margate", state: "FL", lat: 26.2473, lon: -80.2067 },
    { city: "Lauderhill", state: "FL", lat: 26.1659, lon: -80.2120 },
    { city: "Tamarac", state: "FL", lat: 26.2128, lon: -80.2498 },
    { city: "North Miami", state: "FL", lat: 25.8890, lon: -80.1868 },
    { city: "North Miami Beach", state: "FL", lat: 25.9332, lon: -80.1623 },
    { city: "Aventura", state: "FL", lat: 25.9565, lon: -80.1393 },
    { city: "Coral Gables", state: "FL", lat: 25.7215, lon: -80.2684 },
    { city: "Cutler Bay", state: "FL", lat: 25.5780, lon: -80.3440 },
    { city: "Palmetto Bay", state: "FL", lat: 25.6237, lon: -80.3318 },
    { city: "Key Largo", state: "FL", lat: 25.0865, lon: -80.4473 },
    { city: "Islamorada", state: "FL", lat: 24.9740, lon: -80.6370 },
    { city: "Marathon", state: "FL", lat: 24.7215, lon: -81.0851 },
    { city: "Key West", state: "FL", lat: 24.5551, lon: -81.7800 },
    { city: "Quincy", state: "FL", lat: 30.5877, lon: -84.5824 },
    { city: "Marianna", state: "FL", lat: 30.7744, lon: -85.2285 },
    { city: "Apalachicola", state: "FL", lat: 29.7255, lon: -84.9927 },
    { city: "Perry", state: "FL", lat: 30.1169, lon: -83.5824 },
    { city: "Madison", state: "FL", lat: 30.4682, lon: -83.4163 },
    { city: "Chipley", state: "FL", lat: 30.7838, lon: -85.5363 },
    { city: "Monticello", state: "FL", lat: 30.5449, lon: -83.8710 },
    { city: "Starke", state: "FL", lat: 29.9441, lon: -82.1096 },
    // ── GEORGIA ──
    { city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { city: "Augusta", state: "GA", lat: 33.4735, lon: -82.0105 },
    { city: "Columbus", state: "GA", lat: 32.4610, lon: -84.9877 },
    { city: "Macon", state: "GA", lat: 32.8407, lon: -83.6324 },
    { city: "Savannah", state: "GA", lat: 32.0809, lon: -81.0912 },
    { city: "Athens", state: "GA", lat: 33.9519, lon: -83.3576 },
    { city: "Sandy Springs", state: "GA", lat: 33.9304, lon: -84.3733 },
    { city: "Roswell", state: "GA", lat: 34.0232, lon: -84.3616 },
    { city: "Albany", state: "GA", lat: 31.5785, lon: -84.1557 },
    { city: "Valdosta", state: "GA", lat: 30.8327, lon: -83.2785 },
    { city: "Marietta", state: "GA", lat: 33.9526, lon: -84.5499 },
    { city: "Warner Robins", state: "GA", lat: 32.6130, lon: -83.5996 },
    { city: "Brunswick", state: "GA", lat: 31.1499, lon: -81.4915 },
    { city: "Gainesville", state: "GA", lat: 34.2979, lon: -83.8241 },
    { city: "Dalton", state: "GA", lat: 34.7698, lon: -84.9702 },
    { city: "Statesboro", state: "GA", lat: 32.4488, lon: -81.7832 },
    // ── ALABAMA ──
    { city: "Birmingham", state: "AL", lat: 33.5186, lon: -86.8104 },
    { city: "Montgomery", state: "AL", lat: 32.3669, lon: -86.3006 },
    { city: "Huntsville", state: "AL", lat: 34.7304, lon: -86.5861 },
    { city: "Mobile", state: "AL", lat: 30.6954, lon: -88.0399 },
    { city: "Tuscaloosa", state: "AL", lat: 33.2098, lon: -87.5692 },
    { city: "Hoover", state: "AL", lat: 33.4054, lon: -86.8113 },
    { city: "Dothan", state: "AL", lat: 31.2232, lon: -85.3905 },
    { city: "Auburn", state: "AL", lat: 32.6099, lon: -85.4808 },
    { city: "Decatur", state: "AL", lat: 34.6059, lon: -86.9833 },
    { city: "Gadsden", state: "AL", lat: 33.9984, lon: -86.0070 },
    { city: "Florence", state: "AL", lat: 34.7998, lon: -87.6773 },
    { city: "Gulf Shores", state: "AL", lat: 30.2460, lon: -87.7006 },
    { city: "Orange Beach", state: "AL", lat: 30.2952, lon: -87.5742 },
    { city: "Foley", state: "AL", lat: 30.4063, lon: -87.6836 },
    { city: "Daphne", state: "AL", lat: 30.6035, lon: -87.9036 },
    { city: "Fairhope", state: "AL", lat: 30.5227, lon: -87.9036 },
    // ── MISSISSIPPI ──
    { city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { city: "Gulfport", state: "MS", lat: 30.3674, lon: -89.0928 },
    { city: "Biloxi", state: "MS", lat: 30.3960, lon: -88.8853 },
    { city: "Hattiesburg", state: "MS", lat: 31.3271, lon: -89.2903 },
    { city: "Southaven", state: "MS", lat: 34.9887, lon: -90.0126 },
    { city: "Pascagoula", state: "MS", lat: 30.3657, lon: -88.5561 },
    { city: "Ocean Springs", state: "MS", lat: 30.4110, lon: -88.8267 },
    { city: "Meridian", state: "MS", lat: 32.3643, lon: -88.7037 },
    { city: "Tupelo", state: "MS", lat: 34.2576, lon: -88.7034 },
    // ── LOUISIANA ──
    { city: "New Orleans", state: "LA", lat: 29.9511, lon: -90.0715 },
    { city: "Baton Rouge", state: "LA", lat: 30.4515, lon: -91.1871 },
    { city: "Shreveport", state: "LA", lat: 32.5252, lon: -93.7502 },
    { city: "Lafayette", state: "LA", lat: 30.2241, lon: -92.0198 },
    { city: "Lake Charles", state: "LA", lat: 30.2266, lon: -93.2174 },
    { city: "Kenner", state: "LA", lat: 29.9941, lon: -90.2417 },
    { city: "Monroe", state: "LA", lat: 32.5093, lon: -92.1193 },
    { city: "Metairie", state: "LA", lat: 29.9824, lon: -90.1788 },
    { city: "Slidell", state: "LA", lat: 30.2752, lon: -89.7812 },
    // ── TEXAS ──
    { city: "Houston", state: "TX", lat: 29.7604, lon: -95.3698 },
    { city: "San Antonio", state: "TX", lat: 29.4241, lon: -98.4936 },
    { city: "Dallas", state: "TX", lat: 32.7767, lon: -96.7970 },
    { city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { city: "Fort Worth", state: "TX", lat: 32.7555, lon: -97.3308 },
    { city: "El Paso", state: "TX", lat: 31.7619, lon: -106.4850 },
    { city: "Arlington", state: "TX", lat: 32.7357, lon: -97.1081 },
    { city: "Corpus Christi", state: "TX", lat: 27.8006, lon: -97.3964 },
    { city: "Plano", state: "TX", lat: 33.0198, lon: -96.6989 },
    { city: "Laredo", state: "TX", lat: 27.5064, lon: -99.5075 },
    { city: "Lubbock", state: "TX", lat: 33.5779, lon: -101.8552 },
    { city: "Garland", state: "TX", lat: 32.9126, lon: -96.6389 },
    { city: "Irving", state: "TX", lat: 32.8140, lon: -96.9489 },
    { city: "Amarillo", state: "TX", lat: 35.2220, lon: -101.8313 },
    { city: "Grand Prairie", state: "TX", lat: 32.7460, lon: -96.9978 },
    { city: "Brownsville", state: "TX", lat: 25.9017, lon: -97.4975 },
    { city: "McKinney", state: "TX", lat: 33.1972, lon: -96.6397 },
    { city: "Frisco", state: "TX", lat: 33.1507, lon: -96.8236 },
    { city: "Pasadena", state: "TX", lat: 29.6911, lon: -95.2091 },
    { city: "Killeen", state: "TX", lat: 31.1171, lon: -97.7278 },
    { city: "Waco", state: "TX", lat: 31.5493, lon: -97.1467 },
    { city: "McAllen", state: "TX", lat: 26.2034, lon: -98.2300 },
    { city: "Denton", state: "TX", lat: 33.2148, lon: -97.1331 },
    { city: "Midland", state: "TX", lat: 31.9973, lon: -102.0779 },
    { city: "Odessa", state: "TX", lat: 31.8457, lon: -102.3676 },
    { city: "Abilene", state: "TX", lat: 32.4487, lon: -99.7331 },
    { city: "Beaumont", state: "TX", lat: 30.0860, lon: -94.1018 },
    { city: "San Marcos", state: "TX", lat: 29.8827, lon: -97.9414 },
    { city: "Round Rock", state: "TX", lat: 30.5083, lon: -97.6789 },
    { city: "Cedar Park", state: "TX", lat: 30.5052, lon: -97.8203 },
    { city: "Carrollton", state: "TX", lat: 32.9537, lon: -96.8899 },
    { city: "Mesquite", state: "TX", lat: 32.7668, lon: -96.5992 },
    { city: "Tyler", state: "TX", lat: 32.3513, lon: -95.3011 },
    { city: "League City", state: "TX", lat: 29.5075, lon: -95.0949 },
    { city: "Pearland", state: "TX", lat: 29.5636, lon: -95.2860 },
    { city: "Sugar Land", state: "TX", lat: 29.6197, lon: -95.6349 },
    { city: "College Station", state: "TX", lat: 30.6280, lon: -96.3344 },
    { city: "Mission", state: "TX", lat: 26.2159, lon: -98.3252 },
    { city: "Pharr", state: "TX", lat: 26.1948, lon: -98.1836 },
    { city: "Harlingen", state: "TX", lat: 26.1906, lon: -97.6961 },
    { city: "Victoria", state: "TX", lat: 28.8053, lon: -97.0036 },
    { city: "Longview", state: "TX", lat: 32.5007, lon: -94.7405 },
    { city: "Conroe", state: "TX", lat: 30.3119, lon: -95.4561 },
    { city: "The Woodlands", state: "TX", lat: 30.1658, lon: -95.4613 },
    { city: "New Braunfels", state: "TX", lat: 29.7030, lon: -98.1245 },
    { city: "Galveston", state: "TX", lat: 29.3013, lon: -94.7977 },
    { city: "Baytown", state: "TX", lat: 29.7355, lon: -94.9774 },
    { city: "Port Arthur", state: "TX", lat: 29.8849, lon: -93.9399 },
    // ── TENNESSEE ──
    { city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { city: "Memphis", state: "TN", lat: 35.1495, lon: -90.0490 },
    { city: "Knoxville", state: "TN", lat: 35.9606, lon: -83.9207 },
    { city: "Chattanooga", state: "TN", lat: 35.0456, lon: -85.3097 },
    { city: "Clarksville", state: "TN", lat: 36.5298, lon: -87.3595 },
    { city: "Murfreesboro", state: "TN", lat: 35.8456, lon: -86.3903 },
    { city: "Jackson", state: "TN", lat: 35.6145, lon: -88.8139 },
    { city: "Johnson City", state: "TN", lat: 36.3134, lon: -82.3535 },
    { city: "Kingsport", state: "TN", lat: 36.5484, lon: -82.5618 },
    // ── NORTH CAROLINA ──
    { city: "Charlotte", state: "NC", lat: 35.2271, lon: -80.8431 },
    { city: "Raleigh", state: "NC", lat: 35.7796, lon: -78.6382 },
    { city: "Greensboro", state: "NC", lat: 36.0726, lon: -79.7920 },
    { city: "Durham", state: "NC", lat: 35.9940, lon: -78.8986 },
    { city: "Winston-Salem", state: "NC", lat: 36.0999, lon: -80.2442 },
    { city: "Fayetteville", state: "NC", lat: 35.0527, lon: -78.8784 },
    { city: "Cary", state: "NC", lat: 35.7915, lon: -78.7811 },
    { city: "Wilmington", state: "NC", lat: 34.2257, lon: -77.9447 },
    { city: "High Point", state: "NC", lat: 35.9557, lon: -80.0053 },
    { city: "Asheville", state: "NC", lat: 35.5951, lon: -82.5515 },
    { city: "Concord", state: "NC", lat: 35.4088, lon: -80.5796 },
    // ── SOUTH CAROLINA ──
    { city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { city: "Charleston", state: "SC", lat: 32.7765, lon: -79.9311 },
    { city: "North Charleston", state: "SC", lat: 32.8546, lon: -79.9748 },
    { city: "Greenville", state: "SC", lat: 34.8526, lon: -82.3940 },
    { city: "Rock Hill", state: "SC", lat: 34.9249, lon: -81.0251 },
    { city: "Myrtle Beach", state: "SC", lat: 33.6891, lon: -78.8867 },
    { city: "Hilton Head Island", state: "SC", lat: 32.2163, lon: -80.7526 },
    { city: "Spartanburg", state: "SC", lat: 34.9496, lon: -81.9321 },
    // ── VIRGINIA & DC ──
    { city: "Virginia Beach", state: "VA", lat: 36.8529, lon: -75.9780 },
    { city: "Norfolk", state: "VA", lat: 36.8508, lon: -76.2859 },
    { city: "Chesapeake", state: "VA", lat: 36.7682, lon: -76.2875 },
    { city: "Richmond", state: "VA", lat: 37.5407, lon: -77.4360 },
    { city: "Newport News", state: "VA", lat: 37.0871, lon: -76.4730 },
    { city: "Alexandria", state: "VA", lat: 38.8048, lon: -77.0469 },
    { city: "Hampton", state: "VA", lat: 37.0299, lon: -76.3452 },
    { city: "Roanoke", state: "VA", lat: 37.2710, lon: -79.9414 },
    { city: "Washington", state: "DC", lat: 38.9072, lon: -77.0369 },
    { city: "Baltimore", state: "MD", lat: 39.2904, lon: -76.6122 },
    { city: "Annapolis", state: "MD", lat: 38.9784, lon: -76.4922 },
    { city: "Frederick", state: "MD", lat: 39.4143, lon: -77.4105 },
    // ── ARKANSAS ──
    { city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { city: "Fort Smith", state: "AR", lat: 35.3859, lon: -94.3985 },
    { city: "Fayetteville", state: "AR", lat: 36.0626, lon: -94.1574 },
    { city: "Springdale", state: "AR", lat: 36.1867, lon: -94.1288 },
    { city: "Jonesboro", state: "AR", lat: 35.8423, lon: -90.7043 },
    // ── OKLAHOMA ──
    { city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { city: "Tulsa", state: "OK", lat: 36.1540, lon: -95.9928 },
    { city: "Norman", state: "OK", lat: 35.2226, lon: -97.4395 },
    { city: "Broken Arrow", state: "OK", lat: 36.0526, lon: -95.7908 },
    { city: "Edmond", state: "OK", lat: 35.6529, lon: -97.4781 },
    { city: "Lawton", state: "OK", lat: 34.6036, lon: -98.3959 },
    // ── NEW YORK ──
    { city: "New York", state: "NY", lat: 40.7128, lon: -74.0060 },
    { city: "Buffalo", state: "NY", lat: 42.8864, lon: -78.8784 },
    { city: "Rochester", state: "NY", lat: 43.1566, lon: -77.6088 },
    { city: "Yonkers", state: "NY", lat: 40.9312, lon: -73.8988 },
    { city: "Syracuse", state: "NY", lat: 43.0481, lon: -76.1474 },
    { city: "Albany", state: "NY", lat: 42.6526, lon: -73.7562 },
    // ── NEW JERSEY ──
    { city: "Newark", state: "NJ", lat: 40.7357, lon: -74.1724 },
    { city: "Jersey City", state: "NJ", lat: 40.7178, lon: -74.0431 },
    { city: "Paterson", state: "NJ", lat: 40.9168, lon: -74.1718 },
    { city: "Trenton", state: "NJ", lat: 40.2171, lon: -74.7429 },
    { city: "Atlantic City", state: "NJ", lat: 39.3643, lon: -74.4229 },
    // ── PENNSYLVANIA ──
    { city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { city: "Allentown", state: "PA", lat: 40.6084, lon: -75.4902 },
    { city: "Erie", state: "PA", lat: 42.1292, lon: -80.0851 },
    { city: "Scranton", state: "PA", lat: 41.4090, lon: -75.6624 },
    // ── OHIO ──
    { city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { city: "Cleveland", state: "OH", lat: 41.4993, lon: -81.6944 },
    { city: "Cincinnati", state: "OH", lat: 39.1031, lon: -84.5120 },
    { city: "Toledo", state: "OH", lat: 41.6639, lon: -83.5552 },
    { city: "Akron", state: "OH", lat: 41.0814, lon: -81.5190 },
    { city: "Dayton", state: "OH", lat: 39.7589, lon: -84.1916 },
    { city: "Youngstown", state: "OH", lat: 41.0998, lon: -80.6495 },
    // ── MICHIGAN ──
    { city: "Detroit", state: "MI", lat: 42.3314, lon: -83.0458 },
    { city: "Grand Rapids", state: "MI", lat: 42.9634, lon: -85.6681 },
    { city: "Lansing", state: "MI", lat: 42.7325, lon: -84.5555 },
    { city: "Flint", state: "MI", lat: 43.0125, lon: -83.6875 },
    { city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { city: "Dearborn", state: "MI", lat: 42.3223, lon: -83.1763 },
    { city: "Kalamazoo", state: "MI", lat: 42.2917, lon: -85.5872 },
    // ── ILLINOIS ──
    { city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { city: "Aurora", state: "IL", lat: 41.7606, lon: -88.3201 },
    { city: "Joliet", state: "IL", lat: 41.5250, lon: -88.0817 },
    { city: "Naperville", state: "IL", lat: 41.7508, lon: -88.1535 },
    { city: "Rockford", state: "IL", lat: 42.2711, lon: -89.0940 },
    { city: "Springfield", state: "IL", lat: 39.7817, lon: -89.6501 },
    // ── INDIANA ──
    { city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { city: "Fort Wayne", state: "IN", lat: 41.0793, lon: -85.1394 },
    { city: "Evansville", state: "IN", lat: 37.9716, lon: -87.5711 },
    { city: "South Bend", state: "IN", lat: 41.6764, lon: -86.2520 },
    // ── KENTUCKY ──
    { city: "Louisville", state: "KY", lat: 38.2527, lon: -85.7585 },
    { city: "Lexington", state: "KY", lat: 38.0406, lon: -84.5037 },
    { city: "Bowling Green", state: "KY", lat: 36.9685, lon: -86.4808 },
    // ── WISCONSIN ──
    { city: "Milwaukee", state: "WI", lat: 43.0389, lon: -87.9065 },
    { city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { city: "Green Bay", state: "WI", lat: 44.5133, lon: -88.0133 },
    { city: "Kenosha", state: "WI", lat: 42.5847, lon: -87.8212 },
    // ── MINNESOTA ──
    { city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { city: "Saint Paul", state: "MN", lat: 44.9537, lon: -93.0900 },
    { city: "Rochester", state: "MN", lat: 44.0121, lon: -92.4802 },
    { city: "Duluth", state: "MN", lat: 46.7867, lon: -92.1005 },
    // ── IOWA / MISSOURI / KANSAS / NEBRASKA ──
    { city: "Des Moines", state: "IA", lat: 41.5868, lon: -93.6250 },
    { city: "Cedar Rapids", state: "IA", lat: 41.9779, lon: -91.6656 },
    { city: "Kansas City", state: "MO", lat: 39.0997, lon: -94.5786 },
    { city: "St. Louis", state: "MO", lat: 38.6270, lon: -90.1994 },
    { city: "Springfield", state: "MO", lat: 37.2089, lon: -93.2923 },
    { city: "Wichita", state: "KS", lat: 37.6872, lon: -97.3301 },
    { city: "Topeka", state: "KS", lat: 39.0473, lon: -95.6752 },
    { city: "Overland Park", state: "KS", lat: 38.9822, lon: -94.6708 },
    { city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { city: "Lincoln", state: "NE", lat: 40.8136, lon: -96.7026 },
    { city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { city: "Fargo", state: "ND", lat: 46.8772, lon: -96.7898 },
    { city: "Bismarck", state: "ND", lat: 46.8083, lon: -100.7837 },
    // ── COLORADO ──
    { city: "Denver", state: "CO", lat: 39.7392, lon: -104.9903 },
    { city: "Colorado Springs", state: "CO", lat: 38.8339, lon: -104.8214 },
    { city: "Aurora", state: "CO", lat: 39.7294, lon: -104.8319 },
    { city: "Fort Collins", state: "CO", lat: 40.5853, lon: -105.0844 },
    { city: "Boulder", state: "CO", lat: 40.0150, lon: -105.2705 },
    { city: "Pueblo", state: "CO", lat: 38.2544, lon: -104.6091 },
    { city: "Grand Junction", state: "CO", lat: 39.0639, lon: -108.5506 },
    // ── NEW MEXICO ──
    { city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { city: "Las Cruces", state: "NM", lat: 32.3199, lon: -106.7637 },
    { city: "Rio Rancho", state: "NM", lat: 35.2328, lon: -106.6630 },
    { city: "Santa Fe", state: "NM", lat: 35.6870, lon: -105.9378 },
    { city: "Roswell", state: "NM", lat: 33.3943, lon: -104.5230 },
    // ── ARIZONA ──
    { city: "Phoenix", state: "AZ", lat: 33.4484, lon: -112.0740 },
    { city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { city: "Mesa", state: "AZ", lat: 33.4152, lon: -111.8315 },
    { city: "Chandler", state: "AZ", lat: 33.3062, lon: -111.8413 },
    { city: "Scottsdale", state: "AZ", lat: 33.4942, lon: -111.9261 },
    { city: "Glendale", state: "AZ", lat: 33.5387, lon: -112.1860 },
    { city: "Gilbert", state: "AZ", lat: 33.3528, lon: -111.7890 },
    { city: "Tempe", state: "AZ", lat: 33.4255, lon: -111.9400 },
    { city: "Peoria", state: "AZ", lat: 33.5806, lon: -112.2374 },
    { city: "Surprise", state: "AZ", lat: 33.6292, lon: -112.3679 },
    { city: "Yuma", state: "AZ", lat: 32.6927, lon: -114.6277 },
    { city: "Flagstaff", state: "AZ", lat: 35.1983, lon: -111.6513 },
    { city: "Sedona", state: "AZ", lat: 34.8697, lon: -111.7609 },
    { city: "Lake Havasu City", state: "AZ", lat: 34.4839, lon: -114.3224 },
    // ── UTAH / NEVADA ──
    { city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { city: "Provo", state: "UT", lat: 40.2338, lon: -111.6585 },
    { city: "Ogden", state: "UT", lat: 41.2230, lon: -111.9738 },
    { city: "St. George", state: "UT", lat: 37.0965, lon: -113.5684 },
    { city: "Las Vegas", state: "NV", lat: 36.1699, lon: -115.1398 },
    { city: "Henderson", state: "NV", lat: 36.0395, lon: -114.9817 },
    { city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { city: "North Las Vegas", state: "NV", lat: 36.1989, lon: -115.1175 },
    // ── CALIFORNIA ──
    { city: "Los Angeles", state: "CA", lat: 34.0522, lon: -118.2437 },
    { city: "San Diego", state: "CA", lat: 32.7157, lon: -117.1611 },
    { city: "San Jose", state: "CA", lat: 37.3382, lon: -121.8863 },
    { city: "San Francisco", state: "CA", lat: 37.7749, lon: -122.4194 },
    { city: "Fresno", state: "CA", lat: 36.7378, lon: -119.7871 },
    { city: "Sacramento", state: "CA", lat: 38.5816, lon: -121.4944 },
    { city: "Long Beach", state: "CA", lat: 33.7701, lon: -118.1937 },
    { city: "Oakland", state: "CA", lat: 37.8044, lon: -122.2712 },
    { city: "Bakersfield", state: "CA", lat: 35.3733, lon: -119.0187 },
    { city: "Anaheim", state: "CA", lat: 33.8366, lon: -117.9143 },
    { city: "Santa Ana", state: "CA", lat: 33.7455, lon: -117.8677 },
    { city: "Riverside", state: "CA", lat: 33.9806, lon: -117.3755 },
    { city: "Stockton", state: "CA", lat: 37.9577, lon: -121.2908 },
    { city: "Irvine", state: "CA", lat: 33.6846, lon: -117.8265 },
    { city: "Chula Vista", state: "CA", lat: 32.6401, lon: -117.0842 },
    { city: "Fremont", state: "CA", lat: 37.5485, lon: -121.9886 },
    { city: "San Bernardino", state: "CA", lat: 34.1083, lon: -117.2898 },
    { city: "Modesto", state: "CA", lat: 37.6391, lon: -120.9969 },
    { city: "Moreno Valley", state: "CA", lat: 33.9425, lon: -117.2297 },
    { city: "Fontana", state: "CA", lat: 34.0922, lon: -117.4350 },
    { city: "Oxnard", state: "CA", lat: 34.1975, lon: -119.1771 },
    { city: "Huntington Beach", state: "CA", lat: 33.6595, lon: -117.9988 },
    { city: "Santa Clarita", state: "CA", lat: 34.3917, lon: -118.5426 },
    { city: "Garden Grove", state: "CA", lat: 33.7743, lon: -117.9378 },
    { city: "Oceanside", state: "CA", lat: 33.1959, lon: -117.3795 },
    { city: "Elk Grove", state: "CA", lat: 38.4088, lon: -121.3716 },
    { city: "Hayward", state: "CA", lat: 37.6688, lon: -122.0808 },
    { city: "Corona", state: "CA", lat: 33.8753, lon: -117.5664 },
    { city: "Sunnyvale", state: "CA", lat: 37.3688, lon: -122.0363 },
    { city: "Lancaster", state: "CA", lat: 34.6868, lon: -118.1542 },
    { city: "Palmdale", state: "CA", lat: 34.5794, lon: -118.1165 },
    { city: "Salinas", state: "CA", lat: 36.6777, lon: -121.6555 },
    { city: "Torrance", state: "CA", lat: 33.8358, lon: -118.3406 },
    { city: "Pomona", state: "CA", lat: 34.0553, lon: -117.7500 },
    { city: "Escondido", state: "CA", lat: 33.1192, lon: -117.0864 },
    { city: "Pasadena", state: "CA", lat: 34.1478, lon: -118.1445 },
    { city: "Ontario", state: "CA", lat: 34.0633, lon: -117.6509 },
    { city: "Santa Barbara", state: "CA", lat: 34.4208, lon: -119.6982 },
    { city: "Santa Rosa", state: "CA", lat: 38.4404, lon: -122.7141 },
    { city: "Visalia", state: "CA", lat: 36.3302, lon: -119.2921 },
    { city: "Concord", state: "CA", lat: 37.9780, lon: -122.0311 },
    { city: "Roseville", state: "CA", lat: 38.7521, lon: -121.2880 },
    // ── PACIFIC NORTHWEST ──
    { city: "Portland", state: "OR", lat: 45.5051, lon: -122.6750 },
    { city: "Salem", state: "OR", lat: 44.9429, lon: -123.0351 },
    { city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { city: "Bend", state: "OR", lat: 44.0582, lon: -121.3153 },
    { city: "Medford", state: "OR", lat: 42.3265, lon: -122.8756 },
    { city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { city: "Spokane", state: "WA", lat: 47.6588, lon: -117.4260 },
    { city: "Tacoma", state: "WA", lat: 47.2529, lon: -122.4443 },
    { city: "Vancouver", state: "WA", lat: 45.6387, lon: -122.6615 },
    { city: "Bellevue", state: "WA", lat: 47.6101, lon: -122.2015 },
    { city: "Olympia", state: "WA", lat: 47.0379, lon: -122.9007 },
    { city: "Everett", state: "WA", lat: 47.9790, lon: -122.2021 },
    { city: "Boise", state: "ID", lat: 43.6150, lon: -116.2023 },
    { city: "Nampa", state: "ID", lat: 43.5407, lon: -116.5635 },
    { city: "Meridian", state: "ID", lat: 43.6121, lon: -116.3915 },
    { city: "Idaho Falls", state: "ID", lat: 43.4917, lon: -112.0339 },
    // ── NEW ENGLAND ──
    { city: "Boston", state: "MA", lat: 42.3601, lon: -71.0589 },
    { city: "Worcester", state: "MA", lat: 42.2626, lon: -71.8023 },
    { city: "Springfield", state: "MA", lat: 42.1015, lon: -72.5898 },
    { city: "Providence", state: "RI", lat: 41.8240, lon: -71.4128 },
    { city: "Hartford", state: "CT", lat: 41.7658, lon: -72.6851 },
    { city: "Bridgeport", state: "CT", lat: 41.1865, lon: -73.1952 },
    { city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { city: "Stamford", state: "CT", lat: 41.0534, lon: -73.5387 },
    { city: "Manchester", state: "NH", lat: 42.9956, lon: -71.4548 },
    { city: "Portland", state: "ME", lat: 43.6591, lon: -70.2568 },
    { city: "Burlington", state: "VT", lat: 44.4759, lon: -73.2121 },
    // ── ALASKA & HAWAII ──
    { city: "Anchorage", state: "AK", lat: 61.2181, lon: -149.9003 },
    { city: "Honolulu", state: "HI", lat: 21.3069, lon: -157.8583 },
    { city: "Hilo", state: "HI", lat: 19.7297, lon: -155.0900 },
    { city: "Key West", state: "FL", lat: 24.5551, lon: -81.7800 },
    { city: "West Virginia", state: "WV", lat: 38.3498, lon: -81.6326 },
    { city: "Charleston", state: "WV", lat: 38.3498, lon: -81.6326 },
    { city: "Morgantown", state: "WV", lat: 39.6295, lon: -79.9559 },
];


// ===== HAVERSINE DISTANCE FORMULA (miles) =====
function haversine(lat1, lon1, lat2, lon2) {
    const R = 3958.8;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// ===== SELECTED CITIES FOR DISTANCE CALC =====
let selectedFrom = null;
let selectedTo = null;

let autocompleteTimeout = null;

async function handleAutocomplete(input, dropdownId) {
    const val = input.value.trim().toLowerCase();
    const dropdown = document.getElementById(dropdownId);

    if (val.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
    }

    // 1. Instantly show local matches
    const localMatches = US_CITIES.filter(c =>
        c.city.toLowerCase().startsWith(val) ||
        `${c.city}, ${c.state}`.toLowerCase().startsWith(val) ||
        c.city.toLowerCase().includes(val)
    ).slice(0, 4);

    let html = localMatches.map((c) =>
        `<div class="autocomplete-item" 
            onmousedown="selectCity('${input.id}', '${dropdownId}', '${c.city.replace(/'/g, "\\'")}', '${c.state}', ${c.lat}, ${c.lon})"
        >
            ${c.city}<span class="state">${c.state}</span>
        </div>`
    ).join('');

    if (html) {
        dropdown.innerHTML = html;
        dropdown.classList.add('open');
    }

    // 2. Fetch live API for exact addresses (Uber-like accuracy via ArcGIS)
    clearTimeout(autocompleteTimeout);
    autocompleteTimeout = setTimeout(async () => {
        try {
            const res = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${encodeURIComponent(val + ", USA")}&maxLocations=4&f=json`);
            if (!res.ok) return;
            const data = await res.json();
            
            if (data.candidates && data.candidates.length > 0) {
                let apiHtml = data.candidates.map(c => {
                    const name = c.address.replace(/'/g, "\\'");
                    const coords = c.location; // {x: lon, y: lat}
                    return `<div class="autocomplete-item api-match" style="border-left: 3px solid var(--blue-light);"
                        onmousedown="selectCity('${input.id}', '${dropdownId}', '${name}', '', ${coords.y}, ${coords.x})"
                    >
                        ${c.address} <span class="state">(Exacto)</span>
                    </div>`;
                }).join('');
                
                dropdown.innerHTML = html + apiHtml;
                dropdown.classList.add('open');
            }
        } catch (e) {
            console.error("Autocomplete API error", e);
        }
    }, 400); // 400ms debounce
}

function selectCity(inputId, dropdownId, city, state, lat, lon) {
    const input = document.getElementById(inputId);
    input.value = state ? `${city}, ${state}` : city;

    const cityData = { city, state, lat, lon };

    if (inputId === 'quoteFrom') selectedFrom = cityData;
    else if (inputId === 'quoteTo') selectedTo = cityData;

    document.getElementById(dropdownId).classList.remove('open');
}

function hideDropdown(dropdownId) {
    setTimeout(() => {
        const d = document.getElementById(dropdownId);
        if (d) d.classList.remove('open');
    }, 200);
}

// ===== QUOTE CALCULATOR =====
const RATE_PER_MILE = 1.75;

async function calculateQuote() {
    const from = document.getElementById('quoteFrom').value.trim();
    const to = document.getElementById('quoteTo').value.trim();
    const pax = parseInt(document.getElementById('quotePassengers').value);
    
    if (!from || !to || !selectedFrom || !selectedTo) {
        const msg = currentLang === 'es' ? 'Por favor selecciona ubicaciones válidas del menú desplegable.' : 'Please select valid locations from the dropdown.';
        showToast(msg, 'error');
        return;
    }

    const resultPrice = document.getElementById('resultPrice');
    const resultRoute = document.getElementById('resultRoute');
    const resultEl = document.getElementById('quoteResult');
    
    resultPrice.textContent = "Calculando...";
    resultRoute.textContent = currentLang === 'es' ? "Obteniendo ruta real..." : "Getting live route...";
    resultEl.style.display = 'block';

    try {
        const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${selectedFrom.lon},${selectedFrom.lat};${selectedTo.lon},${selectedTo.lat}?overview=false`);
        const data = await res.json();
        
        if (data.code !== 'Ok' || !data.routes || data.routes.length === 0) {
            throw new Error("Route not found");
        }
        
        const distanceMeters = data.routes[0].distance;
        const miles = distanceMeters / 1609.344;
        
        let total = miles * RATE_PER_MILE;
        if (pax >= 5) total *= 1.08;
        
        const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
        const milesLabel = currentLang === 'es' ? 'millas' : 'miles';
        
        resultPrice.textContent = formatted;
        resultRoute.textContent = `${from} → ${to} • ${Math.round(miles).toLocaleString()} ${milesLabel}`;
        
    } catch(e) {
        console.error("OSRM Routing Error:", e);
        // Fallback to straight-line if API fails
        const miles = haversine(selectedFrom.lat, selectedFrom.lon, selectedTo.lat, selectedTo.lon);
        let total = miles * RATE_PER_MILE;
        if (pax >= 5) total *= 1.08;
        const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
        const milesLabel = currentLang === 'es' ? 'millas' : 'miles';
        resultPrice.textContent = formatted;
        resultRoute.textContent = `${from} → ${to} • ${Math.round(miles).toLocaleString()} ${milesLabel} (Est)`;
    }

    setTimeout(() => {
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function transferQuoteToBooking() {
    const from = document.getElementById('quoteFrom').value.trim();
    const to = document.getElementById('quoteTo').value.trim();
    const pax = document.getElementById('quotePassengers').value;
    
    if (from && to) {
        document.getElementById('bookPickup').value = from;
        document.getElementById('bookDropoff').value = to;
        document.getElementById('bookPax').value = pax;
    }
}

// ===== BOOKING FORM =====
function submitBooking(e) {
    e.preventDefault();

    const name = document.getElementById('bookName').value.trim();
    const phone = document.getElementById('bookPhone').value.trim();
    const pickup = document.getElementById('bookPickup').value.trim();
    const dropoff = document.getElementById('bookDropoff').value.trim();
    const date = document.getElementById('bookDate').value;
    const hour = document.getElementById('bookTimeHour').value;
    const min = document.getElementById('bookTimeMinute').value;
    const ampm = document.getElementById('bookTimeAmPm').value;
    const time = `${hour}:${min} ${ampm}`;
    const pax = document.getElementById('bookPax').value;
    const luggage = document.getElementById('bookLuggage').value;
    const notes = document.getElementById('bookNotes').value.trim();

    const waNumber = '12054216891';
    const msg = currentLang === 'es'
        ? `🚗 *Nueva Reserva — KONA RAITES*\n\n👤 *Nombre:* ${name}\n📱 *Teléfono:* ${phone}\n📍 *Recogida:* ${pickup}\n🏁 *Destino:* ${dropoff}\n📅 *Fecha:* ${date}\n🕐 *Hora:* ${time}\n👥 *Pasajeros:* ${pax}\n🧳 *Maletas:* ${luggage}\n📝 *Notas:* ${notes || 'N/A'}`
        : `🚗 *New Booking — KONA RAITES*\n\n👤 *Name:* ${name}\n📱 *Phone:* ${phone}\n📍 *Pickup:* ${pickup}\n🏁 *Destination:* ${dropoff}\n📅 *Date:* ${date}\n🕐 *Time:* ${time}\n👥 *Passengers:* ${pax}\n🧳 *Bags:* ${luggage}\n📝 *Notes:* ${notes || 'N/A'}`;

    // Send email notification via FormSubmit
    fetch("https://formsubmit.co/ajax/konaraites@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nombre: name,
            Telefono: phone,
            Recogida: pickup,
            Destino: dropoff,
            Fecha: date,
            Hora: time,
            Pasajeros: pax,
            Maletas: luggage,
            Notas: notes || "N/A",
            _subject: "NUEVA RESERVA - KONA RAITES",
            _template: "table"
        })
    }).catch(error => console.log("Email notification error:", error));

    // Open WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');

    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('bookingSuccess').style.display = 'block';
}

function resetBookingForm() {
    document.getElementById('bookingForm').reset();
    document.getElementById('bookingSuccess').style.display = 'none';
    document.getElementById('bookingForm').style.display = 'block';
    window.scrollTo({ top: document.getElementById('reservar').offsetTop - 80, behavior: 'smooth' });
}

// ===== TRANSLATIONS =====
const translations = {
    es: {
        nav_quote: "Cotizar", nav_book: "Reservar", nav_how: "¿Cómo Funciona?", nav_contact: "Contacto",
        hero_badge: "🚗 Viajes de Estado a Estado",
        hero_title_1: "Tu Raite.", hero_title_2: "Tu Manera.",
        hero_subtitle: "Viajes cómodos, seguros y puntuales a cualquier estado del país. Reserva en línea y recibe tu confirmación por WhatsApp.",
        hero_cta1: "Obtener Cotización", hero_cta2: "Reservar Mi Raite",
        trust_1: "100% Seguro", trust_2: "Confirmación por WhatsApp", trust_3: "Precios Claros",
        phone_banner_text: "¿Prefieres llamar? Estamos disponibles:",
        quote_tag: "Cotización Gratis", quote_title: "¿Cuánto costará tu raite?",
        quote_subtitle: "Selecciona origen y destino — calculamos la distancia y el precio al instante.",
        quote_from: "📍 Punto de Recogida",
        quote_from_ph: "Dirección exacta o Ciudad",
        quote_to: "🏁 Destino Final",
        quote_to_ph: "Dirección exacta o Ciudad",
        quote_distance_label: "Distancia Calculada (millas)", quote_miles_ph: "Auto-calculado al seleccionar ciudades",
        quote_passengers: "👥 Número de Pasajeros", quote_btn: "Calcular Mi Cotización →",
        result_est: "Estimación de precio",
        result_note: "*Precio estimado a $1.75 por milla. El precio final puede variar según ruta y condiciones.",
        hotel_disclaimer: "*Para viajes mayores a 10 horas, el precio incluye una parada en hotel de 6 horas para descansar y continuar el viaje seguros.",
        result_cta: "Reservar Este Raite",
        secure_checkout: "💳 Pagos Seguros Aceptados",
        how_tag: "Fácil y Rápido", how_title: "¿Cómo funciona?", how_subtitle: "En 3 simples pasos estás listo para tu viaje.",
        step1_title: "Pide Tu Raite", step1_desc: "Llena el formulario con tu información, origen, destino y fecha de viaje.",
        step2_title: "Confirmamos", step2_desc: "Te enviamos la confirmación y detalles de tu viaje por WhatsApp.",
        step3_title: "¡Llegamos!", step3_desc: "Tu chofer puntual llega a recogerte y te lleva directo a tu destino.",
        book_tag: "Reserva Tu Raite", book_title: "¡Vamos! Reserva Ahora",
        book_subtitle: "Completa el formulario y te contactamos por WhatsApp para confirmar.",
        book_name: "👤 Nombre Completo", book_name_ph: "Tu nombre completo",
        book_phone: "📱 Número de Teléfono / WhatsApp", book_phone_ph: "(555) 123-4567",
        book_pickup: "Punto de Recogida",
        book_pickup_ph: "Dirección o Ciudad",
        book_dropoff: "Destino Final",
        book_dropoff_ph: "Dirección o Ciudad",
        book_date: "📅 Fecha de Viaje", book_time: "🕐 Hora de Recogida",
        book_pax: "👥 Número de Pasajeros", book_luggage: "🧳 ¿Cuántas Maletas?", luggage_none: "Ninguna",
        book_notes: "📝 Notas Adicionales (opcional)", book_notes_ph: "Cualquier información adicional sobre tu viaje...",
        book_submit: "Reservar Mi Raite por WhatsApp 🚗",
        book_disclaimer: "Al enviar, se abrirá WhatsApp con los detalles de tu reserva para confirmación.",
        book_another: "Hacer Otra Reserva",
        success_title: "¡Reserva Enviada!", success_msg: "Te contactaremos pronto por WhatsApp para confirmar tu raite. ¡Gracias por confiar en KONA RAITES!",
        why_tag: "¿Por Qué Nosotros?", why_title: "Tu confianza, nuestra prioridad",
        why1_title: "100% Seguro", why1_desc: "Choferes verificados y vehículos en excelentes condiciones para tu tranquilidad.",
        why2_title: "Siempre Puntual", why2_desc: "Llegamos a tiempo. Tu horario importa y lo respetamos al máximo.",
        why3_title: "Confort Premium", why3_desc: "Viaja cómodo en vehículos espaciosos, limpios y climatizados.",
        why4_title: "Soporte por WhatsApp", why4_desc: "Comunicación directa antes, durante y después de tu viaje.",
        why5_title: "Cualquier Estado", why5_desc: "Viajamos a cualquier estado de los Estados Unidos. Sin límites.",
        why6_title: "Precio Justo", why6_desc: "Sin sorpresas. Cotización clara desde el inicio del proceso.",
        footer_tagline: "Tu Raite. Tu Manera. 🚗", footer_links: "Navegación", footer_contact: "Contáctanos",
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        nav_quote: "Get a Quote", nav_book: "Book a Ride", nav_how: "How It Works", nav_contact: "Contact",
        hero_badge: "🚗 State-to-State Rides",
        hero_title_1: "Your Ride.", hero_title_2: "Your Way.",
        hero_subtitle: "Comfortable, safe, and on-time rides to any state in the country. Book online and receive your confirmation via WhatsApp.",
        hero_cta1: "Get a Quote", hero_cta2: "Book My Ride",
        trust_1: "100% Safe", trust_2: "WhatsApp Confirmation", trust_3: "Clear Pricing",
        phone_banner_text: "Prefer to call? We're available:",
        quote_tag: "Free Quote", quote_title: "How much will your ride cost?",
        quote_subtitle: "Select origin and destination — we calculate the distance and price instantly.",
        quote_from: "📍 Pickup Point",
        quote_from_ph: "Exact Address or City",
        quote_to: "🏁 Final Destination",
        quote_to_ph: "Exact Address or City",
        quote_distance_label: "Calculated Distance (miles)", quote_miles_ph: "Auto-calculated when cities are selected",
        quote_passengers: "👥 Number of Passengers", quote_btn: "Calculate My Quote →",
        result_est: "Price estimate",
        result_note: "*Estimated price at $1.75 per mile. Final price may vary depending on route and conditions.",
        hotel_disclaimer: "*For trips over 10 hours, the price includes a 6-hour hotel stay to rest and continue the trip safely.",
        result_cta: "Book This Ride",
        secure_checkout: "💳 Secure Payments Accepted",
        how_tag: "Easy & Fast", how_title: "How does it work?", how_subtitle: "In 3 simple steps, you're ready for your trip.",
        step1_title: "Request Your Ride", step1_desc: "Fill out the form with your information, origin, destination, and travel date.",
        step2_title: "We Confirm", step2_desc: "We send you a confirmation and your trip details via WhatsApp.",
        step3_title: "We're There!", step3_desc: "Your punctual driver arrives to pick you up and takes you straight to your destination.",
        book_tag: "Book Your Ride", book_title: "Let's Go! Book Now",
        book_subtitle: "Complete the form and we'll contact you via WhatsApp to confirm.",
        book_name: "👤 Full Name", book_name_ph: "Your full name",
        book_phone: "📱 Phone Number / WhatsApp", book_phone_ph: "(555) 123-4567",
        book_pickup: "📍 Pickup Address", book_pickup_ph: "City, State of pickup",
        book_dropoff: "🏁 Destination Address", book_dropoff_ph: "City, State of destination",
        book_date: "📅 Travel Date", book_time: "🕐 Pickup Time",
        book_pax: "👥 Number of Passengers", book_luggage: "🧳 How Many Bags?", luggage_none: "None",
        book_notes: "📝 Additional Notes (optional)", book_notes_ph: "Any additional information about your trip...",
        book_submit: "Book My Ride via WhatsApp 🚗",
        book_disclaimer: "Upon submission, WhatsApp will open with your booking details for confirmation.",
        book_another: "Make Another Booking",
        success_title: "Booking Sent!", success_msg: "We'll contact you soon via WhatsApp to confirm your ride. Thank you for trusting KONA RAITES!",
        why_tag: "Why Us?", why_title: "Your trust, our priority",
        why1_title: "100% Safe", why1_desc: "Verified drivers and vehicles in excellent condition for your peace of mind.",
        why2_title: "Always On Time", why2_desc: "We arrive on time. Your schedule matters and we respect it.",
        why3_title: "Premium Comfort", why3_desc: "Travel comfortably in spacious, clean, and air-conditioned vehicles.",
        why4_title: "WhatsApp Support", why4_desc: "Direct communication before, during, and after your trip.",
        why5_title: "Any State", why5_desc: "We travel to any state in the United States. No limits.",
        why6_title: "Fair Price", why6_desc: "No surprises. Clear quote from the start of the process.",
        footer_tagline: "Your Ride. Your Way. 🚗", footer_links: "Navigation", footer_contact: "Contact Us",
        footer_rights: "All rights reserved."
    }
};

let currentLang = localStorage.getItem('kr_lang') || 'es';

function toggleLang() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    localStorage.setItem('kr_lang', currentLang);
    applyTranslations();
}

function applyTranslations() {
    const t = translations[currentLang];
    document.documentElement.lang = currentLang;
    document.getElementById('langLabel').textContent = currentLang === 'es' ? 'English' : 'Español';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });
}

// ===== SCROLL REVEAL =====
const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// ===== NAVBAR SCROLL =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
}

// ===== MOBILE MENU =====
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
}
document.addEventListener('click', e => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
        document.getElementById('navLinks').classList.remove('open');
    }
});

// ===== TOAST =====
function showToast(msg, type = 'info') {
    document.querySelector('.toast')?.remove();
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    toast.style.cssText = `
        position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);
        background:${type === 'error' ? '#DC2626' : '#16A34A'};
        color:white;padding:1rem 2rem;border-radius:9999px;
        font-family:Outfit,sans-serif;font-weight:600;font-size:0.95rem;
        z-index:9999;box-shadow:0 8px 30px rgba(0,0,0,0.4);
        animation:fadeInUp 0.3s ease;white-space:nowrap;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const navH = document.getElementById('navbar').offsetHeight;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        }
    });
});

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    initNavbar();

    // Set min date
    const dateInput = document.getElementById('bookDate');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    // Reveal animations
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
});


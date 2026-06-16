// ===== US CITIES WITH COORDINATES =====
const US_CITIES = [
    { city: "New York", state: "NY", lat: 40.7128, lon: -74.0060 },
    { city: "Los Angeles", state: "CA", lat: 34.0522, lon: -118.2437 },
    { city: "Chicago", state: "IL", lat: 41.8781, lon: -87.6298 },
    { city: "Houston", state: "TX", lat: 29.7604, lon: -95.3698 },
    { city: "Phoenix", state: "AZ", lat: 33.4484, lon: -112.0740 },
    { city: "Philadelphia", state: "PA", lat: 39.9526, lon: -75.1652 },
    { city: "San Antonio", state: "TX", lat: 29.4241, lon: -98.4936 },
    { city: "San Diego", state: "CA", lat: 32.7157, lon: -117.1611 },
    { city: "Dallas", state: "TX", lat: 32.7767, lon: -96.7970 },
    { city: "San Jose", state: "CA", lat: 37.3382, lon: -121.8863 },
    { city: "Austin", state: "TX", lat: 30.2672, lon: -97.7431 },
    { city: "Jacksonville", state: "FL", lat: 30.3322, lon: -81.6557 },
    { city: "Fort Worth", state: "TX", lat: 32.7555, lon: -97.3308 },
    { city: "Columbus", state: "OH", lat: 39.9612, lon: -82.9988 },
    { city: "Charlotte", state: "NC", lat: 35.2271, lon: -80.8431 },
    { city: "Indianapolis", state: "IN", lat: 39.7684, lon: -86.1581 },
    { city: "San Francisco", state: "CA", lat: 37.7749, lon: -122.4194 },
    { city: "Seattle", state: "WA", lat: 47.6062, lon: -122.3321 },
    { city: "Denver", state: "CO", lat: 39.7392, lon: -104.9903 },
    { city: "Nashville", state: "TN", lat: 36.1627, lon: -86.7816 },
    { city: "Oklahoma City", state: "OK", lat: 35.4676, lon: -97.5164 },
    { city: "El Paso", state: "TX", lat: 31.7619, lon: -106.4850 },
    { city: "Washington", state: "DC", lat: 38.9072, lon: -77.0369 },
    { city: "Las Vegas", state: "NV", lat: 36.1699, lon: -115.1398 },
    { city: "Louisville", state: "KY", lat: 38.2527, lon: -85.7585 },
    { city: "Baltimore", state: "MD", lat: 39.2904, lon: -76.6122 },
    { city: "Milwaukee", state: "WI", lat: 43.0389, lon: -87.9065 },
    { city: "Albuquerque", state: "NM", lat: 35.0844, lon: -106.6504 },
    { city: "Tucson", state: "AZ", lat: 32.2226, lon: -110.9747 },
    { city: "Fresno", state: "CA", lat: 36.7378, lon: -119.7871 },
    { city: "Sacramento", state: "CA", lat: 38.5816, lon: -121.4944 },
    { city: "Mesa", state: "AZ", lat: 33.4152, lon: -111.8315 },
    { city: "Kansas City", state: "MO", lat: 39.0997, lon: -94.5786 },
    { city: "Atlanta", state: "GA", lat: 33.7490, lon: -84.3880 },
    { city: "Omaha", state: "NE", lat: 41.2565, lon: -95.9345 },
    { city: "Colorado Springs", state: "CO", lat: 38.8339, lon: -104.8214 },
    { city: "Raleigh", state: "NC", lat: 35.7796, lon: -78.6382 },
    { city: "Long Beach", state: "CA", lat: 33.7701, lon: -118.1937 },
    { city: "Virginia Beach", state: "VA", lat: 36.8529, lon: -75.9780 },
    { city: "Minneapolis", state: "MN", lat: 44.9778, lon: -93.2650 },
    { city: "Tampa", state: "FL", lat: 27.9506, lon: -82.4572 },
    { city: "New Orleans", state: "LA", lat: 29.9511, lon: -90.0715 },
    { city: "Arlington", state: "TX", lat: 32.7357, lon: -97.1081 },
    { city: "Bakersfield", state: "CA", lat: 35.3733, lon: -119.0187 },
    { city: "Honolulu", state: "HI", lat: 21.3069, lon: -157.8583 },
    { city: "Anaheim", state: "CA", lat: 33.8366, lon: -117.9143 },
    { city: "Aurora", state: "CO", lat: 39.7294, lon: -104.8319 },
    { city: "Santa Ana", state: "CA", lat: 33.7455, lon: -117.8677 },
    { city: "Corpus Christi", state: "TX", lat: 27.8006, lon: -97.3964 },
    { city: "Riverside", state: "CA", lat: 33.9806, lon: -117.3755 },
    { city: "Lexington", state: "KY", lat: 38.0406, lon: -84.5037 },
    { city: "St. Louis", state: "MO", lat: 38.6270, lon: -90.1994 },
    { city: "Pittsburgh", state: "PA", lat: 40.4406, lon: -79.9959 },
    { city: "Stockton", state: "CA", lat: 37.9577, lon: -121.2908 },
    { city: "Saint Paul", state: "MN", lat: 44.9537, lon: -93.0900 },
    { city: "Cincinnati", state: "OH", lat: 39.1031, lon: -84.5120 },
    { city: "Anchorage", state: "AK", lat: 61.2181, lon: -149.9003 },
    { city: "Greensboro", state: "NC", lat: 36.0726, lon: -79.7920 },
    { city: "Henderson", state: "NV", lat: 36.0395, lon: -114.9817 },
    { city: "Orlando", state: "FL", lat: 28.5383, lon: -81.3792 },
    { city: "Miami", state: "FL", lat: 25.7617, lon: -80.1918 },
    { city: "Fort Lauderdale", state: "FL", lat: 26.1224, lon: -80.1373 },
    { city: "Hialeah", state: "FL", lat: 25.8576, lon: -80.2781 },
    { city: "West Palm Beach", state: "FL", lat: 26.7153, lon: -80.0534 },
    { city: "Tampa Bay", state: "FL", lat: 27.9506, lon: -82.4572 },
    { city: "Gainesville", state: "FL", lat: 29.6516, lon: -82.3248 },
    { city: "Tallahassee", state: "FL", lat: 30.4383, lon: -84.2807 },
    { city: "Pensacola", state: "FL", lat: 30.4213, lon: -87.2169 },
    { city: "Savannah", state: "GA", lat: 32.0809, lon: -81.0912 },
    { city: "Augusta", state: "GA", lat: 33.4735, lon: -82.0105 },
    { city: "Macon", state: "GA", lat: 32.8407, lon: -83.6324 },
    { city: "Columbia", state: "SC", lat: 34.0007, lon: -81.0348 },
    { city: "Charleston", state: "SC", lat: 32.7765, lon: -79.9311 },
    { city: "Greenville", state: "SC", lat: 34.8526, lon: -82.3940 },
    { city: "Durham", state: "NC", lat: 35.9940, lon: -78.8986 },
    { city: "Fayetteville", state: "NC", lat: 35.0527, lon: -78.8784 },
    { city: "Winston-Salem", state: "NC", lat: 36.0999, lon: -80.2442 },
    { city: "Richmond", state: "VA", lat: 37.5407, lon: -77.4360 },
    { city: "Norfolk", state: "VA", lat: 36.8508, lon: -76.2859 },
    { city: "Chesapeake", state: "VA", lat: 36.7682, lon: -76.2875 },
    { city: "Memphis", state: "TN", lat: 35.1495, lon: -90.0490 },
    { city: "Knoxville", state: "TN", lat: 35.9606, lon: -83.9207 },
    { city: "Chattanooga", state: "TN", lat: 35.0456, lon: -85.3097 },
    { city: "Clarksville", state: "TN", lat: 36.5298, lon: -87.3595 },
    { city: "Birmingham", state: "AL", lat: 33.5186, lon: -86.8104 },
    { city: "Montgomery", state: "AL", lat: 32.3669, lon: -86.3006 },
    { city: "Huntsville", state: "AL", lat: 34.7304, lon: -86.5861 },
    { city: "Mobile", state: "AL", lat: 30.6954, lon: -88.0399 },
    { city: "Jackson", state: "MS", lat: 32.2988, lon: -90.1848 },
    { city: "Gulfport", state: "MS", lat: 30.3674, lon: -89.0928 },
    { city: "Baton Rouge", state: "LA", lat: 30.4515, lon: -91.1871 },
    { city: "Shreveport", state: "LA", lat: 32.5252, lon: -93.7502 },
    { city: "Lafayette", state: "LA", lat: 30.2241, lon: -92.0198 },
    { city: "Little Rock", state: "AR", lat: 34.7465, lon: -92.2896 },
    { city: "Fort Smith", state: "AR", lat: 35.3859, lon: -94.3985 },
    { city: "Tulsa", state: "OK", lat: 36.1540, lon: -95.9928 },
    { city: "Norman", state: "OK", lat: 35.2226, lon: -97.4395 },
    { city: "Laredo", state: "TX", lat: 27.5064, lon: -99.5075 },
    { city: "McAllen", state: "TX", lat: 26.2034, lon: -98.2300 },
    { city: "Lubbock", state: "TX", lat: 33.5779, lon: -101.8552 },
    { city: "Amarillo", state: "TX", lat: 35.2220, lon: -101.8313 },
    { city: "Waco", state: "TX", lat: 31.5493, lon: -97.1467 },
    { city: "Beaumont", state: "TX", lat: 30.0860, lon: -94.1018 },
    { city: "Midland", state: "TX", lat: 31.9973, lon: -102.0779 },
    { city: "Odessa", state: "TX", lat: 31.8457, lon: -102.3676 },
    { city: "Abilene", state: "TX", lat: 32.4487, lon: -99.7331 },
    { city: "Killeen", state: "TX", lat: 31.1171, lon: -97.7278 },
    { city: "Pasadena", state: "TX", lat: 29.6911, lon: -95.2091 },
    { city: "Brownsville", state: "TX", lat: 25.9017, lon: -97.4975 },
    { city: "Garland", state: "TX", lat: 32.9126, lon: -96.6389 },
    { city: "Irving", state: "TX", lat: 32.8140, lon: -96.9489 },
    { city: "Plano", state: "TX", lat: 33.0198, lon: -96.6989 },
    { city: "Frisco", state: "TX", lat: 33.1507, lon: -96.8236 },
    { city: "McKinney", state: "TX", lat: 33.1972, lon: -96.6397 },
    { city: "Grand Prairie", state: "TX", lat: 32.7460, lon: -96.9978 },
    { city: "El Paso", state: "TX", lat: 31.7619, lon: -106.4850 },
    { city: "Allentown", state: "PA", lat: 40.6084, lon: -75.4902 },
    { city: "Erie", state: "PA", lat: 42.1292, lon: -80.0851 },
    { city: "Scranton", state: "PA", lat: 41.4090, lon: -75.6624 },
    { city: "Newark", state: "NJ", lat: 40.7357, lon: -74.1724 },
    { city: "Jersey City", state: "NJ", lat: 40.7178, lon: -74.0431 },
    { city: "Paterson", state: "NJ", lat: 40.9168, lon: -74.1718 },
    { city: "Bridgeport", state: "CT", lat: 41.1865, lon: -73.1952 },
    { city: "Hartford", state: "CT", lat: 41.7658, lon: -72.6851 },
    { city: "New Haven", state: "CT", lat: 41.3083, lon: -72.9279 },
    { city: "Providence", state: "RI", lat: 41.8240, lon: -71.4128 },
    { city: "Boston", state: "MA", lat: 42.3601, lon: -71.0589 },
    { city: "Worcester", state: "MA", lat: 42.2626, lon: -71.8023 },
    { city: "Springfield", state: "MA", lat: 42.1015, lon: -72.5898 },
    { city: "Manchester", state: "NH", lat: 42.9956, lon: -71.4548 },
    { city: "Portland", state: "ME", lat: 43.6591, lon: -70.2568 },
    { city: "Burlington", state: "VT", lat: 44.4759, lon: -73.2121 },
    { city: "Albany", state: "NY", lat: 42.6526, lon: -73.7562 },
    { city: "Buffalo", state: "NY", lat: 42.8864, lon: -78.8784 },
    { city: "Rochester", state: "NY", lat: 43.1566, lon: -77.6088 },
    { city: "Syracuse", state: "NY", lat: 43.0481, lon: -76.1474 },
    { city: "Yonkers", state: "NY", lat: 40.9312, lon: -73.8988 },
    { city: "Detroit", state: "MI", lat: 42.3314, lon: -83.0458 },
    { city: "Grand Rapids", state: "MI", lat: 42.9634, lon: -85.6681 },
    { city: "Lansing", state: "MI", lat: 42.7325, lon: -84.5555 },
    { city: "Flint", state: "MI", lat: 43.0125, lon: -83.6875 },
    { city: "Sterling Heights", state: "MI", lat: 42.5803, lon: -83.0302 },
    { city: "Ann Arbor", state: "MI", lat: 42.2808, lon: -83.7430 },
    { city: "Cleveland", state: "OH", lat: 41.4993, lon: -81.6944 },
    { city: "Toledo", state: "OH", lat: 41.6639, lon: -83.5552 },
    { city: "Akron", state: "OH", lat: 41.0814, lon: -81.5190 },
    { city: "Dayton", state: "OH", lat: 39.7589, lon: -84.1916 },
    { city: "Louisville", state: "KY", lat: 38.2527, lon: -85.7585 },
    { city: "Lexington", state: "KY", lat: 38.0406, lon: -84.5037 },
    { city: "Madison", state: "WI", lat: 43.0731, lon: -89.4012 },
    { city: "Green Bay", state: "WI", lat: 44.5133, lon: -88.0133 },
    { city: "Des Moines", state: "IA", lat: 41.5868, lon: -93.6250 },
    { city: "Cedar Rapids", state: "IA", lat: 41.9779, lon: -91.6656 },
    { city: "Sioux Falls", state: "SD", lat: 43.5446, lon: -96.7311 },
    { city: "Fargo", state: "ND", lat: 46.8772, lon: -96.7898 },
    { city: "Lincoln", state: "NE", lat: 40.8136, lon: -96.7026 },
    { city: "Wichita", state: "KS", lat: 37.6872, lon: -97.3301 },
    { city: "Topeka", state: "KS", lat: 39.0473, lon: -95.6752 },
    { city: "Springfield", state: "MO", lat: 37.2089, lon: -93.2923 },
    { city: "Columbia", state: "MO", lat: 38.9517, lon: -92.3341 },
    { city: "Salt Lake City", state: "UT", lat: 40.7608, lon: -111.8910 },
    { city: "Provo", state: "UT", lat: 40.2338, lon: -111.6585 },
    { city: "West Valley City", state: "UT", lat: 40.6916, lon: -112.0011 },
    { city: "Reno", state: "NV", lat: 39.5296, lon: -119.8138 },
    { city: "North Las Vegas", state: "NV", lat: 36.1989, lon: -115.1175 },
    { city: "Boise", state: "ID", lat: 43.6150, lon: -116.2023 },
    { city: "Nampa", state: "ID", lat: 43.5407, lon: -116.5635 },
    { city: "Spokane", state: "WA", lat: 47.6588, lon: -117.4260 },
    { city: "Tacoma", state: "WA", lat: 47.2529, lon: -122.4443 },
    { city: "Bellevue", state: "WA", lat: 47.6101, lon: -122.2015 },
    { city: "Portland", state: "OR", lat: 45.5051, lon: -122.6750 },
    { city: "Eugene", state: "OR", lat: 44.0521, lon: -123.0868 },
    { city: "Salem", state: "OR", lat: 44.9429, lon: -123.0351 },
    { city: "Billings", state: "MT", lat: 45.7833, lon: -108.5007 },
    { city: "Missoula", state: "MT", lat: 46.8721, lon: -113.9940 },
    { city: "Casper", state: "WY", lat: 42.8666, lon: -106.3131 },
    { city: "Cheyenne", state: "WY", lat: 41.1400, lon: -104.8202 },
    { city: "Rapid City", state: "SD", lat: 44.0805, lon: -103.2310 },
    { city: "Bismarck", state: "ND", lat: 46.8083, lon: -100.7837 },
    { city: "Flagstaff", state: "AZ", lat: 35.1983, lon: -111.6513 },
    { city: "Scottsdale", state: "AZ", lat: 33.4942, lon: -111.9261 },
    { city: "Chandler", state: "AZ", lat: 33.3062, lon: -111.8413 },
    { city: "Gilbert", state: "AZ", lat: 33.3528, lon: -111.7890 },
    { city: "Glendale", state: "AZ", lat: 33.5387, lon: -112.1860 },
    { city: "Tempe", state: "AZ", lat: 33.4255, lon: -111.9400 },
    { city: "Santa Fe", state: "NM", lat: 35.6870, lon: -105.9378 },
    { city: "Las Cruces", state: "NM", lat: 32.3199, lon: -106.7637 },
    { city: "Rio Rancho", state: "NM", lat: 35.2328, lon: -106.6630 },
    { city: "Pomona", state: "CA", lat: 34.0553, lon: -117.7500 },
    { city: "Ontario", state: "CA", lat: 34.0633, lon: -117.6509 },
    { city: "Rancho Cucamonga", state: "CA", lat: 34.1064, lon: -117.5931 },
    { city: "Irvine", state: "CA", lat: 33.6846, lon: -117.8265 },
    { city: "Chula Vista", state: "CA", lat: 32.6401, lon: -117.0842 },
    { city: "Oakland", state: "CA", lat: 37.8044, lon: -122.2712 },
    { city: "Fremont", state: "CA", lat: 37.5485, lon: -121.9886 },
    { city: "Modesto", state: "CA", lat: 37.6391, lon: -120.9969 },
    { city: "Oxnard", state: "CA", lat: 34.1975, lon: -119.1771 },
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
    { city: "Surprise", state: "AZ", lat: 33.6292, lon: -112.3679 },
    { city: "Peoria", state: "AZ", lat: 33.5806, lon: -112.2374 },
    { city: "Hialeah", state: "FL", lat: 25.8576, lon: -80.2781 },
    { city: "Cape Coral", state: "FL", lat: 26.5629, lon: -81.9495 },
    { city: "Fort Myers", state: "FL", lat: 26.6406, lon: -81.8723 },
    { city: "Pompano Beach", state: "FL", lat: 26.2379, lon: -80.1248 },
    { city: "Hollywood", state: "FL", lat: 26.0112, lon: -80.1495 },
    { city: "Miramar", state: "FL", lat: 25.9871, lon: -80.2326 },
    { city: "Pembroke Pines", state: "FL", lat: 26.0070, lon: -80.2962 },
    { city: "Port St. Lucie", state: "FL", lat: 27.2939, lon: -80.3503 },
    { city: "Clearwater", state: "FL", lat: 27.9659, lon: -82.8001 },
    { city: "St. Petersburg", state: "FL", lat: 27.7731, lon: -82.6400 },
    { city: "Daytona Beach", state: "FL", lat: 29.2108, lon: -81.0228 },
    { city: "Lakeland", state: "FL", lat: 28.0395, lon: -81.9498 },
    { city: "Ocala", state: "FL", lat: 29.1872, lon: -82.1401 },
    { city: "Kissimmee", state: "FL", lat: 28.2920, lon: -81.4076 },
    { city: "Doral", state: "FL", lat: 25.8196, lon: -80.3511 },
    { city: "Homestead", state: "FL", lat: 25.4687, lon: -80.4776 },
    { city: "Deltona", state: "FL", lat: 28.9005, lon: -81.2637 }
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

// ===== AUTOCOMPLETE =====
function handleAutocomplete(input, dropdownId) {
    const val = input.value.trim().toLowerCase();
    const dropdown = document.getElementById(dropdownId);

    if (val.length < 2) {
        dropdown.classList.remove('open');
        dropdown.innerHTML = '';
        return;
    }

    const matches = US_CITIES.filter(c =>
        c.city.toLowerCase().startsWith(val) ||
        `${c.city}, ${c.state}`.toLowerCase().startsWith(val) ||
        c.city.toLowerCase().includes(val)
    ).slice(0, 8);

    if (matches.length === 0) {
        dropdown.classList.remove('open');
        return;
    }

    dropdown.innerHTML = matches.map((c, i) =>
        `<div class="autocomplete-item" 
            onmousedown="selectCity('${input.id}', '${dropdownId}', ${i}, '${c.city.replace(/'/g, "\\'")}', '${c.state}', ${c.lat}, ${c.lon})"
        >
            ${c.city}<span class="state">${c.state}</span>
        </div>`
    ).join('');

    dropdown.classList.add('open');
}

function selectCity(inputId, dropdownId, index, city, state, lat, lon) {
    const input = document.getElementById(inputId);
    input.value = `${city}, ${state}`;

    const cityData = { city, state, lat, lon };

    // Quote fields
    if (inputId === 'quoteFrom') {
        selectedFrom = cityData;
    } else if (inputId === 'quoteTo') {
        selectedTo = cityData;
    }

    document.getElementById(dropdownId).classList.remove('open');

    // Auto-calculate distance if both are selected
    if ((inputId === 'quoteFrom' || inputId === 'quoteTo') && selectedFrom && selectedTo) {
        const miles = haversine(selectedFrom.lat, selectedFrom.lon, selectedTo.lat, selectedTo.lon);
        document.getElementById('quoteMiles').value = miles;
        calculateQuote();
    }
}

function hideDropdown(dropdownId) {
    // Small delay so onmousedown fires first
    setTimeout(() => {
        const d = document.getElementById(dropdownId);
        if (d) d.classList.remove('open');
    }, 200);
}

// ===== QUOTE CALCULATOR =====
const RATE_PER_MILE = 1.75;

function calculateQuote() {
    const from = document.getElementById('quoteFrom').value.trim();
    const to = document.getElementById('quoteTo').value.trim();
    const miles = parseFloat(document.getElementById('quoteMiles').value);
    const pax = parseInt(document.getElementById('quotePassengers').value);
    const t = translations[currentLang];

    if (!from || !to || !miles || miles <= 0) {
        const msg = currentLang === 'es'
            ? 'Por favor selecciona tus ciudades de origen y destino.'
            : 'Please select your origin and destination cities.';
        showToast(msg, 'error');
        return;
    }

    let total = miles * RATE_PER_MILE;
    if (pax >= 5) total *= 1.08; // small group surcharge

    const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total);
    const milesLabel = currentLang === 'es' ? 'millas' : 'miles';

    document.getElementById('resultPrice').textContent = formatted;
    document.getElementById('resultRoute').textContent = `${from} → ${to} • ${Math.round(miles).toLocaleString()} ${milesLabel}`;

    const resultEl = document.getElementById('quoteResult');
    resultEl.style.display = 'block';

    setTimeout(() => {
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function recalcIfReady() {
    if (selectedFrom && selectedTo && document.getElementById('quoteMiles').value) {
        calculateQuote();
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
    const time = document.getElementById('bookTime').value;
    const pax = document.getElementById('bookPax').value;
    const luggage = document.getElementById('bookLuggage').value;
    const notes = document.getElementById('bookNotes').value.trim();

    const waNumber = '17863971861';
    const msg = currentLang === 'es'
        ? `🚗 *Nueva Reserva — KONA RAITES*\n\n👤 *Nombre:* ${name}\n📱 *Teléfono:* ${phone}\n📍 *Recogida:* ${pickup}\n🏁 *Destino:* ${dropoff}\n📅 *Fecha:* ${date}\n🕐 *Hora:* ${time}\n👥 *Pasajeros:* ${pax}\n🧳 *Maletas:* ${luggage}\n📝 *Notas:* ${notes || 'N/A'}`
        : `🚗 *New Booking — KONA RAITES*\n\n👤 *Name:* ${name}\n📱 *Phone:* ${phone}\n📍 *Pickup:* ${pickup}\n🏁 *Destination:* ${dropoff}\n📅 *Date:* ${date}\n🕐 *Time:* ${time}\n👥 *Passengers:* ${pax}\n🧳 *Bags:* ${luggage}\n📝 *Notes:* ${notes || 'N/A'}`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');

    document.getElementById('bookingForm').style.display = 'none';
    document.getElementById('bookingSuccess').style.display = 'block';
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
        quote_from: "📍 Ciudad de Origen", quote_from_ph: "Ej: Miami, FL",
        quote_to: "🏁 Ciudad de Destino", quote_to_ph: "Ej: Atlanta, GA",
        quote_distance_label: "Distancia Calculada (millas)", quote_miles_ph: "Auto-calculado al seleccionar ciudades",
        quote_passengers: "👥 Número de Pasajeros", quote_btn: "Calcular Mi Cotización →",
        result_est: "Estimación de precio",
        result_note: "*Precio estimado a $1.75 por milla. El precio final puede variar según ruta y condiciones.",
        result_cta: "Reservar Este Raite",
        how_tag: "Fácil y Rápido", how_title: "¿Cómo funciona?", how_subtitle: "En 3 simples pasos estás listo para tu viaje.",
        step1_title: "Pide Tu Raite", step1_desc: "Llena el formulario con tu información, origen, destino y fecha de viaje.",
        step2_title: "Confirmamos", step2_desc: "Te enviamos la confirmación y detalles de tu viaje por WhatsApp.",
        step3_title: "¡Llegamos!", step3_desc: "Tu chofer puntual llega a recogerte y te lleva directo a tu destino.",
        book_tag: "Reserva Tu Raite", book_title: "¡Vamos! Reserva Ahora",
        book_subtitle: "Completa el formulario y te contactamos por WhatsApp para confirmar.",
        book_name: "👤 Nombre Completo", book_name_ph: "Tu nombre completo",
        book_phone: "📱 Número de Teléfono / WhatsApp", book_phone_ph: "(555) 123-4567",
        book_pickup: "📍 Dirección de Recogida", book_pickup_ph: "Ciudad, Estado de recogida",
        book_dropoff: "🏁 Dirección de Destino", book_dropoff_ph: "Ciudad, Estado de destino",
        book_date: "📅 Fecha de Viaje", book_time: "🕐 Hora de Recogida",
        book_pax: "👥 Número de Pasajeros", book_luggage: "🧳 ¿Cuántas Maletas?", luggage_none: "Ninguna",
        book_notes: "📝 Notas Adicionales (opcional)", book_notes_ph: "Cualquier información adicional sobre tu viaje...",
        book_submit: "Reservar Mi Raite por WhatsApp 🚗",
        book_disclaimer: "Al enviar, se abrirá WhatsApp con los detalles de tu reserva para confirmación.",
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
        quote_from: "📍 Origin City", quote_from_ph: "Ex: Miami, FL",
        quote_to: "🏁 Destination City", quote_to_ph: "Ex: Atlanta, GA",
        quote_distance_label: "Calculated Distance (miles)", quote_miles_ph: "Auto-calculated when cities are selected",
        quote_passengers: "👥 Number of Passengers", quote_btn: "Calculate My Quote →",
        result_est: "Price estimate",
        result_note: "*Estimated price at $1.75 per mile. Final price may vary depending on route and conditions.",
        result_cta: "Book This Ride",
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

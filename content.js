// content.js

console.log('content.js start');

// Define the sets data directly in your content.js
const setsData = {
  // Paste your list here in the format: 'Subtitle': 'Symbol',
  'Alternate Art Promos' : 'PR',
  'Aquapolis' : 'AQ',
  'Arceus' : 'AR',
  'Ash vs Team Rocket Deck Kit (JP Exclusive)' : 'AVTR',
  'Base Set' : 'BS',
  'Base Set (Shadowless)' : 'BSS',
  'Base Set 2' : 'BS2',
  'Battle Academy' : 'BTA',
  'Battle Academy 2022' : 'BA22',
  'Best of Promos' : 'PR',
  'Black and White' : 'BLW',
  'Black and White Promos' : 'PR',
  'Blister Exclusives' : 'BLE',
  'Boundaries Crossed' : 'BCR',
  'Burger King Promos' : 'BKP',
  'BW Trainer Kit: Excadrill & Zoroark' : 'BLW',
  'Call of Legends' : 'CL',
  'Celebrations' : 'CLB',
  'Celebrations: Classic Collection' : 'CCC',
  'Champion\'s Path' : 'CHP',
  'Countdown Calendar Promos' : 'CCP',
  'Crown Zenith' : 'CRZ',
  'Crown Zenith: Galarian Gallery' : 'CRZ:GG',
  'Crystal Guardians' : 'CG',
  'Dark Explorers' : 'DEX',
  'Deck Exclusives' : 'PR',
  'Delta Species' : 'DS',
  'Deoxys' : 'DX',
  'Detective Pikachu' : 'DEP',
  'Diamond and Pearl' : 'DP',
  'Diamond and Pearl Promos' : 'PR',
  'Double Crisis' : 'DCR',
  'DP Trainer Kit: Manaphy & Lucario' : 'PR',
  'DP Training Kit 1 Blue' : 'PR',
  'DP Training Kit 1 Gold' : 'PR',
  'Dragon' : 'DR',
  'Dragon Frontiers' : 'DF',
  'Dragon Majesty' : 'DRM',
  'Dragon Vault' : 'DRV',
  'Dragons Exalted' : 'DRX',
  'Emerald' : 'EM',
  'Emerging Powers' : 'EPO',
  'EX Battle Stadium' : 'BST',
  'EX Trainer Kit 1: Latias & Latios' : 'PR',
  'EX Trainer Kit 2: Plusle & Minun' : 'PR',
  'Expedition' : 'EX',
  'FireRed & LeafGreen' : 'RG',
  'First Partner Pack' : 'FPP',
  'Fossil' : 'FO',
  'Generations' : 'GEN',
  'Generations: Radiant Collection' : 'GEN',
  'Great Encounters' : 'GE',
  'Gym Challenge' : 'G2',
  'Gym Heroes' : 'G1',
  'HeartGold SoulSilver' : 'HS',
  'HGSS Promos' : 'PR',
  'HGSS Trainer Kit: Gyarados & Raichu' : 'PR',
  'Hidden Fates' : 'HIF',
  'Hidden Fates: Shiny Vault' : 'HIF:SV',
  'Hidden Legends' : 'HL',
  'Holon Phantoms' : 'HP',
  'Jumbo Cards' : 'PR',
  'Jungle' : 'JU',
  'Kalos Starter Set' : 'KSS',
  'Kids WB Promos' : 'KWBP',
  'League & Championship Cards' : 'PR',
  'Legend Maker' : 'LM',
  'Legendary Collection' : 'LC',
  'Legendary Treasures' : 'LTR',
  'Legendary Treasures: Radiant Collection' : 'LTR',
  'Legends Awakened' : 'LA',
  'Majestic Dawn' : 'MD',
  'McDonald\'s 25th Anniversary Promos' : 'MCD21',
  'McDonald\'s Promos 2014' : 'MCD14',
  'McDonald\'s Promos 2015' : 'MCD15',
  'McDonald\'s Promos 2016' : 'MCD16',
  'McDonald\'s Promos 2017' : 'MCD17',
  'McDonald\'s Promos 2018' : 'MCD18',
  'McDonald\'s Promos 2019' : 'MCD19',
  'McDonald\'s Promos 2022' : 'MCD22',
  'Miscellaneous Cards & Products' : 'MCAP',
  'Mysterious Treasures' : 'MT',
  'Neo Destiny' : 'N4',
  'Neo Discovery' : 'N2',
  'Neo Genesis' : 'N1',
  'Neo Revelation' : 'N3',
  'Next Destinies' : 'NXD',
  'Nintendo Promos' : 'PR',
  'Noble Victories' : 'NVI',
  'Pikachu World Collection Promos' : 'PWCP',
  'Plasma Blast' : 'PLB',
  'Plasma Freeze' : 'PLF',
  'Plasma Storm' : 'PLS',
  'Platinum' : 'PL',
  'Pokemon GO' : 'PGO',
  'POP Series 1' : 'POP',
  'POP Series 2' : 'POP',
  'POP Series 3' : 'POP',
  'POP Series 4' : 'POP',
  'POP Series 5' : 'POP',
  'POP Series 6' : 'POP',
  'POP Series 7' : 'POP',
  'POP Series 8' : 'POP',
  'POP Series 9' : 'POP',
  'Power Keepers' : 'PK',
  'Professor Program Promos' : 'PPP',
  'Rising Rivals' : 'RR',
  'Ruby and Sapphire' : 'RS',
  'Rumble' : 'RUM',
  'Sandstorm' : 'SS',
  'Secret Wonders' : 'SW',
  'Shining Fates' : 'SHF',
  'Shining Fates: Shiny Vault' : 'SHFSV',
  'Shining Legends' : 'SHL',
  'Skyridge' : 'SK',
  'SM - Burning Shadows' : 'SM03',
  'SM - Celestial Storm' : 'CES',
  'SM - Cosmic Eclipse' : 'SM12',
  'SM - Crimson Invasion' : 'SM04',
  'SM - Forbidden Light' : 'SM06',
  'SM - Guardians Rising' : 'SM02',
  'SM - Lost Thunder' : 'SM8',
  'SM - Team Up' : 'SM9',
  'SM - Ultra Prism' : 'SM05',
  'SM - Unbroken Bonds' : 'SM10',
  'SM - Unified Minds' : 'SM11',
  'SM Base Set' : 'SM01',
  'SM Promos' : 'SMP',
  'SM Trainer Kit: Alolan Sandslash & Alolan Ninetales' : 'SMK2',
  'SM Trainer Kit: Lycanroc & Alolan Raichu' : 'SMK1',
  'Southern Islands' : 'SI',
  'Stormfront' : 'SF',
  'Supreme Victors' : 'SV',
  'SV: Scarlet & Violet Promo Cards' : 'SV',
  'SV: Scarlet and Violet 151' : 'MEW',
  'SV01: Scarlet & Violet Base Set' : 'SV01',
  'SV02: Paldea Evolved' : 'SV02',
  'SV03: Obsidian Flames' : 'SV03',
  'SV04: Paradox Rift' : 'SV04',
  'SWSH: Sword & Shield Promo Cards' : 'SWSD',
  'SWSH01: Sword & Shield Base Set' : 'SWSH01',
  'SWSH02: Rebel Clash' : 'SWSH02',
  'SWSH03: Darkness Ablaze' : 'SWSH03',
  'SWSH04: Vivid Voltage' : 'SWSH04',
  'SWSH05: Battle Styles' : 'SWSH05',
  'SWSH06: Chilling Reign' : 'SWSH06',
  'SWSH07: Evolving Skies' : 'SWSH07',
  'SWSH08: Fusion Strike' : 'SWSH08',
  'SWSH09: Brilliant Stars' : 'SWSH09',
  'SWSH09: Brilliant Stars Trainer Gallery' : 'SWSH09:TG',
  'SWSH10: Astral Radiance' : 'SWSH10',
  'SWSH10: Astral Radiance Trainer Gallery' : 'SWSH10:TG',
  'SWSH11: Lost Origin' : 'SWSH11',
  'SWSH11: Lost Origin Trainer Gallery' : 'SWSH11: TG',
  'SWSH12: Silver Tempest' : 'SWSH12',
  'SWSH12: Silver Tempest Trainer Gallery' : 'SWSH12: TG',
  'Team Magma vs Team Aqua' : 'MA',
  'Team Rocket' : 'TR',
  'Team Rocket Returns' : 'RR',
  'Trick or Trade BOOster Bundle' : 'TTBB',
  'Trick or Trade BOOster Bundle 2023' : 'TTBB23',
  'Triumphant' : 'TM',
  'Undaunted' : 'UD',
  'Unleashed' : 'UL',
  'Unseen Forces' : 'UF',
  'World Championship Decks' : 'WCD',
  'WoTC Promo' : 'PR',
  'XY - Ancient Origins' : 'AOR',
  'XY - BREAKpoint' : 'BKP',
  'XY - BREAKthrough' : 'BKT',
  'XY - Evolutions' : 'EVO',
  'XY - Fates Collide' : 'FCO',
  'XY - Flashfire' : 'FLF',
  'XY - Furious Fists' : 'FFI',
  'XY - Phantom Forces' : 'PHF',
  'XY - Primal Clash' : 'PRC',
  'XY - Roaring Skies' : 'ROS',
  'XY - Steam Siege' : 'STS',
  'XY Base Set' : 'XY',
  'XY Promos' : 'PR',
  'XY Trainer Kit: Bisharp & Wigglytuff' : 'PR',
  'XY Trainer Kit: Latias & Latios' : 'PR',
  'XY Trainer Kit: Pikachu Libre & Suicune' : 'PR',
  'XY Trainer Kit: Sylveon & Noivern' : 'PR',  // Add more items as needed
};

// Function to add the button to each search result
function addButtonToSearchResults() {
  const addButton = document.createElement('button');
  addButton.textContent = 'Add above card to List';
  addButton.style.marginLeft = '10px';

  // Create a new button to add all search-result items to the list
  const addAllButton = document.createElement('button');
  addAllButton.textContent = 'Add current page to list';
  addAllButton.style.marginRight = '10px';

  // Insert the "Add All to List" button at the top of the page
  const headerElement = document.querySelector('.search-toolbar__result-count');
  headerElement.appendChild(addAllButton);

  const searchResultContainers = document.querySelectorAll('.search-result');

  searchResultContainers.forEach(container => {
    const titleElement = container.querySelector('.search-result__title');
    if (titleElement) {
      const cloneButton = addButton.cloneNode(true);

      cloneButton.addEventListener('click', () => {
        const subtitleElement = container.querySelector('.search-result__subtitle');
        const title = titleElement.textContent.trim();
        const subtitle = subtitleElement ? subtitleElement.textContent.trim() : '';
        const listItem = document.createElement('li');

        const symbol = setsData[subtitle] || '';
        listItem.textContent = `1 ${title} [${symbol}]`;

        // Save the search results to storage
        chrome.storage.local.get(['searchResults'], result => {
          const searchResults = result.searchResults || [];
          searchResults.push(`1 ${title} [${symbol}]`);
          chrome.storage.local.set({ searchResults: searchResults });
        });
      });

      container.appendChild(cloneButton);
    }
  });

  // Event listener for the "Add All to List" button
  addAllButton.addEventListener('click', () => {
    const searchResultsToAdd = [];

    searchResultContainers.forEach(container => {
      const titleElement = container.querySelector('.search-result__title');
      const subtitleElement = container.querySelector('.search-result__subtitle');
      const title = titleElement?.textContent.trim();
      const subtitle = subtitleElement?.textContent.trim();
      const symbol = setsData[subtitle] || '';

      if (title && subtitle) {
        searchResultsToAdd.push(`1 ${title} [${symbol}]`);
      }
    });

    // Save all search results to storage
    chrome.storage.local.get(['searchResults'], result => {
      const searchResults = result.searchResults || [];
      const updatedSearchResults = searchResults.concat(searchResultsToAdd);
      chrome.storage.local.set({ searchResults: updatedSearchResults });
    });
  });
}

// Function to start observing the DOM changes
function observeDOM() {
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        // Check if the desired element(s) is now available
        if (document.querySelector('.search-result')) {
          console.log('DOM updated. Enter script');
          addButtonToSearchResults();
          observer.disconnect();
          break;
        }
      }
    }
  });

  // Start observing the body and subtree changes
  observer.observe(document.body, { childList: true, subtree: true });
}

console.log('DOM loaded. Starting observer');
observeDOM();

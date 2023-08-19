// popup.js

document.addEventListener('DOMContentLoaded', () => {
    const resultList = document.getElementById('resultList');
    const clearButton = document.getElementById('clearButton');
  
    clearButton.addEventListener('click', () => {
      resultList.value = '';
      chrome.storage.local.set({ searchResults: [] }); // Clear the storage
    });
  
    chrome.storage.local.get(['searchResults'], result => {
      const searchResults = result.searchResults || [];
      resultList.value = searchResults.join('\n'); // Join with new lines
    });
  });
  
chrome.runtime.onInstalled.addListener(function() {
    // Set the alarm to trigger at 9 PM every day
    chrome.alarms.create("openWebsites", {
      when: tomorrowAt9PM(),
      periodInMinutes: 24 * 60 // Repeat every 24 hours
    });
  });
  
  chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "openWebsites") {
      // Open the set of websites
      openWebsites();
    }
  });
  
  function tomorrowAt9PM() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 21, 0, 0, 0);
    return now.getTime();
  }
  
  function openWebsites() {
    // Add the URLs of the websites you want to open
    let websites = [
      "https://www.myfitnesspal.com/",
      "https://docs.google.com/spreadsheets/d/1RCrMugjZKkH6yrkex7GQqrIRnTNH28UUi92PuyQgfok/edit#gid=675488461"
    ];
  
    // Open each website in a new tab
    websites.forEach(function(url) {
      chrome.tabs.create({ url: url });
    });
  }
  
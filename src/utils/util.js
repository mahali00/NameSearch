const logDataToConsole = (response) => {
  console.log(`Search results for ${response.input}\n`);

  // Twitter
  console.log(
    `Total number of twitter users found ${response.data.twitter.num_users}`
  );

  response.data.twitter.users.length != 0 &&
    console.table(response.data.twitter.users);

  // Instagram
  console.log(
    `\nTotal number of instagram users found ${response.data.instagram.num_users}`
  );

  response.data.instagram.users.length != 0 &&
    console.table(response.data.instagram.users);

  // Google & Wiki
  const groupGoogleWiki = [
    { source: "google", items: response.data.google.items },
    { source: "Wikipedia", items: response.data.wikipedia.items },
  ];

  console.group(`\nItems found on Wiki and Google`);
  console.table(groupGoogleWiki);
  console.groupEnd();

  // Web Score
  console.group(`\nSearch Score`);
  console.table(response.scores);
  console.groupEnd();
};

const hasNumberOrSymbol = (val) => {
  var matches = val.match(/^[a-zA-Z ]+$/);
  // console.log(matches);
  if (matches != null) {
    return false;
  } else {
    return true;
  }
};

module.exports = { logDataToConsole, hasNumberOrSymbol };

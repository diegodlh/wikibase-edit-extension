const wbEdit = require('wikibase-edit')({
	instance: 'https://www.wikidata.org'
});

function run() {
	const ts = new Date().getTime().toString()
	console.log(ts);
	wbEdit.alias.add({
  		id: 'Q4115189', // Wikidata sandbox item
  		language: 'la',
  		value: ts
		}, {
			credentials: {
				username: 'username',
				password: 'password'
			},
			anonymous: false
			// anonymous: true,
		}
	);
}

chrome.browserAction.onClicked.addListener(run);
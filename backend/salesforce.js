var sf = require('node-salesforce');
var conn = new sf.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://test.salesforce.com'
});

var username = "mtsang32@gatech.edu";
var password = "Salesforce!111";

conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    // ...
});



//Creating a field
// conn.sobject("Account").create({ Name : 'My Account #1' }, function(err, ret) {
//     if (err || !ret.success) { return console.error(err, ret); }
//     console.log("Created record id : " + ret.id);
//     // ...
// });
// //
// //
// conn.sobject("Account").create([
//         { Name : 'My Account #1' },
//         { Name : 'My Account #2' }
//     ],
//     function(err, rets) {
//         if (err) { return console.error(err); }
//         for (var i=0; i < rets.length; i++) {
//             if (rets[i].success) {
//                 console.log("Created record id : " + rets[i].id);
//             }
//         }
//         // ...
//     });
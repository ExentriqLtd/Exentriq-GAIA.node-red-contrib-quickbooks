var QuickBooks = require('node-quickbooks')

var consumerKey = 'qyprd9x1Eq6sjGi8yiUh7vgmravH9E';
var consumerSecret = 'AEwGrksxjPPRO9ps5Wle3451jp3VRRm3XixhKR0n';
var oauthToken = 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..vBb1n8k8x0v8E8yaLUDeIA.nQ304US0igxOT75CcGmG-n-fjqyryXaIGm_efTxJvwz5CpEVo7tqukNwDJh9UBqZ6PigXB4aPpHXz0pH2fIjD1QRg_3e1WS9rG58bD2UgtNVr23Lw-SoKa1C_4FNLXcGzJ-fewiwfpTojmrUhppm6RZNiJ_v_4k4k239p2-q3nIB93L4FwVVxsu75xaw4xVlqBikKstS-dAbZOmB4BAFTzZa4wF-hVKZrFpqcX1dx6CSjfW-zYzlVGIkRNMoFcSNVPWJ8_ySx0tCSpPvKrwNky183CLZ0ZwwigC2eEfmoIc3LlyNHhiGZyh66HdsSx05a7SoTEUzSxezheY5xo0oYqKf_cpnc6SpGCrfHKGauSa-Jae4Ks7Ef2YgfkzxYcRZ4hIgKKsQpo8JDM-dUC3Ez5X0W6obnhuDW_nok4bGymxw2gTAcL3_6FkhCB4-pFl1raL_P3650ydDDpw3aESxGSqTz3a0WtaEjoVMCnybJNWhI3XatNscRYcJHRLeZurYur62ATRa7jfrnOiq1sLni8do_L28CPpPB6Sq7wJ3d7LLbFTmc8UZWjJKarsOE9DT3fOmpEKTUpVDOHAsHTTZbNZhk7IDRg0Gld2apUyP1NXINns6iipTlyMDHg0YzvI4uJ1kEuORPxtgjaKG2Khg5iYlT6ldD3S-hHTf1DkDE6Jh_Vg05pYGJoZl667POOFUHuBY7ojuCXIx3MsaelU8Eg.3fdJz9B-PkoZPmpCHF01xA';
var realmId = '123145829205127';
var refreshToken = 'AB11590750600fIYicxkzF4W5o5KJS3ooxzxCft6tFlrBD5FhZ';
var sandbox = true;

var qbo = new QuickBooks(consumerKey,
                         consumerSecret,
                         oauthToken,
                         false, // no token secret for oAuth 2.0
                         realmId,
                         sandbox, // use the sandbox?
                         true, // enable debugging?
                         null, // set minorversion, or null for the latest version
                         '2.0', //oAuth version
                         refreshToken);

qbo.getCompanyInfo(1, function(error, result){
  console.log("INFO");
  console.log(result);
  console.log("ERROR");
  console.log(error);
});

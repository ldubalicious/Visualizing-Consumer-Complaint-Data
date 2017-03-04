// **CLIENT-SIDE JAVASCRIPT for FINAL PROJECT** //

// show placeholder div until just after the page is fully loaded:
$("document").ready(function(){
    setTimeout(function(){
      $(".placeholder").fadeOut("slow");
  }, 2000);
});

// assign variables to divs:
var timeseries_div = $("#timeseries");
var datapt = $(".datapt");
var bankacct_div = $("#bankacct");
var consumerloan_div = $("#consumerloan");
var creditcard_div = $("#creditcard");
var creditreporting_div = $("#creditreporting");
var debtcollection_div = $("#debtcollection");
var moneytransfer_div = $("#moneytransfer");
var mortgage_div = $("#mortgage");
var other_div = $("#other");
var payday_div = $("#payday");
var prepaid_div = $("#prepaid");
var articlediv = $(".article");

// Find the NYT API and build URI to filter BLM results:
var json = "https://data.consumerfinance.gov/resource/jhzv-w97w.json?$limit=10000&";
var token = "$$app_token=qjSA1nsCA7haDloHHNR05GFRv";
var cfpbURL = json + token;
console.log(cfpbURL);

// Find specific data within CFPB JSON:
var parseCFPB = function(data) {
  for(var index=0; index < data.length; index++) {
    
    // for every data point, find the "product type"...
    var product = data[index].product;

    // slow fade in the data points to replace "placeholder":
    setTimeout(function(){
      datapt.fadeIn("slow");
    }, 2000);

    // create a new div for each data point
    // set each data point's styling based on its category
    // add the data point to the timeseries div and the product-category div:

    // 1. Bank account or service
    if (product == "Bank account or service") {
      var bankacct_makediv = "<div class='datapt bankacct_color'></div>";
        timeseries_div.append(bankacct_makediv);
        bankacct_div.append(bankacct_makediv);
      }

      // 2. Consumer Loan
      else if (product == "Consumer Loan") {
        var consumerloan_makediv = "<div class='datapt consumerloan_color'></div>";
        timeseries_div.append(consumerloan_makediv);
        consumerloan_div.append(consumerloan_makediv);
      }

      // 3. Credit card
      else if (product == "Credit card") {
        var creditcard_makediv = "<div class='datapt creditcard_color'></div>";
        timeseries_div.append(creditcard_makediv);
        creditcard_div.append(creditcard_makediv);
      }

      // 4. Credit reporting
      else if (product == "Credit reporting") {
        var creditreporting_makediv = "<div class='datapt creditreporting_color'></div>";
        timeseries_div.append(creditreporting_makediv);
        creditreporting_div.append(creditreporting_makediv);
      }

      // 5. Debt collection
      else if (product == "Debt collection") {
        var debtcollection_makediv = "<div class='datapt debtcollection_color'></div>";
        timeseries_div.append(debtcollection_makediv);
        debtcollection_div.append(debtcollection_makediv);
      }

      // 6. Money transfers
      else if (product == "Money transfers") {
        var moneytransfer_makediv = "<div class='datapt moneytransfer_color'></div>";
        timeseries_div.append(moneytransfer_makediv);
        moneytransfer_div.append(moneytransfer_makediv);
      }

      // 7. Mortgage
      else if (product == "Mortgage") {
        var mortgage_makediv = "<div class='datapt mortgage_color'></div>";
        timeseries_div.append(mortgage_makediv);
        mortgage_div.append(mortgage_makediv);
      }

      // 8. Other financial service
      else if (product == "Other financial service") {
        var other_makediv = "<div class='datapt other_color'></div>";
        timeseries_div.append(other_makediv);
        other_div.append(other_makediv);
      }

      // 9. Payday loan
      else if (product == "Payday loan") {
        var payday_makediv = "<div class='datapt paydayloan_color'></div>";
        timeseries_div.append(payday_makediv);
        payday_div.append(payday_makediv);
      }

      // 10. Prepaid card
      else if (product == "Prepaid card") {
        var prepaid_makediv = "<div class='datapt prepaid_color'></div>";
        timeseries_div.append(prepaid_makediv);
        prepaid_div.append(prepaid_makediv);
      }

  };

  console.log(data);
};

// get JSON CFPB data:
$.getJSON(cfpbURL, parseCFPB);

// NEW YORK TIMES //
// find the NYT API and build URI to filter results:

var nytAPI = "http://api.nytimes.com/svc/search/v2/articlesearch.json?";

// return matches for CFPB-related articles about each product category:
var apiKey = "&api-key=f3b6cc8d4ec545c8909afad13803c307";

var nytQuery_bankacct = "q=consumer+financial+protection+bureau+bank+account+fee";
var nytQuery_consumerloan = "q=consumer+financial+protection+bureau+lending+loan";
var nytQuery_creditcard = "q=consumer+financial+protection+bureau+credit+card";
var nytQuery_creditreporting = "q=consumer+financial+protection+bureau+credit+report";
var nytQuery_debtcollection = "q=consumer+financial+protection+bureau+debt+collection";
var nytQuery_moneytransfer = "q=consumer+financial+protection+bureau+transfer+money";
var nytQuery_mortgage = "q=consumer+financial+protection+bureau+mortgage+home+loan";
var nytQuery_other = "q=consumer+financial+protection+bureau+financial+services";
var nytQuery_payday = "q=consumer+financial+protection+bureau+payday+loan+lending";
var nytQuery_prepaid = "q=consumer+financial+protection+bureau+prepaid+card";

var nytURL_bankacct = nytAPI + nytQuery_bankacct + apiKey;
var nytURL_consumerloan = nytAPI + nytQuery_consumerloan + apiKey;
var nytURL_creditcard = nytAPI + nytQuery_creditcard + apiKey;
var nytURL_creditreporting = nytAPI + nytQuery_creditreporting + apiKey;
var nytURL_debtcollection = nytAPI + nytQuery_debtcollection + apiKey;
var nytURL_moneytransfer = nytAPI + nytQuery_moneytransfer + apiKey;
var nytURL_mortgage = nytAPI + nytQuery_mortgage + apiKey;
var nytURL_other = nytAPI + nytQuery_other + apiKey;
var nytURL_payday = nytAPI + nytQuery_payday + apiKey;
var nytURL_prepaid = nytAPI + nytQuery_prepaid + apiKey;

// 1. Find BANK ACCOUNT & SERVICES Articles:

bankacct_div.click(function(){
  parseNYT_bankacct = function(NYTdata_bankacct) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_bankacct.response.docs[index].headline.main;
      console.log("bankacct: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_bankacct.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_bankacct.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_bankacct.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#bankacct.label").fadeIn();
      $("#bankacct.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#bankacct_div)").click(function(){
        $("#bankacct.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_bankacct, parseNYT_bankacct);
});

// 2. Find CONSUMER LOAN Articles:

consumerloan_div.click(function(){
  parseNYT_consumerloan = function(NYTdata_consumerloan) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_consumerloan.response.docs[index].headline.main;
      console.log("consumerloan: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_consumerloan.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_consumerloan.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_consumerloan.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#consumerloan.label").fadeIn();
      $("#consumerloan.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#consumerloan_div)").click(function(){
        $("#consumerloan.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_consumerloan, parseNYT_consumerloan);
});


// 3. Find CREDIT CARD Articles:

creditcard_div.click(function(){
  parseNYT_creditcard = function(NYTdata_creditcard) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_creditcard.response.docs[index].headline.main;
      console.log("creditcard: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_creditcard.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_creditcard.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_creditcard.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#creditcard.label").fadeIn();
      $("#creditcard.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#creditcard_div)").click(function(){
        $("#creditcard.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_creditcard, parseNYT_creditcard);
});

// 4. Find CREDIT REPORTING Articles:

creditreporting_div.click(function(){
  parseNYT_creditreporting = function(NYTdata_creditreporting) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_creditreporting.response.docs[index].headline.main;
      console.log("creditreporting: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_creditreporting.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_creditreporting.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_creditreporting.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#creditreporting.label").fadeIn();
      $("#creditreporting.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#creditreporting_div)").click(function(){
        $("#creditreporting.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_creditreporting, parseNYT_creditreporting);
});

// 5. Find DEBT COLLECTION Articles:

debtcollection_div.click(function(){
  parseNYT_debtcollection = function(NYTdata_debtcollection) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_debtcollection.response.docs[index].headline.main;
      console.log("debtcollection: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_debtcollection.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_debtcollection.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_debtcollection.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#debtcollection.label").fadeIn();
      $("#debtcollection.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#debtcollection_div)").click(function(){
        $("#debtcollection.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_debtcollection, parseNYT_debtcollection);
});


// 6. Find MONEY TRANSFER Articles:

moneytransfer_div.click(function(){
  parseNYT_moneytransfer = function(NYTdata_moneytransfer) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_moneytransfer.response.docs[index].headline.main;
      console.log("moneytransfer: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_moneytransfer.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_moneytransfer.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_moneytransfer.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#moneytransfer.label").fadeIn();
      $("#moneytransfer.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#moneytransfer_div)").click(function(){
        $("#moneytransfer.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_moneytransfer, parseNYT_moneytransfer);
});

// 7. Find MORTGAGE Articles:

mortgage_div.click(function(){
  parseNYT_mortgage = function(NYTdata_mortgage) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_mortgage.response.docs[index].headline.main;
      console.log("mortgage: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_mortgage.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_mortgage.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_mortgage.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#mortgage.label").fadeIn();
      $("#mortgage.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#mortgage_div)").click(function(){
        $("#mortgage.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_mortgage, parseNYT_mortgage);
});

// 8. Find OTHER FINANCIAL SERVICES Articles:

other_div.click(function(){
  parseNYT_other = function(NYTdata_other) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_other.response.docs[index].headline.main;
      console.log("other: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_other.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_other.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_other.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#other.label").fadeIn();
      $("#other.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#other_div)").click(function(){
        $("#other.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_other, parseNYT_other);
});


// 9. Find PREPAID Articles:

prepaid_div.click(function(){
  parseNYT_prepaid = function(NYTdata_prepaid) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_prepaid.response.docs[index].headline.main;
      console.log("prepaid: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_prepaid.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_prepaid.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_prepaid.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#prepaid.label").fadeIn();
      $("#prepaid.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#prepaid_div)").click(function(){
        $("#prepaid.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_prepaid, parseNYT_prepaid);
});

// 9. Find PAYDAY LOAN Articles:

payday_div.click(function(){
  parseNYT_payday = function(NYTdata_payday) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_payday.response.docs[index].headline.main;
      console.log("payday: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_payday.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_payday.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_payday.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#payday.label").fadeIn();
      $("#payday.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#payday_div)").click(function(){
        $("#payday.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_payday, parseNYT_payday);
});

// 10. Find PREPAID CARD Articles:

prepaid_div.click(function(){
  parseNYT_prepaid = function(NYTdata_prepaid) {
    for(var index=0; index < 5; index++) {
      // get headline:
      var headline = NYTdata_prepaid.response.docs[index].headline.main;
      console.log("prepaid: "+ headline);

      // get publication date and separate month, date, year into readable format:
      var pub_date = NYTdata_prepaid.response.docs[index].pub_date;
      var day = pub_date.substring(5,7);
      var month = pub_date.substring(8,10);
      var year = pub_date.substring(0,4);
      var date = day + " - " + month + " - " + year;
      var articleURL = NYTdata_prepaid.response.docs[index].web_url;

      // get lead paragraph:
      var lead_paragraph = NYTdata_prepaid.response.docs[index].lead_paragraph;
      var articlesummary = "<div class='article'><a href='" + articleURL + "' <h3>" + headline + "</a></h3>" + "<p class='date'>" + date + "</p><p>" + lead_paragraph + "</p>" + "</div>";
      var article_array = [];
      article_array.push(articlesummary);
      console.log(article_array);
      $("#prepaid.label").fadeIn();
      $("#prepaid.label").append(article_array);

      // if you click anywhere but that div, clear the left column:
      $(":not(#prepaid_div)").click(function(){
        $("#prepaid.label").hide();
      });
    };
  };

  // get JSON data:
  $.getJSON(nytURL_prepaid, parseNYT_prepaid);
});

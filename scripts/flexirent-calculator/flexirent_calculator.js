/*
Flexirent Calculator Widget
Author: Patrick C
Copyright: The Smart Group
Author URL: www.thesmartgroup.ie
Useage: This script is for use only on our authorised clients and not to be used without permission, sold, copied or re-distributed
Version: 1.0
Date: 10-9-2015
-----------------
USEAGE
Include the javascript file and the div below
<div id="flexirent-widget" data-apply="http://www.smartgroup.dev" data-price="1501"></div>
data-apply: url to the application page
data-price: product price
-----------------
*/

var cssId = 'myCss';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'http://netsmart.ie/dev/scripts/flexirent_calculator.css';
    link.media = 'all';
    head.appendChild(link);
}


function empty(data)
{
  if(typeof(data) == 'number' || typeof(data) == 'boolean')
  { 
    return false; 
  }
  if(typeof(data) == 'undefined' || data === null)
  {
    return true; 
  }
  if(typeof(data.length) != 'undefined')
  {
    return data.length == 0;
  }
  var count = 0;
  for(var i in data)
  {
    if(data.hasOwnProperty(i))
    {
      count ++;
    }
  }
  return count == 0;
}


//var flexi = document.getElementById('price').textContent;
//flexi = flexi.replace(/[^0-9\.]/g, '');

var flexidata = document.getElementById('flexirent-widget');
//alert(flexidata.dataset.apply);
//alert(flexidata.dataset.price);
//alert(flexidata.dataset.currency);

var flexi = flexidata.dataset.price;
var flexiapply = flexidata.dataset.apply;
var currency = flexidata.dataset.currency;

//alert(flexi);

function tidy(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


//Check the price and set the interests rates				
if (flexi >= 400 && flexi <= 1000) {
	var bracket12 = 10.33;
	var bracket24 = 6.40;
	var bracket36 = 5.19;
	} 
else if (flexi >= 1001 && flexi <= 1500) {
	var bracket12 = 10.22;
	var bracket24 = 6.28;
	var bracket36 = 4.79;
	}
else if (flexi >= 1501 && flexi <= 2000) {
	var bracket12 = 10.12;
	var bracket24 = 6.16;
	var bracket36 = 4.66;
	}				
else if (flexi >= 2001 && flexi <= 2500) {
	var bracket12 = 10.02;
	var bracket24 = 6.04;
	var bracket36 = 4.52;
	}	
else if (flexi >= 2501 && flexi <= 3000) {
	var bracket12 = 9.92;
	var bracket24 = 5.92;
	var bracket36 = 4.40;
	}						
else if (flexi >= 3001 && flexi <= 3750) {
	var bracket12 = 9.92;
	var bracket24 = 5.92;
	var bracket36 = 4.40;
	}		
else if (flexi >= 3751 && flexi <= 4500) {
	//var bracket12 = ;
	var bracket24 = 5.80;
	var bracket36 = 4.27;
	}			
else if (flexi >= 4501 && flexi <= 7500) {
	//var bracket12 = ;
	var bracket24 = 5.69;
	var bracket36 = 4.14;
	}		
else if (flexi >= 7501 && flexi <= 15000) {
	//var bracket12 = ;
	var bracket24 = 5.45;
	var bracket36 = 4.02;
	}	


//Apply the forumla
if (bracket12) {
    var flex12 = tidy(flexi * bracket12 / 100, 2); //monthly
    var flexwk12 = tidy(flex12 * 12 / 52, 2); //weekly
}

if (bracket24) {
    var flex24 = tidy(flexi * bracket24 / 100, 2); //monthly
    var flexwk24 = tidy(flex24 * 12 / 104, 2); //weekly
}

if (bracket36) {
    var flex36 = tidy(flexi * bracket36 / 100, 2); //monthly
    var flexwk36 = tidy(flex36 * 12 / 156, 2); //weekly
}

if (flex12) {
var monthly12 = '<li><span class="flexi-rate">' + currency + flex12 + '</span> per month over <span class="flexi-duration">12 months</span></li>';
} else {
	var monthly12 = '';
}

if (flex24) {
var monthly24 = '<li><span class="flexi-rate">' + currency + flex24 + '</span> per month over <span class="flexi-duration">24 months</span></li>';
} else {
	var monthly24 = '';
}

if (flex36) {
var monthly36 = '<li><span class="flexi-rate">' + currency + flex36 + '</span> per month over <span class="flexi-duration">36 months</span></li>';
} else {
	var monthly36 = '';
}

//Check that the minimum and maximum price of the product is in range
if (flexi >= 400 && flexi <= 15000) {
document.getElementById("flexirent-widget").innerHTML = '<div class="flexi-inner"><div class="flexi-header"><img src="http://www.netsmart.ie/dev/scripts/flexirent-logo.jpg" /></div><ul class="flexi-list">' + monthly12 + monthly24 + monthly36 + '</ul><div class="flexi-footer"><a href="' + flexiapply + '" class="flexi-apply-btn">Apply Now</a></div></div>';
}
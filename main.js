var imgs = {
	"bluebird.jpg":0.3125, 
	"anima.jpg":0.0588, 
	"tesco.jpg":0.0575,
	"lidl.png":0.0525,
	"digiorgio.png":0.0494,
	"bluebear.jpg":0.0831,
	"sullys.jpg":0.0438,
	"lezzetli.jpg":0.0488,
	"margiotta.png":0.0475,
	"waterofleith.png":0.0413,
	"newtowndeli.jpg":0.0238,
	"galway.png":0.0488,
	"coffeeangel.jpg":0.0488,
  "mands.jpg":0.0313,
  "caffeine.jpg":0.0288,
  "finnegans.jpg":0.0238
};

var rejectionTable;

function buildRejectionTable ()	{
	var i, j, table=[];
	for (i in imgs) {
		for (j = 0; j < imgs[i]*10000; j++) {
			table.push(i);
		}
	}
	rejectionTable = table; 
}
	
function setImg (date) {  
	var tableEntry = getTableEntry(date);
	document.getElementById('logo').src = "img/" + tableEntry;
}

function getTableEntry (date) {
  var dateStr = new Date(date).setUTCHours(0,0,0,0).toString();
	return rejectionTable[Number(dateStr.substring(6,8) + dateStr.substring(4,6))];
}

function buildCalendar () {
	YUI().use('calendar', 'datatype-date', 'cssbutton',  function(Y) {
		var calendar = new Y.Calendar({
			contentBox: "#calendar",
			width:'340px',
			date: new Date()}).render();
    calendar.selectDates(new Date()); 
      
		var dtdate = Y.DataType.Date;

		calendar.on("selectionChange", function (ev) {
			var newDate = ev.newSelection[0];
			setImg(dtdate.format(newDate));
		});
	});	
	document.getElementById('calendar').style.display = 'none';
}

window.onload = function() {  
	buildRejectionTable();
	buildCalendar();  
  var date = Date.parse(window.location.search.replace("?", "").split("&")[0]);
  if (!isNaN(date)) {
    window.location.replace('http://whereshouldweb3goforlun.ch/img/'+getTableEntry(date));    
  } else {
    setImg(new Date());
  }
};

function show () {
	document.getElementById('show').style.display = 'none';
	document.getElementById('calendar').style.display = '';
}
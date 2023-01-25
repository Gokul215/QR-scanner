const QRCode = require('qrcode')
let date_ob = new Date();

let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let year = date_ob.getFullYear();

let hours = date_ob.getHours();

let minutes = date_ob.getMinutes();

let seconds = date_ob.getSeconds();

console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

let data = {
	
    year:year,
    month:month,
    date:date,
    hours:hours,
    minutes:minutes,
    seconds:seconds   
}


let stringdata = JSON.stringify(data)


QRCode.toString(stringdata,{type:'terminal'},
					function (err, QRcode) {

	if(err) return console.log("error occurred")

	console.log(QRcode)
})

QRCode.toDataURL(stringdata, function (err, code) {
	if(err) return console.log("error occurred")

	console.log(code)
})
QRCode.toFile("tr.png",stringdata, function (err) {
	if(err) return console.log("error occurred")

})

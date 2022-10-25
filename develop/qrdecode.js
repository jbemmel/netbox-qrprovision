#!/usr/bin/node

const QR = '[)>\x1E06\x1D1P3HE12345AARA01\x1DSNK214901234\x1D18VLENOK\x1DD211207\x1D1VNKS\x1D11PABCDEFGHIJ\x1D4LMX\x1D2P01\x1E\x04'

const GS = String.fromCharCode(29)
const RS = String.fromCharCode(30)

const start = QR.indexOf(RS)
const end = QR.indexOf(RS,start+1)
console.log( `Start: ${start} End: ${end}` )

const DECODE = {
  "1P" : "Part number",
  "2P" : "Revision",
  "11P": "CLEI data",
  "1V" : "Manufacturing location",
  "18V": "Company ID",
  "D"  : "Manufacturing date",
  "S"  : "Serial number",
  "4L" : "Country of origin"
}

for (value of QR.substr(start,end).split(GS)) {
  console.log(`Field: ${value}`)
  for (const p in DECODE) {
    if (value.startsWith(p)) {
      console.log(`${DECODE[p]}: ${value.slice(p.length)}`)
      break;
    }
  }
}

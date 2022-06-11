// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

// const bacaData = null;
const fs = require('fs');

let hasil=[];

const  bacaData = (err,data)=>{

fs.readFile(file1,'utf8',(err,data1) =>{
  if (err){
    return console.log('Error data 1 '+err);
  }

  fs.readFile(file2,'utf8',(err,data2) =>{
    if (err){
      return console.log('Error data 2 '+err);
    }

    fs.readFile(file3,'utf8',(err,data3) =>{
      if (err){
        return console.log('Error data 3 '+err);
      }
      
      let jsonfile1 = JSON.parse(data1);
      let jsonfile2 = JSON.parse(data2);
      let jsonfile3 = JSON.parse(data3);

      let datanya1 = jsonfile1.message;
      let datanya2 = jsonfile2[0].message;
      let datanya3 = jsonfile3[0].data.message;
      hasil.push(datanya1.slice(datanya1.indexOf(" ")+1,datanya1.length));
      hasil.push(datanya2.slice(datanya2.indexOf(" ")+1,datanya2.length));
      hasil.push(datanya3.slice(datanya3.indexOf(" ")+1,datanya3.length));
      
      // const arrhasil = hasil.map((element)=>{
      //   var pos = element.indexOf(" ");
      //   console.log(element.slice(pos,element.length));
      // });
      console.log(hasil);

    });

  });
});
return hasil;
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};

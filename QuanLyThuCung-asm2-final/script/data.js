'use strict';
// let import_data = get_variable('.btn_import');
const btn_upLoad = get_variable('.upload');

// function logFile(e) {
//   let str = e.target.result;
//   console.log(e.target);
//   let json = JSON.parse(str);
//   console.log('string', str);
//   console.log('json', json);
//   savePet('pet_detail', json);
//   return str;
// }
// function handleSubmit(event) {
//   event.preventDefault();
//   if (!import_data.value.length) return;
//   let reader = new FileReader();
//   reader.onload = logFile;
//   reader.readAsText(import_data.files[0]);
// }

// btn_upLoad.addEventListener('click', handleSubmit);
let str;
btn_upLoad.addEventListener('click', function () {
  let file = get_variable('#file');
  console.log(file);
  file = file.files.item(0);
  console.log(file);
  // e.preventDefault();
  // let file = import_data;
  let reader = new FileReader();
  reader.onload = () => {
    str = reader.result;
    console.log(str);
    const json = JSON.parse(str);
    savePet('pet_detail', json);
    console.log(json);
  };

  reader.readAsText(file);
  console.log(reader);
});
// console.log(pet_detail);

const data_downloaded = function (a) {
  let x = getdata(a);
  const data_download = JSON.stringify(x, null, 2);
  console.log(data_download);
  return data_download;
  // console.log(data_download);
};

function saveStaticDataToFile(a) {
  const data_download = data_downloaded(a);
  var blob = new Blob([data_download], {
    type: 'application/json; charset = uft-8',
  });
  saveAs(blob, a);
}
const btn_export = get_variable('.btn_export');
btn_export.addEventListener('click', function () {
  saveStaticDataToFile('pet_detail');
});
const btn_export_breed = get_variable('.btn_export_breed');
btn_export_breed.addEventListener('click', function () {
  saveStaticDataToFile('breedOpt');
});

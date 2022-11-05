'use strict';
// let import_data = get_variable('.btn_import');
const btn_upLoad = get_variable('.upload');

let str;
btn_upLoad.addEventListener('click', function () {
  let file = get_variable('#file');
  console.log(file.name);
  file = file.files.item(0);
  const name = file.name.split('.')[0];
  console.log(name);
  // e.preventDefault();
  // let file = import_data;
  let reader = new FileReader();
  reader.onload = () => {
    str = reader.result;
    // console.log(str);
    const v = str.name;
    console.log(v);
    const json = JSON.parse(str);
    savePet(name, json);
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

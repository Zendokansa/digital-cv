'use strict';
// import
// console.log(petid_filter);
console.log(pet_detail);
tableCreate1(pet_detail, '', 'edit');
// const pet_data = getdata('pet_detail');
const pet_info = get_variable('.pet_info');
//  open form
let breed_data = getdata('breedOpt');
if (!breed_data) breed_data = [];
const select_breed = document.querySelector('.pet_breed');
console.log(pet_data);
let opt_breed = `<option value ="select breed">Select breed</option>`;
for (const x of breed_data) {
  opt_breed += `<option value ="${x.breed}">${x.breed}</option>`;
}
// const arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.findIndex(function (a) {
//     return a >= 4;
//   })
// );
select_breed.innerHTML = opt_breed;
table.className = 'edit_table';
let p_index = '';
let edit = document.querySelectorAll('.edit');
console.log(edit);

document.querySelector('.edit_btn').addEventListener('click', function () {
  const x = detail();
  console.log(x);
  pet_detail[p_index] = x;
  console.log(pet_detail);
  savePet('pet_detail', pet_detail);
  tableCreate1(pet_data, '', 'edit');
  pet_info.classList.add('hidden');
  console.log(x);
});
// const edit_table = get_variable('.edit_table');
get_variable('.edit_table').addEventListener('click', function (e) {
  e.preventDefault();
  const x = e.target;
  // pet_info.classList.add('hidden');
  pet_info.classList.remove('hidden');
  console.log(x.value);
  const pet_edit = pet_data.filter(t => t.pet_id == x.value);
  p_index = pet_data.findIndex(function (a) {
    return a == pet_edit[0];
  });
  console.log(p_index);
  const pet_index = pet_data.map(function (arr, index) {
    if (arr == pet_edit[0]) return index;
  });
  console.log(p_index);
  console.log(pet_edit[0].pet_age);
  pet_id.value = x.value;
  pet_age.value = pet_edit[0].pet_age;
  pet_type.value = pet_edit[0].pet_type;
  pet_weight.value = parseInt(pet_edit[0].pet_weight);
  pet_length.value = parseInt(pet_edit[0].pet_length);
  pet_color.value = pet_edit[0].pet_color;
  pet_breed.value = pet_edit[0].pet_breed;
  console.log(pet_edit[0].vaccine);
  let vaccine1 = document.querySelector('.vaccined');
  if (pet_edit[0].vaccine != 'false') vaccine1.checked = true;
  else vaccine1.checked = false;
  let deworm1 = document.querySelector('.dewormed');
  if (pet_edit[0].deworm != 'false') deworm1.checked = true;
  else deworm1.checked = false;
  let sterillize1 = document.querySelector('.sterillized');
  if (pet_edit[0].sterillize != 'false') sterillize1.checked = true;
  else sterillize1.checked = false;
  console.log(vaccine1);
});

/*
// import -- export
let import_data = get_variable('.btn_import');
const btn_upLoad = get_variable('.upload');
console.log(import_data);
let str;
function logFile(e) {
  let str = e.target.result;
  console.log(e.target);
  let json = JSON.parse(str);
  savePet('pet_detail', json);
  // console.log('string', str);
  console.log('json', json);
  return str;
}
function handleSubmit(event) {
  event.preventDefault();
  if (!import_data.value.length) return;
  let reader = new FileReader();
  reader.onload = logFile;
  reader.readAsText(import_data.files[0]);
  console.log(reader.result);
}

let json = [];
btn_upLoad.addEventListener('click', handleSubmit);
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
    json = JSON.parse(str);
    console.log(json);
  };

  // reader.readAsText(file);
  // console.log(reader);
});
console.log(pet_detail);
if (!pet_detail) {
  data_download = JSON.stringify(pet_detail);
  console.log(data_download);
}
function saveStaticDataToFile() {
  var blob = new Blob([data_download], {
    type: 'application/json; charset = uft-8',
  });
  saveAs(blob, 'data_pet');
}

get_variable('.btn_export').addEventListener('click', saveStaticDataToFile);
*/

'use strict';
// const pet_breed = get_variable('.pet_breed_value'); //select
const pet_type = get_variable('.pet_type');
// for (const data_breed of get_breed_data) {
//   console.log(data_breed);
// }
// const ] = [...new Set(get_breed_data)];
const vaccined = get_check('.vaccined') == true ? 'true' : 'false';
const dewormed = get_check('.dewormed') == true ? 'true' : 'false';
const sterillized = get_check('.sterillized') == true ? 'true' : 'false';
const get_breed_data = getdata('breedOpt');
let data_breed = [...new Set(get_breed_data)];
console.log(data_breed);
const ar = [];
const type = [];
const y = get_breed_data.forEach(t => {
  const x = ar.some(z => z == t.pet_type);
  console.log(x);
  if (!x) ar.push(t.pet_type);
  const y = type.some(w => w == t.breed);
  if (!y) type.push(t.breed);
  console.log(y);
  // return type;
});
console.log(ar, type);
// console.log(get_breed_data);
let opt = `<option value = "select breed">Select breed</option>`;
let opt_type = ``;

const x = type.forEach(t => (opt += `<option value="${t}">${t}</option>`));
pet_breed.innerHTML = opt;
// let y = [Object.values(get_breed_data)];
const a = ar.forEach(t => (opt_type += `<option value="${t}">${t}</option>`));
pet_type.innerHTML += opt_type;

// show table with edit button
const pet_detail_data = getdata('pet_detail');
console.log(pet_detail_data);
const petid_arr = pet_detail_data.map(getVal_petid);
const petname_arr = pet_detail_data.map(getVal_petname);
// const arr_filter = function (data, name) {
//   pet_detail_data.filter(pet => {
//     console.log(pet);
//     const x = Object.keys(pet);
//     const z = x.findIndex(t => t == data);
//     const y = Object.values(pet)[z];
//     console.log(x, z, y);
//     // console.log(pet[y[z]]);
//     return y.match(name);
//   });
// };

const find_button = get_variable('.btn_find');

find_button.addEventListener('click', function () {
  const vaccined = get_check('.vaccined') == true ? 'true' : 'false';
  const dewormed = get_check('.dewormed') == true ? 'true' : 'false';
  const sterillized = get_check('.sterillized') == true ? 'true' : 'false';
  let pet_find = [];
  console.log(pet_breed.value);
  pet_find = pet_detail_data.filter(t => t.pet_type == pet_type.value);
  if (pet_find == '') pet_find = pet_detail_data;
  const test_breed = pet_find.some(t => t.pet_breed == pet_breed.value);
  if (test_breed == true)
    pet_find = pet_find.filter(t => t.pet_breed == pet_breed.value);
  if (pet_find == '') pet_find = pet_detail_data;
  pet_find = pet_find.filter(t => t.pet_id.match(pet_id.value));
  if (pet_find == '') pet_find = pet_detail_data;
  if (pet_name.value != '') {
    pet_find = pet_find.filter(t =>
      t.pet_name.toLowerCase().match(pet_name.value.toLowerCase())
    );
  }
  if (pet_find == '') pet_find = pet_detail_data;
  if (pet_id.value != '')
    if (vaccined == 'true')
      pet_find = pet_find.filter(t => t.vaccine == 'true');
  if (dewormed == 'true') pet_find = pet_find.filter(t => t.dewormed == 'true');
  if (sterillized == 'true')
    pet_find = pet_find.filter(t => t.sterillize == 'true');
  if (pet_find == pet_detail_data) pet_find = [];
  console.log(vaccined, dewormed, sterillized);

  console.log(pet_find);

  tableCreate1(pet_find, '', 'edit');
});

// pet_find = [
//   ...petname_filter,
//   ...petid_filter,
//   ...pettype_filter,
//   ...petbreed_filter,
//   ...petvaccine_filter,
//   ...petdewormed_filter,
//   ...petsterillized_filter,
// ];

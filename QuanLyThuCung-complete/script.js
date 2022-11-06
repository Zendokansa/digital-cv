'use strict';

document.querySelector('.btn').addEventListener('click', function () {
  console.log(pet_id.value, pet_name.value);
  if (pet_id.value == '' || pet_name.value == '') {
    alert('input valid data');
    return;
  }
  if (pet_age < 1 || pet_age > 15) {
    alert('it must be between 1 and 15');
    return;
  }
  const x = detail();
  console.log(x);
  const atc = check_value(x);
  console.log(atc);
  let valid = pet_detail.some(xx => xx.pet_id == x.pet_id);
  if (valid || atc == false) {
    alert('ID must unique');
    return;
  } else {
    pet_detail.push(x);
    savePet('pet_detail', pet_detail);
  }
});
const clear_input = function () {
  const input = document.querySelectorAll('input');
  input.forEach(putin => {
    if (putin.type == 'color') putin.value = '#000000';
    else putin.value = '';
  });
  const select = document.querySelectorAll('Select');
  select.forEach(se => {
    se.value = se.firstElementChild.value;
  });
};
document.querySelector('.btn-primary').addEventListener('click', function () {
  erase_table1();
  tableCreate1(pet_detail, '', 'delete');
  const bmi = document.querySelector('.btn-info');
  clear_input();
  if (!bmi) button('BMI');
  else return;
});

// filter
const select = document.querySelector('.pet_breed');
let breedOpt = [];
if (getdata('breedOpt') != '') breedOpt = getdata('breedOpt');
const chose = breedOpt.filter(chose => chose.pet_type == 'dog');
select.innerHTML = ` <option class="bg-secondary" value="Not select">Select Breed </option>`;
let opt_breed = '';
breedOpt.forEach(option => {
  opt_breed += `<option class="bg-secondary" value =${option.breed}>${option.breed}</option>`;
});
select.innerHTML += opt_breed;
// if (pet_breed) {

pet_breed.addEventListener('change', function () {
  // const pet_breed = document.querySelector('.pet_breed');
  console.log(pet_breed.value);
  const filter_pet = pet_detail.filter(t => t.pet_breed == pet_breed.value);
  console.log(filter_pet);
  tableCreate1(filter_pet, '', 'delete');
});

const select_opt = function (a) {
  console.log(a);
  let chose = breedOpt;
  if (chose != 'select type')
    chose = breedOpt.filter(chose => chose.pet_type == a);
  console.log(chose);
  chose.forEach(option => {
    opt_breed += `<option class="bg-secondary" value =${option.breed}>${option.breed}</option>`;
  });
  select.innerHTML += opt_breed;
  console.log(opt_breed);
};

// type listener

// console.log(pet_breed);
// }
pet_type.addEventListener('change', function () {
  opt_breed = '';
  select.innerHTML = ` <option class="bg-secondary" value="select breed">Select Breed </option>`;
  // const pet_type = get_variable('.pet_type');
  opt_breed += select_opt(pet_type.value);
  console.log(opt_breed);
  select.innerHTML += opt_breed;
});

// const table = document.createElement('table');
// table.className = 'pet_profile';
// const body = document.querySelector('.content');
// const tableBody = document.createElement('tbody');
//  show de tale
const bmi = document.querySelector('.btn-info');

// if (btn_detail.classList.contains('.btn_detail')) console.log(btn_detail);
const btn_detail = document.querySelector('.btn-warning');
document.querySelector('.btn-warning').addEventListener('click', function () {
  if (btn_detail.classList.contains('btn_detail')) {
    let healthy_pet = [];
    pet_detail.forEach(t => {
      if (t.vaccine == 'true' && t.deworm == 'true' && t.sterillize == 'true') {
        healthy_pet.push(t);
      } else console.log('No required pet!');
    });
    console.log(healthy_pet);
    tableCreate1(healthy_pet, '', 'delete');
    btn_detail.classList.remove('btn_detail');
    btn_detail.classList.add('btn_show_all_pet');
    btn_detail.textContent = 'Show All Pet';
    return;
  } else if (btn_detail.classList.contains('btn_show_all_pet')) {
    btn_detail.classList.add('btn_detail');
    btn_detail.classList.remove('btn_show_all_pet');
    btn_detail.textContent = 'Show Healthy Pet';
    tableCreate1(pet_detail, '', 'delete');
    return;
  }
});
const confirm_delete = document.querySelector('.button_yes');
confirm_delete.addEventListener('click', function () {
  document.querySelector('.confirm_box').classList.add('hidden');
  console.log(item);
  pet_detail.splice(item, 1);
  savePet('pet_detail', pet_detail);
  if (
    document
      .querySelector('.btn-warning')
      .classList.contains('btn_show_all_pet')
  ) {
    const x = chosen_pet();
    tableCreate1(x);
  } else tableCreate1(pet_detail, '', 'delete');
});
// create table pet_profile
if (table) table.className = 'pet_profile';

'use strict';

const submit = document.querySelector('.btn_submit');
const breeddata = getdata('breedOpt');
let breedOpt = [];
if (breeddata) breedOpt = breeddata;
// if (breeddata) breedOpt = breeddata;
let breedArr = [];
const breedArray = function () {
  const breeddata = getdata('breedOpt');
  let breedAr = [];
  if (!breeddata) return;
  else {
    breeddata.forEach(element => {
      const i = breeddata.indexOf(element);
      const ob = {
        // pet_id: element.pet_id,
        stt: i + 1,
        breed: element.breed,
        type: element.pet_type,
        button: 'delete',
      };
      breedAr.push(ob);
    });
    console.log(breedAr);
    return breedAr;
  }
};

// let breedArray = get_data_petdetail();
// console.log(breedArr);
//  GET DATA PET_BREED

// if (breed_data) breedOpt = breed_data; // breed_data =[{type, breed},{}]
// console.log(breedOpt);

const breedvalid = function () {
  const breed = get_text('.pet_breed_value');
  const x = breedOpt.some(t => t.breed == breed);
  return x;
};

// // const x = breedvalid();
// // console.log(x);
table.className = 'pet_breed'; // tao table voi class name
document.querySelector('.content').appendChild(table); // vi tri dat table
// submit function

submit.addEventListener('click', function () {
  // check value
  const breed = get_text('.pet_breed_value');
  const pet_type = get_text('.pet_type');
  console.log(pet_type);
  console.log(breeddata);
  const x = breedvalid();
  if (x == false && pet_type != 'select type' && breed != '') {
    const valid = {
      breed: breed,
      pet_type: pet_type,
    };
    breedOpt.push(valid);
    savePet('breedOpt', breedOpt);
  } else {
    console.log(`this breed is already exists`);
  }
  // breedOpt.push(x);  // render table
  breedArr = breedArray();
  console.log(breedArr);
  tableCreate1(breedArr, '', 'delete');
  return breedOpt;
});

// find index
const confirm_delete = document.querySelector('.button_yes');
const pet_breed_table = document.querySelector('.pet_breed');
let del_breed = '';
pet_breed_table.addEventListener('click', function (e) {
  del_breed = e.target.value;
  console.log(del_breed);
  // document.querySelector('.confirm_box').classList.add('hidden');
});
// xoa breed
confirm_delete.addEventListener('click', function () {
  console.log(del_breed.value);
  breedOpt.splice(del_breed - 1, 1);
  console.log(breedOpt);
  div1.classList.add('hidden');
  savePet('breedOpt', breedOpt);
  breedArr = breedArray();
  if (breedArr != '') tableCreate1(breedArr, 'pet_id', 'delete');
});

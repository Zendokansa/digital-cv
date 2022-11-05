'use strict';
// const breed = get_text('.pet_breed_value  ');
// const pet_type = get_text('.pet_type');
const submit = document.querySelector('.btn_submit');
let breedArr = [];

const breedArray = function () {
  const breeddata = getdata('pet_detail');
  let breedAr = [];
  if (!breeddata) return;
  else {
    breeddata.forEach(element => {
      const i = breeddata.indexOf(element);
      const ob = {
        pet_id: element.pet_id,
        stt: i + 1,
        breed: element.pet_breed,
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
const breeddata = getdata('breedOpt');
let breedOpt = [];
if (breeddata) breedOpt = breeddata;
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
if (breeddata) breedOpt = breeddata;

submit.addEventListener('click', function () {
  // check value
  const breed = get_text('.pet_breed_value');
  const type = get_text('.pet_type');
  console.log(breeddata);
  const x = breedvalid();
  if ((x == false && type != 'Select one' && breed != '') || undefined) {
    const valid = {
      breed: breed,
      pet_type: type,
    };
    breedOpt.push(valid);
    savePet('breedOpt', breedOpt);
  } else {
    console.log(`this breed is already exists`);
  }
  // breedOpt.push(x);  // render table
  breedArr = breedArray();
  console.log(breedArr);
  tableCreate1(breedArr, 'pet_id', 'edit');
  return breedOpt;
});

confirm_delete.addEventListener('click', function () {
  console.log(breedArr);
  document.querySelector('.confirm_box').classList.add('hidden');
  console.log(item);
  pet_detail.splice(item, 1);
  savePet('pet_detail', pet_detail);
  breedArr = breedArray();
  if (breedArr != '') {
    tableCreate1(breedArr, 'pet_id', 'edit');
  }
});

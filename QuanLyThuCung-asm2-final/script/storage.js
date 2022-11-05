'use strict';
// get data

function getdata(name) {
  return JSON.parse(localStorage.getItem(name));
}

// set data
function savePet(name, val) {
  localStorage.setItem(name, JSON.stringify(val));
}

let pet_detail = [];
const pet_data = getdata('pet_detail');
// console.log(pet_data);
if (pet_data) pet_detail = pet_data;
const key_word = [
  'pet_id',
  'pet_name',
  'pet_age',
  'pet_type',
  'pet_weight',
  'pet_length',
  'pet_color',
  'pet_breed',
  'vaccine',
  'dewormed',
  'sterillize',
  'bmi',
];

const get_text = function (variable) {
  return document.querySelector(variable).value;
};
const get_check = function (variable) {
  if (variable) return document.querySelector(variable).checked;
};
const get_variable = function (variable) {
  return document.querySelector(variable);
};
// console.log(get_check('.vaccined'));
const pet_name = get_variable('.pet_name');
const pet_id = get_variable('.pet_id');
const pet_breed = get_variable('.pet_breed');
const pet_age = get_variable('.pet_age');
const pet_color = get_variable('.pet_color');
const pet_length = get_variable('.pet_length');
const pet_weight = get_variable('.pet_weight');
// let vaccine = get_check('.vaccined');

// let deworm = get_check('.dewormed');
// let sterillize = get_check('.sterillized');
const healthy_check = function (a) {
  const icon = document.createElement('i');
  if (a == 'true') {
    icon.className = 'bi bi-check-circle';
    // <i class="bi bi-check-circle"></i>"
  } else {
    icon.className = 'bi bi-x-circle';
    // <i class="bi bi-x-circle"></i>
  }
  console.log(icon);
  return icon;
};
// function BMI
const calc_BMI = function (item) {
  let value = '';

  if (item.pet_type == 'dog')
    value = (parseInt(item.pet_weight) * 703) / parseInt(item.pet_length) ** 2;
  else if (item.pet_type == 'cat')
    value = (parseInt(item.pet_weight) * 866) / parseInt(item.pet_length) ** 2;
  else value = 'please confirm type of pet';
  value = Math.round(value * 100) / 100;
  return value;
};
// function button
const button = function (a) {
  const but = document.createElement('button');
  but.textContent = a;
  but.className = a;
  but.type = 'button';
  but.id = 'BMI';
  but.classList.add('form-control', 'w-25', 'd-inline', 'btn', 'btn-info');
  document.querySelector('.btn-bar').appendChild(but);
};
// chosen pet
const chosen_pet = function () {
  const healthy_pet = [];
  pet_detail.forEach(t => {
    if (t.vaccine == 'true' && t.deworm == 'true' && t.sterillize == 'true')
      healthy_pet.push(t);
    else console.log('no required pet');
  });
  return healthy_pet;
};
// pet_detail

// thu thap pet _detail = detail
const detail = function () {
  const day = new Date();
  const pet_id = get_text('.pet_id ');

  const pet_name = get_text('.pet_name');
  // if (alert) return;
  const pet_age = get_text('#age');
  // if (alert) return;
  const pet_type = get_text('.pet_type');
  // if (alert) return;
  const pet_weight = get_text('.pet_weight');
  // if (alert) return;
  const pet_length = get_text('.pet_length');
  // if (alert) return;
  const pet_color = get_text('.pet_color');
  const pet_breed = get_text('.pet_breed');
  // if (alert) return;
  const vaccine = get_check('.vaccined') == true ? 'true' : 'false';
  // console.log(vaccine);
  // const vaccine_check = healthy_check(vaccine);
  const dewormed = get_check('.dewormed') == true ? 'true' : 'false';
  const dewormed_check = healthy_check(dewormed);
  const sterillized = get_check('.sterillized') == true ? 'true' : 'false';
  // const sterillized_check = healthy_check(sterillized);
  const get_day = day.getDate();
  const get_month = day.getMonth() + 1;
  const get_year = day.getFullYear();
  const today = `${get_day} / ${get_month} /${get_year}`;
  // del.textContent = 'Delete';
  // dell.textContent = 'Delete';

  const pet_detail = {
    pet_id: pet_id,
    pet_name: pet_name,
    pet_age: pet_age,
    pet_type: pet_type,
    pet_weight: pet_weight + ' kg',
    pet_length: pet_length + ' cm',
    pet_color: pet_color,
    pet_breed: pet_breed,
    vaccine: vaccine,
    deworm: dewormed,
    sterillize: sterillized,
    bmi: '?',
    day: today,
    del: 'delete',
  };
  return pet_detail;
};
//table create
const table = document.createElement('table');
const body = document.querySelector('.content');
const tableBody = document.createElement('tbody');
const tableCreate1 = function (arra, pet_era, button_class) {
  erase_table1();
  // if (!arra) arra = 'No data';
  if ((pet_id == pet_name) == '') console.log('input valid data');
  if (pet_age <= 1 || pet_age >= 15) console.log('it must be between 1 and 15');
  let cell = '';
  let cellText = '';
  var row = document.createElement('tr');
  // console.log(Object.keys(arra));
  if (arra != '') {
    const [...x] = [...Object.keys(...arra)];
    const y = Object.keys(arra);
    // console.log(arra);
    x.forEach(t => {
      cell = document.createElement('th');
      if (t == pet_era) cellText = document.createTextNode('');
      else cellText = document.createTextNode(t);
      cell.appendChild(cellText);
      row.appendChild(cell);
      // console.log(t);
    });
    tableBody.appendChild(row);

    arra.forEach(detail => {
      row = document.createElement('tr');
      const r = Object.keys(detail).length;
      for (var a = 0; a < r; a++) {
        cell = document.createElement('td');
        if (a != r - 1) {
          const o = Object.values(detail)[a];
          // console.log(o);
          if (o == 'true') {
            cellText = document.createElement('i');
            cellText.className = 'bi bi-check-circle-fill';
          } else if (o == 'false') {
            cellText = document.createElement('i');
            cellText.className = 'bi bi-x-circle-fill';
          } else if (Object.keys(detail)[a] == 'pet_color') {
            cellText = document.createElement('p');
            cellText.className = 'bi';
            cellText.textContent = ' ';
            cellText.style.backgroundColor = o;
            // <i class="bi bi-app"></i>
            // <i class="bi bi-check-circle-fill"></i>
          } else if (Object.keys(detail)[a] == pet_era) {
            cellText = document.createTextNode('');
          } else cellText = document.createTextNode(o);
        } else {
          cellText = document.createElement('button');
          const text_conte = document.createTextNode(button_class);
          cellText.className = `${button_class} btn_${button_class}`;
          cellText.type = 'button';
          cellText.value = Object.values(detail)[0];
          cellText.id = Object.values(detail)[0];
          cellText.dataset.value = detail.pet_name;
          // cellText.values = Object.Keys(detail)[0];
          cellText.appendChild(text_conte);
        }
        cell.appendChild(cellText);
        // cell.appendChild(button);
        row.appendChild(cell);
      }
      //row added to end of table body
      tableBody.appendChild(row);
    });
    // append the <tbody> inside the <table>
    table.appendChild(tableBody);
      // tbl border attribute to
    table.setAttribute('border', '2');
    // put <table> in the <body>
    body.appendChild(table);
  
  }
};

const erase_table1 = function () {
  const r = table.rows.length;
  console.log(r);
  if (r > -1)
    for (let j = r - 1; j >= 0; j--) {
      table.deleteRow(j);
    }
};
// modal
const div1 = document.createElement('div');
div1.className = 'confirm_box';
div1.classList.add('hidden');
const p1 = document.createElement('p');
p1.className = 'confirm_question';
p1.textContent = 'This page says : \n Are you sure?';
const button_yes = document.createElement('button');
button_yes.className = 'button_yes';
button_yes.value = 'confirm';
button_yes.textContent = 'Confirm';
const button_no = document.createElement('button');
button_no.className = 'button_no';
button_no.value = 'Cancel';
button_no.textContent = 'Cancel';
if (document.querySelector('.content'))
  document.querySelector('.content').appendChild(div1);
div1.appendChild(p1);
div1.appendChild(button_no);
div1.appendChild(button_yes);
// const confirm_delete = document.querySelector('.button_yes');
// confirm_delete.addEventListener('click', function () {
//   document.querySelector('.confirm_box').classList.add('hidden');
//   console.log(item);
//   if (confirm_delete) pet_detail.splice(item, 1);
// });
// breed page /////////////

// GETDATA PETDETAIL

// /////////////////////////
const confirm_cancel = document.querySelector('.button_no');
if (confirm_cancel)
  confirm_cancel.addEventListener('click', function () {
    document.querySelector('.confirm_box').classList.add('hidden');
    return;
  });
const check_value = function check_value(a) {
  const check = [...Object.values(a)];
  console.log(check);
  let x = true;
  for (let i = 1; i < check.length; i++) {
    if (!check[i]) {
      x = false;
      return x;
    }
  }
  return x;
};
function getVal_petid(arr) {
  return Object.values(arr)[0];
}

function getVal_petname(arr) {
  return arr.pet_name;
}
function getVal_pettype(arr) {
  return arr.pet_type;
}
function getVal_petbreed(arr) {
  return arr.pet_breed;
}
const confirm_delete = document.querySelector('.button_yes');
let item = '';
if (document.querySelector('.content'))
  document.querySelector('.content').addEventListener('click', function (e) {
    // e.preventDefault();
    const click = e.target;
    if (click.classList.contains('delete')) {
      pet_detail.forEach(t => {
        if (t.pet_id == click.value) {
          item = pet_detail.indexOf(t);
          // tableCreate(pet_detail);
        }
      });

      document.querySelector('.confirm_box').classList.remove('hidden');
    }
    console.log(e.target);
    // show BMI

    if (click.classList.contains('BMI')) {
      click.addEventListener('click', function () {
        pet_detail.forEach(t => {
          const v = calc_BMI(t);
          console.log(v);
          t.bmi = v;
        });
        if (
          document
            .querySelector('.btn-warning')
            .classList.contains('btn_show_all_pet')
        ) {
          const x = chosen_pet();

          tableCreate1(x);
        } else tableCreate1(pet_detail, '', 'delete');
      });
    }
  });

// Chart.jsを用いた


// const MONTHS = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December'
// ];

// const labels = time({ count: 7 });
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'My First Dataset',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     fill: false,
//     borderColor: 'rgb(75, 192, 192)',
//     tension: 0.1
//   }]
// };

// const ctx = document.getElementById('stage').getContext('2d');
// const config = {
//   type: 'line',
//   data: data,
// };
// const myChart = new Chart(ctx, config);


const dates = [
  "2021/7/3",
  "2021/7/4",
  "2021/7/7",
  "2021/7/7",
  "2021/7/7",
  "2021/7/7",
  "2021/7/7",
  "2021/7/7",
  "2021/7/8",
  "2021/7/8",
  "2021/8/9",
  "2021/8/10",
  "2021/8/10"
];

function time(config) {
  let cfg = config || {};
  let count = cfg.count || 12;
  let section = cfg.section;
  let values = [];
  let i, value;

  for (i = 0; i < count; i++) {
    value = dates[i];
    values.push(value.substring(0, section));
  }

  return values;
}

const item1 = [
  22475,
  22475,
  22475,
  22475,
  22475,
  22475,
  22475,
  22475,
  23802,
  26102,
  9999,
  47390,
  70114
];

const item2 = [
  53021,
  53656,
  53656,
  56225,
  56225,
  56225,
  56225,
  56225,
  64267,
  56542,
  44833,
  36912,
  38299
];

const item3 = [
  47219,
  47925,
  47925,
  47925,
  47925,
  47925,
  47925,
  47925,
  48515,
  47284,
  6858,
  57771,
  43359
];

const labels = time({ count: dates.length });
const data_3man = {
  labels: labels,
  datasets: [{
    label: 'ピカチュウ　Vmax　ブロモ',
    data: item1,
    fill: false,
    borderColor: 'blue',
    tension: 0.1
  }]
};

const data_10man = {
  labels: labels,
  datasets: [{
    label: 'メイ　SR　ポケモンカード',
    data: item2,
    fill: false,
    borderColor: "red",
    tension: 0.1
  }, {
    label: 'ブラッキー　Vmax　SA',
    data: item3,
    fill: false,
    borderColor: "green",
    tension: 0.1
  }]
};

// 現在のファイル名を取得
let str = window.location.href.split('/').pop();

if (str === "3man.html") {
  const ctx_3man = document.getElementById('stage_3man').getContext('2d');
  const config_3man = {
    type: 'line',
    data: data_3man,
  };
  const myChart_3man = new Chart(ctx_3man, config_3man);
}


if (str === "10man.html") {
  const ctx_10man = document.getElementById('stage_10man').getContext('2d');
  const config_10man = {
    type: 'line',
    data: data_10man,
  };
  const myChart_10man = new Chart(ctx_10man, config_10man);
}

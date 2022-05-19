const btn = document.getElementById("myBtn");

/* btn.addEventListener('click', () => {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue?',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}) */

/* btn.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
});
 */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Sweet!",
    text: "Modal with a custom image.",
    imageUrl: "https://unsplash.it/400/200",
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Custom image",
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Está seguro de eliminar el producto?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, seguro",
    cancelButtonText: "No, no quiero",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Borrado!",
        icon: "success",
        text: "El archivo ha sido borrado",
      });
    }
  });
}); */

/* btn.addEventListener("click", () => {
  Swal.fire({
    title: "Submit your Github username",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
  }).then((result) => {
    if (result.isConfirmed) {
      console.log("este es el valor ingresado", result.value);
      
      //acá hacen el codigo utilizando el valor del input
    }
  });
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    style: {
      background: "linear-gradient(to left, #00b09b, #96c92d)",
    },
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    className: 'color'
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Probando toast!",
    duration: 3000,
    onClick: () => {
      Toastify({
        text: "Clickeaste un Toast!",
        duration: 1500,
      }).showToast();
    },
  }).showToast();
}); */

/* btn.addEventListener("click", () => {
  Toastify({
    text: "Click aquí para ir a Coder!",
    duration: 3000,
    destination: "https://www.coderhouse.com",
  }).showToast();
}); */

const DateTime = luxon.DateTime;
/* const fecha = DateTime.local(2022, 5, 19, 18, 2 ); */
const fecha = DateTime.now();
/* console.log(fecha); */
/* console.log(fecha.year);
console.log(fecha.month);
console.log(fecha.day);
console.log(fecha.second);
console.log(fecha.weekday); */
/* console.log(fecha.zoneName);
console.log(fecha.daysInMonth); */
/* console.log(fecha.toLocaleString())
console.log(fecha.toLocaleString(DateTime.DATE_FULL))
console.log(fecha.toLocaleString(DateTime.TIME_SIMPLE))
console.log(fecha.setLocale('en').toLocaleString(DateTime.DATE_FULL))
console.log(fecha.setLocale('es').toLocaleString(DateTime.DATE_FULL))
console.log(fecha.toString()); */

/* const suma = fecha.plus({ hours: 5, minutes: 15 })
console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))

const resta = fecha.minus({ month: 2, days: 10 })
console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))

let hora = document.createElement('div')
hora.innerHTML = `${resta.toLocaleString(DateTime.DATETIME_SHORT)}`
document.body.append(hora) */

const Interval = luxon.Interval

const now = DateTime.now()
const later = DateTime.local(2022, 7, 26)
const i = Interval.fromDateTimes(now, later)

console.log( i.length('days') ) 
console.log( i.length('hours') ) 
console.log( i.length('minutes') )
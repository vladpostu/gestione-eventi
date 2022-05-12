

const eventContainers = document.querySelectorAll('.event-container');
const eventDatas = document.querySelectorAll('.event-data');
const dataShown = document.querySelectorAll('data-shown');

eventContainers.forEach((container, i=0) => container.addEventListener('mouseenter', () => {
    eventDatas[i].classList.add('event-data-shown');
}))

eventContainers.forEach((container, i=0) => container.addEventListener('mouseleave', () => {
    eventDatas[i].classList.remove('event-data-shown');
}))
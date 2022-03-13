let body = document.querySelector('body');
let elektronTime = document.querySelector('.elektron-time'); // добавляем переменную в которую попадает див в котором отображ. электр.время
let elektronTime2 = document.querySelector('.elektron-time2');
let startTime = new Date(); // создаём переменную в которую попадет текущая дaта и время
let startSecond = startTime.getSeconds().toString();
let secondControl = setInterval (start, 1);
function start (){
    let time = new Date();
    let s = time.getSeconds().toString();
    if (s != startSecond){
        clearInterval(secondControl);
        test = setInterval(testInterval, 1000) // вызываем функцию каждую секунду
        let s = startTime.getSeconds().toString(); // создаём переменную в которую попадает секунда
        let m = startTime.getMinutes().toString();// создаём переменную в которую попадает минуты
        let h = startTime.getHours().toString();// создаём переменную в которую попадает час
        console.log(startTime)
        body.style.setProperty('--secondPositionStart', (s * 6) +'deg');
        body.style.setProperty('--secondPositionEnd', (s * 6 + 360) +'deg');
        body.style.setProperty('--minutPositionStart', (m * 6) + (s * 0.1) + 'deg');
        body.style.setProperty('--minutPositionEnd', ((m * 6) + (s * 0.1)) + 360 + 'deg');
        body.style.setProperty('--hourPositionStart', (h * 30) + (m * 0.5) + (s * 0.00833333) + 'deg');
        body.style.setProperty('--hourPositionEnd', (h * 30) + (m * 0.5) + (s * 0.00833333) + 360 + 'deg');
    }
}

function testInterval(){
    let startTime = new Date();
    let s = startTime.getSeconds().toString();
    if (s.length < 2){ // если длина секунды меньше 2 символов
        s = '0' + s; //тогда к секунде добавляется ноль с левой стороны
    }
    let m = startTime.getMinutes().toString();
    if (m.length < 2){
        m = '0' + m;
    }
    let h = startTime.getHours().toString();
    if (h.length < 2){
        h = '0' + h;
    }
    let elektronTime = document.querySelector('.elektron-time');
    if (s % 2 == 0){ // если секунда делится на два без остатка,значит она четная и тогда точки добавляем
        elektronTime.innerHTML= h + ':' + m + ':' + s;
        elektronTime2.innerHTML= h + ':' + m + ':' + s;
    } else{ //иначе точки убираем
        elektronTime.innerHTML= h + ' ' + m + ' ' + s;
        elektronTime2.innerHTML= h + ' ' + m + ' ' + s;
    }
}

new Swiper('.swiper',{
    effect: 'fade',
})



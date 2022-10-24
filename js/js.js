// 1) Створити функцію яка отримує невизначену кількість аргументів і вираховує їх суму
function sumArg(...arg){
    let sumAll = 0;
    for(const item of arg){
        sumAll += item;
    }
    return sumAll 
}
console.log(`Сумма всех аргументов ${sumArg(12, 10, 10)}`)

// 2)Створити функцію яка отримує від користувача день народження,місяць, рік і повертає рік народження і якщо сьогодні день народження користувача то вивести привітання

function checkBirthday(){
   let mydate = new Date(parseInt(prompt('введите год',)),parseInt(prompt('введите месяц',)-1), parseInt(prompt('введите день',)));
   let today = new Date();

   if (mydate.getDay() == today.getDay() && mydate.getMonth() == today.getMonth()){
   return (`C Днем рождения `)
   }
   else{
    return(`Год рождения ${mydate.getUTCFullYear()}`)
    }
}
console.log(checkBirthday())

// 3) Створити функцію яка з массиву вибирає всі булеві значення
const sort = [true, 'false', 111, -0, 'true', false, {a:false}, [true, 'false']];

function bool(arr){
    let newARR = [];
    for(let iterator of arr.flat(2)){
        if(typeof iterator == 'boolean' || typeof iterator.a == 'boolean'){
            newARR.push(iterator)
        }
    }
    return(newARR)
}

console.log(bool(sort))

// 4) Створити функцію яка повертає сторіччя, функція отримує рік

let inputYear = new Date(parseInt(prompt('введите год для перевода в век',)))
    
function century(year){
    return Math.floor((year-1)/100) + 1;
}

console.log(`Вы ввели ${century(inputYear)} век`);

// 5) Створити функцію яка повертає скільки днів в цьому місяці а також в наступному  ( В цьому місяці 30 днів в наступному 31 )



let daysInMonth = function(date){
    let month = date.getMonth();
    let year = date.getFullYear();
    return `Дней в текущем месяце: ${new Date(year, month, 0).getDate()}, В следующем месяце будет ${new Date(year, month+1, 0).getDate()} дней`;
   };
date = new Date()
console.log(daysInMonth(date))


// f12 вкладка application storage/local storage
// данные хранятся по типу ключ-значение
// введите данные в поля и когда при отрытии
// страницы дата совпадет с днем рождения всплывет окно
// 
// откройте окно браузера на полную для удобства
console.log(localStorage);
storeData = localStorage;

date = new Date();
dateDay = date.getDate();
dateMonth = date.getMonth() + 1;
dateYear = date.getFullYear();
console.log(`${dateDay}.${dateMonth}.${dateYear}`);

for (key in storeData) {
    if (typeof(storeData[key]) === 'string' || storeData[key] instanceof String) {
        dataSplit = storeData[key].split(',');
        
        if (dateDay == dataSplit[0] && dateMonth == dataSplit[1]) {
            alert(`Happy Birthday ${key[0].toUpperCase() + key.substr(1).toLowerCase()}`);
        }
    }
}

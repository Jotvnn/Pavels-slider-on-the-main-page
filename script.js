// arr = [
//     ['img1', 'knit sweater'], 
//     ['img2', 'table data'], 
//     ['img3', 'guanaco peru']
// ];
i = 1;

getLeftDiv = document.querySelector('#main1');
getLeftDiv.addEventListener('click', function(event) {
    event.stopPropagation();
    i--;
    i = i % arr.length;
    getMainDiv = document.querySelector('#main');
    getMainDiv.style.backgroundImage = "url('./img/" + arr[Math.abs(i)][0] + ".png')";
    getMainDiv.style.boxShadow = arr[Math.abs(i)][2];
    getMainDiv.style.opacity = 1;
    getComment = document.querySelector('#comment');
    getComment.innerHTML = arr[Math.abs(i)][1];
});

getRightDiv = document.querySelector('#main2');
getRightDiv.addEventListener('click', function(event) {
    event.stopPropagation();
    i++;
    i = i % arr.length;
    getMainDiv = document.querySelector('#main');
    getMainDiv.style.backgroundImage = "url('./img/" + arr[i][0] + ".png')";
    getMainDiv.style.boxShadow = arr[i][2];
    getMainDiv.style.opacity = 1;
    getComment = document.querySelector('#comment');
    getComment.innerHTML = arr[Math.abs(i)][1];
});

getMainDiv = document.querySelector('#main');
getMainDiv.addEventListener('click', function(event) {
    if (event.target.id = "main") {
        if (this.style.backgroundSize == 'contain') {
            this.style.backgroundSize = 'cover';
        } else {
            this.style.backgroundSize = 'contain';
        }
    }
});

getTextDiv = document.querySelector('#show');
getTextDiv.addEventListener('click', function() {
    getMainDiv = document.querySelector('#main');
    getMainDiv.style.display = 'flex';
    this.style.display = 'none';
});

getButton = document.querySelector('#form > button');
getButton.addEventListener('click', function() {
    inputArr = document.querySelectorAll('#form > input');
    valuesArr = [...inputArr].map(i => i.value);
    console.log(valuesArr);

    localStorage.setItem(valuesArr[0], valuesArr.slice(1));
});

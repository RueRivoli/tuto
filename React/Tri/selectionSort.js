var myArray = new Array(4, 8, 3, 2, 17, 6, 12);
var myArray2 = new Array(3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8);

function createTable(size){
    var i = 0;
    var newArray;
    newArray = Array(size);
    while (i < size)
    {
        newArray[i] = Math.floor(Math.random() * 10);
        i++;
    }
    return (newArray);
}

function swap(tab, i, j)
{
    var tmp;

    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}

function tri(tab, length)
{
    var i = 0;
    var j;
    var min;
    while (i < length - 1)
    {
        min = i;
        j = i + 1;
        while (j < length)
        {
            if (tab[j] < tab[min])
                min = j;
            j++;
        }
        if (min != i)
            swap(tab, i, min);
        i++;
    }
}

alert('Hello');
var size = prompt("Give me a size of table", "Your number here");
alert('The table will be generate randomly with a size of ' + size);
var newArray = createTable(size);
console.log(newArray);
Start = new Date();
var len = newArray.length;
tri(newArray, len);
End = new Date();
alert('Found in ' + (End-Start) + " ms d'execution javascript");

alert('The array in question is : ' + newArray);
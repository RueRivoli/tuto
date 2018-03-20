
var myArray = new Array(4, 8, 3, 2, 17, 6, 12);
var myArray2 = new Array(3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8, 3, 7, 8, 5, 2, 1, 9, 5, 4, 8);



function swap(tab, i, j)
{
    var tmp;

    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}


function partition(tab, first, last, pivot)
{
    var i = 0;
    var j = 0;
    swap(tab, last, pivot);
    while (i < last)
    {
        if (tab[i] <= tab[last])
        {
            swap(tab, i, j);
            j++; 
        }
        i++;
    }
    swap(tab, last, j);
    return (j);
}


function choicePivot(first, last){
    return Math.floor(Math.random() * (last - first + 1)) + first;
}


function quicksort(tab, first, last)
{
    var pivot;

    if (first < last)
    {
        pivot = choicePivot(first, last);
        pivot = partition(tab, first, last, pivot);
        quicksort(tab, first, pivot - 1);
        quicksort(tab, pivot + 1, last);
    }
}

Start = new Date();
quicksort(myArray2, 0, 199);
End = new Date();
console.log((End-Start) + " ms d'execution javascript");
console.log(myArray2);
export default function swap(tab, i, j)
{
    var tmp;

    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
}
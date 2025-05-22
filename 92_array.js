const arr=[10,6,56,66,22,3,5]
console.log(arr)
let i,j,max,index,temp;
for(i=0;i<7;i++)
{
    max=arr[i];
    index=i;
    for(j=i+1;j<7;j++)
    {
        if(max>arr[j])
        {
            max=arr[j];
            index=j;
        }
    }
    temp=arr[i];
    arr[i]=arr[index];
    arr[index]=temp
}
console.log(arr)

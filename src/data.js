export const API_KEY= 'AIzaSyCY6186M6zlQHZq9TCbZ_ZysTyl-uPvEAc';

export const value_convertor = (value) =>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"k"
    }
    else{
        return value;
    }
}
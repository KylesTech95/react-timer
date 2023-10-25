//Check if the number is less than 10.
//If so, The number "0" will be placed infrot of the value.
export const moreThan10 = (num) => {
    return (num <10) ?'0'+num: num;
}
export function formatMinutes(num){
    return moreThan10(Math.floor(num/60))
}
export function formatSeconds(num){
    return moreThan10(num%60)
}
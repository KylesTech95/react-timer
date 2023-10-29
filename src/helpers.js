export const MoreThan10 = (num) => {
    return num < 10 ? '0'+num : num
}
export const Minutes = (num) => {
    return Math.floor(num/60)
}
export const Seconds = (num) => {
    return num % 60
}
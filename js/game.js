
// GET PICKED COLORS
const getstoredColors = () => {
    const storedColors = localStorage.getItem('pickedColors');
    window.location.href = "../pages/gameB.html"

    // if(storedColors){
    //     return JSON.parse(storedColors);
    // }else{
    //     return[];
    // }
}

let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllFridge = async()=>{
try {
    return await fetch(`https://hackathonstore.azurewebsites.net/api/Fridge`)
    .then((res)=> res.json())
} catch (error) {
    return console.error(error);
}
}
let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllTv = async()=>{
try {
    return await fetch("https://hackathonstore.azurewebsites.net/api/Tv")
    .then((res)=> res.json())
} catch (error) {
    return console.error(error);
}
}
let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllTv = async()=>{
try {
    return await fetch(`${BasicUrl}Tv`)
    .then((res)=> res.json())
} catch (error) {
    return console.error(error);
}
}
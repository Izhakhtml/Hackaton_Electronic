let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllPhone = async()=>{
try {
    return await fetch(`https://hackathonstore.azurewebsites.net/api/Phons`)
    .then((res)=>  res.json())
} catch (error) {
    return console.error(error);
}
}
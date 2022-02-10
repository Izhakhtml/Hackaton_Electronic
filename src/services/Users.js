let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllUser= async()=>{
try {
    return await fetch(`${BasicUrl}Users`)
    .then((res)=> res.json())
} catch (error) {
    return console.error(error);
}
}
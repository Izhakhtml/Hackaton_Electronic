let BasicUrl = 'https://hackathonstore.azurewebsites.net/api/';
export const GetAllComputers = async()=>{
try {
    return await fetch(`${BasicUrl}Computers`)
    .then((res)=> res.json())
} catch (error) {
    return console.error(error);
}
}
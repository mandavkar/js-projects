//Ubsplash API
const count = 10
const apiKey = 'nl8pVo0vvK9c6bApyvJjlMiVDHjIPG_rE_gps1SZx3o'         
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data)
    } catch (error) {
        //Catch Error Here
    }
}


//on Load
getPhotos();
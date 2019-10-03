export 
//забираем данные с firebase
async function getDataFromDB() {
    let response = await fetch('https://vp-teatr.firebaseio.com/repertory.json');
    let data = await response.json();
    return data;
};
const submitBtn =document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name =document.getElementById('city_name');
const temp_real_val= document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const day = document.getElementById('day');
const today_date = document.getElementById('today_date');



const getInfo = async(event)=>{

    // alert("hare krishna");
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal ===''){
        city_name.innerText = `please write the name before you search`;
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=b8e1cf3dfc43f6033c3b2b0b14240f18`
        const response =await fetch(url);
        const data =await response.json();
        const arrData = [data];
        city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText= arrData[0].main.temp;
        temp_status.innerText=arrData[0].weather[0].main;
        }
        catch{
            city_name.innerText = "please enter the city name properly";
        }
    }
}

submitBtn.addEventListener('click',getInfo);

// const submitBtn = document.getElementById('submitBtn');

// const getInfo = () => {

//     alert("hii");
// }

// submitBtn.addEventListener('click',getInfo);
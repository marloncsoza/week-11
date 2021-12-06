try{
    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}
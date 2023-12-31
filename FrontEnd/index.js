document.getElementById("submit").addEventListener("click",submit);

async function submit(e){
        e.preventDefault();
        let text = document.getElementById("format");
        text.innerText = null;
        let format = text.value;
        console.log(format);
        console.log(isValidJson(format));
        // let trimit = format.trim();
        if(isValidJson(format)){
          let resp = await fetch("https://exactspace-assignment.onrender.com/",{
            method : "POST",
            body : format,
            headers : {
                "Content-Type" : "application/json"
            }
          })
          resp = await resp.json();
          console.log(resp);

          let keys = Object.keys(resp);
          let key = keys[0];
          let value = resp[`${key}`];
          console.log(value);
          document.getElementById("key").innerText=key;
          document.getElementById("value").innerText=resp[`${key}`];
        }else{
            alert("Opps!, Your JSON format is not correct please checkit or Enter a Valid JSON format!")
        }
}         

function isValidJson(input) {
    try {
        JSON.parse(input);
        return true;
    } catch (error) {
        return false;
    }
}
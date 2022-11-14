var click = 0;

const counter_function =  () => {

    document.getElementById("clicker").innerHTML = click;
    click +=1;
} 

const reset_function = () => {

    click = 0;
    document.getElementById("clicker").innerHTML = click;
    
}







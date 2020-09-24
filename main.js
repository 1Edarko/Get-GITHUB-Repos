// get the variables : 
var Myinput = document.querySelector('.repos input'),
    Mybutton = document.querySelector('.repos .get'),
    Alert = document.createElement('span'),
    Mydata = document.querySelector('.Data');
    // // add class to alert : 
    // Alert.setAttribute('class' , 'alert');
    // // add text : 
    // var Text = document.createTextNode('Please Write Github Username !');
    // Alert.appendChild(Text);

    


    Mybutton.onclick = function (){
        getData();



    };
    function getData(){
if(Myinput.value === ""){
Mydata.innerHTML = "<span class='alert'>Please Write Github Username !</span>";

}else{
    fetch(`https://api.github.com/users/${Myinput.value}/repos`)
    .then(response => response.json())
    .then((datas) => {
   datas.forEach(data =>{
// create div 
var Mydiv = document.createElement('div'),
    DText = document.createTextNode(data.name);
    // append 
     Mydiv.appendChild(DText);
     //
     Mydiv.setAttribute('class' , 'data-box');
     //append to data box :
     Mydata.appendChild(Mydiv);
     // create a element : 
     var aelement = document.createElement('a'),
         aspan = document.createElement('span'),
         atext = document.createTextNode('visit');
         // append : 
         aelement.appendChild(atext);
         // create link : 
         aelement.href = `https://github.com/${Myinput.value}/${data.name}`;
         //
         aelement.setAttribute('target' , '_blank');
         aspan.setAttribute('class' , 'visit');
         aspan.appendChild(aelement);
         Mydiv.appendChild(aspan);





   });


    });   
     // empty : 
    Mydata.innerHTML = '';
// // loop : 
// datas.data.forEach(data =>{

//     console.log(data.name);
// });

//     });
    

}
   


    }
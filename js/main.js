


const imageArray=["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

let imgVisibile = 0;
const imageCont= document.querySelector('.image');

for(i=0; i < imageArray.length; i++){

    imageCont.innerHTML += `<div class="item">
                            <img src='${imageArray[i]}' />  
                          </div>`;
   
}



const imageList= document.getElementsByClassName('item');
 
imageList[imgVisibile].classList.add('show');


let avanti = document.querySelector('.avanti');

let imgAttiva = document.querySelector('.thumbnails');
imgAttiva.classList.add('attiva');


avanti.addEventListener('click',
   function(){
        imageList[imgVisibile].classList.remove('show');
		imgAttiva[imgVisibile].classList.remove('attiva');
        imgVisibile++;
        imageList[imgVisibile].classList.add('show');
		imgAttiva.classList.add('attiva');
        indietro.classList.remove('hidden');
		



        if(imgVisibile == imageList.length - 1){
            avanti .classList.add('hidden')
        }
   }

)

let indietro = document.querySelector('.indietro');

indietro .addEventListener('click',
   function(){
    imageList[imgVisibile].classList.remove('show');
    imgVisibile--;
    imageList[imgVisibile].classList.add('show');
    avanti .classList.remove('hidden')

    if(imgVisibile == 0){
       indietro .classList.add('hidden')

    }

   }

)





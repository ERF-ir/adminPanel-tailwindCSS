




function toggle_sidbar()
{

    let btn_togle = document.querySelector('#side_meno_btn');
    let aside = document.querySelector('aside');
    let heder = document.querySelector('header');
    let open_btn = document.querySelector('#open_btn');
    
    btn_togle.addEventListener('click',()=>{

            aside.classList.add('hidden');
            aside.classList.remove('col-span-2');
            heder.classList.remove('col-span-7')
            heder.classList.add('col-span-9');
            open_btn.classList.remove('invisible');
    })

    open_btn.addEventListener('click',()=>{

        aside.classList.remove('hidden');
        aside.classList.add('col-span-2');
        heder.classList.add('col-span-7')
        heder.classList.remove('col-span-9');
        open_btn.classList.add('invisible');
})

    
    
}

function meno_sid()
{

  let clickc = document.querySelectorAll('.click');
  let sub = document.querySelectorAll('.acc')
  
  for(let i=0;i<clickc.length;i++){

            clickc[i].addEventListener('click',()=>{

                    if (sub[i].style.height) {
                        sub[i].style.height = null;
                        sub[i].style.padding = "0"
                    }
                    else{
                        sub[i].style.height = sub[i].scrollHeight+10+'px';
                        sub[i].style.padding = "5px 0 0 0"
                    }

            })

  }

}

function notif()
{
    let comm  =document.querySelector('#comm');
    let beel  =document.querySelector('#bell');
    let bcomm  =document.querySelector('#comm_m');
    let bbeel  =document.querySelector('#bell_m');

     comm.addEventListener('click',()=>{

        bcomm.classList.toggle('hidden')
     })
     beel.addEventListener('click',()=>{

        bbeel.classList.toggle('hidden')
     })

}

function dard_mode()
{
    let btn = document.querySelector("#dark_dark");
    let box = document.querySelector("#box_tem"); 
    let dark = document.querySelector("#dark");
    let light = document.querySelector("#light");
    let orange = document.querySelector("#orang");

    btn.addEventListener('click',()=>{

            box.classList.toggle('box_tem_activ')

    })


    dark.addEventListener('click',()=>{
        document.documentElement.classList.remove('orang');

        document.documentElement.classList.add('dark');
        localStorage.setItem('tem','dark')

    })
    light.addEventListener('click',()=>{

        document.documentElement.classList.remove('dark');
        document.documentElement.classList.remove('orang');

        localStorage.setItem('tem','light')

    })
    orange.addEventListener('click',()=>{
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('orang');
        localStorage.setItem('tem','orang')

    })
    let teml = localStorage.getItem('tem');
    document.documentElement.classList.add(teml);




}

function Counter_card() {

  let users = document.getElementById('users');
  let ticket = document.getElementById('ticket');
  let cources = document.getElementById('cources');
  let comment = document.getElementById('comment');

  
    let val_users = Number(users.dataset.counter);
    let val_ticket = Number(ticket.dataset.counter);
    let val_cours = Number(cources.dataset.counter);
    let val_comment = Number(comment.dataset.counter);


    let count_user = 0;
    let count_ticket = 0;
    let count_cours = 0;
    let count_comment = 0;


    let one = setInterval(()=>{
                 
        count_user++;

        users.innerText = count_user;
        if (count_user === val_users) {
            clearInterval(one);
        }
    },10)

    


    let two = setInterval(()=>{
                 
        count_comment++;

        comment.innerText = count_comment;
        if (count_comment === val_comment) {
            clearInterval(two);
        }
    },10)




    let tree = setInterval(()=>{
                 
        count_cours++;

        cources.innerText = count_cours;
        if (count_cours === val_cours) {
            clearInterval(tree);
        }
    },10)




    let four = setInterval(()=>{
                 
        count_ticket++;

        ticket.innerText = count_ticket;
        if (count_ticket === val_ticket) {
            clearInterval(four);
        }
    },10)



}


function date_persion(){


        
   let spann = document.querySelector("#clock");
   let spann2 = document.querySelector("#date");


   let ndt=new Date();
    y=ndt.getFullYear();
    m=ndt.getMonth()+1;
    d=ndt.getDate();
    
   
    let shams = gregorian_to_jalali(y,m,d);
    
        switch(shams[1]){
           
                case 1:
                shams[1] = 'فروردین'
                break;

                case 2:
                shams[1] = 'اردیبهشت'
                break;

                case 3:
                shams[1] = 'خرداد'
                break;

                case 4:
                shams[1] = 'تیر'
                break;

                case 5:
                shams[1] = 'مرداد'
                break;

                case 6:
                shams[1] = 'شهریور'
                break;

                case 7:
                shams[1] = 'مهر'
                break;

                case 8:
                 shams[1] = 'آبان'
                break;

                 case 9:
                 shams[1] = 'آذر'
                 break;

                 case 10:
                 shams[1] = 'دی'
                 break;

                 case 11:
                 shams[1] = 'بهمن'
                  break;

                 case 12:
                 shams[1] = 'اسفند'
                 break;

           

        }

               

    
      setInterval(() => {
        let obj=new Date();
        h = obj.getHours();
        mm = obj.getMinutes();
        s = obj.getSeconds();
        spann.innerHTML = h+':'+mm+':'+s;
      },1000);

      spann2.innerHTML = shams[2]+" _ "+shams[1]+" _ "+shams[0]
    


}

function lightBody(){


        
    let range = document.querySelector("#range");
    let gg = document.querySelector("#range");

    range.addEventListener('input',(e)=>{

            let val = e.target.value;
            document.documentElement.style.filter = `brightness(${val}%)`;

    })
    
   
 

     
 
 
 }


toggle_sidbar();
meno_sid();
notif();
dard_mode()
Counter_card();

date_persion();
lightBody();

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'],
        datasets: [{
            label: 'نمودار فروش',
            data: [70, 50, 60, 40, 10, 12,50,40,30,20,10,5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235,0.9)',
                'rgba(255, 206, 86,0.9)',
                'rgba(75, 192, 192,0.9)',
                'rgba(153, 102, 255,0.9)',
                'rgba(255, 159, 64,0.9)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            borderRadius:5
        }]
    },
    
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
            
        },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20,
                        family:'vazir'
                    }
                }
            }
        }
        
    }
});


Chart.defaults.font.size = 17;
Chart.defaults.font.family = 'vazir';
Chart.defaults.font.weight = 'bold'
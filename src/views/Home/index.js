import ScrollReveal from "scrollreveal";
import anime from 'animejs/lib/anime.es'

export function header(){
    const headerEl=document.querySelector('header');
    const scrollTop=document.querySelector('.scroll-to-top');
    window.addEventListener('scroll',()=>{
        //获取header的高度
        let height=headerEl.getBoundingClientRect().height;
        if(window.pageYOffset-height>600){
            if(!headerEl.classList.contains('sticky')){
                headerEl.classList.add('sticky')
            }
        }else{
            headerEl.classList.remove('sticky')
        }
        if(window.pageYOffset>1800){
            scrollTop.style.display='block';
        }else{
            scrollTop.style.display='none';
        }
    })
    const staggeringOption={
        delay:300,
        distance:'50px',
        duration:500,
        easing:'ease-in-out',
        origin:'bottom'
    }
    ScrollReveal().reveal('.feature',{...staggeringOption,interval:350});
    ScrollReveal().reveal('.service-item',{...staggeringOption,interval: 350});
    const dataSectionEl=document.querySelector('.data-section');
    ScrollReveal().reveal('.data-section',{
        beforeReveal:()=>{
            anime({
                targets:".data-piece .num",
                innerHTML:el=>{
                    return [0,el.innerHTML];
                },
                duration:2000,
                /*逐步加上1*/
                round:1,
                //速度越来越快
                easing: 'easeInExpo'
            });
            dataSectionEl.style.backgroundPosition=`center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom / 5}px)`;
        }
    });
    //背景时差处理
    window.addEventListener('scroll',()=>{
        const bottom=dataSectionEl.getBoundingClientRect().bottom;
        const top=dataSectionEl.getBoundingClientRect().top;
        //判断是否在可见区域
        if(bottom>=0&&top<=window.innerHeight){
            dataSectionEl.style.backgroundPosition=`center calc(50% - ${bottom / 5}px)`;
        }
    })
    /*折叠按钮*/
    const burgerEl=document.querySelector('.burger');
    burgerEl.addEventListener('click',()=>{
        headerEl.classList.toggle("open");
    })


}


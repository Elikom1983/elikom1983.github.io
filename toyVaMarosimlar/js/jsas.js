
$(document).ready(function(e) {
    

$('.slider').slick({
	 dots: false,
   
    slidesToShow:3,
   autoplay: true,
  autoplaySpeed: 2000,
  
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        slidesToShow: 3,
		 slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
		 slidesToScroll: 1
      }
    }
  ]
});
}); 

  
let poss=document.querySelectorAll("[class^=pos]");
let foiz=0.23;
poss.forEach(function(index,elment){
  let  widthPos2=window.innerWidth*foiz;
  let heightpos2=widthPos2*0.95;
   poss[2].style.cssText=`width:${widthPos2}px;height:${heightpos2}px`;

  if(index===1 && index===3){
    let widthPos13=widthPos2-71.68;
    let heightpos13=widthPos13-6.4;
    poss[1].style.cssText=`width:${widthPos13}px;height:${heightpos13}px`;
    poss[2].style.cssText=`width:${widthPos13}px;height:${heightpos13}px`;

  }
  if(index===0 && index===4){
     let widthPos04=widthPos2-0.72;
    let heightpos04=widthPos04-6.4;
    poss[0].style.cssText=`width:${widthPos04}px;height:${heightpos04}px`;
    poss[2].style.cssText=`width:${widthPos04}px;height:${heightpos04}px`;

  }
});

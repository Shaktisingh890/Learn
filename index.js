function clock(){
    var newdate=new Date();
    let h=newdate.getHours();
    let m=newdate.getMinutes();
    let s=newdate.getSeconds();

    hr_rotation=(30*h)+(m/60)*30;
    min_rotation=(6*m)+(s/60)*6;
    sec_rotation=6*s;

document.getElementById('hourh').style.transform = `rotate(${hr_rotation}deg)`;
    document.getElementById('minh').style.transform = `rotate(${min_rotation}deg)`;
    document.getElementById('sech').style.transform = `rotate(${sec_rotation}deg)`;




   
   
}
clock();
setInterval(clock,1000);

const sag=document.getElementById('sag');
const resa=document.getElementById('resa');
const resa1=document.getElementById('resa1');
const resa2=document.getElementById('resa2');
const menl=document.getElementById('menl');
const menl1=document.getElementById('menl1');
function sag1(){
    document.getElementById('resa').style.display='none';
    document.getElementById('resa1').style.display='flex';
    document.getElementById('resa1').style.transition='0.5s';
}
function sag2(){
    document.getElementById('resa1').style.display='none';
    document.getElementById('resa2').style.display='flex';
}
function sag3(){
    document.getElementById('resa2').style.display='none';
    document.getElementById('resa').style.display='flex';
}
function sol2(){
    document.getElementById('resa1').style.display='none';
    document.getElementById('resa').style.display='flex';
}
function sol3(){
    document.getElementById('resa2').style.display='none';
    document.getElementById('resa1').style.display='flex';
}
function men(){
    document.getElementById('menl').style.display='flex';
}
function menu(){
    document.getElementById('menl').style.display='none';
}
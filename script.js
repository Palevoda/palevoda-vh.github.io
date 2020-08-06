//Выпдающее меню mobile
/*
$('#nav-ul-button').click(function () 
{ 
    $('.nav-ul-mobile').css({'display':'block'}); 
      
});*/
/*
$('#nav-ul-button').css({'display':'none'}); 
$('#nav-ul-button-2').css({'display':'block'}); 

$('#nav-ul-button-2').click(function () 
{ 
    $('.nav-ul-mobile').css({'display':'none'}); 
});

$('#nav-ul-button').css({'display':'block'}); 
$('#nav-ul-button-2').css({'display':'none'});*/
/*

$('.nav-ul-mobile').mouseover(function (e) 
{ 
    $('.nav-ul-mobile').css({'display':'block'});   
});

$('.nav-ul-mobile').mouseout(function (e) 
{ 
    $('.nav-ul-mobile').css({'display':'none'});   
});*/
//Выпдающее меню mobile
$('#nav-ul-button').click(function () 
{ 
    $('.nav-ul-mobile').css({'display':'block'});   
});

$('.nav-ul-mobile').mouseover(function (e) 
{ 
    $('.nav-ul-mobile').css({'display':'block'});   
});

$('.nav-ul-mobile').mouseout(function (e) 
{ 
    $('.nav-ul-mobile').css({'display':'none'});   
});
//-------------------------------------------------------------------------
//Сертификаты

$('#cert1').mousedown(function () 
{
  $('#cert1').css({'width': '50%'});
  $('#cert1').css({'height': '850px'});
  $('#cert2').css({'display': 'none'});
});
$('#cert1').mouseup(function () 
{ 
  $('#cert2').css({'display': 'block'});
  $('#cert1').css({'height': 'auto'});
  $('#cert1').css({'width': '20%'});
});


$('#cert2').mousedown(function () 
{
  $('#cert2').css({'width': '50%'});
  $('#cert2').css({'height': '850px'});
  $('#cert1').css({'display': 'none'});
});
$('#cert2').mouseup(function () 
{ 
  $('#cert1').css({'display': 'block'});
  $('#cert2').css({'height': 'auto'});
  $('#cert2').css({'width': '20%'});
});
//----------------------------------

//Калькулятор для террасной доски

function culculation_1()
{
    let length = document.forms["calck-1"].len.value;
    let width = document.forms["calck-1"].wid.value;
    let depth = document.forms["calck-1"].dep.value;
    let material = document.forms["calck-1"].mat.value;
    let discount = document.forms["calck-1"].discount.value;
    let area = document.forms["calck-1"].area.value;
    let tax = 1;

    if (discount > 5) discount = 3;
    k = 1;
// Цена = (объем квадратного метра)/(кубометр) * (цена кубометра в зависимости от материала) * (коэффициент размера доски) * (скидка) * (налоговый коэффициент) * (площадь);

    if (material == 'Термоясень') material_cost = 6000;
    if (material == 'Термоклен') material_cost = 6500;
    if (material == 'Термобереза') material_cost = 6800;


    let cost = (length*width*depth)/1e+9 * material_cost * k * ((100-discount)/100) * area * tax;

    let form = document.querySelector('#form-calcuation-1');
    form.onsubmit = function(evt) {
    evt.preventDefault();
    let callckResult = document.querySelector("#calculation1_result");
    callckResult.textContent = 'Сумма заказа: ' + cost + ' BYN';
    }
    $('.warning-text').css({'display':'block'});
    $('.warning-text-2').css({'display':'block'});
    
}


//Нам можно доверять
$('#pb-1').mouseover(function () 
{
  $('#ai-1').css({'display': 'none'});
  $('#hi-1').css({'display': 'block'});
});
$('#pb-1').mouseout(function () 
{
  $('#ai-1').css({'display': 'block'});
  $('#hi-1').css({'display': 'none'});
});


$('#pb-2').mouseover(function () 
{
  $('#ai-2').css({'display': 'none'});
  $('#hi-2').css({'display': 'block'});
});
$('#pb-2').mouseout(function () 
{
  $('#ai-2').css({'display': 'block'});
  $('#hi-2').css({'display': 'none'});
});

$('#pb-3').mouseover(function () 
{
  $('#ai-3').css({'display': 'none'});
  $('#hi-3').css({'display': 'block'});
});
$('#pb-3').mouseout(function () 
{
  $('#ai-3').css({'display': 'block'});
  $('#hi-3').css({'display': 'none'});
});

$('#pb-4').mouseover(function () 
{
  $('#ai-4').css({'display': 'none'});
  $('#hi-4').css({'display': 'block'});
});
$('#pb-4').mouseout(function () 
{
  $('#ai-4').css({'display': 'block'});
  $('#hi-4').css({'display': 'none'});
});
//----------------------------------------------

//Как с нами работать
/*
$('#sb-1').mouseover(function () 
{
  $('#ib-1').css({'color': 'rgb(59,59,59)'});
  $('#ib-1').css({'border': '2.5px solid rgb(59,59,59)'});
  $('#sb1-h3').css({'color': 'rgb(59,59,59)'});

});
$('#sb-1').mouseout(function () 
{
  $('#ib-1').css({'color': '#df873f'});
  $('#ib-1').css({'border': '2.5px solid #df873f'});
  $('#sb1-h3').css({'color': '#df873f'});
});*/

//----------------------------------------------

//Мы в цифрах

$('#dc-1').mouseover(function () 
{
  $('#hb-1').css({'display': 'block'});
  $('#dc-1').css({'border': '4px solid orange'});
  $('#dc-tb-1').css({'display': 'none'});
});
$('#dc-1').mouseout(function () 
{
    $('#hb-1').css({'display': 'none'});
    $('#dc-1').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-1').css({'display': 'block'});
});



$('#dc-2').mouseover(function () 
{
  $('#hb-2').css({'display': 'block'});
  $('#dc-2').css({'border': '4px solid orange'});
  $('#dc-tb-2').css({'display': 'none'});
});
$('#dc-2').mouseout(function () 
{
    $('#hb-2').css({'display': 'none'});
    $('#dc-2').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-2').css({'display': 'block'});

});


$('#dc-3').mouseover(function () 
{
  $('#hb-3').css({'display': 'block'});
  $('#dc-3').css({'border': '4px solid orange'});
  $('#dc-tb-3').css({'display': 'none'});
});
$('#dc-3').mouseout(function () 
{
    $('#hb-3').css({'display': 'none'});
    $('#dc-3').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-3').css({'display': 'block'});

});


$('#dc-4').mouseover(function () 
{
  $('#hb-4').css({'display': 'block'});
  $('#dc-4').css({'border': '4px solid orange'});
  $('#dc-tb-4').css({'display': 'none'});
});
$('#dc-4').mouseout(function () 
{
    $('#hb-4').css({'display': 'none'});
    $('#dc-4').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-4').css({'display': 'block'});

});


$('#dc-5').mouseover(function () 
{
  $('#hb-5').css({'display': 'block'});
  $('#dc-5').css({'border': '4px solid orange'});
  $('#dc-tb-5').css({'display': 'none'});
});
$('#dc-5').mouseout(function () 
{
    $('#hb-5').css({'display': 'none'});
    $('#dc-5').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-5').css({'display': 'block'});

});


$('#dc-6').mouseover(function () 
{
  $('#hb-6').css({'display': 'block'});
  $('#dc-6').css({'border': '4px solid orange'});
  $('#dc-tb-6').css({'display': 'none'});
});
$('#dc-6').mouseout(function () 
{
    $('#hb-6').css({'display': 'none'});
    $('#dc-6').css({'border': '2px solid rgb(59,59,59)'});
    $('#dc-tb-6').css({'display': 'block'});

});
//---------------------------------------------
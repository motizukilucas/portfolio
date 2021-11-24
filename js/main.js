// Hamburger CSS
var hamburger = $(".hamburger");

hamburger.click(function() {
    hamburger.toggleClass("is-active");
});

// Typed JS
// $(document).ready(function() {
//     var options = {
//         strings: ['Confiável.', 'de Qualidade.', 'Acessível.'],
//         typeSpeed: 100,
//         startDelay: 2000,
//         shuffle: true,
//         loop: true,
//         loopCount: 3,
//         backSpeed: 50
//     };

//     var typed = new Typed('.typed', options);
// });

// Count effect
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 20000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

// Email form
$('#emailForm').submit(function(){
    var assunto = $('#emailInputAssunto').val();
    var conteudo = $('#emailFormConteudo').val();
    $(this).attr('action', "mailto:motizuki@protonmail.com?subject="+assunto+"&body="+conteudo);
});
  
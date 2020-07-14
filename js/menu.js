$(".btn-menu").click(function(){
	$(".menu").show();
});
$(".btn-fechar").click(function(){
	$(".menu").hide();
});

/*CHAMAR DEPOIMENTO*/
    $(".dep").click(function(){
        $(".depm").slideToggle();
    });
 $(".fechar").click(function(){
        $(".depm").hide();
    });
$(document).ready(function(){
    $(".filter-link").click(function(e){
        e.preventDefault(); // Empêche le comportement de lien par défaut

        var target = $(this).data('target'); // Obtenez la valeur de l'attribut data-target du lien

        // Cachez toutes les div avec la classe .item
        $('.item').hide();

        // Affichez uniquement les div qui correspondent au filtre sélectionné
        $('.item').filter(function() {
            return $(this).data('filtre').indexOf(target) !== -1;
        }).show();
    });
    // Lorsque le lien "Afficher tout" est cliqué, réinitialisez l'affichage
    $('#show-all').on('click', function(e) {
        e.preventDefault(); // Empêche le comportement de lien par défaut
        $('.item').show();
    });
});

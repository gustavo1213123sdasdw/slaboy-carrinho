function mostrarPagina(pagina) {
    document.getElementById('paginaInicial').classList.add('hidden');
    document.getElementById('paginaLoja').classList.add('hidden');
    document.getElementById('paginaPagamento').classList.add('hidden');
    
    document.getElementById('pagina' + pagina.charAt(0).toUpperCase() + pagina.slice(1)).classList.remove('hidden');
}

// Ano automático no rodapé
(function(){
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

// Menu mobile com acessibilidade
function toggleMenu(btn){
  var menu = document.getElementById('menu');
  if (!menu) return;
  var opened = menu.classList.toggle('open');
  if (btn) btn.setAttribute('aria-expanded', opened ? 'true' : 'false');
}

// Rolagem suave para âncoras internas
(function(){
  document.addEventListener('click', function(e){
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var id = a.getAttribute('href');
    if (id.length < 2) return;
    var el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
    document.getElementById('menu')?.classList.remove('open');
  });
})();

// Botões "Pedir este sabor" → abre WhatsApp com mensagem pronta
(function(){
  var numero = '5511999999999'; // <-- coloque o número da pizzaria aqui (somente dígitos, com DDI 55)
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.pedido-btn');
    if (!btn) return;
    var sabor = btn.dataset.sabor || 'Pizza';
    var msg = `Olá, quero pedir uma ${sabor}. Qual o tamanho disponível?`;
    var url = `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  });
})();
document.addEventListener('DOMContentLoaded', function() {
    var para = document.getElementById('one1');
    para.style.opacity = '0'; 
    
    setTimeout(function() {
        para.style.opacity = '1'; 
    }, 6000);
});

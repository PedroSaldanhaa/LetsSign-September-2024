
const video = document.getElementById('video');


function startCamera() {
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
            .then(function(stream) {
                
                video.srcObject = stream;
                video.style.transform = "scaleX(-1)"; 
            })
            .catch(function(error) {
                
                console.error("Erro ao acessar a câmera:", error);
                alert("Não foi possível acessar a câmera. Verifique as permissões.");
            });
    } else {
        console.error("getUserMedia não é suportado neste navegador.");
        alert("Seu navegador não suporta o acesso à câmera.");
    }
}


window.onload = function() {
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', startCamera);
    } else {
        startCamera();
    }
};

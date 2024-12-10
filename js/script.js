document.getElementById('subirArchivo').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    alert('Archivo subido: ' + event.target.files[0].name);
});

document.getElementById('identifyButton').addEventListener('click', function() {
    let resultText = document.getElementById('resultText');
    resultText.textContent = 'Tu criatura es... ';
    $('#formModal').modal('hide');  
    $('#resultModal').modal('show'); 
});

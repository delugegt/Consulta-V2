function logar(){

    var senha = document.getElementById('senha').value;

    if (senha == "admin") {
        alert('sucesso');
        location.href = "home.html";

    }else{
        alert('incorreto');
        console.alert('certo');
    }
}
function corrigir(){

    let pontos = 0;

    if(document.quest1.q1[3].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q2[1].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q3[4].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q4[0].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q5[2].checked){
        pontos = pontos + 1;
    }  
    if(document.quest1.q6[4].checked){
        pontos = pontos + 1;
    }  
    if(document.quest1.q7[0].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q8[1].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q9[3].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q10[0].checked){
        pontos = pontos + 1;
    } 

    document.getElementById("resultado"). innerHTML = "<b> Não é um MB em matemática, mas o seu resultado foi: </b>" + pontos;
}
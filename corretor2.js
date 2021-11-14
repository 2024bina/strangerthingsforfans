function corrigir(){

    let pontos = 0;

    if(document.quest1.q1[1].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q2[3].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q3[1].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q4[4].checked){
        pontos = pontos + 1;
    }
    if(document.quest1.q5[0].checked){
        pontos = pontos + 1;
    }  
    if(document.quest1.q6[4].checked){
        pontos = pontos + 1;
    }  
    if(document.quest1.q7[2].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q8[2].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q9[0].checked){
        pontos = pontos + 1;
    } 
    if(document.quest1.q10[4].checked){
        pontos = pontos + 1;
    } 

    document.getElementById("resultado"). innerHTML = "<b> Não é um MB em matemática, mas o seu resultado foi: </b>" + pontos;
}
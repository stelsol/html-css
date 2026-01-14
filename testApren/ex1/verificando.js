

let form = document.querySelector('.formulario')

form.addEventListener('submit', function(evento){
        evento.preventDefault()
        //console.log('bloqueado') // bloqueamos o envio do form para poder analizar melhoros dados a serem pegos]
        let nome =  form.querySelector('#nome').value
        let idade = Number(form.querySelector('#idade').value)

        let verificando = idade < 18 ? "menor de idade" : "Maior de idade"

        //console.log(`${nome} e ${verificando}`)
        
        let resultado = document.querySelector('#resultado')
        let p = document.createElement('p')
        p.innerHTML = ` Olá ${nome} você é ${verificando}`

        resultado.innerHTML = ' '
        resultado.appendChild(p)
})






// function verificandoIdade(){
//         let nome =  form.getElementsByClassName('.nome')
//         let idade = form.getElementsByClassName('.idade')



// }
// verificandoIdade()




// function verificandoidade(){
//         let nome = "Stella"
//         let idade = 17
//         let veridicado; 

//         if(idade < 18 ){
//                 veridicado = "Menor de idade"
//         }else {
//                 veridicado = "Maior de idade"
//         }

//         console.log(`Olá ${nome} você é ${veridicado}`) // ou podemos fazer um return para que afunction retorne algo para gente e asim exiba
// }
// verificandoidade()



// let nome = "Stella"
// let idade = 15
// let m;

// if(idade < 18 ){
//         m = "Menor de idade "
// } else{
//         m = "maior de idade"
// }
// let resultado = m

// console.log(resultado)
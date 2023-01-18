let campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

let tBody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', (e) => { // ao submetermos o form clicando no button incluir criamos dinamicamente a linha da tabela
    e.preventDefault();
    let tr = document.createElement('tr');
   campos.forEach((campo) => { // percorrendo o array dos inputs criamos dinamicamente uma célula (coluna) da tabela e adicionamos o valor do campo como conteúdo desta
        let td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
   });

   let tdVolume = document.createElement('td');
   tdVolume.textContent = campos[1].value * campos[2].value; // multiplicano quantidade e valor e gerando dinamicamente a célula (coluna) Volume
   tr.appendChild(tdVolume);

   tBody.appendChild(tr);

   // limpando os campos do form

   campos[0].value = '';
   campos[1].value = 1;
   campos[2].value = 0;

   campos[0].focus(); // campo de data ganhando foco
})
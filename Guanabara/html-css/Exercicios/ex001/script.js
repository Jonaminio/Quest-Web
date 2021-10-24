<script>
function adicionarTarefa() {

var li = document.createElement('li');

li.textContent = tarefa.value;

lista.appendChild(li);

}

var btn = document.querySelector('button');

var btn.onclick = function adicionarTarefa() {

if(document.getElementById("msg").value == null){



 document.getElementById("msg").value = "digite uma tarefa"



}


if(document.getElementById("msg").value != null){



 document.getElementById("msg").value = "Tarefa Adicionada";



var li = document.createElement('li');



    li.textContent = tarefa.value;



    lista.appendChild(li);



document.getElementById("tarefa").value = null;}
}
</script>
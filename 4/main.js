var surname = " ";

document.getElementById('btn').addEventListener("click", Rename);

function Rename() {
    surname = document.getElementById('_surname').value;
    document.getElementById('surname').innerText = "Фамилия: " + surname;
}
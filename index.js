// Program utama menggunakan async dan wait
async function main() {
    const res_user = await fetch('https://jsonplaceholder.typicode.com/users');
    const res_toDo = await fetch('https://jsonplaceholder.typicode.com/todos');
    const res_post = await fetch('https://jsonplaceholder.typicode.com/posts');
    // Menginisialisasi data
    const user = await res_user.json();
    const toDo = await res_toDo.json();
    const post = await res_post.json();
    
    // Untuk setiap user akan dicocokan
    let output = ""
    user.forEach(dataUser => {
        var countNotCompleted = 0;
        // Menghitung jumlah ToDo yang belum selesai
        toDo.forEach(dataToDo => {        
            if (dataToDo.userId == dataUser.id){
                if (dataToDo.completed == false){
                    countNotCompleted++;
                }
            }
        });
        // Jika user ini memiliki jumlah ToDo sama atau lebih besar dari 10
        console.log('hello');
        if(countNotCompleted>=10){
            output += `
            <h3>Nama : ${dataUser.name}</h3>
            <h3>Post :</h3>`
            var count = 1;
            post.forEach(dataPost => {
                if(dataUser.id==dataPost.userId){
                    if(count<=2){
                        output += `
                        <p>${count}. Judul : ${dataPost.title}</p>
                        <p>Isi : ${dataPost.body}</p><br>
                        `
                        count++;
                    }
                }
            })   
        }  
    console.log(output);
    document.getElementById('post').innerHTML = output})
}
main()


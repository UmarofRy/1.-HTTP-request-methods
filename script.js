
let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", () => { 

    let inp = document.querySelector("input");
    let inp2 = document.querySelector("#inp2");

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            userId: 1,
            number: inp2.value,
            title: inp.value,
        }),

    })
        .then(res => res.json())
        .then(data => { 
            div.innerHTML += `
                    <div class="card">
                            <div class="card2">
                                <img src="./Group 232.svg" alt="Group 232">
                               
                                    
                                    <div class="card3">
                                        <h3>${data.title}</h3>
                                        <p>${data.title}/${data.number}</p>
                                    </div>
                            
                            </div>
                        <img class="qalam" src="./qalam.svg" alt="qalam">
                        <img src="./delete.svg" alt="delete" onclick=deleteItem(this,${data.id})>
                            
                    </div>
                    

                `;
            
        });
})

function deleteItem(e, id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            e.parentElement.remove();
        })
}


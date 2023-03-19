
const btnFood = document.getElementById("btnFood");
const btnBook = document.getElementById("btnBook");
const user = document.getElementById("name");
const tbody = document.querySelector('#position tbody');
const cells = document.querySelectorAll("#position td");


for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", async function() {
        console.log('click!');
        
        const page_id = this.dataset.id;
        const name = this.dataset.name;
        const point = Number(this.innerHTML) + 1
  
        await fetch(`/update/${page_id}`,{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify({point,name}),
          });

          //화면에 표시 
          this.innerHTML= `${point}`;
      }); 
  }


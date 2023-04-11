/* 파일 역할 : table 안의 아이템 클릭시 노션에 업데이트 하기 위해 필요한 정보 서버로 보내기 
  (if click item in table, send data to server )  */
const btnFood = document.getElementById("btnFood");
const btnBook = document.getElementById("btnBook");
const user = document.getElementById("name");
const cells = document.querySelectorAll("#position td");
const total = document.getElementById("total");


// Add click event listener to each cell
cells.forEach(cell => {
  cell.addEventListener('click', async () => {

    // Get parent row of clicked cell
    const page_id = cell.dataset.id;
    const name = cell.dataset.name;
    const row = cell.parentNode; //클릭한 셀의 부모 노드 (tr)
    const total = row.children.total; //클릭한 셀의 부모 노드의 자식 노드 중 total
    
    const point = Number(cell.innerHTML) + 1;
    const totalPoint = Number(total.innerHTML) + 1;

    await fetch(`/update/${page_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ point, name }),
    });

    //화면에 리얼타임으로 표시 (fake)
    cell.innerHTML = `${point}`;
    total.innerHTML = `${totalPoint}`;  

  });
});


// for (var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener("click", async function () {
//     console.log("click!!");
//     console.log(this);
//     const row = cells.parentNode;
//     console.log(row);
    
//     const page_id = this.dataset.id;
//     const name = this.dataset.name;
    
//     const point = Number(this.innerHTML) + 1;

//     await fetch(`/update/${page_id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ point, name }),
//     });

//     //화면에 표시
//     this.innerHTML = `${point}`;
//   });
// }


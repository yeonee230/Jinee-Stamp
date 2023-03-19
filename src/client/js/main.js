/* 파일 역할 : table 안의 아이템 클릭시 노션에 업데이트 하기 위해 필요한 정보 서버로 보내기 
  (if click item in table, send data to server )  */
const btnFood = document.getElementById("btnFood");
const btnBook = document.getElementById("btnBook");
const user = document.getElementById("name");
const tbody = document.querySelector("#position tbody");
const cells = document.querySelectorAll("#position td");

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", async function () {
    console.log("click!");

    const page_id = this.dataset.id;
    const name = this.dataset.name;
    const point = Number(this.innerHTML) + 1;

    await fetch(`/update/${page_id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ point, name }),
    });

    //화면에 표시
    this.innerHTML = `${point}`;
  });
}

// ===== BÀI 1 =====
const products = ["Iphone","Samsung","Laptop","Tai nghe","Chuột"];

function render(list){
  document.getElementById("list").innerHTML =
    list.map(p=>`<div class="product">${p}</div>`).join("");
}
render(products);

document.getElementById("search").addEventListener("input", function(){
  let value = this.value.toLowerCase();
  let result = products.filter(p=>p.toLowerCase().includes(value));

  document.getElementById("error").innerText =
    result.length ? "" : "Không tìm thấy";

  render(result);
});

// ===== BÀI 2 =====
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;

  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!regex.test(email)){
    alert("Email sai"); return;
  }

  if(pass.length < 8){
    alert("Mật khẩu yếu"); return;
  }

  localStorage.setItem("user", email);
  document.getElementById("msg").innerText = "Thành công";
});

// ===== BÀI 3 =====
let time = 600;

let interval = setInterval(()=>{
  let m = Math.floor(time/60);
  let s = time%60;

  let t = document.getElementById("timer");
  t.innerText = `${m}:${s<10?"0":""}${s}`;

  if(time < 60) t.classList.add("low");

  time--;

  if(time < 0){
    clearInterval(interval);
    alert("Hết giờ");
  }
},1000);
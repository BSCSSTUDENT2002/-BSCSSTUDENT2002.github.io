var $input = $("input");
var $add = $("#add");
var spn = $("span");
spn.css({ 'font-weight': 'bold','margin-left': '29%'})
const addTask = () => {
  let value = $input.val();
  $(
    "<ul class='main'>" +
      "<li class='task'>" +"<img src='./chk.png' class='hid'> "+value +"</li>" +'<button class="remove">-</button>' +"</ul>"
  ) .appendTo("span")
    .find("img.hid")
    .hide();

  $input.val("");
};
$add.on("click", () => {
  let chk = $input.val();
  if (chk != "") {
    if (spn.text() === "Add tasks") {
      spn.html('Pending Tasks').css({ 'font-weight': 'bold','margin-left': '29%'})
      addTask();
    } else{
      addTask();} 
  }
});
$input.keypress(function(e){
  if(e.key==='Enter'){
  let chk = $input.val();
  if (chk != "") {
    if (spn.text() === "Add tasks") {
      spn.html('Pending Tasks').css({ 'font-weight': 'bold','margin-left': '29%'})
      addTask();
    } else{
      addTask();} 
  }
}})
spn.on("click", ".remove", function () {
  $(this).parent().remove();
  if (spn.html() === "Pending Tasks") {
    spn.html("Add tasks");
  }
});
spn.on("click", ".task", function () {
  $(this).toggleClass("op");
  $(this).find("img").toggle();
});
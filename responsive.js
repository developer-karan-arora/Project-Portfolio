function clodeMenuOnClickList() {
    console.log("first");
    document.getElementsByTagName("aside")[0].style.transform =
      "translateX(-300px)";
  }
  function close() {
    console.log("closing");
    document.getElementsByTagName("aside")[0].style.transform =
      "translateX(-300px)";
  }
  let openIcon = document.getElementById("aside-open");
  openIcon.addEventListener("click", () => {
    document.getElementsByTagName("aside")[0].style.transform =
      "translateX(0px)";
  });
  let closeIcon = document.getElementById("aside-close");
  closeIcon.addEventListener("click", () => {
    close();
  });
  // let asideMenu = document.querySelectorAll(".aside-menu");
  // asideMenu.forEach((item) => {
  //   item.addEventListener("click", close());
  // });
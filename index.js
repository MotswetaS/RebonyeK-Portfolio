//get all buttons on the maincards
const viewBtn = document.querySelectorAll(".btn");
const dashboard = document.querySelector(".dashboard");
const main = document.querySelector(".main");
const content = document.querySelectorAll(".case-studies");
const closeDash = document.querySelector(".fa-close");
const sidebarlinks = document.querySelectorAll(".side-link");

//show dashboard when view project is clicked
viewBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    main.style.display = "none";

    //show dashboard
    dashboard.style.display = "flex";

    //show correct case study
    content.forEach((study, i) => {
      study.style.display = i === index ? "block" : "none";
    });

    //highlight correct sidebar item
    sidebarlinks.forEach((link, i) => {
      link.classList.toggle("active", i === index);
    });
  });
});

//handle sidebar clicks

sidebarlinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    //highlight activelink
    sidebarlinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

//close button to return to main layout
closeDash.addEventListener("click", () => {
  dashboard.style.display = "none";
  main.style.display = "flex";
});

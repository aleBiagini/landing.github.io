document.addEventListener("DOMContentLoaded", () => {
  
    document.querySelectorAll("table").forEach(table => {
        table.addEventListener("mouseover", (e) => {
            table.style.pointerEvents = "none";
        })
    })
})
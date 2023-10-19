function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    const img = document.querySelector("#profile img")

    if (html.classList.contains("light")) {
        img.setAttribuite("src", "/src/imagens/assets/sunglasses.png")
    } else {
        img.setAttribuite("src", "/src/imagens/assets/perfil (1).png")
    }



}

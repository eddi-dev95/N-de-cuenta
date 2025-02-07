document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton")
  const buttonText = document.getElementById("buttonText")
  const cardNumber = document.querySelector(".card-number").textContent.replace(/\s/g, "")

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(cardNumber)
      buttonText.textContent = "Número copiado!"
      copyButton.querySelector("svg").innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            `

      setTimeout(() => {
        buttonText.textContent = "Copiar número de cuenta"
        copyButton.querySelector("svg").innerHTML = `
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                `
      }, 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  })
})


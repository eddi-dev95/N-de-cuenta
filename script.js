document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton")
  const accountNumber = document.getElementById("accountNumber")
  const accountName = document.getElementById("accountName")
  const bankName = document.getElementById("bankName")

  copyButton.addEventListener("click", async () => {
    const details = `${accountNumber.textContent}`

    try {
      await navigator.clipboard.writeText(details)
      updateButtonState(true)
      setTimeout(() => updateButtonState(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  })

  function updateButtonState(isCopied) {
    const buttonText = copyButton.querySelector("span")
    const copyIcon = copyButton.querySelector(".copy-icon")

    if (isCopied) {
      buttonText.textContent = "Copied!"
      copyIcon.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon check-icon"><polyline points="20 6 9 17 4 12"/></svg>'
      copyButton.disabled = true
    } else {
      buttonText.textContent = "Copy Details"
      copyIcon.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
      copyButton.disabled = false
    }
  }
})


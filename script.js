document.addEventListener("DOMContentLoaded", () => {
    const copyButton = document.getElementById("copy-button"); // Asegúrate de que este botón existe en tu HTML
    const successMessage = document.getElementById("copy-success");

    function copyToClipboard() {
        const accountInfo = document.getElementById("account-info").innerText;

        // Usamos el API moderna para copiar al portapapeles
        navigator.clipboard.writeText(accountInfo)
            .then(() => {
                successMessage.style.display = "block";
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 2000);
            })
            .catch(err => console.error("Error al copiar: ", err));
    }

    // Asignamos el evento al botón
    if (copyButton) {
        copyButton.addEventListener("click", copyToClipboard);
    } else {
        console.error("No se encontró el botón con ID 'copy-button'");
    }
});

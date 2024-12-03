document.querySelectorAll(".main-drop").forEach((card) => {
    card.addEventListener("click", () => {
        // Hide all product-dropdowns
        document.querySelectorAll(".product-dropdowns").forEach((dropdown) => {
            dropdown.style.display = "none";
        });

        // Show the clicked card's product-dropdowns
        const dropdown = card.nextElementSibling;
        if (dropdown) {
            dropdown.style.display = "flex";
        }
    });
});

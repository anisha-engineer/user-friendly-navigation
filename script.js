const chapters = {
    math: [
        { name: "Algebra", link: "#" },
        { name: "Geometry", link: "#" }
    ],
    logic: [
        { name: "Puzzles", link: "#" },
        { name: "Syllogisms", link: "#" }
    ]
};

document.addEventListener("DOMContentLoaded", function() {
    const categoryDropdown = document.getElementById("categoryDropdown");
    const chapterDropdown = document.getElementById("chapterDropdown");

    function updateChapters() {
        const category = categoryDropdown.value;
        chapterDropdown.innerHTML = "";

        if (chapters[category]) {
            chapters[category].forEach(chap => {
                let option = document.createElement("option");
                option.value = chap.link;
                option.textContent = chap.name;
                chapterDropdown.appendChild(option);
            });
        }
    }

    categoryDropdown.innerHTML = `<option value="math">Math</option><option value="logic">Logic</option>`;
    updateChapters();
    categoryDropdown.addEventListener("change", updateChapters);
    window.goToChapter = () => window.location.href = chapterDropdown.value;
});
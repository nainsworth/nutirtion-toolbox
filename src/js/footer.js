function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");

  const githubLink = document.createElement("a");
  githubLink.href = "https://www.github.com/nainsworth";
  githubLink.target = "_blank";
  githubLink.textContent = "NAINSWORTH";

  const githubImg = document.createElement("img");
  githubImg.src = GitHub;
  githubImg.alt = "github logo";

  footer.appendChild(githubLink);
  githubLink.appendChild(githubImg);

  return footer;
};

export default createFooter;
function query() {
  const word = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultBox = document.getElementById("result");
  if (vocabDB[word]) {
    const ex = vocabDB[word].examples[0];
    resultBox.innerHTML = `<p><strong>${word}</strong></p>
      <blockquote>${ex.full}</blockquote>
      <p><em>${ex.source}</em></p>`;
  } else {
    resultBox.innerHTML = "<p>未找到该词</p>";
  }
}
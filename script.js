function query() {
  const word = document.getElementById("searchInput").value.trim().toLowerCase();
  const box = document.getElementById("resultBox");
  if (vocabDB[word]) {
    const exList = vocabDB[word].examples;
    box.innerHTML = `<h3>${word}</h3>` + exList.map(ex =>
      `<blockquote>${ex.full}</blockquote><p><em>${ex.source}</em></p>`
    ).join('');
  } else {
    box.innerHTML = "<p>未找到该词。</p>";
  }
}

function generateQuestion() {
  const words = Object.keys(vocabDB);
  const word = words[Math.floor(Math.random() * words.length)];
  const correct = vocabDB[word].synonyms[0];
  const distractors = vocabDB[word].distractors.slice(0, 3);
  const options = [correct, ...distractors].sort(() => Math.random() - 0.5);

  document.getElementById("question").innerHTML = `词汇：<strong>${word}</strong><br>请选择其近义词：`;
  const ul = document.getElementById("options");
  ul.innerHTML = "";

  options.forEach(opt => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.onclick = () => checkAnswer(opt, correct, li);
    ul.appendChild(li);
  });

  document.getElementById("feedback").innerHTML = "";
}

function checkAnswer(selected, correct, element) {
  if (selected === correct) {
    element.classList.add("correct");
    document.getElementById("feedback").innerHTML = "✅ 正确！";
  } else {
    element.classList.add("wrong");
    document.getElementById("feedback").innerHTML = `❌ 错误，正确答案是：<strong>${correct}</strong>`;
  }
}
window.onload = generateQuestion;

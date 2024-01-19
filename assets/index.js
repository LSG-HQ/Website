const wordContainer = document.getElementById("wordContainer");
      const caret = document.getElementById("caret");
      const header = document.querySelector(".we_exist");
      const wordsSets = [
        ["Raise the potential of the human race"],
        ["Inspire life without limits"],
        ["Build the future"],
        ["Disrespect the impossible"],
        ["Playing infinite games"],
        ["Technology"],
        ["Delivering on hope"],
        ["Ourselves"],
      ];

      const headerText = ["We exist to", "We Believe In"];
      let currentIndex = 0;
      let currentCharIndex = 0;
      let caretVisible = true;
      let currentHeaderIndex = 0; 
      let currentHeaderChar = 0;

      function displayWords() {
        const wordsSet = wordsSets[currentIndex];
        const currentWord = wordsSet[0];
        const currentHeaderWord = headerText[currentHeaderIndex]

        if (currentIndex < 4) {
          currentHeaderIndex = 0
        } else {
          currentHeaderIndex = 1
        }

        const wordWithCaret =
          currentWord.substring(0, currentCharIndex) +
          (caretVisible ? "<span>|</span>" : "");
        wordContainer.innerHTML = `<div>${wordWithCaret}</div>`;

        const currentHeaderText = currentHeaderWord.substring(0, currentHeaderChar)
        header.textContent = currentHeaderText;

        currentCharIndex++;
        currentHeaderChar++;

        if (currentCharIndex > currentWord.length) {
          currentCharIndex = 0;
          currentIndex = (currentIndex + 1) % wordsSets.length;
          currentHeaderChar = 0;
          currentHeaderIndex = (currentHeaderIndex + 1) % headerText.length;
        }

        caretVisible = !caretVisible;
      }

      setInterval(displayWords, 130);
      displayWords();
/////////////////////////////////////////////////////////////////
//// Cottignies Mattew 20220212 & Galinier Guillaume 20220135 ///
/////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////
/// evenement bouton check : 

  const quizForm = document.getElementById('quiz-form');
  const alertBox = document.getElementById('alert');

  quizForm.addEventListener('submit', function (event) {
    event.preventDefault();///preventDefault permet d'empecher le reset apres utilisation du bouton check
    resetCouleur(); //// estre sur que text = noir au depart
    const bonneReponses = verifReponse(); // verifie si la reponse a la question est bonne
    updateColors(bonneReponses); /// change la couleur pour vert ou rouge en fonction du resultat de verifReponse()
    alertBox.style.display = bonneReponses.every(answer => answer) ? 'block' : 'none'; /// affiche la boite congratulation en cas de reussite
  });


///////////////////////////////////////////////////////////////////////
/// verifie que la couleur de base est noir a l'origine
  function resetCouleur() {
    document.querySelectorAll('.question-item, .answer').forEach(element => {
      element.style.color = 'black';
    });
  }
////////////////////////////////////////////////////////////////////////////////
/// verifie si la reponse est juste

  function verifReponse() {
    return Array.from(document.querySelectorAll('.question-item')).map((question, index) => {
      const reponseSelectionne = document.querySelector(`input[name="answer-${index + 1}"]:checked`);
      return reponseSelectionne ? reponseSelectionne.value === 'true' : false;
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////////::::::
  /// if correcte passage de la question $ en vert ou rouge sinon
  function updateColors(bonneReponses) {
    document.querySelectorAll('.question-item').forEach((question, index) => {

      const questionBienRepondu = bonneReponses[index];

      const color = questionBienRepondu ? 'green' : 'red';

      question.style.color = color;

      question.querySelectorAll('.answer').forEach(answer => {
        const bienRepondu = questionBienRepondu && answer.value === 'true';
        answer.parentNode.style.color = bienRepondu ? 'green' : 'red';

        if (!bienRepondu && bonneReponses[index]) {
          answer.parentNode.style.color = 'green';
        }
      });
    });
  }

;

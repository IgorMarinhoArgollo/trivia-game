import shuffle from '../helper/functionShuffle';

export async function fetchToken() {
  try {
    const tokenEndPoint = 'https://opentdb.com/api_token.php?command=request';
    const rawResults = await fetch(tokenEndPoint);
    const result = await rawResults.json()
    const token = await result.token;
    return token;
  } catch (error) {
    console.error(error);
  }
}



export async function fetchTrivia(token, numberOfQuestions) {
  try {
    const triviaEndpoint = `https://opentdb.com/api.php?amount=${numberOfQuestions}&token=${token}`;

    const rawResult = await fetch(triviaEndpoint);
    const result = await rawResult.json();
    const shuffledResult = await result.results.map((element) => ({ ...element, shuffled: shuffle([...element.incorrect_answers ,element.correct_answer] )}));
    return shuffledResult;
  } catch (error) {
    console.error(error)
  }
}

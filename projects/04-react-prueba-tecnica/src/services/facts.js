
const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

const getRandomFact = () => {
 return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => res.json())
    .then(data => {
        const { fact } = data;
        return fact;
    })
}

export {getRandomFact}
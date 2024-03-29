import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

function useCatImage({fact}) {
    const [imageUrl, setImageUrl] = useState();
  
    useEffect(() =>{
      if(!fact) return;
      const firstWord = fact.split(" ").slice(0, 1).join(" ");
  
      fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response;
          setImageUrl(url)
        })
        .catch(error => console.log(error))
  
    }, [fact])
  
    return {imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
}

export {useCatImage}
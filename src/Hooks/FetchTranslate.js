
let  URL = (word) => `https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=es%7Cen&q=${word}&mt=1&onlyprivate=0&de=a%40b.c`;
// 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?langpair=en%7Ces&q=Hello%20World!&mt=1&onlyprivate=0&de=a%40b.c
const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c45ee4099mshb0da996231c16c0p101d9fjsn96148d3602e5',
		'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
	}
};


export const translate = async (word) => { 
	let response = await fetch(URL(word), OPTIONS)
	let wordTranslate = await response.json()
	wordTranslate = wordTranslate.responseData.translatedText
  return  wordTranslate
}
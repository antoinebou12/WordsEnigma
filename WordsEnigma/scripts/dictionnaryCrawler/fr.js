import axios from 'axios'
import * as cheerio from 'cheerio';
const url = "https://www.le-dictionnaire.com/definition/";


fetchData(url).then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    const maincontent = $('#maincontent');
    const defbox = maincontent.find('div.defbox');
    defbox.forEach(def => {
        const def_ul = $(def).find('div.motboxinfo + ul')
        forEach(def_ul, (def_li) => {
            const def_li_text = $(def_li).text();
            console.log(def_li_text);
        });
    });
})

async function fetchData(url) {
    console.log("Crawling data...")
    // make http call to url
    let response = await axios(url).catch((err) => console.log(err));

    if (response.status !== 200) {
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}
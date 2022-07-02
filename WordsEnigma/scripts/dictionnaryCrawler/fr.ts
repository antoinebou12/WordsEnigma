import axios, { AxiosResponse } from 'axios'
import * as cheerio from 'cheerio';

export const url = "https://www.le-dictionnaire.com/definition/";

async function fetchData(url: string): Promise<any> {
    // make http call to url
    let response: void | AxiosResponse<any, any> = await axios(url).catch((err) => console.log(err));
    if (response) {
        // console.log(`${url} fetched`);
        let status: number = response?.status;
        if (status !== 200) {
            console.log("Error occurred while fetching data");
            return;
        }
    } else {
        console.log("Error occurred while fetching data");
        return;
    }
    return response;
}

export function getDefinition(word: String) {
    return fetchData(url + word).then((res) => {
        if (res) {
            let data = res.data;
            if (data) {
                const $ = cheerio.load(data);
                const maincontent = $('#maincontent');
                const defbox = maincontent.find('div.defbox');
                const def_ul = defbox.find('div.motboxinfo + ul');
                let definition: string = ""
                for (let i = 0; i < def_ul.length; i++) {
                    const def_li_text = $(def_ul[i]).text().replace(/\s+/g, ' ');
                    definition += def_li_text;
                }
                return definition;
            } else {
                console.log("Error occurred while fetching data");
                return;
            }
        } else {
            console.log("Error occurred while fetching data");
        }
    })
}
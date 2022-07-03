import axios, { AxiosResponse } from 'axios'
import https from 'https';
import * as cheerio from 'cheerio';

export const urlLeDictionnaire = "https://www.le-dictionnaire.com/definition/";
export const urlWiktionary = "https://fr.wiktionary.org/wiki/";

async function fetchData(url: string): Promise<any> {
    // make http call to url
    let response: void | AxiosResponse<any, any> = await axios(url, {timeout:50000, httpsAgent: new https.Agent({ keepAlive: true })}).catch((err) => console.log(err));
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

async function getDefitionFromWiktionary(word: String) {
    return await fetchData(urlWiktionary + word).then((res) => {
        if (res) {
            let data = res.data;
            if (data) {
                const $ = cheerio.load(data);
                const list_def = $('#mw-content-text > div.mw-parser-output > ol');
                let definition: string = ""
                for (let i = 0; i < list_def.length; i++) {
                    const def_li_text = $(list_def[i]).text().replace(/\s+/g, ' ');
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
    });
}

async function getDefinitionFromLeDictionnaire(word: String) {
    return await fetchData(urlLeDictionnaire + word).then((res) => {
        if (res) {
            let data = res.data;
            if (data) {
                const $ = cheerio.load(data);
                const maincontent = $('#maincontent');
                const defbox = maincontent.find('div.defbox');
                let definition: string = ""
                for (let i = 0; i < defbox.length; i++) {
                    const def_ul = defbox.find('div.motboxinfo + ul');
                    for (let i = 0; i < def_ul.length; i++) {
                        const def_li_text = $(def_ul[i]).text().replace(/\s+/g, ' ');
                        definition += def_li_text;
                    }
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


export async function getDefinition(word: String) {
    return await getDefinitionFromLeDictionnaire(word).then((res) => {
        if (res) {
            return res;
        } else {
            return getDefitionFromWiktionary(word).then((res) => {
                if (res) {
                    return res;
                } else {
                    return "";
                }
            });
        }
    });

}
import Airtable from "airtable"
//OVA FILE SE DOGADJE AT RUNTIME
//KORISTIMO INSTALISANI AIRTABLE.JS KLIJENT DA BI PRISTUPALI AIRTABLE CMS-U U SURVEY/JS KO,MPONENTI
//TAKODJE POSTO JE RUNTIME KLJUCEVI MORAJU BITI OBAVEZNO SA GATBY PREFIKSOM DA BI GATSBY MOGAO DA IM PRISTUPI U ENVIROMENT
export default new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  process.env.GATSBY_AIRTABLE_BASE_ID
)
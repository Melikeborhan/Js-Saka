class TranslateApi{
    constructor(ingilizceSaka){
        this.baseURL = 'https://translation.googleapis.com';

        this.aranacakCumle = ingilizceSaka;
        this.axiosNesnesi = axios.create({

            baseURL : this.baseURL,
            params: {
                target : 'tr', //verılen degerı turkceye cevırmesı ıcın
                key : 'AIzaSyCI6rLVg4CgKEifSLufVAEqTUigEvkyUc0',
                q:this.aranacakCumle


            }
        });

    }
    async ceviriYap(){
        const ceviri = await this.axiosNesnesi.get('/language/translate/v2');
        console.log(ceviri.data.data.translations[0].translatedText);
    
        return ceviri.data.data.translations[0].translatedText;

    
    }

}
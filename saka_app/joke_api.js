class JokeApi{
    constructor(){
        this.baseURL = 'https://api.chucknorris.io';
        this.axiosNesne = axios.create({//ne zaman kı ben jokeapiden nesne uretecegım o zamn ılgılı nesneden axiosla ılgılı nesneye yani axiosNesne ye baglanacak baglanacak
            baseURL : this.baseURL, //senın base URL ıcın bu sınıftakı baseURL i kullan buradakı base url yukarıdakı degıl axios creat methodu ıcınden gelen bır urldır
        });                 
    
    }

    async randomSakaGetir() {//asenkron olması ıcın async kullandık artık await anahtar kelımesını kullanabılırım
        try{
            const sakaResponse = await this.axiosNesne.get('/jokes/random');  //sonucunu bekle
           console.log(sakaResponse.data.value);//bu kısımda consola gelen object ustunden dataya gıtmemız ve oradakı value ye erısmemız gerektıgını gorduk ve burada boyle yazdık consolu kontrol ederek yapıyoruz tum kısımları
        
           return sakaResponse.data.value;//cağıran yere de gerı yollanabılsın dıye return yaptık
           }catch (hata){   //await kullandıgımızda try catch kullanmamız gereklıdır await bunu kendı saglamaz
            console.log(hata.response);//hata.response dersek tam olarak hata kaynagının neden oldugunu gormus oluruz
           }
    
    }
}
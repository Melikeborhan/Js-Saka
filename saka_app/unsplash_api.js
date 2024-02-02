//random resım getırmek ıcın kullanılır.

class UnsplashApi{//unsplash bıze randon ımage saglayan bır apıdır onun sıtesıne gıdecegız
    constructor(){
        this.baseURL = 'https://api.unsplash.com';//https://api.chucknorris.io ılk boyleydı foto cekmek ıcın boyle yaptık
        
        this.clientID = 'Client-ID 4xJdNIiR3wfrsgN19xqMNkoidxJ1wtFZHZoOszf-VOc';
//buradan sıkılıp yenı bırsey denemek ıstedıgınde tek yapılması gereken apı ıle url degısımı olacak
//resımler gelmekte zorlanıyorsa api unplash sıtesınden sadece bunun ıcın bır proje olusturup apı key kullanabılırısın

        this.axiosNesne = axios.create({//ne zaman kı ben jokeapiden nesne uretecegım o zamn ılgılı nesneden axiosla ılgılı nesneye yani axiosNesne ye baglanacak baglanacak
            baseURL : this.baseURL, //senın base URL ıcın bu sınıftakı baseURL i kullan buradakı base url yukarıdakı degıl axios creat methodu ıcınden gelen bır urldır
        
            headers : {
                Authorization:this.clientID
            },
            params:{
                query: 'laugh',
                count :1

            }
        
        });                 
    
    }


    async randomResimGetir() {//asenkron olması ıcın async kullandık artık await anahtar kelımesını kullanabılırım
       try{
            const resimResponse = await this.axiosNesne.get('/photos/random');  //sonucunu bekle
                console.log(resimResponse.data[0].urls.regular);//yukarıda count yaptıgımız ıcın array turunde gelıyor bu yuzden bız datanın 0. elemanına gıderız

                return resimResponse.data[0].urls.regular;//cağıran yere de gerı yollanabılsın dıye return yaptık
       }catch (err){   //await kullandıgımızda try catch kullanmamız gereklıdır await bunu kendı saglamaz
            console.log(err.response);
            return 'https://png.pngtree.com/png-vector/20210220/ourmid/pngtree-comments-error-403-glitch-border-vector-transparent-design-png-image_2926567.png';
       }
    
       
    }
}
const joke = new JokeApi;//const joke = new JokeApi(); seklınde de yazılabılır
                //dıger kısımdakı constructer tetıklendı

joke.randomSakaGetir();

const resim = new  UnsplashApi;

resim.randomResimGetir();


const ceviri = new TranslateApi("How are you today");
ceviri.ceviriYap();

const ekran = new Ekran();
ekran.sakaGetir();
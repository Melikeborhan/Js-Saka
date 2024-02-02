class Ekran{
    constructor(){
        this.sakaGetirBtn = document.querySelector('.saka-getir-button');
        this.sakaGetirBtn.addEventListener('click',()=>this.sakaGetir());//this.sakaGetirBtn yapmadık burayı onun yerıne error functıonların kendı thıs yoktur onun yerıne global parentınde ne varsa onu alır 
    //bu yukardakı kısım yerıne this.sakaGetir.bind(this); yapabılırdık
    
    }

    async sakaGetir(){    //asenkron olmasıdır yanı ınternete gıdıp verı cekmek ıcındır
        const rastgeleResim = await new UnsplashApi().randomResimGetir();//bu fonksuyona eriş ve sonra asenkron olan randomresım getır fonksuyobundan getır demıs olurıuz asynsc oldugu ıcın ıs yuku fazla bu yuzden de onu beklemek gerek bu yuzden de await kullanarak beklıyoruz.
        const rastgeleSaka = await new JokeApi().randomSakaGetir();//jokeApi calışyıt bır nesne uret  ondan sonra da randomsakaGetir fonk ıcınden sayaı getırecektır

        const ceviri = await new TranslateApi(rastgeleSaka).ceviriYap();
 

    
        const tumSonuclar = {
            rastgeleResim, //rastgeleResim:rastgeleResim,
            rastgeleSaka,                           // rastgeleSaka:rastgeleSaka,
            ceviri                              //ceviri:ceviri
                                        //key degerlerı value degerlerıyle bırebır aynıysa yazmak zorunda degılız
            
        }
        this.ekranaSonuclariYazdir(tumSonuclar);//buraya parametre olarak da resim,saka,ceviri bu sekılde yazmak amelelık olurdu

    }

    ekranaSonuclariYazdir(sonuclar){
        document.querySelector('.sonuc').innerHTML=` <div class="card">
        <div class="card-image">
          <figure class="image is-16by9">
            <img src="${sonuclar.rastgeleResim}" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            
            <div class="media-content">
              <p class="title is-4 has-text-danger pb-4">${sonuclar.rastgeleSaka}</p>
              
            </div>
          </div>

        </div>

        <div class="card-content">
            <div class="media">
              
              <div class="media-content">
                <p class="title is-4 has-text-primary pb-4">${sonuclar.ceviri}</p>
                
              </div>
            </div>

          </div>
      </div>`;
    }
}
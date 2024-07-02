document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    const API_URL = process.env.API_URL;

    console.log(articleId)
    if (articleId) {
        fetch(`${API_URL}/economie/${articleId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //Manipulation des details de l'article
            const articleDetails = document.querySelector('.articleDetails');
            let articleDetailsItems = 
                `
                <div class="about-right mb-90">
                <div class="about-img">
                    <img src="${data.titres.imageGrandTitre}" alt="">
                </div>
                <div class="heading-news mb-30 pt-30">
                    <h3>${data.titres.grandTitre}</h3>
                </div>
                <div class="about-prea">
                    
                    <p class="about-pera1 mb-25">
                        ${data.titres.contenuGrandTitre}
                    </p>
                </div> 
                <div class="section-tittle mb-30 pt-30">
                    <h3>${data.titres.sousTitres[0].sousTitre} </h3>
                </div>
                <div class="about-prea">
                    
                    <p class="about-pera1 mb-25">
                    ${data.titres.sousTitres[0].contenuSousTitre} 
                        
                        </p>
                </div>
                <div class="section-tittle mb-30 pt-30">
                    <h3>${data.titres.sousTitres[1].sousTitre} </h3>
                </div>
                <div class="about-prea">
                    
                    <p class="about-pera1 mb-25">
                    ${data.titres.sousTitres[1].contenuSousTitre} 
                        
                        </p>
                </div>
                <div class="social-share pt-30">
                    <div class="section-tittle">
                        <h3 class="mr-20">Share:</h3>
                        <ul>
                            <li><a href="#"><img src="assets/img/news/icon-ins.png" alt=""></a></li>
                            <li><a href="#"><img src="assets/img/news/icon-fb.png" alt=""></a></li>
                            <li><a href="#"><img src="assets/img/news/icon-tw.png" alt=""></a></li>
                            <li><a href="#"><img src="assets/img/news/icon-yo.png" alt=""></a></li>
                        </ul>
                    </div>
                </div>
            </div>

                `;
          
            articleDetails.innerHTML = articleDetailsItems;
        })
        .catch(error => console.error("Erreur lors de la recuperation des détails de l'article"));
    } else {
        console.error(" ID de l'article non fornit");
    }
})
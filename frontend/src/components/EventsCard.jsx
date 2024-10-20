export default function evtsCard({ evt }){
    return (
        <>
              <div class="carousel slide" id="carouselPopularItems" data-bs-touch="false" data-bs-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div class="row gx-3 h-100 align-items-center">
              <div class="col-sm-6 col-md-4 col-xl mb-5 h-100">
                <div class="card card-span h-100 rounded-3"><img class="img-fluid rounded-3 h-100" src="assets/img/gallery/cheese-burger.png" alt="..." />
                  <div class="card-body ps-0">
                    <h3 class="fw-bold text-1000 text-truncate mb-1">{evt.title}</h3>
                    <div>
                        <span class="text-warning me-2">{evt.date}</span><br/>
                        <span class="text-primary">{evt.venue}</span><br/>
                        <span class="text-primary">{evt.price}</span>
                        
                    </div><h5 class="fw-bold text-1000 text-truncate mb-1">{evt.organizer}</h5></div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev carousel-icon" type="button" data-bs-target="#carouselPopularItems" data-bs-slide="prev"><span class="carousel-control-prev-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button>
        <button class="carousel-control-next carousel-icon" type="button" data-bs-target="#carouselPopularItems" data-bs-slide="next"><span class="carousel-control-next-icon hover-top-shadow" aria-hidden="true"></span><span class="visually-hidden">Next </span></button>
      </div>
        </>
    )
}
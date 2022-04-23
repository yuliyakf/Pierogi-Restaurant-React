import React from 'react'

const Home = () => {
   return (
      <>
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-12 p-0">
                  <div className="par1" id="parallax">
                     <h1 className="theme">PIEROGI ARE FOR SOCIALIZING</h1>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-sm-12">
                  <div className="par2">
                     <div className="row justify-content-center">
                        <div className="col-md-5 col-lg-4 align-self-start first">
                           <h2>Food</h2>
                           <p>Lorem ipsum dolor sit amet. Et autem porro est suscipit quae qui asperiores dolor et aspernatur
                              tempore? Aut tempore alias aut tempora accusamus qui dolores iste quo obcaecati perferendis et
                              labore doloribus est facere tempore. Rem omnis nesciunt qui exercitationem soluta sit nulla unde
                              in totam dolorum harum galisum? Eum accusamus quae qui optio necessitatibus quo repudiandae
                              voluptatem in incidunt reprehenderit.</p>
                        </div>
                        <div className="col-md-5 col-lg-4 align-self-start first">
                           <h2>Experience</h2>
                           <p>Lorem ipsum dolor sit amet. Et autem porro est suscipit quae qui asperiores dolor et aspernatur
                              tempore? Aut tempore alias aut tempora accusamus qui dolores iste quo obcaecati perferendis et
                              labore doloribus est facere tempore. Rem omnis nesciunt qui exercitationem soluta sit nulla unde
                              in totam dolorum harum galisum? Eum accusamus quae qui optio necessitatibus quo repudiandae
                              voluptatem in incidunt reprehenderit.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="container-fluid mt-4">
            <div className="row">
               <div className="col-8">
                  <img className="img-fluid mb-4 h-100 d-inline-block" src="images/restaurant 1.jpg" alt="restaurant" />
               </div>
               <div className="col">
                  <img className="img-fluid mb-4" src="images/blueberry pierogi.jpg" alt="pierogi" />
                  <img className="img-fluid" src="images/borsht.jpg" alt="borsht" />
               </div>
            </div>
            <div className="row mt-4">
               <div className="col">
                  <img className="img-fluid mb-4" src="images/european potato salad.jpg" alt="salad" />
                  <img className="img-fluid" src="images/cabbage roll and two sides.jpg" alt="cabbage roll" />
               </div>
               <div className="col-8">
                  <img className="img-fluid mb-4 h-100 d-inline-block" src="images/food 2.jpg" alt="food" />
               </div>
            </div>
            <div className="row mt-4">
               <div className="col-6">
                  <img className="img-fluid mb-4 h-100 d-inline-block" src="images/hungarian goulash 1.jpg" alt="goulash" />
               </div>
               <div className="col-6">
                  <img className="img-fluid mb-4 h-100 d-inline-block" src="images/pierogi and meatballs.jpg" alt="meatballs" />
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;
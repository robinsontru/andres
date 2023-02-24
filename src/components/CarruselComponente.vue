
 <template>
<div>
  
 <div>
  <h1>proyect      
    <br>
    bank   </h1>

  <img src="@/assets/logo-sena-verde.png" alt="" srcset="" id="imges">

</div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/logo.png" class="d-center w-45 h-45" alt="50%">
          </div>
          <div class="carousel-item">
            <img src="@/assets/logo.png" class="d-center w-65 " alt="5">
          </div>
          <div class="carousel-item">
            <img src="@/assets/descarga.png" class="d-center w-45 h-45" alt="55">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> 
    </div>
   
      
</div>




 </template>
 
 <script>
 export default {
 
     name:"MenuComponente",
 }
 </script>
 <style scoped>
 h1{

    color:green
 }
 #imges{
  height: 5%;
  width: 5%;
justify-content: end;
display: flex; 
}

 </style>
 
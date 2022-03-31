const integrantes = document.getElementById("footer")

function int (){
    let contenedor = document.getElementById("footer")
    contenedor.innerHTML =  `
    <div class="tarjeta-participantes">
      <img src="https://res.cloudinary.com/dnb1vdvcn/image/upload/v1648681722/c93f5023-d6ea-4472-8919-0b0468d75fc4_fkhkkn.jpg" alt="...">
      <div class="tarjeta-participantes_body">
        <ul>
          <h5>Geraldine Asprilla</h5><hr>
          <li><p>Edad: 17</p></li>
          <li><p>De: Medellín</p></li>
          <li><p>Técnica auxiliar en desarrolo de software con muy buena lógica de programación, conocimientos básicos en algunos lenguajes de  programación como (Java, Phyton, Visual Basic, entre otros), en este momento me encuentro encaminada a Front end (HTML, CSS, JavaScript).</ṕ></li>
        </ul>
      </div>
    </div>

    <div class="tarjeta-participantes">
      <img src="https://res.cloudinary.com/dz8on44po/image/upload/v1648507049/Foto_de_Daniel_Tinjaca_sxnofo.jpg" alt="...">
      <div class="tarjeta-participantes_body">
        <ul>
          <h5>Daniel Tinjaca</h5>
          <hr>
          <li><p>Edad: 27</p></li>
          <li><p>De: Bogotá</p></li>
          <li><p>Desarrollador Frontend en formación con más de dos años de experiencia en Maquetación Web. Entusiasta en aprender tecnologías encaminadas al Desarrollo Web',
          lenguajes: 'HTML & CSS'</p></li>
        </ul>
      </div>
    </div>

    <div class="tarjeta-participantes">
      <img src="https://res.cloudinary.com/dnb1vdvcn/image/upload/v1648681680/82c61acf-aa45-4521-b048-994a4685d80c_krnrjr.jpg" alt="...">
      <div class="tarjeta-participantes_body">
        <ul>
          <h5>Jackelin Rodriguez</h5><hr>
          <li><p>Edad: 20</p></li>
          <li><p>De: Bogotá</p></li>
          <li><p>No poseo experiencia, pero tengo toda la actitud para aprender.</p></li>
        </ul>
      </div>
    </div>

    <div class="tarjeta-participantes">
      <img src="https://res.cloudinary.com/dp9zv16le/image/upload/v1648506286/foto_y11noe.jpg"  alt="...">
      <div class="tarjeta-participantes_body">
        <ul>
          <h5>Dilan Espindola</h5><hr>
          <li><p>Edad: 20</p></li>
          <li><p>De: Bogotá</p></li>
          <li><p>conocimientos: javascript, html, css, un poco de react, nodejs</p></li>
        </ul>
      </div>
    </div>
    `
}

int ();
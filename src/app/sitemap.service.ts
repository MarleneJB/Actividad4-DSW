import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor() { }

  generateSitemap(): string {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
        <url>
          <loc>http://localhost:4200/inicio</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>http://localhost:4200/series</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>

        <url>
          <loc>http://localhost:4200/peliculas</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>daily</changefreq>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/your-name</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Your Name</title>
          <description>Dos adolescentes intercambian cuerpos y buscan encontrarse a través del tiempo y el espacio.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/spirited-away</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Spirited Away</title>
          <description>Una joven queda atrapada en un mundo de espíritus y debe trabajar en un baño público para encontrar el camino a casa.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/akira</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Akira</title>
          <description>En un futuro distópico, un adolescente desarrolla poderes psíquicos que amenazan con destruir la ciudad de Neo-Tokyo.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/princess-mononoke</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Princess Mononoke</title>
          <description>Un joven guerrero se ve envuelto en un conflicto entre humanos y seres espirituales que protegen la naturaleza.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/my-neighbor-totoro</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>My Neighbor Totoro</title>
          <description>Dos hermanas descubren criaturas mágicas mientras se mudan al campo para estar cerca de su madre enferma.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/grave-of-the-fireflies</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Grave of the Fireflies</title>
          <description>La desgarradora historia de dos hermanos que luchan por sobrevivir durante la Segunda Guerra Mundial.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/ghost-in-the-shell</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Ghost in the Shell</title>
          <description>Una cyborg policía intenta detener a un hacker que amenaza la seguridad en un futuro cibernético.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/perfect-blue</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Perfect Blue</title>
          <description>Una ex ídolo pop se enfrenta a la obsesión de un acosador y a su propia pérdida de identidad mientras intenta ser actriz.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/the-girl-who-leapt-through-time</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>The Girl Who Leapt Through Time</title>
          <description>Una adolescente descubre que puede viajar en el tiempo y utiliza su poder para arreglar problemas de su vida.</description>
        </url>
        <url>
          <loc>http://localhost:4200/peliculas/weathering-with-you</loc>
          <lastmod>2024-09-27</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
          <title>Weathering With You</title>
          <description>Un joven huye a Tokio y conoce a una chica que tiene el poder de controlar el clima.</description>
        </url>
      </urlset>`;
    return xmlContent;
  }
}

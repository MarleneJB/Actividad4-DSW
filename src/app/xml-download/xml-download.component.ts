import { Component } from '@angular/core';
import { SitemapService } from '../sitemap.service';

@Component({
  selector: 'app-xml-download',
  templateUrl: './xml-download.component.html',
  styleUrls: ['./xml-download.component.css']
})
export class XmlDownloadComponent {

  constructor(private sitemapService: SitemapService) { }

  downloadSitemap() {
    const xmlContent = this.sitemapService.generateSitemap();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

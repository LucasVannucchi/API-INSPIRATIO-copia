import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as Handlebars from 'handlebars';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PdfService {
  async generatePdf(
    template: string,
    templateData: any,
    filename: string,
    templateHeader?: any,
    templateDataHeader?: any,
  ) {
    let browser;

    try {
      Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
        return arg1 == arg2 ? options.fn(this) : options.inverse(this);
      });
      const compiledTemplate = Handlebars.compile(
        fs.readFileSync(template, 'utf-8'),
      );

      const html = compiledTemplate(templateData);

      browser = await puppeteer.launch({
        headless: true,
        args: [
          '--disable-dev-shm-usage',
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-accelerated-2d-canvas',
          '--disable-gpu',
        ],
        executablePath: '/usr/bin/chromium-browser',
      });

      const page = await browser.newPage();

      await page.setDefaultNavigationTimeout(60000); // 60 segundos
      await page.setDefaultTimeout(60000);

      await page.emulateMediaType('screen');
      await page.setContent(html, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      await page.waitForSelector('body');

      let pdfConfig: any = {
        displayHeaderFooter: true,
        format: 'A4',
        margin: {
          top: !!templateHeader && !!templateDataHeader ? 240 : 15,
          left: 10,
          right: 10,
          bottom: 40,
        },
      };

      let header: any = null;
      if (!!templateHeader && !!templateDataHeader) {
        const compiledTemplateHeader = Handlebars.compile(
          fs.readFileSync(templateHeader, 'utf-8'),
        );

        header = compiledTemplateHeader(templateDataHeader);

        pdfConfig = {
          ...pdfConfig,
          headerTemplate: header,
          footerTemplate:
            '<div style="font-size:10px;text-align:right;width:100%;margin-top:10px;font-weight:bold;margin-top:20px;padding-right: 20px;"><span class="pageNumber"></span></div>',
        };
      }

      const pdf = await page.pdf(pdfConfig);

      fs.writeFileSync(`temp/${filename}.pdf`, pdf);

      return `temp/${filename}.pdf`;
    } catch (error) {
      console.error('pdf.service: error generating PDF with puppeteer:', error);
      throw error;
    } finally {
      if (browser) {
        await browser.close();
      }
    }
  }
}
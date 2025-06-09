import { Request, Response, NextFunction } from 'express'; 
import { SitemapStream, streamToPromise } from "sitemap";
import Category from "../models/category.model";
import { Product } from '../../models/models';

export const getSitemap = async (req: Request, res: Response, next: NextFunction) => {
    try {

      const hostname = process.env['ORIGIN_URL'];

        const categories = await Category.find({}).populate('products', 'slug updatedAt');
       
  
        const sitemap = new SitemapStream({ hostname });
     

        sitemap.write({ url: '/', changefreq: 'weekly', priority: 1.0 });
        sitemap.write({ url: '/catalogo', changefreq: 'weekly', priority: 0.7 });
        sitemap.write({ url: '/nosotros', changefreq: 'monthly', priority: 0.5 });
        sitemap.write({ url: '/contacto', changefreq: 'monthly', priority: 0.5 });

       
        categories.forEach(category => {

          const products  = category.products as unknown as Product[];

            sitemap.write({
                url: `/${category.slug}`,
                lastmodISO: category.updatedAt.toISOString(),
                changefreq: 'weekly',
                priority: 0.8
            });
            if (category.products && category.products.length > 0) {

              products.forEach((product) => {
                
                sitemap.write({
                    url: `/${category.slug}/${product.slug}`,
                    lastmodISO: product.updatedAt?.toISOString(),
                    changefreq: 'weekly',
                    priority: 0.8
                });
            })
  
            }

        });

        sitemap.end();
        const xml = await streamToPromise(sitemap).then(data => data.toString());
      
        res.header('Content-Type', 'application/xml');
        res.send(xml);

    } catch (error) {
      // console.error('Error generando el sitemap:', error);
      // res.status(500).send('Error al generar el sitemap');
      return next(new Error ('No se ha podido generar el sitemap' + error));
    }
  }
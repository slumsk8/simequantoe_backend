const prismaClient = require("../database/prismaClient");

class ProductController {
  async getAll(req, res) {
    const products = await prismaClient.product.findMany();
   
    return res.status(200).json(products);
  }

  async addProduct(req, res) {
    try {
      const { name, description, barcode } = req.body;
      const imageUrl = process.env.LOCALPROD + `upload/products/${req.file.filename}`
      const data = {
        name,
        description,
        imageUrl,
        barcode,
      };

      const product = await prismaClient.product.create({
        data,        
      });

      return res.status(201).json(product);
    } catch (error) {
      console.log(error.message);
      return res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();

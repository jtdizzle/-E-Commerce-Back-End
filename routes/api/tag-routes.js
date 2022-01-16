const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagResults = await Tag.findAll({include: [{model: Product}]});
    const tags = tagResults.map(tag => tag.dataValues);
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagResult = await Tag.findByPk(req.params.id, {include: [{model: Product}]});
    if (!tagResult) {
      return res.status(404).json({message: 'Product no available'});
    }
    res.status(200).json(tagResult.dataValues);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  try {
    const tagResult = await Tag.create(req.body);
    if (!tagResult) {
      return res.status(500).json(tagResult);
    }

    // if no product ids were provided, respond w/ data for the new product
    if (!req.body.productIds?.length) {
      return res.status(200).json(tagResult);
    }

    // bulk create links between new tag and products
    const tagProducts = req.body.productIds.map(
      product_id => {
        return {
          product_id,
          tag_id: tagResult.id
        }
      }
    );
    const tagProductResults = await ProductTag.bulkCreate(tagProducts);
    res.status(200).json(tagProductResults);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(req.body, {where: {id: req.params.id}});
    const currentProductTags = await ProductTag.findAll({where: {tag_id: req.params.id}});
    const currentProductIds = currentProductTags.map(productTag => product_id);

    const goalProductIds = req.body.productIds ?? [];

    const newProductTags = goalProductIds
      .filter(product_id => !currentProductIds.includes(product_id))
      .map(product_id => {
        return {
          product_id,
          tag_id: req.params.id
        };
      });
    
    const productTagsIdsToRemove = currentProductTags
      .filter(({product_id}) => !goalProductIds.includes(product_id))
      .map(({id}) => id);
    
    const updatedProductTags = await Promise.all([
      ProductTag.destroy({where: {id: productTagsIdsToRemove}}),
      ProductTag.bulkCreate(newProductTags)
    ]);
    
    res.status(200).json(updatedProductTags);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {
    const result = await Tag.destroy({where: {id: req.params.id}});
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

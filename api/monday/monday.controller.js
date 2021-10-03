const mondayService = require('./monday.service');
// const transformationService = require('../services/transformation-service');
// const { TRANSFORMATION_TYPES } = require('../constants/transformation');
const axios = require('axios')
const initMondayClient = require('monday-sdk-js');
const token = process.env.MONDAY_API





async function getInter(req, res) {
  const body = req.body
  try {
    const { shortLivedToken } = req.session
    // const { boardId, itemId } = body.payload.inboundFieldValues
    const monday = initMondayClient()
    monday.setToken(shortLivedToken)
    console.log('body.payload.inputFields: ', body.payload?.inputFields);
   

    res.end()
  } catch (err) {
    console.log('err: ', err);

  } finally {
    res.end()
  }
}








module.exports = {
  getInter,
};

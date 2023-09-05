const { Music } = require("../models");


//  Create Music

const createMusic = async (reqBody) => {
  return Music.create(reqBody);
};

const getMusicList = async (filter, options) => {
  return Music.find({$or : [{ is_active: false }]})
};

const getMusicById = async(musicId) => {
  return Music.findById(musicId);
}

const updateDetails = async(musicId, updateBody) => {
  return Music.findByIdAndUpdate(musicId, { $set: updateBody });
}

const deleteMusic = async (musicId) => {
  return Music.findByIdAndDelete(musicId);
}

const getMusicByName = async (music_name) => {
  return Music.findOne({ music_name })
};

module.exports = {
  createMusic,
  getMusicList,
  getMusicById,
  updateDetails,
  deleteMusic,
  getMusicByName
};
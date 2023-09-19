const { Image } = require("../models");


//  Create Image

const createImage = async (reqBody) => {
    return Image.create(reqBody);
};

const getImageList = async (filter, options) => {
    return Image.find()
};

const getImageById = async (imageId) => {
    return Image.findById(imageId);
}

const updateDetails = async (imageId, updateBody) => {
    return Image.findByIdAndUpdate(imageId, { $set: updateBody });
}

const deleteImage = async (imageId) => {
    return Image.findByIdAndDelete(imageId);
}

module.exports = {
    createImage,
    getImageList,
    getImageById,
    updateDetails,
    deleteImage,
};
const { imageService } = require("../services");

// create Image
const createImage = async (req, res) => {
    try {
        const reqBody = req.body;

        if(req.file){
            reqBody.image = req.file.filename;
        }else{
            throw new Error("Image is required!");
        }

        const Image = await imageService.createImage(reqBody);
        if (Image) {
            throw new Error("please add other Image this Image already created.");
        }

        res.status(200).json({
            success: true,
            message: "Image create successfully!",
            data: { Image }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Image list
const getImageList = async (req, res) => {
    try {
        const getList = await imageService.getImageList();
        res.status(200).json({
            success: true,
            message: "Get Image list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Image details by id
const getImageDetails = async (req, res) => {
    try {
        const getDetails = await imageService.getImageById(
            req.params.imageId
        )
        if (!getDetails) {
            throw new Error("Image not found!");
        }

        res.status(200).json({
            success: true,
            message: "Image details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Image

const updateImage = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const ImageExists = await imageService.getImageById(imageId);
        if (!ImageExists) {
            throw new Error("Image not found!")
        }

        await imageService.updateDetails(imageId, req.body);

        res.status(200).json({
            success: true,
            message: "Image details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Image

const deleteRecord = async (req, res) => {
    try {
        const imageId = req.params.imageId;

        const ImageExists = await imageService.getImageById(imageId);
        if (!ImageExists) {
            throw new Error("Image not found!")
        }

        await imageService.deleteImage(imageId);

        res.status(200).json({
            success: true,
            message: "Image delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createImage,
    getImageList,
    getImageDetails,
    updateImage,
    deleteRecord
};
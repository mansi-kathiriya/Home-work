const { musicService } = require("../services");

// create Music
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const musicExists = await musicService.getMusicByName(reqBody.music_name);
        if (musicExists) {
            throw new Error(`please add other Music this ${musicExists.music_name} Music already created.`);
        }

        const Music = await musicService.createMusic(reqBody);

        res.status(200).json({
            success: true,
            message: "Music create successfully!",
            data: { Music }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

//  Get Music list
const getMusicList = async (req, res) => {
    try {
        const getList = await musicService.getMusicList();
        res.status(200).json({
            success: true,
            message: "Get Music list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// get Music details by id
const getMusicDetails = async (req, res) => {
    try {
        const getDetails = await musicService.getMusicById(
            req.params.musicId
        )
        if (!getDetails) {
            throw new Error("Music not found!");
        }

        res.status(200).json({
            success: true,
            message: "Music details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

// update Music

const updateMusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;

        const musicExists = await musicService.getMusicById(musicId);
        if (!musicExists) {
            throw new Error("Music not found!")
        }

        await musicService.updateDetails(musicId, req.body);

        res.status(200).json({
            success: true,
            message: "Music details update successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
};

// delete Music

const deleteRecord = async (req, res) => {
    try {
        const musicId = req.params.musicId;

        const musicExists = await musicService.getMusicById(musicId);
        if (!musicExists) {
            throw new Error("Music not found!")
        }

        await musicService.deleteMusic(musicId);

        res.status(200).json({
            success: true,
            message: "Music delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
    }
}

module.exports = {
    createMusic,
    getMusicList,
    getMusicDetails,
    updateMusic,
    deleteRecord
};
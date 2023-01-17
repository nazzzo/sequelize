const express = require("express")
const router = express.Router()
const boardRouter = require("../boards/board.route")
// const userRouter = require
// const commentRouter = require("../comments/comment.route")

router.use("/boards", boardRouter)

module.exports = router
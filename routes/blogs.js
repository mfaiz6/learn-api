import express from 'express'
import { createBlog, deleteBlog, getBlog, getBlogs, updateBlog } from '../controllers/blog.js'

const router = express.Router()


//Create a blog
router.post("/", createBlog)

// Get a blog
router.get("/blog/:id", getBlog)

//Update a blog
router.put("/:id", updateBlog)

//Delete a blog
router.delete("/:id", deleteBlog)

//Get all blogs
router.get("/", getBlogs)





export default router